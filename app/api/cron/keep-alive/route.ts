import { NextResponse } from 'next/server';
import { sql } from 'drizzle-orm';
import { db } from '@/lib/db';

// Keeps the Supabase project active. The free tier auto-pauses after ~7 days
// without database activity, which 500s every DB-backed route. A scheduled
// query (see vercel.json crons) counts as activity and prevents the pause.
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  // When CRON_SECRET is set, Vercel Cron sends it as a Bearer token.
  // Reject anything else so the endpoint can't be triggered publicly.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    await db.execute(sql`SELECT 1`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[cron keep-alive]', error);
    return NextResponse.json(
      { ok: false, error: 'Database unreachable' },
      { status: 500 }
    );
  }
}
