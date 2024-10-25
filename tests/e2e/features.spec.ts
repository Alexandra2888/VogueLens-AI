import { test, expect } from '@playwright/test';

test.describe('FeaturesSection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the features section with correct heading', async ({
    page,
  }) => {
    const section = page.getByTestId('features-section');
    await expect(section).toBeVisible();

    const title = page.getByTestId('features-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Features');

    const subtitle = page.getByTestId('features-subtitle');
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toContainText('Discover our powerful tools');
  });

  test('should display all four feature cards', async ({ page }) => {
    const featureCards = page.locator('[data-testid^="feature-card-"]');
    await expect(featureCards).toHaveCount(4);
  });

  test('should display correct content for each feature card', async ({
    page,
  }) => {
    const expectedFeatures = [
      {
        title: 'AI-Powered Recommendations',
        description:
          'Get personalized fashion advice tailored to your style and preferences.',
      },
      {
        title: 'Color Coordination',
        description:
          'Discover perfect color combinations that complement your wardrobe.',
      },
      {
        title: 'Instant Styling Tips',
        description:
          'Receive quick and practical styling advice for any occasion.',
      },
      {
        title: 'Outfit Generator',
        description:
          'Create complete outfits from your existing wardrobe or with new pieces.',
      },
    ];

    for (let i = 0; i < expectedFeatures.length; i++) {
      const title = page.getByTestId(`feature-title-${i}`);
      const description = page.getByTestId(`feature-description-${i}`);
      const icon = page.getByTestId(`feature-icon-${i}`);

      await expect(title).toHaveText(expectedFeatures[i].title);
      await expect(description).toHaveText(expectedFeatures[i].description);
      await expect(icon).toBeVisible();
    }
  });

  test('should have correct responsive layout', async ({ page }) => {
    const grid = page.getByTestId('features-grid');

    // Test mobile layout
    await page.setViewportSize({ width: 375, height: 800 });
    await expect(grid).toHaveClass(/grid-cols-1/);

    // Test tablet layout
    await page.setViewportSize({ width: 768, height: 800 });
    await expect(grid).toHaveClass(/md:grid-cols-2/);

    // Test desktop layout
    await page.setViewportSize({ width: 1024, height: 800 });
    await expect(grid).toHaveClass(/lg:grid-cols-4/);
  });

  test('should maintain accessibility structure', async ({ page }) => {
    const section = page.getByTestId('features-section');
    await expect(section).toBeVisible();

    const header = page.getByTestId('features-header');
    await expect(header).toBeVisible();

    // Check if all feature cards are present
    for (let i = 0; i < 4; i++) {
      const card = page.getByTestId(`feature-card-${i}`);
      const title = page.getByTestId(`feature-title-${i}`);
      const description = page.getByTestId(`feature-description-${i}`);

      await expect(card).toBeVisible();
      await expect(title).toBeVisible();
      await expect(description).toBeVisible();
    }
  });
});
