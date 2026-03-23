import '@testing-library/jest-dom';

jest.mock('next/server', () => ({
  NextResponse: {
    json: (body, init) => ({ body, init }),
    redirect: (url) => ({ url }),
    next: () => ({}),
  },
}));

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/en',
  useSearchParams: () => new URLSearchParams(),
}));

jest.mock('next-intl', () => ({
  useTranslations: () => (key) => key,
  useLocale: () => 'en',
}));

jest.mock('motion/react', () => ({
  motion: new Proxy(
    {},
    {
      get:
        (_, tag) =>
        ({ children, ...props }) => {
          const React = require('react');
          return React.createElement(tag || 'div', props, children);
        },
    }
  ),
  AnimatePresence: ({ children }) => children,
  useReducedMotion: () => false,
  useScroll: () => ({ scrollY: { on: jest.fn() } }),
  useMotionValueEvent: jest.fn(),
  useInView: () => true,
  useTransform: () => 0,
  useMotionValue: () => ({ set: jest.fn() }),
  useSpring: () => 0,
}));
