'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function useWebVitals() {
  useReportWebVitals((metric) => {
    // eslint-disable-next-line no-console
    console.log(metric);
  });
}
