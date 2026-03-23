import { test, expect } from '@playwright/test';

test.describe('Features Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
  });

  test('renders the features section', async ({ page }) => {
    const section = page.getByTestId('features-section');
    await expect(section).toBeVisible();
  });

  test('displays all four feature cards', async ({ page }) => {
    const cards = page.locator('[data-testid^="feature-card-"]');
    await expect(cards).toHaveCount(4);
  });

  test('feature card titles match translations', async ({ page }) => {
    const expectedTitles = [
      'AI-Powered Recommendations',
      'Color Coordination',
      'Instant Styling Tips',
      'Outfit Generator',
    ];
    for (let i = 0; i < expectedTitles.length; i++) {
      await expect(page.getByTestId(`feature-title-${i}`)).toHaveText(
        expectedTitles[i]
      );
    }
  });

  test('feature icons are visible', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`feature-icon-${i}`)).toBeVisible();
    }
  });

  test('features grid has correct responsive classes', async ({ page }) => {
    const grid = page.getByTestId('features-grid');
    await expect(grid).toHaveClass(/grid-cols-1/);
    await expect(grid).toHaveClass(/md:grid-cols-2/);
    await expect(grid).toHaveClass(/lg:grid-cols-4/);
  });
});
