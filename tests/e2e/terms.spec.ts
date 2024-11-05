import { test, expect } from '@playwright/test';

test.describe('Terms and Conditions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/terms');
  });

  test('should render the page title and dates', async ({ page }) => {
    // Check title
    const title = page.getByTestId('terms-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Terms and Conditions for VogueStyle AI');

    // Check dates
    const lastModified = page.getByTestId('last-modified');
    const lastUpdated = page.getByTestId('last-updated');
    await expect(lastModified).toBeVisible();
    await expect(lastUpdated).toBeVisible();
    await expect(lastModified).toContainText('5/11/2024');
    await expect(lastUpdated).toContainText('5/11/2024');
  });

  test('should expand and collapse sections when clicked', async ({ page }) => {
    // Test first section
    const firstSectionToggle = page.getByTestId('section-toggle-0');
    const firstSectionContent = page.getByTestId('section-content-0');

    // Initially content should not be visible
    await expect(firstSectionContent).not.toBeVisible();

    // Click to expand
    await firstSectionToggle.click();
    await expect(firstSectionContent).toBeVisible();

    // Click to collapse
    await firstSectionToggle.click();
    await expect(firstSectionContent).not.toBeVisible();
  });

  test('should show correct content for each section', async ({ page }) => {
    // Test multiple sections
    for (let i = 0; i < 3; i++) {
      // Testing first 3 sections as example
      const sectionToggle = page.getByTestId(`section-toggle-${i}`);
      const sectionTitle = page.getByTestId(`section-title-${i}`);

      await sectionToggle.click();
      const sectionContent = page.getByTestId(`section-content-${i}`);

      await expect(sectionContent).toBeVisible();

      // Verify content is not empty
      const contentText = await sectionContent.textContent();
      expect(contentText?.length).toBeGreaterThan(0);
    }
  });

  test('should allow multiple sections to be open simultaneously', async ({
    page,
  }) => {
    // Open first two sections
    await page.getByTestId('section-toggle-0').click();
    await page.getByTestId('section-toggle-1').click();

    // Verify both sections are visible
    await expect(page.getByTestId('section-content-0')).toBeVisible();
    await expect(page.getByTestId('section-content-1')).toBeVisible();
  });

});
