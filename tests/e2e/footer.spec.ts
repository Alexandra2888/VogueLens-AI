import { test, expect } from '@playwright/test';

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('footer is visible and contains all elements', async ({ page }) => {
    // Check logo
    const footerLogo = page
      .locator('footer')
      .getByRole('link', { name: 'Home' });
    await expect(footerLogo).toBeVisible();

    // Check links
    const links = ['Terms of Service', 'Privacy'];
    for (const link of links) {
      await expect(
        page.locator('footer').getByRole('link', { name: link })
      ).toBeVisible();
    }

    // Check social icons
    const socialLinks = ['Instagram', 'Facebook', 'Twitter'];
    for (const link of socialLinks) {
      await expect(
        page.locator('footer').getByRole('link', { name: link })
      ).toBeVisible();
    }

    // Check copyright text
    const year = new Date().getFullYear().toString();
    await expect(
      page.locator('footer').getByText(`© ${year} VogueLens AI`)
    ).toBeVisible();
  });

  test('footer links are navigable', async ({ page }) => {
    // Click Terms link
    await page
      .locator('footer')
      .getByRole('link', { name: 'Terms of Service' })
      .click();
    await expect(page).toHaveURL('/terms');

    // Go back and click Privacy link
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Privacy' }).click();
    await expect(page).toHaveURL('/privacy');
  });
});
