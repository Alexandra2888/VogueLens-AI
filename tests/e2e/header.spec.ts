import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
  });

  test('mobile navigation opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const menuButton = page.getByTestId('mobile-menu-button');
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.getByTestId('mobile-menu')).toBeVisible();
    await menuButton.click();
    await expect(page.getByTestId('mobile-menu')).not.toBeVisible();
  });

  test('responsive logo switching', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.getByTestId('desktop-logo')).toBeVisible();
    await expect(page.getByTestId('mobile-logo')).toBeHidden();

    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByTestId('mobile-logo')).toBeVisible();
    await expect(page.getByTestId('desktop-logo')).toBeHidden();
  });

  test('desktop nav links are visible', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const nav = page.getByTestId('desktop-nav');
    await expect(nav).toBeVisible();
    await expect(nav.getByTestId('nav-link-home-desktop')).toBeVisible();
    await expect(nav.getByTestId('nav-link-chat-desktop')).toBeVisible();
    await expect(nav.getByTestId('nav-link-wardrobe-desktop')).toBeVisible();
  });

  test('active link has aria-current=page on home', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.getByTestId('nav-link-home-desktop')).toHaveAttribute('aria-current', 'page');
  });

  test('active link changes on navigation to privacy', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/en/privacy');
    await page.waitForLoadState('networkidle');
    // Home link should not be active
    await expect(page.getByTestId('nav-link-home-desktop')).not.toHaveAttribute('aria-current', 'page');
  });
});
