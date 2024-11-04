import {
  clerkMiddleware,
  createRouteMatcher,
  ClerkMiddlewareAuth,
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/chat(.*)', '/wardrobe(.*)']);

const isTestEnvironment = process.env.NODE_ENV === 'test';

export default clerkMiddleware(
  async (auth: ClerkMiddlewareAuth, req: NextRequest) => {
    try {
      if (isTestEnvironment) {
        return NextResponse.next();
      }

      if (isProtectedRoute(req)) {
        const session = await auth.protect();
        if (!session) {
          return NextResponse.redirect(new URL('/sign-in', req.url));
        }
        return NextResponse.next();
      }

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }
  }
);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/(api|trpc)(.*)'],
};
