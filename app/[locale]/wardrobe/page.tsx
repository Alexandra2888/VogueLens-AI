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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { useTranslations, useLocale } from 'next-intl';

type ActiveTab = 'wardrobe' | 'weather' | 'shopping';

export default function WardrobePage() {
  const { user, isLoaded } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const locale = useLocale();
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

  const fetchItems = useCallback(
    async (signal?: AbortSignal) => {
      setIsFetching(true);
      try {
        const res = await fetch('/api/wardrobe', { signal });
        if (!res.ok) throw new Error();
        const data = await res.json();
        setItems(data.items ?? []);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        toast({
          title: t('toast.error'),
          description: t('toast.loadError'),
          variant: 'destructive',
        });
      } finally {
        setIsFetching(false);
      }
    },
    [toast, t]
  );

  useEffect(() => {
    if (isLoaded && !user) {
      router.push(`/${locale}/sign-in`);
      return;
    }
    if (isLoaded && user) {
      const controller = new AbortController();
      fetchItems(controller.signal);
      return () => controller.abort();
    }
  }, [isLoaded, user, fetchItems, router, locale]);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';

    setIsSaving(true);
    let storagePath: string | null = null;
    try {
      const ext = file.name.split('.').pop();
      storagePath = `${user!.id}/${crypto.randomUUID()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from(WARDROBE_BUCKET)
        .upload(storagePath, file, { upsert: false });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from(WARDROBE_BUCKET).getPublicUrl(storagePath);

      const res = await fetch('/api/wardrobe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: publicUrl }),
      });
      if (!res.ok) throw new Error();
      storagePath = null;
      const data = await res.json();
      setItems((prev) => [data.item, ...prev]);
      toast({
        title: t('toast.itemAdded'),
        description: t('toast.itemAddedDesc'),
      });
    } catch {
      if (storagePath) {
        supabase.storage
          .from(WARDROBE_BUCKET)
          .remove([storagePath])
          .catch(() => {});
      }
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
      if (!res.ok) throw new Error();
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

  if (!isLoaded || !user)
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );

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
      <div className="container mx-auto max-w-7xl px-4 pt-24 pb-16">
        <header className="mb-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-primary text-3xl font-bold tracking-tight md:text-4xl">
              {t('title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed md:text-base">
              {t('subtitle')}
            </p>
          </div>

          <div
            className="bg-muted/40 grid w-full grid-cols-1 gap-1 rounded-xl border p-1 sm:max-w-2xl sm:grid-cols-3"
            role="tablist"
            aria-label={t('title')}
          >
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => setActiveTab(id)}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors sm:justify-start sm:px-4 ${
                  activeTab === id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-background/60 hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{label}</span>
              </button>
            ))}
          </div>

          {activeTab === 'wardrobe' && (
            <Card className="shadow-sm">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-base">{t('addItem')}</CardTitle>
                <CardDescription>
                  {items.length}/10 {t('itemsUsed')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={items.length >= 10}
                />
                <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
                  <div
                    onClick={() =>
                      items.length < 10 &&
                      !isSaving &&
                      fileInputRef.current?.click()
                    }
                    className={`flex min-h-22 flex-1 cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed px-5 py-4 transition-colors lg:max-w-md ${
                      items.length >= 10
                        ? 'border-border cursor-not-allowed opacity-50'
                        : 'border-border hover:border-primary/50 hover:bg-muted/30'
                    }`}
                  >
                    {isSaving ? (
                      <Loader2 className="text-muted-foreground h-6 w-6 shrink-0 animate-spin" />
                    ) : (
                      <Upload className="text-muted-foreground h-6 w-6 shrink-0" />
                    )}
                    <div className="min-w-0 text-left">
                      <p className="font-medium">
                        {isSaving ? t('analyzing') : t('addItem')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:items-end">
                    <Select
                      value={categoryFilter}
                      onValueChange={setCategoryFilter}
                    >
                      <SelectTrigger className="w-full sm:w-46">
                        <SelectValue placeholder={t('categoryFilter')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          {t('categories.all')}
                        </SelectItem>
                        <SelectItem value="top">
                          {t('categories.top')}
                        </SelectItem>
                        <SelectItem value="bottom">
                          {t('categories.bottom')}
                        </SelectItem>
                        <SelectItem value="shoes">
                          {t('categories.shoes')}
                        </SelectItem>
                        <SelectItem value="outerwear">
                          {t('categories.outerwear')}
                        </SelectItem>
                        <SelectItem value="accessories">
                          {t('categories.accessories')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select
                      value={seasonFilter}
                      onValueChange={setSeasonFilter}
                    >
                      <SelectTrigger className="w-full sm:w-46">
                        <SelectValue placeholder={t('seasonFilter')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('seasons.all')}</SelectItem>
                        <SelectItem value="spring">
                          {t('seasons.spring')}
                        </SelectItem>
                        <SelectItem value="summer">
                          {t('seasons.summer')}
                        </SelectItem>
                        <SelectItem value="fall">
                          {t('seasons.fall')}
                        </SelectItem>
                        <SelectItem value="winter">
                          {t('seasons.winter')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </header>

        {activeTab === 'wardrobe' && (
          <div className="space-y-10">
            {isFetching ? (
              <Card>
                <CardContent className="flex min-h-56 items-center justify-center py-12">
                  <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
                </CardContent>
              </Card>
            ) : filtered.length === 0 ? (
              <Card>
                <CardContent className="flex min-h-56 flex-col items-center justify-center gap-3 py-12 text-center">
                  <div className="bg-muted/60 rounded-full p-4">
                    <Shirt className="text-muted-foreground h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-foreground font-medium">
                      {items.length === 0 ? t('empty') : t('noMatch')}
                    </p>
                    {items.length === 0 && (
                      <p className="text-muted-foreground max-w-sm text-sm">
                        {t('addItemHint')}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="text-muted-foreground text-sm">
                    {filtered.length === items.length
                      ? `${items.length} ${t('itemsUsed')}`
                      : `${filtered.length} / ${items.length} ${t('itemsUsed')}`}
                  </p>
                </div>
                <AnimatePresence>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-5">
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
              </>
            )}

            {items.length > 0 && (
              <Card className="shadow-sm">
                <CardHeader>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {t('recommendations.title')}
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Input
                      placeholder={t('recommendations.placeholder')}
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="sm:max-w-md sm:flex-1"
                      onKeyDown={(e) => e.key === 'Enter' && handleRecommend()}
                    />
                    <Button
                      onClick={handleRecommend}
                      disabled={isRecommending}
                      className="shrink-0 gap-2 sm:w-auto"
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
                    <div className="bg-muted/40 rounded-lg border p-4">
                      <p className="text-sm leading-relaxed">
                        {recommendation.text}
                      </p>
                      {recommendation.itemIds.length > 0 && (
                        <p className="text-muted-foreground mt-3 text-xs">
                          {t('recommendations.highlightHint')}
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'weather' && (
          <div className="space-y-6">
            <WeatherTab wardrobeItems={items} />
          </div>
        )}

        {activeTab === 'shopping' && (
          <div className="space-y-6">
            <ShoppingTab wardrobeItems={items} />
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
}
