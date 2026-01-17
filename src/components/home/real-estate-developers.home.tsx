"use client";

import { GeneralStatisticsDto } from "@/services/types/website.types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import Section from "../section";
import { Button } from "../ui/button";
import VerticalSwiper from "../vertical-swiper";

// Fallback images if API returns empty array
const FALLBACK_IMAGES = [
    "/images/fallback/vertical-slider/image-1.jpg",
    "/images/fallback/vertical-slider/image-2.jpg",
    "/images/fallback/vertical-slider/image-3.jpg",
    "/images/fallback/vertical-slider/image-4.jpg",
    "/images/fallback/vertical-slider/image-5.jpg",
    "/images/fallback/vertical-slider/image-6.jpg",
];

interface HomeRealEstateDevelopersProps {
    stats: GeneralStatisticsDto;
}

export default function HomeRealEstateDevelopers({ stats }: HomeRealEstateDevelopersProps) {
    const t = useTranslations("home.real_estate_developers");
    const [activeIndex, setActiveIndex] = useState(0);

    const developers =
        stats.developerBackgrounds && stats.developerBackgrounds.length > 0 ? stats.developerBackgrounds : FALLBACK_IMAGES;

    return (
        <Section className="min-h-screen relative overflow-hidden bg-black text-white hidden lg:flex">
            {/* Background Layer */}
            {developers.map((bg, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <Image src={bg} alt="Background" fill className="object-cover opacity-50" priority={idx === 0} />
                </div>
            ))}

            <Section.Inner className="relative z-10 flex items-stretch gap-8">
                {/* Content Side */}
                <div className="flex py-20">
                    <div className="mt-auto w-full flex flex-col items-start text-start mb-10 md:mb-0">
                        <div className="flex items-baseline gap-3 mb-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{t("title")}</h1>
                        </div>
                        <p className="text-lg text-gray-200 max-w-lg leading-relaxed">{t("desc")}</p>

                        <div className="mt-10 flex gap-4 w-full">
                            <Button className="py-3.5 flex-1 lg:max-w-50" variant={"white"}>
                                {t("show_all")}
                            </Button>
                            <Button className="py-3.5 flex-1 lg:max-w-50" variant={"blur"}>
                                {t("join_us")}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Swiper Side */}
                <div className="w-full flex items-center justify-center md:justify-end">
                    <VerticalSwiper
                        gap={16}
                        items={developers}
                        itemHeight={210}
                        activeIndex={activeIndex}
                        autoplayInterval={5000}
                        onIndexChange={setActiveIndex}
                        renderItem={(item, isActive) => (
                            <div
                                className="relative w-51.5 h-full overflow-hidden bg-gray-900 transition-all duration-300"
                                style={{ boxShadow: isActive ? "0px 4px 60px 0px #C5734080" : "" }}
                            >
                                <div className="">
                                    <Image
                                        src={item}
                                        alt="Developer"
                                        fill
                                        className={`size-full object-cover transition-transform duration-700  ${
                                            isActive ? "border-2 border-secondary" : "grayscale"
                                        }`}
                                    />
                                </div>
                            </div>
                        )}
                        className="w-120 overflow-visible!"
                    />
                </div>
            </Section.Inner>
        </Section>
    );
}
