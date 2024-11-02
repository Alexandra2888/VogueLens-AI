import { ImageAnnotatorClient } from '@google-cloud/vision';
import { NextResponse } from 'next/server';

let vision: ImageAnnotatorClient;

try {
  const credentials = JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS || '');

  if (!credentials.client_email || !credentials.private_key) {
    throw new Error('Invalid credentials format');
  }

  vision = new ImageAnnotatorClient({
    credentials: credentials,
  });
} catch (error) {
  console.error('Error initializing Google Cloud Vision:', error);
  vision = null as any;
}

export async function POST(req: Request) {
  try {
    if (!vision) {
      throw new Error('Google Cloud Vision client not initialized');
    }

    const formData = await req.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

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
        ?.filter((label) => label.score && label.score > 0.7)
        ?.map((label) => label.description)
        ?.join(', ') || 'no labels detected';

    const objects =
      result.localizedObjectAnnotations
        ?.filter((obj) => obj.score && obj.score > 0.7)
        ?.map((obj) => obj.name)
        ?.join(', ') || 'no objects detected';

    const colors =
      result.imagePropertiesAnnotation?.dominantColors?.colors
        ?.slice(0, 3)
        ?.map((color) => {
          const r = Math.round(color.color?.red || 0);
          const g = Math.round(color.color?.green || 0);
          const b = Math.round(color.color?.blue || 0);
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

    return NextResponse.json({ description });
  } catch (error) {
    console.error('Error in analyze-image route:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to analyze image',
      },
      { status: 500 }
    );
  }
}
