import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['en', 'ar'] as const;

/** Redirect / to /en, set x-locale header for locale-aware layouts, exclude api/admin */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];
  const locale = LOCALES.includes(maybeLocale as (typeof LOCALES)[number]) ? maybeLocale : 'en';

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-next-locale', locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - api
     * - admin
     * - _next
     * - _vercel
     * - static files (containing a dot)
     */
    '/((?!api|admin|_next|_vercel|.*\\..*).*)',
  ],
};
