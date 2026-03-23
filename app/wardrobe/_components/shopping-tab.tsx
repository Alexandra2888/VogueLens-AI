'use client';

import { useRef, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Upload, Loader2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase, WARDROBE_BUCKET } from '@/lib/supabase';
import type { WardrobeItem } from './item-card';
import { useTranslations } from 'next-intl';

type ItemAnalysis = {
  category: string;
  colors: string[];
  style: string;
  season: string;
};

type SimilarItem = {
  id: string;
  imageUrl: string;
  category: string;
  style: string;
};

type CheckResult = {
  analysis: ItemAnalysis;
  similarItems: SimilarItem[];
  compatibilityScore: number;
  recommendation: 'BUY' | 'SKIP' | 'CONSIDER';
  reasoning: string;
  pairsWithIds: string[];
};

type ShoppingTabProps = {
  wardrobeItems: WardrobeItem[];
};

const RECOMMENDATION_STYLES = {
  BUY: 'bg-green-500/10 text-green-600 border-green-500/30',
  SKIP: 'bg-red-500/10 text-red-600 border-red-500/30',
  CONSIDER: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30',
};

export function ShoppingTab({ wardrobeItems }: ShoppingTabProps) {
  const { user } = useUser();
  const t = useTranslations('shoppingTab');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    e.target.value = '';

    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
    setError(null);
    setIsChecking(true);

    try {
      const ext = file.name.split('.').pop();
      const path = `check/${user.id}/${crypto.randomUUID()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from(WARDROBE_BUCKET)
        .upload(path, file, { upsert: false });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from(WARDROBE_BUCKET).getPublicUrl(path);

      const res = await fetch('/api/wardrobe/shopping-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: publicUrl }),
      });
      if (!res.ok) throw new Error('Analysis failed');
      const data = await res.json();
      setResult(data);
    } catch {
      setError(t('analyzeError'));
    } finally {
      setIsChecking(false);
    }
  }

  const pairsWithItems = result
    ? wardrobeItems.filter((item) => result.pairsWithIds.includes(item.id))
    : [];

  return (
    <div className="space-y-6">
      {/* Upload area */}
      <div
        className="border-border hover:border-primary/50 hover:bg-muted/20 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <ShoppingBag className="text-muted-foreground h-8 w-8" />
        <div className="text-center">
          <p className="text-sm font-medium">{t('uploadTitle')}</p>
          <p className="text-muted-foreground mt-1 text-xs">
            {t('uploadSubtitle')}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
        >
          <Upload className="h-4 w-4" /> {t('choosePhoto')}
        </Button>
      </div>

      {/* Preview + result */}
      {(previewUrl || isChecking) && (
        <div className="grid gap-6 sm:grid-cols-2">
          {previewUrl && (
            <div>
              <img
                src={previewUrl}
                alt="Shopping item"
                className="h-64 w-full rounded-xl object-cover"
              />
            </div>
          )}

          <div className="space-y-4">
            {isChecking ? (
              <div className="text-muted-foreground flex h-64 flex-col items-center justify-center gap-3">
                <Loader2 className="h-7 w-7 animate-spin" />
                <p className="text-sm">{t('analyzing')}</p>
              </div>
            ) : result ? (
              <>
                {/* Recommendation badge */}
                <div
                  className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold ${RECOMMENDATION_STYLES[result.recommendation]}`}
                >
                  {t(`recommendations.${result.recommendation}`)}
                </div>

                {/* Item metadata */}
                <div className="flex flex-wrap gap-2">
                  {[
                    result.analysis.category,
                    result.analysis.style,
                    result.analysis.season,
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted rounded-full px-3 py-1 text-xs capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                  {result.analysis.colors.map((color) => (
                    <span
                      key={color}
                      className="inline-block h-5 w-5 rounded-full border"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>

                {/* Reasoning */}
                <p className="text-muted-foreground text-sm">
                  {result.reasoning}
                </p>

                {/* Compatibility score */}
                <div className="flex items-center gap-2">
                  <div className="bg-muted h-2 flex-1 overflow-hidden rounded-full">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${result.compatibilityScore}%` }}
                    />
                  </div>
                  <span className="text-muted-foreground w-12 text-right text-xs">
                    {result.compatibilityScore}% match
                  </span>
                </div>
              </>
            ) : error ? (
              <p className="text-destructive text-sm">{error}</p>
            ) : null}
          </div>
        </div>
      )}

      {/* Pairs-with items */}
      {pairsWithItems.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium">{t('pairsWith')}</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {pairsWithItems.map((item) => (
              <div key={item.id} className="shrink-0">
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
