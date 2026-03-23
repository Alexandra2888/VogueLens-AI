import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq, count } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/db/schema';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let user = await db.query.users.findFirst({ where: eq(users.id, userId) });

    if (!user) {
      const clerkUser = await currentUser();
      const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? null;

      user = await db.transaction(async (tx) => {
        const [{ value: earlyCount }] = await tx
          .select({ value: count() })
          .from(users)
          .where(eq(users.earlyAccess, true));

        const isEarly = Number(earlyCount) < 100;

        const [newUser] = await tx
          .insert(users)
          .values({
            id: userId,
            email,
            credits: isEarly ? 100 : 0,
            earlyAccess: isEarly,
          })
          .onConflictDoNothing({ target: users.id })
          .returning();

        return (
          newUser ??
          (await tx.query.users.findFirst({ where: eq(users.id, userId) }))
        );
      });
    }

    return NextResponse.json({
      credits: user!.credits,
      earlyAccess: user!.earlyAccess,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[credits] Error:', msg);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
