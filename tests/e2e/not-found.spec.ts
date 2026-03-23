import { test, expect } from '@playwright/test';

test.describe('404 Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/non-existent-page');
    await page.waitForLoadState('networkidle');
  });

  test('displays 404 for non-existent route', async ({ page }) => {
    await expect(page.getByText('404')).toBeVisible();
    await expect(page.getByText('Page not found')).toBeVisible();
  });

  test('Return Home navigates to /en', async ({ page }) => {
    await page.getByRole('link', { name: 'Return Home' }).click();
    await expect(page).toHaveURL(/\/en/);
  });

  test('is accessible — has 404 text and a return link', async ({ page }) => {
    await expect(page.getByText('404')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Return Home' })).toBeVisible();
  });

  test('is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('404')).toBeVisible();
  });
});
