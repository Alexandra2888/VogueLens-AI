import { ImageAnnotatorClient } from '@google-cloud/vision';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq, sql, gte, and } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { imageLimit } from '@/lib/rate-limit';
import { getOrCreateUser } from '@/lib/get-or-create-user';
import {
  MAX_IMAGE_SIZE_BYTES,
  ALLOWED_IMAGE_TYPES,
  rateLimitExceeded,
  unauthorizedResponse,
  badRequestResponse,
  internalErrorResponse,
} from '@/lib/security';

function parseServiceAccountJson(raw: string): Record<string, unknown> | null {
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    if (parsed.client_email && parsed.private_key) return parsed;
  } catch {
    /* invalid JSON or wrong shape */
  }
  return null;
}

function createVisionClient(): ImageAnnotatorClient | null {
  const fromNext = process.env.NEXT_GOOGLE_CLOUD_CREDENTIALS?.trim();
  if (fromNext) {
    const credentials = parseServiceAccountJson(fromNext);
    if (credentials) return new ImageAnnotatorClient({ credentials });
  }

  const gac = process.env.GOOGLE_APPLICATION_CREDENTIALS?.trim();
  if (!gac) return null;

  if (gac.startsWith('{')) {
    const credentials = parseServiceAccountJson(gac);
    return credentials ? new ImageAnnotatorClient({ credentials }) : null;
  }

  // Filesystem path — GoogleAuth reads GOOGLE_APPLICATION_CREDENTIALS
  return new ImageAnnotatorClient();
}

let vision: ImageAnnotatorClient | null;

try {
  vision = createVisionClient();
} catch {
  vision = null;
}

export async function POST(req: Request) {
  try {
    // Auth
    const { userId } = await auth();
    if (!userId) return unauthorizedResponse();

    // Per-user rate limit
    if (!imageLimit(userId)) return rateLimitExceeded();

    // Bootstrap user row (handles first-time users)
    await getOrCreateUser(userId);

    const cost = 5;

    if (!vision) {
      return NextResponse.json(
        { error: 'Image analysis unavailable' },
        { status: 503 }
      );
    }

    const formData = await req.formData();
    const image = formData.get('image') as File | null;

    if (!image) return badRequestResponse('No image provided');

    if (!ALLOWED_IMAGE_TYPES.includes(image.type)) {
      return badRequestResponse(
        'Unsupported image type. Use JPEG, PNG, WebP, or GIF.'
      );
    }

    if (image.size > MAX_IMAGE_SIZE_BYTES) {
      return badRequestResponse('Image exceeds 5 MB limit.');
    }

    // Atomic credit deduction: decrement only if balance is sufficient
    const [updated] = await db
      .update(users)
      .set({
        credits: sql`${users.credits} - ${cost}`,
        updatedAt: new Date(),
      })
      .where(and(eq(users.id, userId), gte(users.credits, cost)))
      .returning({ creditsRemaining: users.credits });

    if (!updated) {
      return NextResponse.json(
        { error: 'Insufficient credits' },
        { status: 402 }
      );
    }

    let result;
    try {
      const buffer = Buffer.from(await image.arrayBuffer());
      [result] = await vision.annotateImage({
        image: { content: buffer },
        features: [
          { type: 'LABEL_DETECTION', maxResults: 5 },
          { type: 'OBJECT_LOCALIZATION', maxResults: 5 },
          { type: 'IMAGE_PROPERTIES' },
        ],
      });
    } catch (visionError) {
      // Refund credits on Vision API failure
      await db
        .update(users)
        .set({
          credits: sql`${users.credits} + ${cost}`,
          updatedAt: new Date(),
        })
        .where(eq(users.id, userId));
      throw visionError;
    }

    const labels =
      result.labelAnnotations
        ?.filter((l) => l.score && l.score > 0.7)
        ?.map((l) => l.description)
        ?.join(', ') || 'no labels detected';

    const objects =
      result.localizedObjectAnnotations
        ?.filter((o) => o.score && o.score > 0.7)
        ?.map((o) => o.name)
        ?.join(', ') || 'no objects detected';

    const colors =
      result.imagePropertiesAnnotation?.dominantColors?.colors
        ?.slice(0, 3)
        ?.map((c) => {
          const r = Math.round(c.color?.red || 0);
          const g = Math.round(c.color?.green || 0);
          const b = Math.round(c.color?.blue || 0);
          return `rgb(${r},${g},${b})`;
        })
        ?.join(', ') || 'no colors detected';

    const description = [
      labels && `I can see ${labels}`,
      objects && `The main objects I detect are ${objects}`,
      colors && `The dominant colors are ${colors}`,
    ]
      .filter(Boolean)
      .join('. ');

    return NextResponse.json({
      description,
      creditsRemaining: updated.creditsRemaining,
    });
  } catch {
    return internalErrorResponse();
  }
}
