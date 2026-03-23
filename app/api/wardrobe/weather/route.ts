import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { and, eq, or, sql, gte } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users, wardrobeItems } from '@/db/schema';
import { openai } from '@/lib/openai';
import { wardrobeLimit } from '@/lib/rate-limit';
import {
  rateLimitExceeded,
  unauthorizedResponse,
  badRequestResponse,
  internalErrorResponse,
} from '@/lib/security';

type ForecastSlot = {
  time: string;
  temp: number;
  condition: string;
  description: string;
  icon: string;
};

function tempToSeason(avgTemp: number): string {
  if (avgTemp >= 25) return 'summer';
  if (avgTemp >= 18) return 'spring';
  if (avgTemp >= 10) return 'fall';
  return 'winter';
}

function conditionEmoji(main: string): string {
  const map: Record<string, string> = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
    Haze: '🌫️',
  };
  return map[main] ?? '🌤️';
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return unauthorizedResponse();

    if (!wardrobeLimit(userId)) return rateLimitExceeded();

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return badRequestResponse('Invalid JSON');
    }

    const { lat, lon } = body as { lat?: number; lon?: number };
    if (lat == null || lon == null) {
      return badRequestResponse('lat and lon are required');
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      return internalErrorResponse();
    }

    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&cnt=8`
    );
    if (!weatherRes.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch weather data' },
        { status: 502 }
      );
    }

    const weatherData = await weatherRes.json();
    const city: string = weatherData.city?.name ?? 'Your location';

    const forecast: ForecastSlot[] = (weatherData.list ?? []).map(
      (slot: {
        dt_txt: string;
        main: { temp: number };
        weather: { main: string; description: string; icon: string }[];
      }) => ({
        time: slot.dt_txt.slice(11, 16),
        temp: Math.round(slot.main.temp),
        condition: conditionEmoji(slot.weather[0]?.main ?? ''),
        description: slot.weather[0]?.description ?? '',
        icon: slot.weather[0]?.icon ?? '',
      })
    );

    const avgTemp =
      forecast.reduce((sum, s) => sum + s.temp, 0) / forecast.length;
    const hasRain = forecast.some((s) =>
      s.description.toLowerCase().includes('rain')
    );
    const mappedSeason = tempToSeason(avgTemp);

    const items = await db
      .select({
        id: wardrobeItems.id,
        category: wardrobeItems.category,
        style: wardrobeItems.style,
        colors: wardrobeItems.colors,
        season: wardrobeItems.season,
        imageUrl: wardrobeItems.imageUrl,
      })
      .from(wardrobeItems)
      .where(
        and(
          eq(wardrobeItems.userId, userId),
          or(
            eq(wardrobeItems.season, mappedSeason),
            eq(wardrobeItems.season, 'all')
          )
        )
      );

    if (items.length === 0) {
      return NextResponse.json({
        city,
        forecast,
        recommendation: `It's ${Math.round(avgTemp)}°C in ${city}. Add more items to your wardrobe to get outfit suggestions!`,
        itemIds: [],
      });
    }

    // Atomic credit deduction (1 credit for weather suggestion)
    const cost = 1;
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

    const forecastSummary = `${Math.round(avgTemp)}°C average, ${hasRain ? 'rain expected' : 'no rain'}, ${mappedSeason} conditions`;
    const wardrobeDescription = items
      .map(
        (i) =>
          `[${i.id}] ${i.category}, ${i.style}, colors: ${(i.colors as string[]).join(', ')}`
      )
      .join('\n');

    const aiResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are a personal fashion stylist. Suggest an outfit based on the weather forecast.',
        },
        {
          role: 'user',
          content: `Weather in ${city} for the next 24 hours: ${forecastSummary}\n\nWardrobe:\n${wardrobeDescription}\n\nSuggest an outfit. Return JSON: { "recommendation": "explanation", "itemIds": ["id1", "id2"] }`,
        },
      ],
      max_tokens: 400,
      response_format: { type: 'json_object' },
    });

    type AiResult = { recommendation: string; itemIds: string[] };
    let result: AiResult;
    try {
      result = JSON.parse(
        aiResponse.choices[0].message.content ?? '{}'
      ) as AiResult;
    } catch {
      result = {
        recommendation: aiResponse.choices[0].message.content ?? '',
        itemIds: [],
      };
    }

    return NextResponse.json({
      city,
      forecast,
      creditsRemaining: updated.creditsRemaining,
      ...result,
    });
  } catch {
    return internalErrorResponse();
  }
}
