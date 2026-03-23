// Simple in-memory sliding-window rate limiter.
// Resets on server restart; not shared across multiple instances.
// Good enough for a single-server / serverless-with-warm-instances setup.

const store = new Map<string, number[]>();

function rateLimit(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const timestamps = (store.get(key) ?? []).filter((t) => now - t < windowMs);
  if (timestamps.length >= maxRequests) {
    store.set(key, timestamps);
    return false; // blocked
  }
  timestamps.push(now);
  store.set(key, timestamps);
  return true; // allowed
}

// 120 requests / min per IP — broad DDoS guard for expensive routes
export const ipLimit = (ip: string) => rateLimit(`ip:${ip}`, 120, 60_000);

// Per-user limits for expensive routes
export const chatLimit = (userId: string) => rateLimit(`chat:${userId}`, 30, 60_000);
export const imageLimit = (userId: string) => rateLimit(`image:${userId}`, 10, 60_000);
export const creditsLimit = (userId: string) => rateLimit(`credits:${userId}`, 60, 60_000);
export const wardrobeLimit = (userId: string) => rateLimit(`wardrobe:${userId}`, 30, 60_000);

// Legacy exports kept so existing imports don't break (all return null → disabled)
export const apiRatelimit = null;
export const chatRatelimit = null;
export const imageRatelimit = null;
export const creditsRatelimit = null;
export const wardrobeRatelimit = null;
