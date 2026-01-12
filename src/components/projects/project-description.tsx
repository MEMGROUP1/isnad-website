import { MessageIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { LocalizedString } from "./types";

interface ProjectDescriptionProps {
    description: LocalizedString;
    className?: string;
    locale?: "ar" | "en";
}

export function ProjectDescription({ description, className, locale = "ar" }: ProjectDescriptionProps) {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className={cn("flex flex-col gap-2 px-6 py-6 rounded-3xl border border-[#212F43] bg-white/5", className)}>
            <div className="flex items-center gap-2 text-white/90">
                <MessageIcon className="w-6 h-6 text-white" />
                <h3 className="text-base font-medium">{locale === "ar" ? "الوصف" : "Description"}</h3>
            </div>

            <p className={cn("text-[#97A8BF] text-sm leading-7 text-justify transition-all duration-300", !readMore && "line-clamp-4")}>
                {description[locale] || description.en || "No description available."}
            </p>

            <button
                onClick={() => setReadMore(!readMore)}
                className="text-secondary hover:text-[#fcc27b] text-sm font-normal transition-colors self-center mt-2 cursor-pointer"
            >
                {readMore ? (locale === "ar" ? "عرض أقل" : "Show Less") : locale === "ar" ? "قراءة المزيد" : "Read More"}
            </button>
        </div>
    );
}
