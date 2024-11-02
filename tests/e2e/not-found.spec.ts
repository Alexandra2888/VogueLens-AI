import { test, expect } from '@playwright/test';

test.describe('404 Page', () => {
  // Test the 404 page rendering
  test('should display 404 page for non-existent route', async ({ page }) => {
    // Visit a non-existent page to trigger 404
    await page.goto('/non-existent-page');

    // Check if we're on the 404 page by verifying key elements
    await expect(page.locator('h1')).toHaveText('404');
    await expect(page.getByText('Oops! Page not found.')).toBeVisible();
    await expect(
      page.getByText(
        "The page you're looking for doesn't exist or has been moved."
      )
    ).toBeVisible();
  });

  test('should display logo', async ({ page }) => {
    await page.goto('/non-existent-page');

    // First wait for the 404 text we know works
    await expect(page.locator('h1')).toHaveText('404');

    // Then check for logo container which should be above it
    await expect(page.locator('[data-testid="logo-container"]')).toBeVisible();
  });

  // Test the "Return Home" button functionality
  test('should navigate to home page when clicking Return Home', async ({
    page,
  }) => {
    await page.goto('/non-existent-page');

    // Click the Return Home link
    await page.click('text=Return Home');

    // Verify we're back on the home page
    await expect(page).toHaveURL('/');
  });

  // Test the animations (optional, since animations can be tricky to test)
  test('should have proper animation classes', async ({ page }) => {
    await page.goto('/non-existent-page');

    // Check if motion div has the correct classes
    await expect(page.locator('div.space-y-8')).toHaveClass(
      /w-full max-w-md space-y-8 text-center/
    );
  });

  // Test accessibility
  test('should be accessible', async ({ page }) => {
    await page.goto('/non-existent-page');

    // Check if the page has a heading level 1
    await expect(page.locator('h1')).toBeVisible();

    // Check if the link is properly labeled
    await expect(page.getByRole('link', { name: 'Return Home' })).toBeVisible();
  });

  // Test responsive layout
  test('should maintain layout on different viewport sizes', async ({
    page,
  }) => {
    await page.goto('/non-existent-page');

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('div.px-4')).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('div.sm\\:px-6')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.locator('div.lg\\:px-8')).toBeVisible();
  });
});
