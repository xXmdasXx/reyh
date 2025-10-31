// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// مسیرهای عمومی که نیاز به احراز هویت ندارند
const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/aboutus',
  '/artists',
  '/products',
  '/subscriptions',
  '/cart',
]

// مسیرهای خصوصی که نیاز به احراز هویت دارند
const privateRoutes = [
  '/dashboard',
  '/account',
  '/profile',
  '/mytracks',
  '/purchases',
  '/subscription',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // دریافت توکن از کوکی
  const token = request.cookies.get('token')?.value
  
  // چک کردن آیا مسیر فعلی خصوصی است
  const isPrivateRoute = privateRoutes.some(route => pathname.startsWith(route))
  const isPublicRoute = publicRoutes.includes(pathname)
  
  // اگر کاربر لاگین نیست و می‌خواهد به مسیر خصوصی برود
  if (isPrivateRoute && !token) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('redirect', pathname) // ذخیره مسیر برای بازگشت بعد از لاگین
    return NextResponse.redirect(url)
  }
  
  // اگر کاربر لاگین است و می‌خواهد به صفحه لاگین/رجیستر برود
  if ((pathname === '/login' || pathname === '/register') && token) {
    const url = request.nextUrl.clone()
    url.pathname = '/account'
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

// تنظیم مسیرهایی که Middleware روی آنها اجرا می‌شود
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)',
  ],
}
