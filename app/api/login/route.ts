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
const maxAge = 60 * 60 * 24 * 30;
  const html = `<!DOCTYPE html><html><head><script>document.cookie = "${COOKIE_NAME}=${COOKIE_VALUE}; path=/; max-age=${maxAge}; SameSite=Lax; Secure"; location.replace(${JSON.stringify(redirectTo)});</script></head><body>Logging in...</body></html>`;
  return new NextResponse(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  });
}

const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('error', '1');
    return NextResponse.redirect(loginUrl, 303);
}
