import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq, and, asc } from 'drizzle-orm';
import { db } from '@/lib/db';
import { messages, conversations } from '@/db/schema';

async function verifyOwnership(conversationId: string, userId: string) {
  return db.query.conversations.findFirst({
    where: and(eq(conversations.id, conversationId), eq(conversations.userId, userId)),
  });
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    const conv = await verifyOwnership(id, userId);
    if (!conv) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const msgs = await db
      .select()
      .from(messages)
      .where(eq(messages.conversationId, id))
      .orderBy(asc(messages.createdAt));

    return NextResponse.json({ messages: msgs });
  } catch (error) {
    console.error('[messages GET]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    const conv = await verifyOwnership(id, userId);
    if (!conv) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const { role, content, imageUrl } = await req.json();
    const [msg] = await db
      .insert(messages)
      .values({ conversationId: id, role, content, imageUrl: imageUrl ?? null })
      .returning();

    return NextResponse.json({ message: msg });
  } catch (error) {
    console.error('[messages POST]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
