import { test, expect } from '@playwright/test';

test.describe('Header Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('mobile navigation opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const menuButton = page.getByTestId('mobile-menu-button');
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    const mobileMenu = page.getByTestId('mobile-menu');
    await expect(mobileMenu).toBeVisible();

    await menuButton.click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test('theme toggle works', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });

    const html = page.locator('html');
    await expect(html).toHaveClass('light');

    await themeToggle.click();
    await expect(html).toHaveClass('dark');

    await themeToggle.click();
    await expect(html).toHaveClass('light');
  });

  test('active link indicators', async ({ page }) => {
    const paths = ['/', '/chat', '/wardrobe'];

    for (const path of paths) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      const desktopNav = page.getByTestId('desktop-nav');
      const links = await desktopNav.getByRole('link').all();

      for (const link of links) {
        const href = await link.getAttribute('href');
        if (href === path) {
          await expect(link).toHaveAttribute('aria-current', 'page');
        } else {
          await expect(link).not.toHaveAttribute('aria-current', 'page');
        }
      }
    }
  });

  test('responsive logo switching', async ({ page }) => {
    // Desktop view
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.getByTestId('desktop-logo')).toBeVisible();
    await expect(page.getByTestId('mobile-logo')).toBeHidden();

    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByTestId('mobile-logo')).toBeVisible();
    await expect(page.getByTestId('desktop-logo')).toBeHidden();
  });
});
