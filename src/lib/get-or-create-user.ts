import { currentUser } from '@clerk/nextjs/server';
import { eq, count } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/db/schema';

export async function getOrCreateUser(userId: string) {
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

  return user!;
}
