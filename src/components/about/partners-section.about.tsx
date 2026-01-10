"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ServiceCard from "../cards/service-card";
import Section from "../section";

export default function AboutPartnersSection() {
    const t = useTranslations("about.partners_section");
    const locale = useLocale();
    const isRtl = locale === "ar";
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

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
            container.style.setProperty('--tw-translate-x', '0px');
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
        
        container.style.setProperty('--tw-translate-x', `${translateX}px`);
    };

    // Reset transform when category changes
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty('--tw-translate-x', '0px');
        }
    }, [activeIndex]);

    const categories = [
        t("categories.gardens"),
        t("categories.facades"),
        t("categories.plumbing"),
        t("categories.curtains"),
        t("categories.doors"),
        t("categories.painting"),
    ];

    const partnersData = [
        // Gardens
        [
            { title: "Daze Furniture", services: ["غرف نوم", "صالات", "سفرة", "أثاث مكتبي", "تفصيل حسب الطلب"] },
            { title: "Garden Master", services: ["تنسيق حدائق", "عشب صناعي", "تصميم خارجي", "مظلات"] },
            { title: "Green Life", services: ["نباتات داخلية", "أحواض زراعية", "ري آلي", "صيانة دورية"] },
            { title: "Green Life", services: ["نباتات داخلية", "أحواض زراعية", "ري آلي", "صيانة دورية"] },
            { title: "Green Life", services: ["نباتات داخلية", "أحواض زراعية", "ري آلي", "صيانة دورية"] },
        ],
        // Facades
        [
            { title: "Glass Tech", services: ["واجهات زجاجية", "ستركشر", "سحاب", "أبواب أوتوماتيك"] },
            { title: "Elite Glass", services: ["زجاج مقسى", "زجاج معزول", "مرايا", "قواطع زجاجية"] },
        ],
        // Plumbing
        [
            { title: "Smart Flow", services: ["تمديدات صحية", "سخانات", "مضخات", "خزانات مياه"] },
            { title: "Pure Water", services: ["فلاتر مياه", "تحلية", "صيانة عامة"] },
            { title: "Pipe Line", services: ["شبكات ري", "صرف صحي", "عزل مائي"] },
        ],
        // Curtains
        [
            { title: "Royal Curtains", services: ["ستائر رول", "ستائر أمريكية", "ستائر ذكية", "أقمشة فاخرة"] },
            { title: "Soft Touch", services: ["تفصيل ستائر", "تنجيد كنب", "مجالس عربية"] },
        ],
        // Doors
        [
            { title: "Secure Doors", services: ["أبواب خشبية", "أبواب حديد", "أبواب مصفحة", "أقفال ذكية"] },
            { title: "Wood Art", services: ["أبواب داخلية", "خزائن حائط", "ديكورات خشبية"] },
            { title: "Metal Pro", services: ["أبواب ليزر", "درابزين", "مظلات سيارات"] },
        ],
        // Painting
        [
            { title: "Color World", services: ["دهانات داخلية", "دهانات خارجية", "ورق جدران", "ديكورات جبسية"] },
            { title: "Art Paint", services: ["ترخيم", "تعتيق", "بروفايل", "إيبوكسي"] },
        ],
    ];

    return (
        <Section className="relative overflow-hidden hidden lg:flex" onMouseMove={handleMouseMove}>
            {/* services cards */}
            <div 
                ref={containerRef}
                className="absolute start-1/3 top-1/2 -translate-y-1/2 flex items-center h-[120%] gap-4 transition-transform duration-100 ease-out will-change-transform"
            >
                {partnersData[activeIndex]?.map((partner, index) => (
                    <ServiceCard
                        key={index}
                        title={partner.title}
                        services={partner.services}
                        image="/images/fallback/companies-image.jpg"
                        className="hover:z-50 relative hover:scale-105 transition-all duration-300"
                    />
                ))}
            </div>

            <Section.Inner className="z-10 relative flex max-w-120 mx-0">
                <div className="my-auto px-8">
                    <h1 className="text-[48px] mb-6" dangerouslySetInnerHTML={{ __html: t("title") }}></h1>

                    <p className="text-lg text-[#B8C6E3]">{t("desc")}</p>

                    <div className="flex flex-col gap-2 mt-8">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    "w-54.5 h-11.75 flex items-center text-start px-4 transition-all duration-300 border-b",
                                    activeIndex === index ? "text-[#C57340]" : "text-[#BCC6D8] border-[#FFFFFF0D]"
                                )}
                                style={
                                    activeIndex === index
                                        ? {
                                              borderImageSource:
                                                  "linear-gradient(90deg, rgba(197, 115, 64, 0) 19.94%, #C57340 64.68%, rgba(197, 115, 64, 0) 101.15%)",
                                              borderImageSlice: 1,
                                              borderBottomWidth: "1px",
                                              borderStyle: "solid",
                                          }
                                        : undefined
                                }
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
