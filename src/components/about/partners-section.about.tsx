/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, useMemo } from "react";
import ServiceCard from "../cards/service-card";
import Section from "../section";
import { useQuery } from "@tanstack/react-query";
import { websiteService } from "@/services/website.service";
import { COMPANY_TYPE, COMPANY_TYPE_LABELS_AR, COMPANY_TYPE_LABELS_EN } from "@/data/company.data";
import { LoadingSpinner } from "../feedback/loading-spinner";
import { CategoryList } from "./partners/category-list";

export default function AboutPartnersSection() {
    const t = useTranslations("about.partners_section");
    const locale = useLocale();
    const isRtl = locale === "ar";
    const containerRef = useRef<HTMLDivElement>(null);
    // listRef and scroll state logic removed directly here as it is moved to CategoryList

    const { data: companies = [], isLoading } = useQuery({
        queryKey: ["website-companies"],
        queryFn: () => websiteService.getCompanies(),
    });

    const availableCategories = useMemo(() => {
        const available = new Set<string>();
        COMPANY_TYPE.forEach((cat) => {
            const labelEn = COMPANY_TYPE_LABELS_EN[cat.value as keyof typeof COMPANY_TYPE_LABELS_EN];
            const labelAr = COMPANY_TYPE_LABELS_AR[cat.value as keyof typeof COMPANY_TYPE_LABELS_AR];

            const hasCompany = companies.some((company) => company.types.some((t) => t.en === labelEn || t.en === cat.value || t.ar === labelAr || t.ar === cat.value));
            if (hasCompany) {
                available.add(cat.value);
            }
        });
        return available;
    }, [companies]);

    const [activeCategoryValue, setActiveCategoryValue] = useState<string | null>(null);

    useEffect(() => {
        if (!activeCategoryValue && availableCategories.size > 0) {
            const firstAvailable = COMPANY_TYPE.find((cat) => availableCategories.has(cat.value));
            if (firstAvailable) {
                setActiveCategoryValue(firstAvailable.value);
            }
        }
    }, [availableCategories, activeCategoryValue]);

    const filteredCompanies = useMemo(() => {
        if (!activeCategoryValue) return [];

        const cat = COMPANY_TYPE.find((c) => c.value === activeCategoryValue);
        if (!cat) return [];

        const labelEn = COMPANY_TYPE_LABELS_EN[cat.value as keyof typeof COMPANY_TYPE_LABELS_EN];
        const labelAr = COMPANY_TYPE_LABELS_AR[cat.value as keyof typeof COMPANY_TYPE_LABELS_AR];

        return companies.filter((company) => company.types.some((t) => t.en === labelEn || t.en === cat.value || t.ar === labelAr || t.ar === cat.value));
    }, [companies, activeCategoryValue]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const windowWidth = window.innerWidth;

        // In tailwind start-1/3:
        // LTR: left: 33.33% => visual start is at 1/3 width
        // RTL: right: 33.33% => visual start is at 2/3 width (from left)
        const anchorX = isRtl ? (windowWidth * 2) / 3 : windowWidth / 3;
        const mouseX = e.clientX;

        // Check if mouse is in the inactive zone (margin side)
        const isInactive = isRtl ? mouseX > anchorX : mouseX < anchorX;

        if (isInactive) {
            container.style.setProperty("--tw-translate-x", "0px");
            return;
        }

        const availableWidth = isRtl ? anchorX : windowWidth - anchorX;
        const contentWidth = container.scrollWidth;
        const maxScroll = Math.max(0, contentWidth - availableWidth + 100);

        // Distance from the start/anchor point into the active zone
        const dist = isRtl ? anchorX - mouseX : mouseX - anchorX;

        // Percentage of the active zone traversed
        const percentage = Math.min(1, Math.max(0, dist / availableWidth));

        // LTR: Move Left (negative)
        // RTL: Move Right (positive)
        const translateX = isRtl ? percentage * maxScroll : -(percentage * maxScroll);

        container.style.setProperty("--tw-translate-x", `${translateX}px`);
    };

    // Reset transform when category changes
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty("--tw-translate-x", "0px");
        }
    }, [activeCategoryValue]);

    if (isLoading) {
        return (
            <Section className="flex justify-center items-center h-96">
                <LoadingSpinner />
            </Section>
        );
    }

    return (
        <Section className="relative overflow-hidden hidden lg:flex" onMouseMove={handleMouseMove}>
            {/* services cards */}
            <div
                ref={containerRef}
                className="absolute start-1/3 top-1/2 -translate-y-1/2 flex items-center h-[120%] gap-4 transition-transform duration-500 ease-out will-change-transform"
            >
                {filteredCompanies.map((company, index) => (
                    <div
                        key={`${company.id}-${activeCategoryValue}`}
                        className="h-full shrink-0"
                        style={{
                            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
                        }}
                    >
                        <ServiceCard
                            title={isRtl ? (company.name.ar ?? company.name.en ?? "") : (company.name.en ?? company.name.ar ?? "")}
                            services={company.discounts.map((d) => (isRtl ? d.description.ar : d.description.en) ?? "").filter(Boolean)}
                            image={company.backgroundImageUrl ?? "/images/fallback/71e321d176682a54ad86351ef39fc201aa17a56a.png"}
                            className="hover:z-50 relative hover:scale-105 transition-all duration-300"
                            link={`/companies/${company.id}`}
                        />
                    </div>
                ))}
            </div>

            <div
                className="relative z-10"
                style={{
                    background: isRtl
                        ? "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(8, 24, 47, 0.949579) 78.46%, #08182F 100%)"
                        : "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(8, 24, 47, 0.949579) 78.46%, #08182F 100%)",
                }}
            >
                <Section.Inner className="z-10 relative flex max-w-150 mx-0 w-full">
                    <div className="my-auto px-8">
                        <h1 className="text-[48px] mb-6" dangerouslySetInnerHTML={{ __html: t("title") }}></h1>
                        <p className="text-lg text-[#B8C6E3] max-w-110">{t("desc")}</p>

                        <CategoryList activeCategoryValue={activeCategoryValue} availableCategories={availableCategories} onCategoryChange={setActiveCategoryValue} isRtl={isRtl} />
                    </div>
                </Section.Inner>
            </div>
        </Section>
    );
}
