'use client';

import { useUser } from '@clerk/nextjs';
import { useCallback, useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import {
  Upload,
  Sparkles,
  Loader2,
  Cloud,
  ShoppingBag,
  Shirt,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useRouter } from 'next/navigation';
import { supabase, WARDROBE_BUCKET } from '@/lib/supabase';
import {
  ItemCard,
  type WardrobeItem,
} from '../../wardrobe/_components/item-card';
import { WeatherTab } from '../../wardrobe/_components/weather-tab';
import { ShoppingTab } from '../../wardrobe/_components/shopping-tab';
import { useTranslations } from 'next-intl';

type ActiveTab = 'wardrobe' | 'weather' | 'shopping';

export default function WardrobePage() {
  const { user, isLoaded } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const t = useTranslations('wardrobe');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('wardrobe');
  const [items, setItems] = useState<WardrobeItem[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [seasonFilter, setSeasonFilter] = useState<string>('all');

  const [occasion, setOccasion] = useState('');
  const [isRecommending, setIsRecommending] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    text: string;
    itemIds: string[];
  } | null>(null);

  const fetchItems = useCallback(async () => {
    setIsFetching(true);
    try {
      const res = await fetch('/api/wardrobe');
      const data = await res.json();
      setItems(data.items ?? []);
    } catch {
      toast({
        title: t('toast.error'),
        description: t('toast.loadError'),
        variant: 'destructive',
      });
    } finally {
      setIsFetching(false);
    }
  }, [toast, t]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';

    setIsSaving(true);
    try {
      const ext = file.name.split('.').pop();
      const path = `${user!.id}/${crypto.randomUUID()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from(WARDROBE_BUCKET)
        .upload(path, file, { upsert: false });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from(WARDROBE_BUCKET).getPublicUrl(path);

      const res = await fetch('/api/wardrobe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: publicUrl }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems((prev) => [data.item, ...prev]);
      toast({
        title: t('toast.itemAdded'),
        description: t('toast.itemAddedDesc'),
      });
    } catch {
      toast({
        title: t('toast.error'),
        description: t('toast.uploadError'),
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/wardrobe/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      setItems((prev) => prev.filter((item) => item.id !== id));
      if (recommendation) {
        setRecommendation((r) =>
          r ? { ...r, itemIds: r.itemIds.filter((i) => i !== id) } : null
        );
      }
    } catch {
      toast({
        title: t('toast.error'),
        description: t('toast.deleteError'),
        variant: 'destructive',
      });
    }
  }

  async function handleRecommend() {
    setIsRecommending(true);
    setRecommendation(null);
    try {
      const res = await fetch('/api/wardrobe/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ occasion }),
      });
      const data = await res.json();
      setRecommendation({
        text: data.recommendation,
        itemIds: data.itemIds ?? [],
      });
    } catch {
      toast({
        title: t('toast.error'),
        description: t('toast.recommendError'),
        variant: 'destructive',
      });
    } finally {
      setIsRecommending(false);
    }
  }

  if (!isLoaded)
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  if (!user) {
    router.push('/sign-in');
    return null;
  }

  const filtered = items.filter((item) => {
    if (categoryFilter !== 'all' && item.category !== categoryFilter)
      return false;
    if (
      seasonFilter !== 'all' &&
      item.season !== seasonFilter &&
      item.season !== 'all'
    )
      return false;
    return true;
  });

  const tabs = [
    { id: 'wardrobe' as ActiveTab, label: t('tabs.wardrobe'), icon: Shirt },
    { id: 'weather' as ActiveTab, label: t('tabs.weather'), icon: Cloud },
    {
      id: 'shopping' as ActiveTab,
      label: t('tabs.shopping'),
      icon: ShoppingBag,
    },
  ];

  return (
    <>
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-primary mb-6 text-3xl font-bold">{t('title')}</h1>

          {/* Tab bar */}
          <div className="bg-muted/30 mb-6 flex w-fit gap-1 rounded-xl border p-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Wardrobe toolbar */}
          {activeTab === 'wardrobe' && (
            <div className="flex flex-wrap items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                disabled={items.length >= 10}
              />
              <div
                onClick={() =>
                  items.length < 10 &&
                  !isSaving &&
                  fileInputRef.current?.click()
                }
                className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed px-5 py-3 transition-colors ${
                  items.length >= 10
                    ? 'border-border cursor-not-allowed opacity-50'
                    : 'border-border hover:border-primary/50 hover:bg-muted/20'
                }`}
              >
                {isSaving ? (
                  <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
                ) : (
                  <Upload className="text-muted-foreground h-5 w-5" />
                )}
                <div>
                  <p className="text-sm font-medium">
                    {isSaving ? t('analyzing') : t('addItem')}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {items.length}/10 {t('itemsUsed')}
                  </p>
                </div>
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t('categoryFilter')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('categories.all')}</SelectItem>
                  <SelectItem value="top">{t('categories.top')}</SelectItem>
                  <SelectItem value="bottom">
                    {t('categories.bottom')}
                  </SelectItem>
                  <SelectItem value="shoes">{t('categories.shoes')}</SelectItem>
                  <SelectItem value="outerwear">
                    {t('categories.outerwear')}
                  </SelectItem>
                  <SelectItem value="accessories">
                    {t('categories.accessories')}
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select value={seasonFilter} onValueChange={setSeasonFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t('seasonFilter')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('seasons.all')}</SelectItem>
                  <SelectItem value="spring">{t('seasons.spring')}</SelectItem>
                  <SelectItem value="summer">{t('seasons.summer')}</SelectItem>
                  <SelectItem value="fall">{t('seasons.fall')}</SelectItem>
                  <SelectItem value="winter">{t('seasons.winter')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Wardrobe tab */}
        {activeTab === 'wardrobe' && (
          <>
            {isFetching ? (
              <div className="flex h-48 items-center justify-center">
                <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-muted-foreground flex h-48 flex-col items-center justify-center gap-2">
                <p>{items.length === 0 ? t('empty') : t('noMatch')}</p>
                {items.length === 0 && (
                  <p className="text-sm">{t('addItemHint')}</p>
                )}
              </div>
            ) : (
              <AnimatePresence>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {filtered.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      onDelete={handleDelete}
                      highlighted={recommendation?.itemIds.includes(item.id)}
                    />
                  ))}
                </div>
              </AnimatePresence>
            )}

            {/* Recommendations */}
            {items.length > 0 && (
              <section className="mt-12">
                <h2 className="mb-4 text-xl font-semibold">
                  {t('recommendations.title')}
                </h2>
                <div className="flex gap-3">
                  <Input
                    placeholder={t('recommendations.placeholder')}
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="max-w-sm"
                    onKeyDown={(e) => e.key === 'Enter' && handleRecommend()}
                  />
                  <Button
                    onClick={handleRecommend}
                    disabled={isRecommending}
                    variant="outline"
                    className="gap-2"
                  >
                    {isRecommending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="h-4 w-4" />
                    )}
                    {isRecommending
                      ? t('recommendations.finding')
                      : t('recommendations.getOutfit')}
                  </Button>
                </div>
                {recommendation && (
                  <div className="bg-muted/30 mt-4 rounded-lg border p-4">
                    <p className="text-sm">{recommendation.text}</p>
                    {recommendation.itemIds.length > 0 && (
                      <p className="text-muted-foreground mt-2 text-xs">
                        {t('recommendations.highlightHint')}
                      </p>
                    )}
                  </div>
                )}
              </section>
            )}
          </>
        )}

        {/* Weather tab */}
        {activeTab === 'weather' && <WeatherTab wardrobeItems={items} />}

        {/* Shopping tab */}
        {activeTab === 'shopping' && <ShoppingTab wardrobeItems={items} />}
      </main>
      <Toaster />
    </>
  );
}
