import { test, expect } from '@playwright/test';

test.describe('Theme toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
  });

  test('theme persists after page reload', async ({ page }) => {
    const desktopNav = page.getByTestId('desktop-nav');
    const toggle = desktopNav.getByRole('button', { name: 'Toggle theme' });
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await page.reload();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('desktop toggle switches dark/light', async ({ page }) => {
    const desktopNav = page.getByTestId('desktop-nav');
    const toggle = desktopNav.getByRole('button', { name: 'Toggle theme' });
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('mobile toggle switches dark/light', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileNav = page.getByTestId('mobile-nav');
    const toggle = mobileNav.getByRole('button', { name: 'Toggle theme' });
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('respects system dark preference', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});
