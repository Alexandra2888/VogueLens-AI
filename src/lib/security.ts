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
// NOTE: Hostname-only checks cannot fully prevent DNS rebinding. For
// high-security use cases, resolve the hostname and validate the resolved
// IP before fetching. This blocklist covers known dangerous patterns.

const BLOCKED_HOSTNAMES = new Set([
  'localhost',
  '::1',
  '0.0.0.0',
  'metadata.google.internal',
  'metadata.internal',
]);

const BLOCKED_IP_PATTERNS = [
  /^127\./, // loopback
  /^10\./, // RFC-1918 Class A
  /^192\.168\./, // RFC-1918 Class C
  /^172\.(1[6-9]|2\d|3[01])\./, // RFC-1918 Class B
  /^169\.254\./, // link-local / cloud IMDS
  /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./, // Carrier-Grade NAT (100.64/10)
  /^192\.0\.0\./, // IETF protocol assignments
  /^198\.1[89]\./, // benchmarking (198.18/15)
  /^0\./, // "this" network
  /^22[4-9]\./, // multicast 224-239
  /^2[3-5]\d\./, // multicast / reserved 230-255
];

const BLOCKED_IPV6_PATTERNS = [
  /^fc/i, // unique-local fc00::/7
  /^fd/i, // unique-local fc00::/7
  /^fe[89ab]/i, // link-local fe80::/10
  /^ff/i, // multicast ff00::/8
];

function isBlockedHostname(hostname: string): boolean {
  if (BLOCKED_HOSTNAMES.has(hostname)) return true;

  // IPv4-style hostname
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
    return BLOCKED_IP_PATTERNS.some((re) => re.test(hostname));
  }

  // IPv6 in brackets or raw (URL parser strips brackets)
  const bare = hostname.replace(/^\[|]$/g, '');
  if (bare.includes(':')) {
    return BLOCKED_IPV6_PATTERNS.some((re) => re.test(bare));
  }

  return false;
}

export function isPublicHttpsUrl(raw: string): boolean {
  try {
    const { protocol, hostname } = new URL(raw);
    if (protocol !== 'https:') return false;
    if (isBlockedHostname(hostname)) return false;
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
  imageUrl: z.string().url().max(500).refine(isPublicHttpsUrl, {
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
