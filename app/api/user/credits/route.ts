import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq, count } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { creditsRatelimit } from '@/lib/rate-limit';
import { rateLimitExceeded, unauthorizedResponse, internalErrorResponse } from '@/lib/security';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return unauthorizedResponse();

    // Rate limit per user
    if (creditsRatelimit) {
      const { success } = await creditsRatelimit.limit(`credits:${userId}`);
      if (!success) return rateLimitExceeded();
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
    console.error('[credits] Error:', error instanceof Error ? error.message : 'unknown');
    return internalErrorResponse();
  }
}
