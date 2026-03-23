'use client';

import dynamic from 'next/dynamic';

const Features = dynamic(() => import('app/_components/features'), { ssr: false });
const HowItWorks = dynamic(() => import('app/_components/how-it-works'), { ssr: false });

export function DeferredSections() {
  return (
    <>
      <Features />
      <HowItWorks />
    </>
  );
}
