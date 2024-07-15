import { NextResponse, type NextRequest } from 'next/server'
import { auth } from '../auth';

export async function middleware(request: NextRequest) {
  const session = await auth();

  if (session && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  if (session && !request.nextUrl.pathname.startsWith('/')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

// export { auth as middleware } from "../auth"

// export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// }