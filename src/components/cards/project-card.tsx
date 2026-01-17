"use client";

import { LocationIcon } from "@/assets/icons";
import { useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { CompaniesImageFallback, Logo } from "@/media";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";

interface ProjectCardData {
    id: string;
    name?: { ar: string; en: string };
    type?: { ar: string; en: string };
    backgroundImg?: string | null;
    logo?: string | null;
    minPrice?: number;
    maxPrice?: number;
    governorate?: {
        name?: { ar?: string; en?: string };
    };
    status?: "completed" | "ongoing" | "planned";
    totalUnits?: number;
    projectType?: "city" | "complex";
}

interface Props extends React.HTMLAttributes<HTMLElement> {
    disableHoverEffect?: boolean;
    data?: ProjectCardData;
}

export default function ProjectCard({ className, disableHoverEffect = false, data, ...props }: Props) {
    const { push } = useRouter();
    const locale = useLocale() as "ar" | "en";

    const projectPath =
        data?.projectType === "complex"
            ? `/complexes/${data.id}`
            : data?.projectType === "city"
              ? `/cities/${data.id}`
              : `/projects/${data?.id || "1"}`;

    const statusLabel = {
        completed: locale === "ar" ? "مكتمل" : "Completed",
        ongoing: locale === "ar" ? "قيد الإنشاء" : "Ongoing",
        planned: locale === "ar" ? "مخطط" : "Planned",
    };

    return (
        <article
            className={cn("relative rounded-3xl overflow-hidden h-80 cursor-pointer isolate w-full", !disableHoverEffect && "group", className)}
            onClick={() => push(projectPath)}
            {...props}
        >
            {/* Background Image */}
            <Image
                src={data?.backgroundImg || CompaniesImageFallback}
                className={cn(
                    "size-full object-cover transition-transform duration-700 ease-out",
                    disableHoverEffect ? "scale-100" : "group-hover:scale-105",
                )}
                alt={data?.name?.[locale] || "Project Image"}
                width={400}
                height={320}
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
                style={{
                    background: "linear-gradient(180deg, rgba(8, 24, 47, 0) 0%, rgba(8, 24, 47, 0.9) 100%)",
                }}
            />

            {/* Top Left Badge (End in RTL) */}
            {data?.status && (
                <div className="absolute top-4 end-4 z-20">
                    <div className="bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1.5 rounded-full flex items-center justify-center font-medium">
                        {statusLabel[data.status]}
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 start-0 w-full p-5 z-20 text-white">
                <div className="flex items-end gap-2 border-b border-white/10 pb-3">
                    {/* Logo & Plus Button */}
                    <div className="relative shrink-0">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center outline-2 outline-white/10 relative overflow-hidden">
                            {data?.logo ? (
                                <Image src={data.logo} alt="" className="w-full h-auto rounded-full" width={40} height={40} />
                            ) : (
                                <Image src={Logo} alt="" className="w-full h-auto text-primary" />
                            )}
                        </div>
                        {/* Plus Button */}
                        <div className="absolute bottom-0 start-0 border-2 border-primary translate-1 size-6 bg-[#F5F5F7] rounded-full flex items-center justify-center z-10 cursor-pointer hover:bg-white transition-colors">
                            <PlusIcon className="size-4 text-secondary" />
                        </div>
                    </div>

                    {/* Title & Type */}
                    <div>
                        <h3 className="text-lg mb-1 text-[#FBF5EF]">
                            {data?.name?.[locale] || (locale === "ar" ? "المجمع الذهبي للأبراج" : "Golden Tower Complex")}
                        </h3>
                        <div className="text-[#EEF5FF] text-sm">
                            {data?.type?.[locale] || (locale === "ar" ? "عقار سكني" : "Residential Property")}{" "}
                            {data?.totalUnits ? `${(data.totalUnits / 1000).toFixed(1)}K` : ""}
                        </div>
                    </div>
                </div>

                {/* Price */}
                {data?.minPrice && data?.maxPrice && (
                    <div className="text-sm text-[#EEF5FF] my-2" dir={locale === "ar" ? "rtl" : "ltr"}>
                        {locale === "ar"
                            ? `من ${(data.minPrice / 1000000).toFixed(0)} مليون - ${(data.maxPrice / 1000000).toFixed(0)} مليون IQD`
                            : `From ${(data.minPrice / 1000000).toFixed(0)}M - ${(data.maxPrice / 1000000).toFixed(0)}M IQD`}
                    </div>
                )}

                {/* Location */}
                <div className="flex items-center text-[#EEF5FF] text-sm gap-1">
                    <LocationIcon className="size-5 shrink-0" />
                    <span>
                        {data?.governorate?.name?.[locale] ||
                            (locale === "ar" ? "بغداد/اليرموك/شارع نادي الصيد" : "Baghdad/Yarmouk/Hunting Club Street")}
                    </span>
                </div>
            </div>
        </article>
    );
}
