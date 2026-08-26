import { NextResponse } from 'next/server';

const SITE_PASSWORD = '1981';
const COOKIE_NAME = 'site_auth';
const COOKIE_VALUE = 'granted';

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get('password');
  const from = formData.get('from');

if (password === SITE_PASSWORD) {
  const redirectTo = typeof from === 'string' && from.startsWith('/') ? from : '/';
  const response = NextResponse.redirect(new URL(redirectTo, request.url));
  response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}

const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('error', '1');
  return NextResponse.redirect(loginUrl);
}
