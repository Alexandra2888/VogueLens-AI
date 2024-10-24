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
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
        <Analytics />
        <WebVitals />
      </body>
    </html>
  );
}
