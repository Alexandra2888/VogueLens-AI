import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
  });

  test('renders CTA buttons', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: /Start Styling/i })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Explore Features/i })
    ).toBeVisible();
  });

  test('renders hero images on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
    const img = page.locator('img[alt="Fashion model 1"]');
    await expect(img).toBeVisible();
  });

  test('renders stat counters', async ({ page }) => {
    await expect(page.getByText('10K+')).toBeVisible();
    await expect(page.getByText('50K+')).toBeVisible();
    await expect(page.getByText('4.9')).toBeVisible();
  });
});
