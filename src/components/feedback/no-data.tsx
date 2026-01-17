import { ReactNode } from "react";
import { FolderOpen } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export interface NoDataProps {
    title?: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}

/**
 * NoData component to display empty states.
 */
export function NoData({ title, description, action, className }: NoDataProps) {
    const t = useTranslations("feedback.no_data");

    const displayTitle = title || t("title");
    const displayDescription = description || t("description");

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center p-8 text-center rounded-lg border border-dashed text-muted-foreground",
                className,
            )}
        >
            <div className="rounded-full bg-muted p-4 mb-4">
                <FolderOpen className="h-8 w-8 text-muted-foreground/50" />
            </div>
            
            <h3 className="text-lg font-medium mb-1">{displayTitle}</h3>
            <p className="text-sm max-w-sm mb-6 text-muted-foreground/80">{displayDescription}</p>
            {action && <div>{action}</div>}
        </div>
    );
}
