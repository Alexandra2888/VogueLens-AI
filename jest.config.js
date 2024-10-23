const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  coverageProvider: 'v8',
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  roots: ['<rootDir>/src/', '<rootDir>/__tests__/'],
};

module.exports = createJestConfig(config);