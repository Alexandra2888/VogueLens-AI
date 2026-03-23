'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: string) => {
    if (next === locale) return;
    // Replace the locale segment in the pathname
    const segments = pathname.split('/');
    segments[1] = next;
    startTransition(() => {
      router.push(segments.join('/'));
    });
  };

  return (
    <div className="flex items-center rounded-lg border border-border/50 overflow-hidden text-xs font-medium">
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === 'en'
            ? 'bg-foreground text-background'
            : 'text-foreground/60 hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('ro')}
        disabled={isPending}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === 'ro'
            ? 'bg-foreground text-background'
            : 'text-foreground/60 hover:text-foreground'
        }`}
      >
        RO
      </button>
    </div>
  );
}
