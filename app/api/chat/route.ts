import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt, imageAnalysis } = await req.json();

    // Create system message based on whether we have image analysis
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
      { error: 'Failed to get chat response' },
      { status: 500 }
    );
  }
}
