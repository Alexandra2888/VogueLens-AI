import { Analytics } from '@vercel/analytics/react';
import { WebVitals } from '@/components/WebVitals';
import { Metadata } from 'next';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ThemeProvider } from './providers/providers';
import Script from 'next/script';
import './globals.css';
import CrispProvider from './providers/crisp-provider';
import { ClerkProvider } from '@clerk/nextjs';

import PWAInstallBanner from '../app/_components/PWAInstallBanner';

export const metadata: Metadata = {
  title: 'VogueLens AI - Your AI Fashion Stylist',
  description:
    'Get personalized fashion advice, outfit recommendations and style tips from our AI-powered chatbot. Features include color coordination, instant styling tips, and outfit generation.',
  keywords:
    'AI fashion stylist, personal style assistant, outfit recommendations, color coordination, fashion chatbot',
  openGraph: {
    title: 'VogueLens AI - Your AI Fashion Stylist',
    description:
      'Get personalized fashion advice and outfit recommendations from our AI stylist',
    type: 'website',
    url: 'https://voguelens.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VogueLens AI Fashion Assistant Interface',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['WebSite', 'SoftwareApplication'],
  name: 'VogueLens AI',
  headline: 'Your AI Fashion Stylist',
  description:
    'Get personalized fashion advice, outfit recommendations and style tips from our AI-powered chatbot.',
  applicationCategory: 'LifestyleApplication',
  featureList: [
    'AI-Powered Recommendations',
    'Color Coordination',
    'Instant Styling Tips',
    'Outfit Generator',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  operatingSystem: 'All',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'AI-Powered Recommendations',
        description:
          'Get personalized fashion advice tailored to your style and preferences',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Color Coordination',
        description:
          'Discover perfect color combinations that complement your wardrobe',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Instant Styling Tips',
        description:
          'Receive quick and practical styling advice for any occasion',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Outfit Generator',
        description:
          'Create complete outfits from your existing wardrobe or with new pieces',
      },
    ],
  },
  howTo: {
    '@type': 'HowTo',
    name: 'How to Get Fashion Advice',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Start a Chat',
        text: 'Begin your fashion journey by starting a conversation with our AI assistant',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Describe Your Needs',
        text: 'Tell us about your style preferences, body type, or specific fashion questions',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Receive Personalized Advice',
        text: 'Get tailored recommendations and styling tips based on your input',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Refine Your Style',
        text: 'Iterate and explore different options to perfect your fashion choices',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />
            <ClerkProvider
              dynamic
              publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            >
              <CrispProvider />
              {children}
              <PWAInstallBanner />
            </ClerkProvider>
          </ErrorBoundary>
          <Analytics />
          <WebVitals />
        </ThemeProvider>
      </body>
    </html>
  );
}
