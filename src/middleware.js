import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: "amarnampaasalibakkotogalaggotogka"});
  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (token.role === "admin" && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: ["/admin/:path*", "/dashboard/:path*"],
  matcher: ["/admin/:path*"],
};
