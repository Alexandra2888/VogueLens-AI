import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq, desc } from 'drizzle-orm';
import { db } from '@/lib/db';
import { wardrobeItems } from '@/db/schema';
import { openai } from '@/lib/openai';
import { generateEmbedding } from '@/lib/embeddings';
import { wardrobeLimit } from '@/lib/rate-limit';
import {
  wardrobePostSchema,
  sanitizeText,
  rateLimitExceeded,
  unauthorizedResponse,
  badRequestResponse,
  internalErrorResponse,
} from '@/lib/security';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return unauthorizedResponse();

    const items = await db
      .select({
        id: wardrobeItems.id,
        imageUrl: wardrobeItems.imageUrl,
        category: wardrobeItems.category,
        style: wardrobeItems.style,
        colors: wardrobeItems.colors,
        season: wardrobeItems.season,
        occasions: wardrobeItems.occasions,
        brand: wardrobeItems.brand,
        notes: wardrobeItems.notes,
        createdAt: wardrobeItems.createdAt,
      })
      .from(wardrobeItems)
      .where(eq(wardrobeItems.userId, userId))
      .orderBy(desc(wardrobeItems.createdAt))
      .limit(200); // prevent unbounded data fetch

    return NextResponse.json({ items });
  } catch (error) {
    console.error(
      '[wardrobe GET] Error:',
      error instanceof Error ? error.message : 'unknown'
    );
    return internalErrorResponse();
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return unauthorizedResponse();

    // Per-user rate limit for expensive wardrobe POST (calls GPT-4o vision)
    if (!wardrobeLimit(userId)) return rateLimitExceeded();

    // Validate + parse body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return badRequestResponse('Invalid JSON');
    }

    const parsed = wardrobePostSchema.safeParse(body);
    if (!parsed.success) {
      return badRequestResponse(
        parsed.error.errors[0]?.message ?? 'Invalid input'
      );
    }

    const { imageUrl } = parsed.data;
    // Sanitize free-text fields stored in DB
    const brand = parsed.data.brand ? sanitizeText(parsed.data.brand) : null;
    const notes = parsed.data.notes ? sanitizeText(parsed.data.notes) : null;

    // Analyze with GPT-4o vision
    const analysisResponse = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: imageUrl, detail: 'low' } },
            {
              type: 'text',
              text: `Analyze this clothing item and return JSON with these exact fields:
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

    const ALLOWED_CATEGORIES = [
      'top',
      'bottom',
      'shoes',
      'accessories',
      'outerwear',
    ] as const;
    const ALLOWED_STYLES = [
      'casual',
      'formal',
      'athletic',
      'bohemian',
      'streetwear',
      'business',
    ] as const;
    const ALLOWED_SEASONS = [
      'spring',
      'summer',
      'fall',
      'winter',
      'all',
    ] as const;
    const ALLOWED_OCCASIONS = [
      'casual',
      'work',
      'party',
      'sport',
      'date',
      'formal',
    ] as const;

    type Category = (typeof ALLOWED_CATEGORIES)[number];
    type Style = (typeof ALLOWED_STYLES)[number];
    type Season = (typeof ALLOWED_SEASONS)[number];

    type ItemAnalysis = {
      category: Category;
      colors: string[];
      style: Style;
      season: Season;
      occasions: string[];
    };

    let raw: Record<string, unknown>;
    try {
      raw = JSON.parse(
        analysisResponse.choices[0].message.content ?? '{}'
      ) as Record<string, unknown>;
    } catch {
      raw = {};
    }

    // Whitelist-validate every field returned by the LLM — never trust AI output directly
    const analysis: ItemAnalysis = {
      category: ALLOWED_CATEGORIES.includes(raw.category as Category)
        ? (raw.category as Category)
        : 'top',
      style: ALLOWED_STYLES.includes(raw.style as Style)
        ? (raw.style as Style)
        : 'casual',
      season: ALLOWED_SEASONS.includes(raw.season as Season)
        ? (raw.season as Season)
        : 'all',
      colors: Array.isArray(raw.colors)
        ? (raw.colors as string[])
            .filter(
              (c) => typeof c === 'string' && /^#[0-9a-fA-F]{3,6}$/.test(c)
            )
            .slice(0, 3)
        : [],
      occasions: Array.isArray(raw.occasions)
        ? (raw.occasions as string[]).filter((o) =>
            ALLOWED_OCCASIONS.includes(o as (typeof ALLOWED_OCCASIONS)[number])
          )
        : [],
    };

    const embeddingText = `${analysis.category} ${analysis.style} ${analysis.season} ${analysis.colors.join(' ')} ${analysis.occasions.join(' ')}`;
    const embedding = await generateEmbedding(embeddingText);

    const [item] = await db
      .insert(wardrobeItems)
      .values({
        userId,
        imageUrl,
        category: analysis.category,
        colors: analysis.colors,
        style: analysis.style,
        season: analysis.season,
        occasions: analysis.occasions,
        embedding,
        brand,
        notes,
      })
      .returning({
        id: wardrobeItems.id,
        imageUrl: wardrobeItems.imageUrl,
        category: wardrobeItems.category,
        style: wardrobeItems.style,
        colors: wardrobeItems.colors,
        season: wardrobeItems.season,
        occasions: wardrobeItems.occasions,
        brand: wardrobeItems.brand,
        notes: wardrobeItems.notes,
        createdAt: wardrobeItems.createdAt,
      });

    return NextResponse.json({ item }, { status: 201 });
  } catch (error) {
    console.error(
      '[wardrobe POST] Error:',
      error instanceof Error ? error.message : 'unknown'
    );
    return internalErrorResponse();
  }
}
