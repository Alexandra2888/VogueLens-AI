import type { ReactNode } from 'react';
import './globals.css';

// Root layout is a passthrough — html/body are rendered in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
