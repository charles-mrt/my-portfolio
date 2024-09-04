import { NextRequest, NextResponse } from 'next/server'
import { isSessionValid } from './app/services/user'

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}

const publicRoutes = ['/', '/login']
const privateRoutesForLoggedIn = ['/login', '/dashboard']

export async function middleware(req: NextRequest) {
  const session = await isSessionValid()
  const pathname = req.nextUrl.pathname

  if (publicRoutes.includes(pathname)) {
    if (!session) return NextResponse.next()
  }

  
  if (privateRoutesForLoggedIn.includes(pathname)) {
    if (session) return NextResponse.redirect(new URL('/', req.url))
  }

  // Check if the user is logged in for non-public routes
  if (!session) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}