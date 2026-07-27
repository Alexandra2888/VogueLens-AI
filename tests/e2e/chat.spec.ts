import { test, expect } from '@playwright/test';

// Chat page requires NEXT_PUBLIC_CLERK_BYPASS_AUTH=true on the dev server.
// When running `npx playwright test` without an existing server, playwright starts
// one with the bypass enabled via webServer.env in playwright.config.ts.
// If reusing an existing dev server, add NEXT_PUBLIC_CLERK_BYPASS_AUTH=true to .env.local
// and restart it.
//
// The chat UI is driven entirely by /api/user/credits and /api/conversations.
// Those are stubbed below so the page renders the same way on every machine:
// against a live backend the assertions depend on the signed-in user's credit
// balance and stored conversations, which differ per environment.

test.describe('Chat Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/user/credits', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ credits: 100, earlyAccess: true }),
      })
    );

    // Start from an empty history so the component opens a fresh conversation
    // and renders the greeting.
    await page.route('**/api/conversations', (route) => {
      if (route.request().method() === 'POST') {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ conversation: { id: 'e2e-conversation-1' } }),
        });
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ conversations: [] }),
      });
    });

    await page.route('**/api/conversations/*/messages', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          message: { id: 'e2e-message-1' },
          messages: [],
        }),
      })
    );

    await page.goto('/en/chat', { waitUntil: 'domcontentloaded' });
    // Skip if redirected to sign-in (auth not bypassed on this server)
    if (page.url().includes('sign-in')) {
      test.skip();
    }
  });

  test('shows initial greeting message', async ({ page }) => {
    await expect(page.getByText('Hi! How can I help you today?')).toBeVisible({
      timeout: 10000,
    });
  });

  test('sidebar heading is visible', async ({ page }) => {
    await expect(page.getByText('LATEST FASHION CHATS')).toBeVisible();
  });

  test('New Fashion Chat button is present', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: /New Fashion Chat/i })
    ).toBeVisible();
  });

  test('input field is present and enabled', async ({ page }) => {
    const input = page.getByPlaceholder(/Ask for fashion advice/i);
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
  });

  test('send button is disabled when input is empty', async ({ page }) => {
    await expect(page.locator('button[disabled]').first()).toBeVisible();
  });

  test('typing in input enables send button', async ({ page }) => {
    const input = page.getByPlaceholder(/Ask for fashion advice/i);
    await expect(input).toBeEnabled();
    await input.fill('What should I wear?');
    const enabledBtn = page.locator(
      'div.flex.items-center.space-x-2 button:not([disabled])'
    );
    await expect(enabledBtn.first()).toBeVisible();
  });

  test('chat card fills most of the viewport height', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const chatCard = page.locator('.rounded-xl.border.border-border').first();
    await expect(chatCard).toBeVisible();
    const box = await chatCard.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.height).toBeGreaterThan(400);
  });
});
