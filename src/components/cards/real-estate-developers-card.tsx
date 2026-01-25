"use client";

import { ArrowRightIcon } from "@/assets/icons";
import { useRouter } from "@/i18n/routing";
import { getLocalized } from "@/lib/utils";
import { DevelopersAvatarFallback, DevelopersImageFallback } from "@/media";
import { DeveloperDto } from "@/services/types/website.types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
    developer: DeveloperDto;
}

export default function RealEstateDevelopersCard({ developer }: Props) {
    const locale = useLocale();
    const t = useTranslations("developers");
    const router = useRouter();

    return (
        <article
            onClick={() => router.push(`/developers/${developer.id}/projects`)}
            className="flex flex-col gap-3 px-2 py-3 rounded-3xl border border-white/8 group cursor-pointer transition-colors duration-300 hover:border-white/20 hover:bg-white/5"
        >
            <div className="flex items-center gap-2">
                {/* avatar */}
                <div
                    className="size-8.25 rounded-full p-px overflow-hidden shrink-0"
                    style={{
                        background: "linear-gradient(208.75deg, #8FABDA -5.54%, #FF924F 97.09%)",
                    }}
                >
                    <div className="p-px rounded-full bg-primary size-full">
                        <Image
                            src={developer.logo || DevelopersAvatarFallback}
                            alt={getLocalized(developer.name, locale)}
                            className="rounded-full size-full object-cover"
                            width={33}
                            height={33}
                        />
                    </div>
                </div>

                <div className="">
                    <h4 className="text-white transition-colors duration-300 line-clamp-1">{getLocalized(developer.name, locale)}</h4>
                    <div className="flex items-center text-xs">
                        <span className="text-[#B8C6E3]">
                            {t("projects")}: {developer.totalCities || 0}
                        </span>
                        <span className="mx-2 text-[#132032]">|</span>
                        <span className="text-[#B8C6E3]">
                            {t("complexes")}: {developer.totalComplexes || 0}
                        </span>
                    </div>
                </div>
            </div>

            <div className="h-58.75 rounded-xl overflow-hidden relative isolate">
                <Image
                    src={developer.backgroundImageUrl || DevelopersImageFallback}
                    className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    alt={getLocalized(developer.name, locale)}
                    fill
                />

                <div className="size-10 bg-white/90 backdrop-blur-sm rounded-full absolute top-4 end-4 flex items-center justify-center transition-all duration-300 group-hover:bg-primary shadow-sm hover:scale-110">
                    <ArrowRightIcon className="text-primary rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:text-white" />
                </div>
            </div>

            <div className="text-white text-sm opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2 min-h-10">{getLocalized(developer.description, locale)}</div>
        </article>
    );
}
