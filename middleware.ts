import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/chat(.*)', '/wardrobe(.*)']);

// Skip auth checks entirely during tests
const isTestEnvironment = process.env.NODE_ENV === 'test';

export default clerkMiddleware((auth, req) => {
  if (isTestEnvironment) return;

  if (isProtectedRoute(req)) {
    return auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/(api|trpc)(.*)"
  ],
};