import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ROUTE_DASHBOARD, 
         ROUTE_LOGIN,
         ROUTE_SIGNUP } from "@/constants";


export default authMiddleware({
  afterAuth(auth, req) {
    const response = (url: any = undefined) => {
      if (!url) {
        return NextResponse.next();
      }
      return NextResponse.redirect(url);
    };

    if (auth.userId && req.url.includes(ROUTE_LOGIN) ||
        auth.userId && req.url.includes(ROUTE_SIGNUP)) {
      const _response = response(new URL(ROUTE_DASHBOARD, req.url));
      return _response;
    }

    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL(ROUTE_LOGIN, req.url));
    }

    if (auth.userId && !auth.isPublicRoute) {
      const _response = response();
      return _response;
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
