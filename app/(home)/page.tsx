import { notFound } from 'next/navigation';

// This route is superseded by app/[locale]/(home)/page.tsx
// All traffic is routed via the locale-aware middleware
export default function Page() {
  return notFound();
}
