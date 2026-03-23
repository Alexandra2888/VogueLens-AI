import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { wardrobeItems } from '@/db/schema';
import { openai } from '@/lib/openai';

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { occasion } = await req.json();

  const items = await db
    .select({
      id: wardrobeItems.id,
      category: wardrobeItems.category,
      style: wardrobeItems.style,
      colors: wardrobeItems.colors,
      season: wardrobeItems.season,
    })
    .from(wardrobeItems)
    .where(eq(wardrobeItems.userId, userId));

  if (items.length === 0) {
    return NextResponse.json({
      recommendation: 'Add some items to your wardrobe first to get outfit recommendations!',
      itemIds: [],
    });
  }

  const wardrobeDescription = items
    .map((item) => `[${item.id}] ${item.category}, ${item.style}, colors: ${(item.colors as string[]).join(', ')}, season: ${item.season}`)
    .join('\n');

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: "You are a personal fashion stylist. Suggest outfit combinations from the user's wardrobe.",
      },
      {
        role: 'user',
        content: `My wardrobe:\n${wardrobeDescription}\n\nSuggest an outfit for: ${occasion || 'everyday casual'}\n\nReturn JSON: { "recommendation": "explanation", "itemIds": ["id1", "id2"] }`,
      },
    ],
    max_tokens: 500,
    response_format: { type: 'json_object' },
  });

  type RecommendResult = { recommendation: string; itemIds: string[] };
  let result: RecommendResult;
  try {
    result = JSON.parse(response.choices[0].message.content ?? '{}') as RecommendResult;
  } catch {
    result = { recommendation: response.choices[0].message.content ?? '', itemIds: [] };
  }

  return NextResponse.json(result);
}
