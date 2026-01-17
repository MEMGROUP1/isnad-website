"use client";

import { FeatureCheckIcon, FeaturesStarsIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Complex } from "./types";

interface ProjectFeaturesProps {
    complex?: Complex;
    className?: string;
}

export function ProjectFeatures({ complex, className }: ProjectFeaturesProps) {
    const params = useParams();
    const locale = (params.locale as "ar" | "en") || "ar";

    // Fallback features if data not provided in complex
    const features = complex?.features || [];

    if (features.length === 0) return null; // Or render empty state

    return (
        <div className={cn("flex flex-col gap-6 p-6 rounded-3xl border border-[#212F43] bg-white/5", className)}>
            <div className="flex items-center gap-2 text-white/90 pb-2 border-b border-white/10">
                <FeaturesStarsIcon className="w-6 h-6 text-white" />
                <h3 className="text-base font-medium">{locale === "ar" ? "مميزات والخدمات" : "Features & Services"}</h3>
            </div>

            <div className="text-white">
                {features.map((category, idx) => {
                    return (
                        <div key={idx} className="flex flex-col gap-4 w-full">
                            <ul className="flex flex-wrap gap-3 *:min-w-64 *:max-w-96 *:flex-1">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="shrink-0 mt-0.5">
                                            <FeatureCheckIcon className="w-5 h-5 text-[#B8C6E3]" />
                                        </div>
                                        <span>{item[locale] || item.en}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
