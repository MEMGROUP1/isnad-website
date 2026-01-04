"use client";

import useRandomId from "@/hooks/use-random-id";
import { cn } from "@/lib/utils";

export interface PartnerLogoProps {
    data?: Array<{
        /** image source URL */
        image: string;
        /** optional link URL */
        link?: string;
    }>;
    /** alt text for accessibility */
    alt?: string;
    /** size preset or pixel number */
    size?: "sm" | "md" | "lg" | number;
    /** extra className for layout tweaks */
    className?: string;
    /** open link in new tab (default true) */
    newTab?: boolean;
}

/**
 * PartnerLogo
 * Small, reusable component to render a partner/brand logo with optional link.
 * Props: see PartnerLogoProps.
 */
export default function PartnerLogo({ size = "md" }: PartnerLogoProps) {
    const id = useRandomId("partner-logo");

    function getSizeClass(s: PartnerLogoProps["size"]) {
        if (typeof s === "number") return `w-[${s}px] h-[${s}px]`;
        if (s === "sm") return "w-6 h-6";
        if (s === "lg") return "w-10 h-10";
        return "w-6 h-6"; // default / md
    }

    const sizeClass = getSizeClass(size);

    return (
        <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    key={index + id}
                    className={cn("block size-10 rounded-full -me-4 last-of-type:me-0 bg-white border border-gray-200 ring ring-white/10", sizeClass)}
                ></span>
            ))}
        </div>
    );
}
