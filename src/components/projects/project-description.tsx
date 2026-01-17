import { MessageIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { LocalizedString } from "./types";

interface ProjectDescriptionProps {
    description: LocalizedString;
    className?: string;
    locale?: "ar" | "en";
}

export function ProjectDescription({ description, className, locale = "ar" }: ProjectDescriptionProps) {

    return (
        <div className={cn("flex flex-col gap-2 px-6 py-6 rounded-3xl border border-[#212F43] bg-white/5", className)}>
            <div className="flex items-center gap-2 text-white/90">
                <MessageIcon className="w-6 h-6 text-white" />
                <h3 className="text-base font-medium">{locale === "ar" ? "الوصف" : "Description"}</h3>
            </div>

            <p className={"text-[#97A8BF] text-sm leading-7 text-justify transition-all duration-300"}>
                {description[locale] || description.en || "No description available."}
            </p>
        </div>
    );
}
