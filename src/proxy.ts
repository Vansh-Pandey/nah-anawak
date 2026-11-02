import { NextResponse, type NextRequest } from "next/server";

/**
 * English is served at the site root, Japanese under /ja.
 * Internally every page lives under /[lang], so root URLs are rewritten to /en/...
 * and a visible /en/... URL is redirected back to the clean address.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  if (pathname === "/ja" || pathname.startsWith("/ja/")) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // skip Next internals and anything with a file extension (images, videos, PDFs, favicon)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
