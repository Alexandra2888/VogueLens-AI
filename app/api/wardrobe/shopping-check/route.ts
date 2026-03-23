import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { wardrobeItems } from '@/db/schema';
import { openai } from '@/lib/openai';
import { generateEmbedding } from '@/lib/embeddings';

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0,
    magA = 0,
    magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

type ItemAnalysis = {
  category: string;
  colors: string[];
  style: string;
  season: string;
  occasions: string[];
};

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { imageUrl } = await req.json();
  if (!imageUrl) {
    return NextResponse.json(
      { error: 'imageUrl is required' },
      { status: 400 }
    );
  }

  // Analyze shopping item with GPT-4o vision
  const visionRes = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: imageUrl, detail: 'low' } },
          {
            type: 'text',
            text: `Analyze this clothing item and return JSON:
{
  "category": one of: "top","bottom","shoes","accessories","outerwear",
  "colors": array of up to 3 hex color codes,
  "style": one of: "casual","formal","athletic","bohemian","streetwear","business",
  "season": one of: "spring","summer","fall","winter","all",
  "occasions": array from: ["casual","work","party","sport","date","formal"]
}
Return only valid JSON, no markdown.`,
          },
        ],
      },
    ],
    max_tokens: 300,
  });

  let analysis: ItemAnalysis;
  try {
    analysis = JSON.parse(
      visionRes.choices[0].message.content ?? '{}'
    ) as ItemAnalysis;
  } catch {
    analysis = {
      category: 'top',
      colors: [],
      style: 'casual',
      season: 'all',
      occasions: [],
    };
  }

  // Generate embedding for the shopping item
  const embeddingText = `${analysis.category} ${analysis.style} ${analysis.season} ${analysis.colors.join(' ')} ${analysis.occasions.join(' ')}`;
  const shoppingEmbedding = await generateEmbedding(embeddingText);

  // Fetch wardrobe items that have embeddings
  const wardrobe = await db
    .select({
      id: wardrobeItems.id,
      imageUrl: wardrobeItems.imageUrl,
      category: wardrobeItems.category,
      style: wardrobeItems.style,
      colors: wardrobeItems.colors,
      season: wardrobeItems.season,
      embedding: wardrobeItems.embedding,
    })
    .from(wardrobeItems)
    .where(eq(wardrobeItems.userId, userId));

  // Cosine similarity — top 5 matches
  const withScores = wardrobe
    .filter(
      (item) =>
        Array.isArray(item.embedding) && (item.embedding as number[]).length > 0
    )
    .map((item) => ({
      ...item,
      score: cosineSimilarity(shoppingEmbedding, item.embedding as number[]),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  const compatibilityScore =
    withScores.length > 0 ? Math.round(withScores[0].score * 100) : 0;

  // Ask GPT-4o-mini for BUY/SKIP/CONSIDER
  const similarDesc = withScores
    .map(
      (i) =>
        `[${i.id}] ${i.category}, ${i.style}, score: ${(i.score * 100).toFixed(0)}%`
    )
    .join('\n');

  const aiRes = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are a personal fashion stylist helping decide whether to buy a new item.',
      },
      {
        role: 'user',
        content: `Shopping item: ${analysis.category}, ${analysis.style}, colors: ${analysis.colors.join(', ')}, season: ${analysis.season}

Similar items already owned:\n${similarDesc || 'None'}

Analyze:
1. Do they already own something very similar? (score > 85% = very similar)
2. Does this item complement what they own?
3. Does it fill a gap?

Return JSON: { "recommendation": "BUY"|"SKIP"|"CONSIDER", "reasoning": "explanation", "pairsWithIds": ["id1","id2"] }`,
      },
    ],
    max_tokens: 400,
    response_format: { type: 'json_object' },
  });

  type AiResult = {
    recommendation: string;
    reasoning: string;
    pairsWithIds: string[];
  };
  let aiResult: AiResult;
  try {
    aiResult = JSON.parse(aiRes.choices[0].message.content ?? '{}') as AiResult;
  } catch {
    aiResult = {
      recommendation: 'CONSIDER',
      reasoning: aiRes.choices[0].message.content ?? '',
      pairsWithIds: [],
    };
  }

  const similarItems = withScores.map(
    ({ score: _, embedding: __, ...rest }) => rest
  );

  return NextResponse.json({
    analysis,
    similarItems,
    compatibilityScore,
    ...aiResult,
  });
}
