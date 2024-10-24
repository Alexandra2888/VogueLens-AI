// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { WebVitals } from '../components/WebVitals';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ThemeProvider } from './providers/providers';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>{children}</ErrorBoundary>
          <Analytics />
          <WebVitals />
        </ThemeProvider>
      </body>
    </html>
  );
}
