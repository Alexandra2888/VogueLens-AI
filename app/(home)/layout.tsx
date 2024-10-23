import { Analytics } from '@vercel/analytics/react';
import { WebVitals } from '../../components/WebVitals';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
        <WebVitals />
      </body>
    </html>
  );
}
