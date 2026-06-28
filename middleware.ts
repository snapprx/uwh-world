// middleware.ts
// Protection des routes selon l'authentification et les rôles

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";

const ROLE_HIERARCHY: Record<Role, number> = {
  VISITOR: 0,
  USER: 1,
  CONTRIBUTOR: 2,
  MODERATOR: 3,
  ADMIN: 4,
  SUPER_ADMIN: 5,
};

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Routes admin : rôle ADMIN minimum
    if (pathname.startsWith("/admin")) {
      const userRole = (token?.role as Role) ?? Role.VISITOR;
      if (ROLE_HIERARCHY[userRole] < ROLE_HIERARCHY[Role.ADMIN]) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    // Routes profil/favoris : USER minimum (déjà garanti par authorized)
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;

        // Routes nécessitant une connexion
        const protectedRoutes = ["/profile", "/favorites", "/admin"];
        const isProtected = protectedRoutes.some((r) => pathname.startsWith(r));

        if (isProtected) return !!token;
        return true;
      },
    },
    pages: {
      signIn: "/auth/login",
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/profile/:path*",
    "/favorites/:path*",
    "/clubs/submit/:path*",
  ],
};
