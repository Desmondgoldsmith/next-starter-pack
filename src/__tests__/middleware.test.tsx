import { NextResponse } from 'next/server';
import { middleware } from '@/middleware';

// src/middleware.test.ts

jest.mock('next/server', () => ({
  NextResponse: {
    next: jest.fn(() => ({
      headers: {
        set: jest.fn(),
      },
    })),
  },
}));

describe('middleware', () => {
  it('should set the correct headers', () => {
    const response = middleware();

    expect(NextResponse.next).toHaveBeenCalled();

    expect(response.headers.set).toHaveBeenCalledWith('X-Frame-Options', 'DENY');
    expect(response.headers.set).toHaveBeenCalledWith('X-Content-Type-Options', 'nosniff');
    expect(response.headers.set).toHaveBeenCalledWith(
      'Referrer-Policy',
      'origin-when-cross-origin'
    );
    expect(response.headers.set).toHaveBeenCalledWith(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'"
    );
  });
});
