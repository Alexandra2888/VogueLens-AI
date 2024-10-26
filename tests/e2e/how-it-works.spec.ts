import { test, expect } from '@playwright/test';

test.describe('HowItWorks Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page containing the HowItWorks component
    await page.goto('/');
  });

  test('should render the main section and header correctly', async ({
    page,
  }) => {
    // Check if main section exists
    const section = await page.getByTestId('how-it-works-section');
    await expect(section).toBeVisible();

    // Verify header content
    const title = await page.getByTestId('how-it-works-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('How It Works');

    const subtitle = await page.getByTestId('how-it-works-subtitle');
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toHaveText(
      'Experience fashion advice like never before with our easy-to-use AI (chat) app'
    );
  });

  test('should render all four steps with correct content', async ({
    page,
  }) => {
    const expectedSteps = [
      {
        title: 'Start a Chat',
        description:
          'Begin your fashion journey by starting a conversation with our AI assistant.',
      },
      {
        title: 'Describe Your Needs',
        description:
          'Tell us about your style preferences, body type, or specific fashion questions.',
      },
      {
        title: 'Receive Personalized Advice',
        description:
          'Get tailored recommendations and styling tips based on your input.',
      },
      {
        title: 'Refine Your Style',
        description:
          'Iterate and explore different options to perfect your fashion choices.',
      },
    ];

    // Test each step
    for (let i = 0; i < expectedSteps.length; i++) {
      const step = await page.getByTestId(`step-${i}`);
      await expect(step).toBeVisible();

      // Check step title
      const title = await page.getByTestId(`step-title-${i}`);
      await expect(title).toBeVisible();
      await expect(title).toHaveText(expectedSteps[i].title);

      // Check step description
      const description = await page.getByTestId(`step-description-${i}`);
      await expect(description).toBeVisible();
      await expect(description).toHaveText(expectedSteps[i].description);

      // Verify icon container exists
      const iconContainer = await page.getByTestId(`step-icon-${i}`);
      await expect(iconContainer).toBeVisible();
    }
  });

  test('should have correct layout structure', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1024, height: 800 });

    // Verify steps container
    const stepsContainer = await page.getByTestId('how-it-works-steps');
    await expect(stepsContainer).toBeVisible();

    // Add debug logging to see what's being rendered
    const debugElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('[data-testid^="step-"]');
      return Array.from(elements).map((el) => ({
        testId: el.getAttribute('data-testid'),
        tagName: el.tagName,
        className: el.className,
      }));
    });
    console.log('Debug elements:', debugElements);

    // Check if all main step containers are present
    const mainSteps = await page.locator('.relative.mb-16.flex.items-start');
    await expect(mainSteps).toHaveCount(4);

    // Alternative approach using parent of title elements
    const stepsByTitle = await page
      .locator('[data-testid^="step-title-"]')
      .all();
    await expect(stepsByTitle).toHaveLength(4);

    // Find the timeline element using aria-hidden attribute
    const timeline = await page.locator('[aria-hidden="true"]');
    await expect(timeline).toBeVisible();

    // Verify timeline has correct classes
    const hasCorrectClasses = await timeline.evaluate((el) => {
      return (
        el.classList.contains('absolute') &&
        el.classList.contains('left-1/2') &&
        el.classList.contains('hidden') &&
        el.classList.contains('md:block') &&
        el.classList.contains('bg-zinc-200')
      );
    });
    expect(hasCorrectClasses).toBeTruthy();
  });

  test('should maintain responsive design classes', async ({ page }) => {
    // Test mobile layout (timeline should be hidden)
    await page.setViewportSize({ width: 375, height: 800 });
    const timeline = await page.locator('[aria-hidden="true"]');

    const isMobileHidden = await timeline.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.display === 'none';
    });
    expect(isMobileHidden).toBeTruthy();

    // Test desktop layout (timeline should be visible)
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.waitForTimeout(100); // Small wait for CSS transitions

    const isDesktopVisible = await timeline.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.display === 'block';
    });
    expect(isDesktopVisible).toBeTruthy();
  });
});
