"use client";

import { ToolsIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Section from "../section";

export default function AboutIsnadDistinguishes() {
    const t = useTranslations("about.isnad_distinguishes");

    const cards = [
        {
            title: t("cards.trusted_partner.title"),
            desc: t("cards.trusted_partner.desc"),
        },
        {
            title: t("cards.suitable_home.title"),
            desc: t("cards.suitable_home.desc"),
        },
        {
            title: t("cards.property_control.title"),
            desc: t("cards.property_control.desc"),
        },
        {
            title: t("cards.ready_style.title"),
            desc: t("cards.ready_style.desc"),
        },
        {
            title: t("cards.financial_solutions.title"),
            desc: t("cards.financial_solutions.desc"),
        },
        {
            title: t("cards.support_every_step.title"),
            desc: t("cards.support_every_step.desc"),
        },
    ];

    return (
        <Section className="lg:h-auto" backgroundImageUrl="/images/home/about/about-bg.png">
            <div
                className="pb-16 pt-41"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(8, 24, 47, 0.949579) 92.58%, #08182F 100%),linear-gradient(0deg, rgba(7, 20, 39, 0.2), rgba(7, 20, 39, 0.2))",
                }}
            >
                <Section.Inner className="">
                    <div className="mb-8.5">
                        <h1 className="text-[40px] md:text-[56px] lg:text-[72px] mb-4" dangerouslySetInnerHTML={{ __html: t.raw("title") }}></h1>
                        {/* <p className="text-lg md:text-xl text-[#B8C6E3] max-w-4xl leading-relaxed">{t("desc")}</p> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cards.map((card, index) => (
                            <Card key={index + "AboutIsnadDistinguishes"} title={card.title} desc={card.desc} />
                        ))}
                    </div>
                </Section.Inner>
            </div>
        </Section>
    );
}

function Card({ title, desc }: { title: string; desc: string }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>(null);
    const lastPos = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isExpanded) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        lastPos.current = { x, y };

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setMousePosition(lastPos.current);
            setIsExpanded(true);
        }, 100);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsExpanded(false);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group overflow-hidden bg-[#FBF5EF] p-8 flex flex-col justify-between min-h-73.5 md:min-w-90 text-[#08182F] flex-1 transition-colors group rounded-[24px]"
        >
            {/* Hover Background Animation */}
            <div
                className={`absolute size-4 rounded-full bg-primary transition-transform duration-1000 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
                    isExpanded ? "scale-[120]" : "scale-0"
                }`}
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
            />
            <div className="mb-auto border border-[#08182F1A] group-hover:border-white size-12 rounded-full flex items-center justify-center z-10 transition-colors duration-700 mt-2">
                <ToolsIcon className="text-primary group-hover:text-white transition-colors duration-700" />
            </div>

            <div className="flex flex-col justify-between gap-8 min-h-33.5">
                <h2 className={`relative z-10 text-[32px] transition-colors duration-700 font-bold ${isExpanded ? "text-white delay-150" : ""}`}>{title}</h2>
                <p className={`relative z-10 transition-colors duration-700 text-lg ${isExpanded ? "text-white delay-150" : ""}`}>{desc}</p>
            </div>
        </div>
    );
}
