import { test, expect } from '@playwright/test';

test.describe('Terms and Conditions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/terms');
    await page.waitForLoadState('domcontentloaded');
  });

  test('displays page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('expands and collapses sections', async ({ page }) => {
    const toggle = page.getByTestId('section-toggle-0');
    const content = page.getByTestId('section-content-0');
    await expect(content).not.toBeVisible();
    await toggle.click();
    await expect(content).toBeVisible();
    await toggle.click();
    await expect(content).not.toBeVisible();
  });

  test('section content is non-empty when expanded', async ({ page }) => {
    for (let i = 0; i < 3; i++) {
      await page.getByTestId(`section-toggle-${i}`).click();
      const content = page.getByTestId(`section-content-${i}`);
      await expect(content).toBeVisible();
      const text = await content.textContent();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test('multiple sections can be open simultaneously', async ({ page }) => {
    await page.getByTestId('section-toggle-0').click();
    await page.getByTestId('section-toggle-1').click();
    await expect(page.getByTestId('section-content-0')).toBeVisible();
    await expect(page.getByTestId('section-content-1')).toBeVisible();
  });
});
