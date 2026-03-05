import '@testing-library/jest-dom';

// Optional: add any global mocks or setup
jest.mock('next/router', () => require('next-router-mock'));

jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  useReducedMotion: () => false,
}));
