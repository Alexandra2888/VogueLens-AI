import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq, count } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/db/schema';

export async function GET() {
  try {
    const { userId } = await auth();
    console.log('[credits] userId:', userId);
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let user = await db.query.users.findFirst({ where: eq(users.id, userId) });

    if (!user) {
      const clerkUser = await currentUser();
      const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? null;

      const [{ value: earlyCount }] = await db
        .select({ value: count() })
        .from(users)
        .where(eq(users.earlyAccess, true));

      const isEarly = Number(earlyCount) < 100;

      const [newUser] = await db
        .insert(users)
        .values({
          id: userId,
          email,
          credits: isEarly ? 100 : 0,
          earlyAccess: isEarly,
        })
        .returning();

      user = newUser;
    }

    return NextResponse.json({
      credits: user.credits,
      earlyAccess: user.earlyAccess,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[credits] Error:', msg);
    console.error(
      '[credits] Full error:',
      JSON.stringify(error, Object.getOwnPropertyNames(error))
    );
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
