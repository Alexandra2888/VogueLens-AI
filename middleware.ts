import createMiddleware from 'next-intl/middleware';
import {
  clerkMiddleware,
  createRouteMatcher,
  ClerkMiddlewareAuth,
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './src/i18n/routing';
import { apiRatelimit } from './src/lib/rate-limit';

const handleI18nRouting = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher([
  '/:locale/chat(.*)',
  '/:locale/wardrobe(.*)',
  '/:locale/profile(.*)',
]);

const MUTATING_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

const isTestEnvironment =
  process.env.NODE_ENV === 'test' ||
  process.env.NEXT_PUBLIC_CLERK_BYPASS_AUTH === 'true';

// ── CSRF origin check ────────────────────────────────────────────────────────
// For state-changing API requests, the Origin header must match the host.
// Browsers always send Origin on cross-origin requests; if it's absent the
// request is same-origin (curl/server-to-server), which is fine here because
// all mutating endpoints require a Clerk JWT anyway.
function isCsrfSafe(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return true; // same-origin or non-browser client
  try {
    const originHost = new URL(origin).host;
    const host = req.headers.get('host') ?? '';
    return originHost === host;
  } catch {
    return false;
  }
}

export default clerkMiddleware(
  async (auth: ClerkMiddlewareAuth, req: NextRequest) => {
    const { pathname } = req.nextUrl;

    // ── API route hardening ──────────────────────────────────────────────────
    if (pathname.startsWith('/api/')) {
      // CSRF protection for state-changing requests
      if (MUTATING_METHODS.has(req.method) && !isCsrfSafe(req)) {
        return new NextResponse('Forbidden', { status: 403 });
      }

      // IP-level rate limiting (DDoS / brute-force protection)
      if (apiRatelimit) {
        const ip =
          req.headers.get('x-real-ip') ??
          req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
          'anonymous';
        const { success } = await apiRatelimit.limit(`ip:${ip}`);
        if (!success) {
          return new NextResponse('Too Many Requests', {
            status: 429,
            headers: { 'Retry-After': '60' },
          });
        }
      }

      return NextResponse.next();
    }

    // ── Page route auth ──────────────────────────────────────────────────────
    try {
      if (isTestEnvironment) {
        return handleI18nRouting(req);
      }

      if (isProtectedRoute(req)) {
        await auth.protect();
      }

      return handleI18nRouting(req);
    } catch {
      return NextResponse.redirect(new URL('/en/sign-in', req.url));
    }
  }
);

export const config = {
  // Include /api/* so the rate limiter and CSRF check run there too.
  // Exclude Next.js internals and static assets.
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\..*|sw\\.js|manifest\\.json).*)',
  ],
};
