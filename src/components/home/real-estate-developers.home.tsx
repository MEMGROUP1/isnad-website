"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import Section from "../section";
import { Button } from "../ui/button";
import VerticalSwiper from "../vertical-swiper";

// Placeholder data
const DEVELOPERS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
        bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=600&auto=format&fit=crop",
        bg: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=600&auto=format&fit=crop",
        bg: "https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=600&auto=format&fit=crop",
        bg: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1770&auto=format&fit=crop",
        bg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1770&auto=format&fit=crop",
    },
];

export default function HomeRealEstateDevelopers() {
    const t = useTranslations("home.real_estate_developers");
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Section className="min-h-screen relative overflow-hidden bg-black text-white hidden lg:flex">
            {/* Background Layer */}
            {DEVELOPERS.map((dev, idx) => (
                <div
                    key={dev.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <Image src={dev.bg} alt="Background" fill className="object-cover opacity-50" priority={idx === 0} />
                </div>
            ))}

            <Section.Inner className="relative z-10 flex items-stretch gap-8">
                {/* Content Side */}
                <div className="flex py-20">
                    <div className="mt-auto w-full flex flex-col items-start text-start mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{t("title")}</h1>
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
                        items={DEVELOPERS}
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
                                        src={item.image}
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
