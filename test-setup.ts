import { test as base } from '@playwright/test';

export const test = base.extend({
  // Set up env vars before tests
  page: async ({ page }, use) => {
    // @ts-ignore
    process.env.NODE_ENV = 'test';
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
      'pk_test_dummy-key-for-testing';
    process.env.CLERK_SECRET_KEY = 'sk_test_dummy-key-for-testing';
    await use(page);
  },
});

export { expect } from '@playwright/test';
