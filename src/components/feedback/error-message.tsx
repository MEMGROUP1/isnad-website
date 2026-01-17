import { AlertCircle, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
    className?: string;
}

/**
 * ErrorMessage component to display error states with optional retry button.
 */
export function ErrorMessage({
    title,
    message,
    onRetry,
    className,
}: ErrorMessageProps) {
    const t = useTranslations("feedback.error");

    const displayTitle = title || t("title");
    const displayMessage = message || t("default_message");

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center p-6 text-center rounded-lg border border-white/10 bg-[#08182F]",
                className
            )}
            role="alert"
            aria-live="polite"
        >
            <div className="rounded-full bg-red-500/10 p-3 mb-4">
                <AlertCircle className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
                {displayTitle}
            </h3>
            <p className="text-sm text-gray-300 max-w-[400px] mb-6">
                {displayMessage}
            </p>
            {onRetry && (
                <Button
                    onClick={onRetry}
                    variant="outline"
                    className="gap-2 border-white/20 hover:bg-white/10 text-white hover:text-white bg-transparent"
                >
                    <RefreshCw className="h-4 w-4" />
                    {t("retry")}
                </Button>
            )}
        </div>
    );
}

