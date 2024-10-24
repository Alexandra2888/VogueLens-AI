import { test, expect } from '@playwright/test';
test.describe('Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('mobile navigation functionality', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile logo visibility using the test id
    const mobileLogo = page.getByTestId('mobile-logo');
    await expect(mobileLogo).toBeVisible();

    // Test menu button functionality
    const menuButton = page.getByRole('button', { name: 'Toggle menu' });
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Check all navigation items are visible in mobile menu
    const mobileNav = page.locator('nav').last();
    for (const item of ['Home', 'Chat', 'Wardrobe']) {
      await expect(mobileNav.getByRole('link', { name: item })).toBeVisible();
    }

    // Test navigation and menu closing
    await mobileNav.getByRole('link', { name: 'Chat' }).click();
    await expect(page).toHaveURL('/chat');
    // Menu should close after navigation
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('theme toggle functionality', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
    await expect(themeToggle).toBeVisible();

    // Check initial theme
    await expect(page.locator('html')).toHaveClass('light');

    // Toggle theme
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass('dark');

    // Toggle back
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass('light');
  });

  test('active link indicators', async ({ page }) => {
    // Check active state changes on navigation
    const paths = ['/', '/chat', '/wardrobe'];

    for (const path of paths) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      // Get all nav links
      const links = await page.locator('nav').first().getByRole('link').all();

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
});
