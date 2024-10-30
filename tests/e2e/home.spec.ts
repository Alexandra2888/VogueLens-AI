import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Check if navigation exists
  const nav = page.locator('nav.hidden.md\\:flex');
  await expect(nav).toBeVisible();
});
