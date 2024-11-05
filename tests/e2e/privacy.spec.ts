import { test, expect } from '@playwright/test';

test.describe('Privacy Policy Page', () => {
  test.beforeEach(async ({ page }) => {
    // Assuming your privacy policy is at the root level
    await page.goto('/privacy');
    // Add a small delay to ensure components are mounted
    await page.waitForLoadState('domcontentloaded');
  });

  test('should display the privacy policy title and version', async ({ page }) => {
    // Wait for the content to be visible
    await page.waitForSelector('[data-testid="privacy-policy-title"]');

    const titleText = await page.textContent('[data-testid="privacy-policy-title"]');
    expect(titleText).toBe('Privacy Policy');

    const versionText = await page.textContent('[data-testid="privacy-policy-version"]');
    expect(versionText).toContain('Version 1.0');
  });

  test('should display introduction and scope text', async ({ page }) => {
    await page.waitForSelector('[data-testid="privacy-policy-intro"]');
    await page.waitForSelector('[data-testid="privacy-policy-scope"]');

    const introText = await page.textContent('[data-testid="privacy-policy-intro"]');
    expect(introText).toContain('VogueLens AI collects and processes data');

    const scopeText = await page.textContent('[data-testid="privacy-policy-scope"]');
    expect(scopeText).toContain('This document is relevant to you');
  });

  test('should interact with accordion sections', async ({ page }) => {
    // Wait for accordion to be present
    await page.waitForSelector('[data-testid="privacy-policy-accordion"]');

    // Test Personal Data section
    const personalDataSection = '[data-testid="personal-data-section"]';
    await page.waitForSelector(personalDataSection);

    // Click the Personal Data trigger
    await page.click(`${personalDataSection} button`);
    // Wait for animation
    await page.waitForTimeout(300);

    // Verify content is visible
    const personalDataContent = await page.textContent(personalDataSection);
    expect(personalDataContent).toContain('VogueLens AI confirms that it does NOT collect personal data');

    // Test Service Data section
    const serviceDataSection = '[data-testid="service-data-section"]';
    await page.waitForSelector(serviceDataSection);

    // Click the Service Data trigger
    await page.click(`${serviceDataSection} button`);
    // Wait for animation
    await page.waitForTimeout(300);

    // Verify content is visible
    const serviceDataContent = await page.textContent(serviceDataSection);
    expect(serviceDataContent).toContain('VogueLens AI collects and processes data');

    // Verify JSON example is visible
    await page.waitForSelector('[data-testid="json-example"]');
    const jsonContent = await page.textContent('[data-testid="json-example"]');
    expect(jsonContent).toContain('uuid');
  });

  test('should verify accordion collapse functionality', async ({ page }) => {
    await page.waitForSelector('[data-testid="personal-data-section"]');

    // Click to open
    await page.click('[data-testid="personal-data-section"] button');
    await page.waitForTimeout(300); // Wait for animation

    // Verify content is visible
    const isVisible = await page.isVisible('[data-testid="personal-data-section"] [role="region"]');
    expect(isVisible).toBeTruthy();

    // Click to close
    await page.click('[data-testid="personal-data-section"] button');
    await page.waitForTimeout(300); // Wait for animation

    // Verify content is hidden
    const isHidden = await page.isHidden('[data-testid="personal-data-section"] [role="region"]');
    expect(isHidden).toBeTruthy();
  });

  test('should display contact information', async ({ page }) => {
    await page.waitForSelector('[data-testid="contact-info"]');

    const contactText = await page.textContent('[data-testid="contact-info"]');
    expect(contactText).toContain('moldovan.alexandra28@gmail.com');
  });

  test('should be responsive', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Wait for container to be visible
    await page.waitForSelector('[data-testid="privacy-policy-container"]');

    // Verify key elements are visible
    const isTitleVisible = await page.isVisible('[data-testid="privacy-policy-title"]');
    expect(isTitleVisible).toBeTruthy();

    // Verify accordion is usable on mobile
    await page.click('[data-testid="personal-data-section"] button');
    await page.waitForTimeout(300);

    const isAccordionContentVisible = await page.isVisible('[data-testid="personal-data-section"] [role="region"]');
    expect(isAccordionContentVisible).toBeTruthy();
  });
});