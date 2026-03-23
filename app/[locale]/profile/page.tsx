'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Coins } from 'lucide-react';

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('profile');
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push(`/${locale}/sign-in`);
      return;
    }
    if (isLoaded && user) {
      fetch('/api/user/credits')
        .then((r) => r.json())
        .then((data) => {
          if (data.credits !== undefined) setCredits(data.credits);
          else console.error('[credits] unexpected response:', data);
        })
        .catch((e) => console.error('[credits] fetch failed:', e));
    }
  }, [isLoaded, user, router, locale]);

  if (!isLoaded || !user) {
    return <div>{t('loading')}</div>;
  }

  return (
    <main className="container mx-auto flex h-[80vh] items-center justify-center px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary mb-6 text-2xl font-bold">{t('title')}</h1>

        <div className="space-y-6 rounded-lg p-6 shadow">
          {/* Profile Header */}
          <div className="flex items-center gap-4 border-b pb-6">
            <img
              src={user.imageUrl}
              alt={user.firstName || t('title')}
              className="h-24 w-24 rounded-full border-4 border-white shadow"
            />
            <div>
              <h2 className="text-primary text-2xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-primary">
                {user.primaryEmailAddress?.emailAddress}
              </p>
              {user.username && (
                <p className="text-primary">@{user.username}</p>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-primary mb-3 text-lg font-semibold">
                {t('contactInfo')}
              </h3>
              <div className="space-y-2">
                <p className="text-primary">
                  <span className="font-medium">{t('email')}: </span>
                  {user.primaryEmailAddress?.emailAddress}
                </p>
                {user.primaryPhoneNumber && (
                  <p className="text-primary">
                    <span className="font-medium">{t('phone')}: </span>
                    {user.primaryPhoneNumber.phoneNumber}
                  </p>
                )}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Coins className="text-brand-red h-4 w-4" />
                <span className="text-primary font-medium">
                  {t('credits')}:{' '}
                </span>
                <span className="text-primary">
                  {credits !== null ? credits : '—'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
