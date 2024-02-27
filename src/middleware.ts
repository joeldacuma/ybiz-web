import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
 
    return NextResponse.next();
  },
  publicRoutes: [
    '/', 
    '/home', 
    '/login',
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
