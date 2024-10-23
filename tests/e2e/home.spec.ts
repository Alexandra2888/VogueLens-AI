import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Check title
  await expect(page).toHaveTitle('VogueLens AI');

  // Check heading
  const heading = page.locator('h1');
  await expect(heading).toHaveText('VogueLens AI');
});
