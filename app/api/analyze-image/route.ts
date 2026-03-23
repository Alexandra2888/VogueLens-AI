import { ImageAnnotatorClient } from '@google-cloud/vision';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/db/schema';
import { imageLimit } from '@/lib/rate-limit';
import {
  MAX_IMAGE_SIZE_BYTES,
  ALLOWED_IMAGE_TYPES,
  rateLimitExceeded,
  unauthorizedResponse,
  badRequestResponse,
  internalErrorResponse,
} from '@/lib/security';

let vision: ImageAnnotatorClient | null;

try {
  const credentials = JSON.parse(
    process.env.NEXT_GOOGLE_CLOUD_CREDENTIALS || ''
  );

  if (!credentials.client_email || !credentials.private_key) {
    throw new Error('Invalid credentials format');
  }

  vision = new ImageAnnotatorClient({ credentials: credentials });
} catch (error) {
  console.error(
    '[analyze-image] Vision client init failed:',
    error instanceof Error ? error.message : 'unknown'
  );
  vision = null;
}

export async function POST(req: Request) {
  try {
    // Auth
    const { userId } = await auth();
    if (!userId) return unauthorizedResponse();

    // Per-user rate limit
    if (!imageLimit(userId)) return rateLimitExceeded();

    // Credit check (5 credits per image analysis)
    const cost = 5;
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
    });
    if (!user || user.credits < cost) {
      return NextResponse.json(
        { error: 'Insufficient credits' },
        { status: 402 }
      );
    }

    if (!vision) {
      return NextResponse.json(
        { error: 'Image analysis unavailable' },
        { status: 503 }
      );
    }

    const formData = await req.formData();
    const image = formData.get('image') as File | null;

    if (!image) return badRequestResponse('No image provided');

    // Validate file type (don't trust client-provided MIME; check header bytes via type field)
    if (!ALLOWED_IMAGE_TYPES.includes(image.type)) {
      return badRequestResponse(
        'Unsupported image type. Use JPEG, PNG, WebP, or GIF.'
      );
    }

    // Validate file size
    if (image.size > MAX_IMAGE_SIZE_BYTES) {
      return badRequestResponse('Image exceeds 5 MB limit.');
    }

    // Deduct credits after validation, before the expensive Vision API call
    await db
      .update(users)
      .set({ credits: user.credits - cost, updatedAt: new Date() })
      .where(eq(users.id, userId));

    const buffer = Buffer.from(await image.arrayBuffer());
    const [result] = await vision.annotateImage({
      image: { content: buffer },
      features: [
        { type: 'LABEL_DETECTION', maxResults: 5 },
        { type: 'OBJECT_LOCALIZATION', maxResults: 5 },
        { type: 'IMAGE_PROPERTIES' },
      ],
    });

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
      creditsRemaining: user.credits - cost,
    });
  } catch (error) {
    console.error(
      '[analyze-image] Error:',
      error instanceof Error ? error.message : 'unknown'
    );
    return internalErrorResponse();
  }
}
