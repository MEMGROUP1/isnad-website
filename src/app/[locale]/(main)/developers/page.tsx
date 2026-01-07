"use client";

import RealEstateDevelopersCard from "@/components/real-estate-developers-card";
import Section from "@/components/section";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("developers");

    return (
        <Section className="lg:h-auto py-14">
            <Section.Inner>
                <h1
                    className="text-[32px] md:text-[38px] lg:text-[48px] mb-10 text-white"
                    dangerouslySetInnerHTML={{ __html: t("title") }}
                ></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <RealEstateDevelopersCard key={index + "developers-card"} />
                    ))}
                </div>
            </Section.Inner>
        </Section>
    );
}
