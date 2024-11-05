// global-setup.ts
import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // @ts-ignore
  process.env.NODE_ENV = 'test';
  process.env.NEXT_PUBLIC_CLERK_BYPASS_AUTH = 'true';

  // Mock Clerk environment variables
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 'pk_test_mock-key';
  process.env.CLERK_SECRET_KEY = 'sk_test_mock-secret';
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL = '/sign-in';
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL = '/sign-up';
  process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = '/';
  process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = '/';
}

export default globalSetup;
