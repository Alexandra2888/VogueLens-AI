import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

function makeRedis() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

const redis = makeRedis();

function makeLimiter(requests: number, window: string) {
  if (!redis) return null;
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(requests, window as `${number} ${'ms' | 's' | 'm' | 'h' | 'd'}`),
    analytics: true,
  });
}

// IP-level DDoS guard: 60 req/min per IP across all API routes
export const apiRatelimit = makeLimiter(60, '60 s');

// Per-user limits for expensive routes
export const chatRatelimit = makeLimiter(20, '60 s');
export const imageRatelimit = makeLimiter(10, '60 s');
export const creditsRatelimit = makeLimiter(30, '60 s');
export const wardrobeRatelimit = makeLimiter(15, '60 s');
