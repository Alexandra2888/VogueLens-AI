import '@testing-library/jest-dom';

// Optional: add any global mocks or setup
jest.mock('next/router', () => require('next-router-mock'));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  useReducedMotion: () => false,
}));
