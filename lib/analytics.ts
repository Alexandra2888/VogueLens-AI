/* eslint-disable no-console */
import { type NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP': {
      // First Contentful Paint
      console.log('FCP:', metric.value);
      break;
    }
    case 'LCP': {
      // Largest Contentful Paint
      console.log('LCP:', metric.value);
      break;
    }
    case 'CLS': {
      // Cumulative Layout Shift
      console.log('CLS:', metric.value);
      break;
    }
    case 'FID': {
      // First Input Delay
      console.log('FID:', metric.value);
      break;
    }
    case 'TTFB': {
      // Time to First Byte
      console.log('TTFB:', metric.value);
      break;
    }
    case 'INP': {
      // Interaction to Next Paint
      console.log('INP:', metric.value);
      break;
    }
  }
}
