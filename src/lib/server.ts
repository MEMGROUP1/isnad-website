import { headers } from "next/headers";

/**
 * Get the current pathname in server components
 * Uses custom header set by middleware
 * Workaround for: https://github.com/vercel/next.js/issues/46618
 */
export async function getPathname() {
    const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "/";

    return pathname;
}
