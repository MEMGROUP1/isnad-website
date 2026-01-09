import { cn } from "@/lib/utils";
import { LocalizedString } from "./types";
import { InfoIcon } from "lucide-react";

interface ProjectDescriptionProps {
    description: LocalizedString;
    className?: string;
    locale?: "ar" | "en";
}

export function ProjectDescription({ description, className, locale = "ar" }: ProjectDescriptionProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 px-6 py-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md",
                className
            )}
        >
            <div className="flex items-center gap-2 text-white/80 border-b border-white/10 pb-3 mb-1">
                <InfoIcon className="w-5 h-5 text-white" />
                <h3 className="text-sm font-medium">الوصف</h3>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed overflow-hidden text-ellipsis">
                {description[locale] || description.en || "No description available."}
            </p>
        </div>
    );
}
