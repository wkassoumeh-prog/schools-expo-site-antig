import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CITIES, DEFAULT_CITY, DEFAULT_LOCALE, LOCALES, type City, type Locale } from 'content/getCopy';

function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

function isCity(value: string | undefined): value is City {
  return CITIES.includes(value as City);
}

/** Redirect / to /ar/aleppo, /en and /ar to /{locale}/aleppo, set x-locale header */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];
  const maybeCity = segments[1];

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}/${DEFAULT_CITY}`, request.url));
  }

  if (isLocale(maybeLocale) && segments.length === 1) {
    return NextResponse.redirect(new URL(`/${maybeLocale}/${DEFAULT_CITY}`, request.url));
  }

  if (isLocale(maybeLocale) && maybeCity && !isCity(maybeCity)) {
    return NextResponse.redirect(new URL(`/${maybeLocale}/${DEFAULT_CITY}`, request.url));
  }

  const locale: Locale = isLocale(maybeLocale) ? maybeLocale : DEFAULT_LOCALE;

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
