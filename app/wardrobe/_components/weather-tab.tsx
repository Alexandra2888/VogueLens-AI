'use client';

import { useEffect, useState } from 'react';
import { Loader2, MapPin, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { WardrobeItem } from './item-card';
import { useTranslations } from 'next-intl';

type ForecastSlot = {
  time: string;
  temp: number;
  condition: string;
  description: string;
};

type WeatherResult = {
  city: string;
  forecast: ForecastSlot[];
  recommendation: string;
  itemIds: string[];
};

type WeatherTabProps = {
  wardrobeItems: WardrobeItem[];
};

export function WeatherTab({ wardrobeItems }: WeatherTabProps) {
  const t = useTranslations('weatherTab');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<WeatherResult | null>(null);

  async function fetchWeather() {
    setIsLoading(true);
    setError(null);
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 8000,
        })
      );
      const res = await fetch('/api/wardrobe/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        }),
      });
      if (!res.ok) throw new Error('Failed to fetch weather');
      const data = await res.json();
      setResult(data);
    } catch (e) {
      const msg =
        e instanceof GeolocationPositionError
          ? t('locationDenied')
          : t('loadError');
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  const matchedItems = result
    ? wardrobeItems.filter((item) => result.itemIds.includes(item.id))
    : [];

  if (isLoading) {
    return (
      <div className="text-muted-foreground flex h-64 flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="text-sm">{t('detecting')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-sm">{error}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchWeather}
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" /> {t('tryAgain')}
        </Button>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="space-y-6">
      {/* City + refresh */}
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{result.city}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={fetchWeather}
          className="gap-1 text-xs"
        >
          <RefreshCw className="h-3 w-3" /> {t('refresh')}
        </Button>
      </div>

      {/* 24-hour forecast strip */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {result.forecast.map((slot, i) => (
          <div
            key={i}
            className="bg-card flex min-w-[72px] flex-col items-center gap-1 rounded-xl border px-3 py-3 text-center"
          >
            <span className="text-muted-foreground text-xs">{slot.time}</span>
            <span className="text-2xl">{slot.condition}</span>
            <span className="text-sm font-semibold">{slot.temp}°C</span>
            <span className="text-muted-foreground text-[10px] leading-tight capitalize">
              {slot.description}
            </span>
          </div>
        ))}
      </div>

      {/* AI recommendation */}
      <div className="bg-muted/30 rounded-xl border p-4">
        <p className="text-muted-foreground mb-1 text-xs font-medium tracking-wide uppercase">
          {t('outfitSuggestion')}
        </p>
        <p className="text-sm">{result.recommendation}</p>
      </div>

      {/* Matched wardrobe items */}
      {matchedItems.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium">{t('suggestedItems')}</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {matchedItems.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.category}
                  className="ring-primary h-28 w-20 rounded-lg object-cover ring-2"
                />
                <p className="text-muted-foreground mt-1 text-center text-xs capitalize">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
