import { LocalizedText } from "@/services/types/website.types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getLocalized(text: LocalizedText | undefined | null, locale: string) {
    if (!text) return "";
    // @ts-ignore
    return text[locale] || text["en"] || text["ar"] || "";
}

export function showNavbar(pathname: string) {
    const hideOnPaths = ["/", "/ar", "/en"];

    return !hideOnPaths.some((path) => pathname.endsWith(path));
}

export function formatPrice(price: number) {
    return new Intl.NumberFormat("en-US").format(price);
}
