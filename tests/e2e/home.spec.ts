import { test, expect } from '@playwright/test';

test('home page loads and shows navigation', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto('/en');
  await page.waitForLoadState('networkidle');
  const nav = page.getByTestId('desktop-nav');
  await expect(nav).toBeVisible();
});

test('root / redirects to /en', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/en/);
});
