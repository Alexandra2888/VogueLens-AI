import { test, expect } from '@playwright/test';

test.describe('Language Switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
  });

  test('EN button is active by default', async ({ page }) => {
    const enBtn = page.getByRole('button', { name: 'EN' }).first();
    await expect(enBtn).toBeVisible();
    await expect(enBtn).toHaveClass(/bg-foreground/);
  });

  test('RO button is inactive by default', async ({ page }) => {
    const roBtn = page.getByRole('button', { name: 'RO' }).first();
    await expect(roBtn).toBeVisible();
    await expect(roBtn).not.toHaveClass(/bg-foreground/);
  });

  test('clicking RO switches to /ro route', async ({ page }) => {
    const roBtn = page.getByRole('button', { name: 'RO' }).first();
    await roBtn.click();
    await expect(page).toHaveURL(/\/ro/);
  });

  test('clicking EN on /ro switches back to /en', async ({ page }) => {
    await page.goto('/ro');
    await page.waitForLoadState('networkidle');
    const enBtn = page.getByRole('button', { name: 'EN' }).first();
    await enBtn.click();
    await expect(page).toHaveURL(/\/en/);
  });

  test('switching preserves the current page path on non-protected routes', async ({ page }) => {
    await page.goto('/en/privacy');
    await page.waitForLoadState('networkidle');
    const roBtn = page.getByRole('button', { name: 'RO' }).first();
    await roBtn.click();
    await expect(page).toHaveURL('/ro/privacy');
  });

  test('RO page sets html lang=ro', async ({ page }) => {
    await page.goto('/ro');
    await page.waitForLoadState('networkidle');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('ro');
  });

  test('EN page sets html lang=en', async ({ page }) => {
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en');
  });
});
