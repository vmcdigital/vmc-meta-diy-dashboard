import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'site_auth';
const COOKIE_VALUE = 'granted';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

const isPublicPath =
  pathname.startsWith('/login') ||
  pathname.startsWith('/api/login') ||
  pathname.startsWith('/_next') ||
  pathname === '/favicon.ico';

if (isPublicPath) {
  return NextResponse.next();
}

const authCookie = request.cookies.get(COOKIE_NAME);

if (authCookie && authCookie.value === COOKIE_VALUE) {
  return NextResponse.next();
}

const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('from', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
