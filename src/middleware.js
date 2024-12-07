
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: "amarnampaasalibakkotogalaggotogka"});
  const { pathname } = req.nextUrl;

  if (!token && url.pathname.startsWith("/admin")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }


  if (token && token.role === "admin" && url.pathname === "/admin") {
    return NextResponse.next();
  }


  if (token && url.pathname.startsWith("/admin") && token.role !== "admin") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], 
};
