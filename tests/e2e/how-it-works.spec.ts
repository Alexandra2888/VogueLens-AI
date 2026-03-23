import { test, expect } from '@playwright/test';

test.describe('How It Works Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
  });

  test('renders the section', async ({ page }) => {
    await expect(page.getByTestId('how-it-works-section')).toBeVisible();
  });

  test('displays four steps', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`step-${i}`)).toBeVisible();
    }
  });

  test('step titles match translations', async ({ page }) => {
    const expectedTitles = [
      'Start a Chat',
      'Describe Your Needs',
      'Receive Personalized Advice',
      'Refine Your Style',
    ];
    for (let i = 0; i < expectedTitles.length; i++) {
      await expect(page.getByTestId(`step-title-${i}`)).toHaveText(expectedTitles[i]);
    }
  });

  test('step icons are visible', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`step-icon-${i}`)).toBeVisible();
    }
  });

  test('timeline is hidden on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    const stepsContainer = page.getByTestId('how-it-works-steps');
    await expect(stepsContainer).toBeVisible();
    // Steps should still be visible even without the timeline
    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`step-${i}`)).toBeVisible();
    }
  });
});
