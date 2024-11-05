import { test, expect } from '@playwright/test';

test.describe('Theme persistence', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('theme should persist after page reload', async ({ page }) => {
    // Use desktop view
    await page.setViewportSize({ width: 1024, height: 768 });

    // Get theme toggle button from desktop nav
    const desktopNav = page.getByTestId('desktop-nav');
    const themeToggle = desktopNav.getByRole('button', {
      name: 'Toggle theme',
    });
    await expect(themeToggle).toBeVisible();

    // Switch to dark theme
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Check if dark theme persisted
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('desktop theme toggle shows correct icon', async ({ page }) => {
    // Use desktop view
    await page.setViewportSize({ width: 1024, height: 768 });

    // Get desktop theme toggle specifically
    const desktopNav = page.getByTestId('desktop-nav');
    const themeToggle = desktopNav.getByRole('button', {
      name: 'Toggle theme',
    });
    await expect(themeToggle).toBeVisible();

    // Check initial state (light theme)
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    // Look for Moon icon in light mode
    await expect(desktopNav.getByTestId('moon-icon')).toBeVisible();

    // Switch to dark theme
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    // Look for Sun icon in dark mode
    await expect(desktopNav.getByTestId('sun-icon')).toBeVisible();

    // Switch back to light theme
    await themeToggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(desktopNav.getByTestId('moon-icon')).toBeVisible();
  });

  test('mobile theme toggle works', async ({ page }) => {
    // Use mobile view
    await page.setViewportSize({ width: 375, height: 667 });

    // Get mobile theme toggle specifically
    const mobileNav = page.getByTestId('mobile-nav');
    const themeToggle = mobileNav.getByRole('button', { name: 'Toggle theme' });
    await expect(themeToggle).toBeVisible();

    // Check initial state (light theme)
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(mobileNav.getByTestId('moon-icon')).toBeVisible();

    // Switch to dark theme
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(mobileNav.getByTestId('sun-icon')).toBeVisible();

    // Switch back to light theme
    await themeToggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(mobileNav.getByTestId('moon-icon')).toBeVisible();
  });

  test('system preference should be respected', async ({ page }) => {
    // Set system theme before navigation
    await page.emulateMedia({ colorScheme: 'dark' });

    // Navigate to page
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check if system theme is applied
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Change system theme to light
    await page.emulateMedia({ colorScheme: 'light' });
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('theme toggle works in mobile menu', async ({ page }) => {
    // Use mobile view
    await page.setViewportSize({ width: 375, height: 667 });

    // Open mobile menu
    const menuButton = page.getByRole('button', { name: 'Toggle menu' });
    await menuButton.click();

    // Get mobile theme toggle
    const mobileNav = page.getByTestId('mobile-nav');
    const themeToggle = mobileNav.getByRole('button', { name: 'Toggle theme' });

    // Check initial state (light theme)
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(mobileNav.getByTestId('moon-icon')).toBeVisible();

    // Toggle theme in mobile menu
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(mobileNav.getByTestId('sun-icon')).toBeVisible();

    // Close and reopen mobile menu to check persistence
    await menuButton.click();
    await menuButton.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(mobileNav.getByTestId('sun-icon')).toBeVisible();
  });
});
