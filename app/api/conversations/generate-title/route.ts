import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { userMessage, botResponse } = await req.json();

    if (!userMessage || !botResponse) {
      return NextResponse.json(
        { error: 'userMessage and botResponse are required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.7,
      max_tokens: 30,
      messages: [
        {
          role: 'system',
          content:
            'Generate a short, descriptive title (max 6 words) for this fashion chat conversation. Return only the title text, no quotes or punctuation at the edges.',
        },
        {
          role: 'user',
          content: `User: ${userMessage.slice(0, 200)}\nAssistant: ${botResponse.slice(0, 200)}`,
        },
      ],
    });

    const title =
      completion.choices[0]?.message?.content?.trim() ?? 'Fashion Chat';

    return NextResponse.json({ title });
  } catch (error) {
    console.error('[generate-title]', error);
    return NextResponse.json(
      { error: 'Failed to generate title' },
      { status: 500 }
    );
  }
}
