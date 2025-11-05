import { type NextRequest, NextResponse } from "next/server";
import { SUPPORTED_LANGUAGES } from "@/features/i18n/consts";
import { getDisplayLanguage } from "@/features/i18n/helpers/get-display-language";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLanguage = SUPPORTED_LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) return;

  const displayLanguage = getDisplayLanguage(request.headers);
  request.nextUrl.pathname = `/${displayLanguage}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
