import { test, expect } from '@playwright/test';

test.describe('Hero Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should render all images correctly', async ({ page }) => {
    // First, wait for the main image to be visible
    const mainImage = page.locator('img[alt="Fashion model 1"]');
    await expect(mainImage).toBeVisible();

    // Wait for the loading state to complete and animated images to appear
    // We can do this by waiting for all images to be present
    await page.waitForSelector('img[alt="Fashion model 2"]');
    await page.waitForSelector('img[alt="Fashion model 3"]');

    // Now check if all images are present
    const images = await page.locator('img').all();
    expect(images.length).toBe(3);

    // Verify each image's attributes and visibility
    // @ts-ignore
    for (const [index, expectedImage] of HERO_IMAGES.entries()) {
      const image = page.locator(`img[alt="${expectedImage.alt}"]`);
      await expect(image).toBeVisible();

      // Get the actual src attribute and verify it contains the expected filename
      const srcAttribute = await image.getAttribute('src');
      expect(srcAttribute).toContain(expectedImage.src.split('/').pop());
    }
  });

  test('should render buttons with correct text', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Try Now' })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Learn More' })
    ).toBeVisible();
  });
});

// Add the image data for verification
const HERO_IMAGES = [
  {
    src: 'https://res.cloudinary.com/dblgunawk/image/upload/v1732728818/img3_cimgii_i3epvq.avif',
    alt: 'Fashion model 1',
  },
  {
    src: 'https://res.cloudinary.com/dblgunawk/image/upload/v1732728818/img2_s6uhka_xrf4nx.avif',
    alt: 'Fashion model 2',
  },
  {
    src: 'https://res.cloudinary.com/dblgunawk/image/upload/v1732728817/img1_rz1swm_l2gq9j.avif',
    alt: 'Fashion model 3',
  },
];
