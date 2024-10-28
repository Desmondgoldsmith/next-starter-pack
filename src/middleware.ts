import { NextResponse } from 'next/server';
// import type { NextRequest } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  // Prevents your site from being embedded in iframes
  response.headers.set('X-Frame-Options', 'DENY');

  // Prevents browser from MIME-type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Controls how much referrer information should be sent
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

  // Controls which resources are allowed to be loaded
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'"
  );

  return response;
}
