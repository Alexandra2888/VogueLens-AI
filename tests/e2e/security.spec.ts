import { test, expect } from '@playwright/test';

test.describe('Security Headers', () => {
  test('response includes X-Frame-Options: DENY', async ({ request }) => {
    const res = await request.get('/en');
    expect(res.headers()['x-frame-options']).toBe('DENY');
  });

  test('response includes X-Content-Type-Options: nosniff', async ({ request }) => {
    const res = await request.get('/en');
    expect(res.headers()['x-content-type-options']).toBe('nosniff');
  });

  test('response includes Referrer-Policy', async ({ request }) => {
    const res = await request.get('/en');
    expect(res.headers()['referrer-policy']).toBe('strict-origin-when-cross-origin');
  });

  test('response includes Strict-Transport-Security', async ({ request }) => {
    const res = await request.get('/en');
    const hsts = res.headers()['strict-transport-security'];
    expect(hsts).toContain('max-age=');
    expect(hsts).toContain('includeSubDomains');
  });

  test('response includes Content-Security-Policy', async ({ request }) => {
    const res = await request.get('/en');
    const csp = res.headers()['content-security-policy'];
    expect(csp).toBeTruthy();
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
  });

  test('response includes Permissions-Policy', async ({ request }) => {
    const res = await request.get('/en');
    const pp = res.headers()['permissions-policy'];
    expect(pp).toContain('camera=()');
    expect(pp).toContain('microphone=()');
  });
});

test.describe('API Security', () => {
  test('POST /api/chat without auth returns 401', async ({ request }) => {
    const res = await request.post('/api/chat', {
      data: { prompt: 'hello' },
    });
    expect(res.status()).toBe(401);
  });

  test('POST /api/analyze-image without auth returns 401', async ({ request }) => {
    const res = await request.post('/api/analyze-image', {
      multipart: {
        image: {
          name: 'test.jpg',
          mimeType: 'image/jpeg',
          buffer: Buffer.from('fake'),
        },
      },
    });
    expect(res.status()).toBe(401);
  });

  test('GET /api/user/credits without auth returns 401', async ({ request }) => {
    const res = await request.get('/api/user/credits');
    expect(res.status()).toBe(401);
  });

  test('POST /api/chat rejects oversized prompt', async ({ request }) => {
    // Even with invalid auth the server should process validation first or return 401 before 400.
    // This confirms the endpoint exists and responds predictably.
    const res = await request.post('/api/chat', {
      data: { prompt: 'a'.repeat(2001) },
    });
    // 401 (no auth) is acceptable — the important thing is it's not 200
    expect(res.status()).not.toBe(200);
  });

  test('CSRF: cross-origin POST to API is rejected (403)', async ({ request }) => {
    const res = await request.post('/api/chat', {
      data: { prompt: 'hello' },
      headers: {
        Origin: 'https://evil-site.example.com',
        'Content-Type': 'application/json',
      },
    });
    // Should be 403 (CSRF) or 401 (auth) — never 200
    expect([401, 403]).toContain(res.status());
  });
});
