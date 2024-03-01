import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CMS_COOKIE_TOKEN } from "@/constants";
import { ROUTE_DASHBOARD, 
         ROUTE_LOGIN,
         ROUTE_SIGNUP } from "@/constants";

export default authMiddleware({
  afterAuth(auth, req) {
    const cookieData:any = cookies().get(CMS_COOKIE_TOKEN);

    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL(ROUTE_LOGIN, req.url));
    }

    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    if (auth.userId && req.url.includes(ROUTE_LOGIN) ||
        auth.userId && req.url.includes(ROUTE_SIGNUP)) {
      return NextResponse.redirect(new URL(ROUTE_DASHBOARD, req.url));
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
