import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq, desc } from 'drizzle-orm';
import { db } from '@/lib/db';
import { conversations } from '@/db/schema';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const list = await db
      .select({ id: conversations.id, title: conversations.title, updatedAt: conversations.updatedAt })
      .from(conversations)
      .where(eq(conversations.userId, userId))
      .orderBy(desc(conversations.updatedAt))
      .limit(50);

    return NextResponse.json({ conversations: list });
  } catch (error) {
    console.error('[conversations GET]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { title } = await req.json();
    const [conv] = await db
      .insert(conversations)
      .values({ userId, title: title || 'New Conversation' })
      .returning();

    return NextResponse.json({ conversation: conv });
  } catch (error) {
    console.error('[conversations POST]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
