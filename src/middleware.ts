import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '../auth';

export async function middleware(request: NextRequest) {
  const session = await auth();

  const unapprovedPaths = ['/dashboard', '/dashboard/kyc-details'];

  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (session) {
    const isApproved = session.user.isApproved === 'YES';
    const isUnapprovedPath = unapprovedPaths.includes(request.nextUrl.pathname);

    if (!isApproved && !isUnapprovedPath) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};


