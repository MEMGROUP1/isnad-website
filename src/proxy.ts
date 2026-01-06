import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const response = intlMiddleware(request);
    
    // Workaround for accessing pathname in server components
    // See: https://github.com/vercel/next.js/issues/46618
    response.headers.set('x-pathname', request.nextUrl.pathname);
    
    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(ar|en)/:path*"],
};
