import { test, expect } from '@playwright/test';

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
  });

  test('footer is visible', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
  });

  test('contains Terms of Service and Privacy links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(
      footer.getByRole('link', { name: 'Terms of Service' })
    ).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Privacy' })).toBeVisible();
  });

  test('contains social icon links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Instagram' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Facebook' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Twitter' })).toBeVisible();
  });

  test('displays copyright with current year', async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(
      page.locator('footer').getByText(`© ${year} VogueLens AI`)
    ).toBeVisible();
  });
});
