// jest.setup.js
import '@testing-library/jest-dom';

// Optional: add any global mocks or setup
jest.mock('next/router', () => require('next-router-mock'));