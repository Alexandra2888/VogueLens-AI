import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt, imageAnalysis, generateImage } = await req.json();

    // Handle image generation request
    if (generateImage) {
      const imageResponse = await openai.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
      });

      return NextResponse.json({
        response: 'Image generated successfully',
        imageUrl: imageResponse.data[0].url,
      });
    }

    // Handle regular chat request
    const systemMessage = imageAnalysis
      ? `You are a helpful fashion assistant. Analyze the following image description and provide fashion advice: ${imageAnalysis}`
      : 'You are a helpful fashion assistant. Provide fashion advice based on user queries.';

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
