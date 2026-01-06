import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function showNavbar(pathname: string) {
    const hideOnPaths = ["/", "/ar", "/en"];

    return !hideOnPaths.some((path) => pathname.endsWith(path));
}
