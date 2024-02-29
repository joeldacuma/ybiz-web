import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CMS_COOKIE_TOKEN } from "@/constants";

import { useQuery, useQueryClient } from "@tanstack/react-query";

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
