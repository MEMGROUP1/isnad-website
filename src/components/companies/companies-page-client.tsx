"use client";

import CompanyCard from "@/components/cards/company-card";
import Section from "@/components/section";
import { CompanyDto } from "@/services/types/website.types";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
    companies: CompanyDto[];
}

export default function CompaniesPageClient({ companies }: Props) {
    const t = useTranslations("companies");
    const tHome = useTranslations("home.partners_and_offers");
    const locale = useLocale();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categoriesKeys = [
        "furniture",
        "kitchens",
        "home_supplies",
        "electrical_appliances",
        "ceramics",
        "insurance",
        "wood_work",
        "curtains_bedding",
    ];

    const filteredCompanies = selectedCategory
        ? companies.filter((c) =>
              c.types.some((type) => {
                  const typeName = type[locale as keyof typeof type];
                  const categoryName = tHome(`categories.${selectedCategory}`);
                  // Simple check: does the API type string contain the category name?
                  return typeName && categoryName && typeName.includes(categoryName);
              })
          )
        : companies;

    return (
        <Section className="lg:h-auto py-14">
            <Section.Inner>
                <h1
                    className="text-[32px] md:text-[38px] lg:text-[48px] mb-10 text-white"
                    dangerouslySetInnerHTML={{ __html: t("title") }}
                ></h1>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-10">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={cn(
                            "px-4 py-2 rounded-full border transition-colors text-sm",
                            selectedCategory === null
                                ? "bg-white text-primary border-white"
                                : "bg-transparent text-white border-white/30 hover:bg-white/10"
                        )}
                    >
                        {tHome("show_partners") || "الكل"} {/* Fallback to "All" or "Show Partners" label */}
                    </button>
                    {categoriesKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => setSelectedCategory(key)}
                            className={cn(
                                "px-4 py-2 rounded-full border transition-colors text-sm",
                                selectedCategory === key
                                    ? "bg-white text-primary border-white"
                                    : "bg-transparent text-white border-white/30 hover:bg-white/10"
                            )}
                        >
                            {tHome(`categories.${key}`)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCompanies.length > 0 ? (
                        filteredCompanies.map((company) => (
                            <CompanyCard key={company.id} company={company} disableHoverEffect />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-white/50 py-10">
                            {/* No results message */}
                            لا توجد شركات في هذا التصنيف حالياً
                        </div>
                    )}
                </div>
            </Section.Inner>
        </Section>
    );
}
