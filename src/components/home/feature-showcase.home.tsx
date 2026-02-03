"use client";

import FeatureCard from "../cards/feature-card";
import { Link } from "@/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/request";

export default function HomeFeatureShowcase() {
    const { locale } = useParams();

    const cards = [
        {
            type: "Furniture",
            image: "/images/home/feature-showcase/Furniture/image.png",
            features: [{ ar: "اثاث", en: "Furniture" }],
        },
        {
            type: "Kitchens",
            image: "/images/home/feature-showcase/Kitchens/image.png",
            features: [{ ar: "مطابخ", en: "Kitchens" }],
        },
        {
            type: "HighEndFullSolutions",
            image: "/images/home/feature-showcase/High End Full Solutions/image.png",
            features: [{ ar: "حلول منزلية متكاملة", en: "High End Full Solutions" }],
        },
        {
            type: "WoodWorkFurnishing",
            image: "/images/home/feature-showcase/Wood Work Furnishing/image.png",
            features: [{ ar: "اعمال خشبية شاملة", en: "Wood Work Furnishing" }],
        },
        {
            type: "ElectricalsAndElectronics",
            image: "/images/home/feature-showcase/Electricals & Electronics/image.png",
            features: [{ ar: "كهربائيات والكترونيات", en: "Electricals & Electronics" }],
        },
        {
            type: "HomeSupplies",
            image: "/images/home/feature-showcase/Home Supplies/image.png",
            features: [{ ar: "منزلية", en: "Home Supplies" }],
        },
        {
            type: "CurtainsAndBedding",
            image: "/images/home/feature-showcase/Curtains & Bedding/image.png",
            features: [{ ar: "ستائر ومفروشات", en: "Curtains & Bedding" }],
        },
        {
            type: "PorcelainCeramicsSanitary",
            image: "/images/home/feature-showcase/Porcelain, Ceramics & Sanitary ware/image.png",
            features: [{ ar: "بورسلين, سيراميك و صحيات", en: "Porcelain, Ceramics & Sanitary ware" }],
        },
        {
            type: "Insurance",
            image: "/images/home/feature-showcase/Insurance/image.png",
            features: [{ ar: "تأمين", en: "Insurance" }],
        },
    ];

    if (typeof window === "undefined") return null;

    return (
        <section className="flex flex-wrap items-stretch gap-2 overflow-auto *:flex-1 bg-primary hide-scrollbar">
            <Swiper
                modules={[Mousewheel, FreeMode]}
                mousewheel={{ forceToAxis: true }}
                freeMode={true}
                grabCursor={true}
                spaceBetween={16}
                slidesPerView={1.1}
                breakpoints={{
                    480: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1440: { slidesPerView: 5 },
                    3440: { slidesPerView: 9 },
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={card.type + index} className="h-auto">
                        <Link href={`/companies/category/${card.type}`} className="flex-1 block">
                            <FeatureCard image={card.image} features={card.features.map((feature) => feature[locale as Locale])} tags={[]} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
