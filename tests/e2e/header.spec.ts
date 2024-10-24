import { test, expect } from '@playwright/test';

test.describe('Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('mobile navigation functionality', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile logo visibility
    await expect(page.getByTestId('mobile-logo')).toBeVisible();

    // Test menu button functionality
    const menuButton = page.getByRole('button', { name: 'Toggle menu' });
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Check navigation items in mobile menu
    for (const item of ['Home', 'Chat', 'Wardrobe']) {
      // Use a more specific selector for mobile menu items
      const link = page
        .locator('nav.md\\:hidden')
        .getByRole('link', { name: item });
      await expect(link).toBeVisible();
    }

    // Test navigation and menu closing
    await page
      .locator('nav.md\\:hidden')
      .getByRole('link', { name: 'Chat' })
      .click();
    await expect(page).toHaveURL('/chat');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('desktop navigation functionality', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1024, height: 768 });

    // Check desktop navigation
    const desktopNav = page.getByTestId('desktop-nav');
    await expect(desktopNav).toBeVisible();

    // Check all nav items are visible
    for (const item of ['Home', 'Chat', 'Wardrobe']) {
      await expect(desktopNav.getByRole('link', { name: item })).toBeVisible();
    }

    // Test navigation
    await desktopNav.getByRole('link', { name: 'Chat' }).click();
    await expect(page).toHaveURL('/chat');
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
    // Use desktop view for consistent testing
    await page.setViewportSize({ width: 1024, height: 768 });

    const paths = ['/', '/chat', '/wardrobe'];

    for (const path of paths) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      // Check desktop navigation links
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

      // If in mobile view, also check mobile navigation
      if (page.viewportSize()?.width! < 768) {
        const menuButton = page.getByRole('button', { name: 'Toggle menu' });
        await menuButton.click();

        const mobileLinks = await page
          .locator('nav.md\\:hidden')
          .getByRole('link')
          .all();
        for (const link of mobileLinks) {
          const href = await link.getAttribute('href');
          if (href === path) {
            await expect(link).toHaveAttribute('aria-current', 'page');
          } else {
            await expect(link).not.toHaveAttribute('aria-current', 'page');
          }
        }
      }
    }
  });
});
