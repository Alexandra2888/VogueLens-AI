import { z } from 'zod';
import { NextResponse } from 'next/server';

// ── Input length caps ────────────────────────────────────────────────────────
export const MAX_PROMPT_LENGTH = 2000;
export const MAX_NOTES_LENGTH = 500;
export const MAX_BRAND_LENGTH = 100;
export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
];

// ── Text sanitization ────────────────────────────────────────────────────────
// Strips HTML tags, <script> blocks, javascript: URIs, and inline event handlers.
// React already escapes output in JSX, but we sanitize on ingress so injected
// payloads never reach the LLM system prompt or the database.
export function sanitizeText(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript\s*:/gi, '')
    .replace(/\bon\w+\s*=/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

// ── URL validation (prevent SSRF) ────────────────────────────────────────────
// Only allows HTTPS URLs pointing to public, non-private-IP hosts.
export function isPublicHttpsUrl(raw: string): boolean {
  try {
    const { protocol, hostname } = new URL(raw);
    if (protocol !== 'https:') return false;
    // Block localhost and RFC-1918 private ranges
    if (
      hostname === 'localhost' ||
      hostname === '::1' ||
      /^127\./.test(hostname) ||
      /^10\./.test(hostname) ||
      /^192\.168\./.test(hostname) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(hostname)
    )
      return false;
    return true;
  } catch {
    return false;
  }
}

// ── Zod request schemas ──────────────────────────────────────────────────────
export const chatSchema = z.object({
  prompt: z.string().min(1, 'Prompt required').max(MAX_PROMPT_LENGTH),
  imageAnalysis: z.string().max(2000).nullable().optional(),
  generateImage: z.boolean().optional(),
});

export const wardrobePostSchema = z.object({
  imageUrl: z
    .string()
    .url()
    .max(500)
    .refine(isPublicHttpsUrl, {
      message: 'imageUrl must be a public HTTPS URL',
    }),
  brand: z.string().max(MAX_BRAND_LENGTH).nullable().optional(),
  notes: z.string().max(MAX_NOTES_LENGTH).nullable().optional(),
});

export type ChatInput = z.infer<typeof chatSchema>;
export type WardrobePostInput = z.infer<typeof wardrobePostSchema>;

// ── Rate-limit helper ────────────────────────────────────────────────────────
export function rateLimitExceeded() {
  return NextResponse.json(
    { error: 'Too many requests. Please slow down.' },
    { status: 429, headers: { 'Retry-After': '60' } }
  );
}

// ── Standard error responses (no internal details leaked) ───────────────────
export function unauthorizedResponse() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

export function badRequestResponse(message = 'Invalid request') {
  return NextResponse.json({ error: message }, { status: 400 });
}

export function internalErrorResponse() {
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
}
