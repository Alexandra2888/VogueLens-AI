import { currentUser } from '@clerk/nextjs/server';
import { eq, count, sql } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users, wardrobeItems, conversations } from '@/db/schema';

export async function getOrCreateUser(userId: string) {
  let user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (user) return user;

  const clerkUser = await currentUser();
  const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? null;

  user = await db.transaction(async (tx) => {
    // Clerk ID rotation: same email re-registers with a new ID (e.g. dev instance reset)
    if (email) {
      const existing = await tx.query.users.findFirst({
        where: eq(users.email, email),
      });

      if (existing && existing.id !== userId) {
        const oldId = existing.id;

        // Insert new user row first (null email to avoid unique conflict)
        await tx.insert(users).values({
          id: userId,
          email: null,
          credits: existing.credits,
          earlyAccess: existing.earlyAccess,
        });

        // Migrate FK references to the new Clerk ID
        await tx
          .update(wardrobeItems)
          .set({ userId })
          .where(eq(wardrobeItems.userId, oldId));
        await tx
          .update(conversations)
          .set({ userId })
          .where(eq(conversations.userId, oldId));

        // Remove stale user row (safe — no FKs reference it now)
        await tx.delete(users).where(eq(users.id, oldId));

        // Set email on the new row
        const [migrated] = await tx
          .update(users)
          .set({ email })
          .where(eq(users.id, userId))
          .returning();
        return migrated;
      }
    }

    // Serialise the early-access check so concurrent requests can't overshoot the cap
    await tx.execute(sql`SELECT pg_advisory_xact_lock(42)`);

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

  return user!;
}
