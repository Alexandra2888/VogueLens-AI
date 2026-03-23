import { test, expect } from '@playwright/test';

test.describe('Privacy Policy Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/privacy');
    await page.waitForLoadState('domcontentloaded');
  });

  test('displays the privacy policy title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Privacy Policy' })
    ).toBeVisible();
  });

  test('displays version text', async ({ page }) => {
    await expect(page.getByText(/Version 1\.0/)).toBeVisible();
  });

  test('accordion sections are present', async ({ page }) => {
    // Accordion triggers (Personal Data, Service Data, User Auth)
    const triggers = page.locator('button[data-state]');
    await expect(triggers).toHaveCount(3);
  });

  test('accordion expands on click', async ({ page }) => {
    const trigger = page.locator('button[data-state]').first();
    await trigger.click();
    await page.waitForTimeout(300);
    await expect(page.locator('[data-state="open"]').first()).toBeVisible();
  });

  test('is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(
      page.getByRole('heading', { name: 'Privacy Policy' })
    ).toBeVisible();
  });
});
