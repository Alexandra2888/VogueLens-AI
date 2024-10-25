import { test, expect } from '@playwright/test';

test.describe('Hero Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the Hero component is rendered
    await page.goto('http://localhost:3000');
  });

  test('should render all images', async ({ page }) => {
    // Check if all images are rendered
    const images = await page.locator('img');
    await expect(images).toHaveCount(3);

    // Check if each image is rendered with correct src and alt attributes
    const image1 = page.locator('img[alt="Fashion model 1"]');
    await expect(image1).toBeVisible();
    await expect(image1).toHaveAttribute('src', /img1_rz1swm.avif/);

    const image2 = page.locator('img[alt="Fashion model 2"]');
    await expect(image2).toBeVisible();
    await expect(image2).toHaveAttribute('src', /img3_cimgii.avif/);

    const image3 = page.locator('img[alt="Fashion model 3"]');
    await expect(image3).toBeVisible();
    await expect(image3).toHaveAttribute('src', /img2_s6uhka.avif/);
  });
});
