import {
  sanitizeText,
  isPublicHttpsUrl,
  chatSchema,
  wardrobePostSchema,
} from '@/lib/security';

// ── sanitizeText ─────────────────────────────────────────────────────────────

describe('sanitizeText', () => {
  it('strips <script> tags and their content', () => {
    expect(sanitizeText('<script>alert("xss")</script>hello')).toBe('hello');
    expect(sanitizeText('<script src="evil.js"></script>')).toBe('');
  });

  it('strips multi-line <script> blocks', () => {
    const input = '<script>\nconst x = 1;\n</script>clean text';
    expect(sanitizeText(input)).toBe('clean text');
  });

  it('strips javascript: URIs', () => {
    expect(sanitizeText('javascript:alert(1)')).toBe('alert(1)');
    expect(sanitizeText('JAVASCRIPT:void(0)')).toBe('void(0)');
    expect(sanitizeText('javascript : alert(1)')).toBe('alert(1)');
  });

  it('strips inline event handlers', () => {
    expect(sanitizeText('<img onload=alert(1)>')).toBe('');
    expect(sanitizeText('<div onclick="evil()">text</div>')).toBe('text');
    expect(sanitizeText('onerror=bad')).toBe('bad');
  });

  it('strips arbitrary HTML tags', () => {
    expect(sanitizeText('<b>bold</b>')).toBe('bold');
    expect(sanitizeText('<a href="x">link</a>')).toBe('link');
    expect(sanitizeText('<img src="x"/>')).toBe('');
  });

  it('preserves plain text unchanged', () => {
    expect(sanitizeText('What should I wear today?')).toBe(
      'What should I wear today?'
    );
    expect(sanitizeText('red dress for a party')).toBe('red dress for a party');
  });

  it('trims leading/trailing whitespace', () => {
    expect(sanitizeText('  hello  ')).toBe('hello');
  });

  it('handles empty string', () => {
    expect(sanitizeText('')).toBe('');
  });
});

// ── isPublicHttpsUrl ──────────────────────────────────────────────────────────

describe('isPublicHttpsUrl', () => {
  it('accepts valid public HTTPS URLs', () => {
    expect(
      isPublicHttpsUrl('https://res.cloudinary.com/example/image.jpg')
    ).toBe(true);
    expect(isPublicHttpsUrl('https://example.com/path')).toBe(true);
  });

  it('rejects HTTP URLs', () => {
    expect(isPublicHttpsUrl('http://example.com/image.jpg')).toBe(false);
  });

  it('rejects localhost', () => {
    expect(isPublicHttpsUrl('https://localhost/evil')).toBe(false);
    expect(isPublicHttpsUrl('https://localhost:3000/api')).toBe(false);
  });

  it('rejects 127.x.x.x addresses (loopback)', () => {
    expect(isPublicHttpsUrl('https://127.0.0.1/internal')).toBe(false);
    expect(isPublicHttpsUrl('https://127.1.2.3/')).toBe(false);
  });

  it('rejects RFC-1918 private ranges (SSRF prevention)', () => {
    expect(isPublicHttpsUrl('https://10.0.0.1/secret')).toBe(false);
    expect(isPublicHttpsUrl('https://192.168.1.100/')).toBe(false);
    expect(isPublicHttpsUrl('https://172.16.0.1/')).toBe(false);
    expect(isPublicHttpsUrl('https://172.31.255.255/')).toBe(false);
  });

  it('allows 172.x outside the private range', () => {
    expect(isPublicHttpsUrl('https://172.15.0.1/')).toBe(true);
    expect(isPublicHttpsUrl('https://172.32.0.1/')).toBe(true);
  });

  it('rejects malformed/non-URLs', () => {
    expect(isPublicHttpsUrl('not-a-url')).toBe(false);
    expect(isPublicHttpsUrl('')).toBe(false);
    expect(isPublicHttpsUrl('ftp://example.com')).toBe(false);
  });
});

// ── chatSchema ────────────────────────────────────────────────────────────────

describe('chatSchema', () => {
  it('accepts a valid text prompt', () => {
    const result = chatSchema.safeParse({ prompt: 'What should I wear?' });
    expect(result.success).toBe(true);
  });

  it('accepts generateImage flag', () => {
    const result = chatSchema.safeParse({
      prompt: 'red dress',
      generateImage: true,
    });
    expect(result.success).toBe(true);
  });

  it('accepts optional imageAnalysis', () => {
    const result = chatSchema.safeParse({
      prompt: 'advise me',
      imageAnalysis: 'I can see a blue top',
    });
    expect(result.success).toBe(true);
  });

  it('rejects empty prompt', () => {
    const result = chatSchema.safeParse({ prompt: '' });
    expect(result.success).toBe(false);
  });

  it('rejects prompt exceeding 2000 characters', () => {
    const result = chatSchema.safeParse({ prompt: 'a'.repeat(2001) });
    expect(result.success).toBe(false);
  });

  it('accepts prompt at exactly 2000 characters', () => {
    const result = chatSchema.safeParse({ prompt: 'a'.repeat(2000) });
    expect(result.success).toBe(true);
  });

  it('rejects missing prompt', () => {
    const result = chatSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});

// ── wardrobePostSchema ────────────────────────────────────────────────────────

describe('wardrobePostSchema', () => {
  it('accepts a valid cloudinary HTTPS imageUrl', () => {
    const result = wardrobePostSchema.safeParse({
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    });
    expect(result.success).toBe(true);
  });

  it('accepts optional brand and notes', () => {
    const result = wardrobePostSchema.safeParse({
      imageUrl: 'https://example.com/img.jpg',
      brand: 'Zara',
      notes: 'summer collection',
    });
    expect(result.success).toBe(true);
  });

  it('rejects HTTP imageUrl (SSRF/mixed content risk)', () => {
    const result = wardrobePostSchema.safeParse({
      imageUrl: 'http://example.com/img.jpg',
    });
    expect(result.success).toBe(false);
  });

  it('rejects localhost imageUrl', () => {
    const result = wardrobePostSchema.safeParse({
      imageUrl: 'https://localhost/internal.jpg',
    });
    expect(result.success).toBe(false);
  });

  it('rejects brand exceeding 100 characters', () => {
    const result = wardrobePostSchema.safeParse({
      imageUrl: 'https://example.com/img.jpg',
      brand: 'B'.repeat(101),
    });
    expect(result.success).toBe(false);
  });

  it('rejects notes exceeding 500 characters', () => {
    const result = wardrobePostSchema.safeParse({
      imageUrl: 'https://example.com/img.jpg',
      notes: 'n'.repeat(501),
    });
    expect(result.success).toBe(false);
  });

  it('rejects missing imageUrl', () => {
    const result = wardrobePostSchema.safeParse({ brand: 'Nike' });
    expect(result.success).toBe(false);
  });
});
