import { NextResponse } from 'next/server';
import { sql } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/db/schema';

// Keeps the Supabase project active. The free tier auto-pauses after ~7 days
// without database activity, which 500s every DB-backed route.
//
// Two probes run on every invocation because they register on different paths:
// the Postgres query goes through the connection pooler, while the REST ping
// goes through the API gateway. A bare `SELECT 1` is an unreliable signal on
// its own, so the query reads a real table instead.
//
// Scheduled twice: vercel.json crons, and .github/workflows/keep-alive.yml.
export const dynamic = 'force-dynamic';

async function pingDatabase() {
  const result = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(users);
  return { userCount: result[0]?.count ?? 0 };
}

async function pingRestApi() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase URL or publishable key is not configured');
  }

  // Queries a real table rather than the `/rest/v1/` root, which answers 401
  // even with a valid key. RLS filters the rows down to an empty array for the
  // anon role, but the request still reaches Postgres, which is the point.
  const response = await fetch(`${url}/rest/v1/users?select=id&limit=1`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`REST gateway returned ${response.status}`);
  }
  return { status: response.status };
}

function describe(result: PromiseSettledResult<object>) {
  if (result.status === 'fulfilled') {
    return { ok: true, ...result.value };
  }
  const reason = result.reason;
  return {
    ok: false,
    error: reason instanceof Error ? reason.message : String(reason),
  };
}

export async function GET(req: Request) {
  // When CRON_SECRET is set, Vercel Cron and the GitHub Actions workflow both
  // send it as a Bearer token. Reject anything else so the endpoint can't be
  // triggered publicly.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const startedAt = Date.now();
  const [database, rest] = await Promise.allSettled([
    pingDatabase(),
    pingRestApi(),
  ]);

  const body = {
    // Surfaced in the response so a manual curl shows at a glance whether the
    // endpoint is still publicly callable.
    secured: Boolean(secret),
    durationMs: Date.now() - startedAt,
    database: describe(database),
    rest: describe(rest),
  };

  const failed = [database, rest].filter((r) => r.status === 'rejected').length;
  if (failed > 0) {
    // Logged so the failure shows up in Vercel logs, not only in the caller's
    // response body.
    console.error('[cron keep-alive] probe failure', JSON.stringify(body));
    return NextResponse.json(
      { ok: false, ...body },
      { status: failed === 2 ? 500 : 207 }
    );
  }

  console.log('[cron keep-alive] ok', JSON.stringify(body));
  return NextResponse.json({ ok: true, ...body });
}
