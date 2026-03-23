'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Coins } from 'lucide-react';

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const t = useTranslations('profile');
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/user/credits')
      .then((r) => r.json())
      .then((data) => setCredits(data.credits))
      .catch(() => {});
  }, []);

  if (!isLoaded) {
    return <div>{t('loading')}</div>;
  }

  if (!user) {
    redirect('/sign-in');
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
                <Coins className="h-4 w-4 text-brand-red" />
                <span className="text-primary font-medium">{t('credits')}: </span>
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
