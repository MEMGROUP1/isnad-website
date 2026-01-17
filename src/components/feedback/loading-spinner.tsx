import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
};

/**
 * LoadingSpinner component to display loading states.
 */
export function LoadingSpinner({
    size = "md",
    className,
}: LoadingSpinnerProps) {
    const t = useTranslations("feedback");

    return (
        <div
            role="status"
            className={cn("flex items-center justify-center", className)}
        >
            <Loader2
                className={cn("animate-spin text-primary", sizeClasses[size])}
            />
            <span className="sr-only">{t("loading")}</span>
        </div>
    );
}

