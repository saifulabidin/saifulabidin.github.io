import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/routing';
import { auth } from './auth';

const intlMiddleware = createMiddleware(routing);

export default auth((req) => {
  return intlMiddleware(req);
});

export const config = {
  matcher: [
    // Exclude API routes, static assets, internal paths, and static micro-apps
    '/((?!api|_next|_vercel|frontend-project|.*\\..*).*)',
    // Root path
    '/',
    // Match internationalized paths
    '/(en|id)/:path*',
  ],
};
