import { Analytics } from '@vercel/analytics/react';
import { WebVitals } from '@/components/WebVitals';
import { Metadata } from 'next';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ThemeProvider } from '../providers/providers';
import Script from 'next/script';
import { ClerkProvider } from '@clerk/nextjs';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Plus_Jakarta_Sans } from 'next/font/google';

import PWAInstallBanner from '../_components/PWAInstallBanner';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VogueLens AI - Your AI Fashion Stylist',
  description:
    'Get personalized fashion advice, outfit recommendations and style tips from our AI-powered chatbot.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ro')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={jakarta.variable}>
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://voguelens.ai" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="VogueLens AI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VogueLens AI" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <Script
              id="website-schema"
              type="application/ld+json"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'WebSite',
                  name: 'VogueLens AI',
                }),
              }}
            />
            <ClerkProvider
              publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            >
              <NextIntlClientProvider messages={messages}>
                {children}
                <PWAInstallBanner />
              </NextIntlClientProvider>
            </ClerkProvider>
          </ErrorBoundary>
          <Analytics />
          <WebVitals />
        </ThemeProvider>
      </body>
    </html>
  );
}
