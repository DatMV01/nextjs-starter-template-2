import withAuth from "next-auth/middleware";
import type { NextFetchEvent } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";

export function proxy(request: NextRequestWithAuth, event: NextFetchEvent) {
  return withAuth(request, event);
}

export const config = {
  matcher: ["/dashboard/:path*", "/posts/:path*"],
};
