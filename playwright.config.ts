import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    env: {
      NODE_ENV: 'test',
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_Y2xlcmsuY29t',
      CLERK_SECRET_KEY: 'sk_test_Y2xlcmsuY29t',
    },
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});
