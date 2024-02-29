import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CMS_COOKIE_TOKEN } from "@/constants";

export default authMiddleware({
  afterAuth(auth, req) {
    const cookieData:any = cookies().get(CMS_COOKIE_TOKEN);
    const cookieToken = cookieData.value;

    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    if (auth.userId && cookieToken) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  publicRoutes: [
    '/', 
    '/home', 
    '/login',
    '/signup',
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
