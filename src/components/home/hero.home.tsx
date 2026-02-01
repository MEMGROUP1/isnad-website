"use client";

import { GeneralStatisticsDto } from "@/services/types/website.types";
import { useTranslations } from "next-intl";
import HomeCard from "../cards/home-card";
import Navbar from "../navbar";
import Section from "../section";

interface HomeHeroProps {
    stats: GeneralStatisticsDto;
}

export function HomeHero({ stats }: HomeHeroProps) {
    // const { locale } = useParams();
    const t = useTranslations("home.hero");

    // const arTypes = Object.values(COMPANY_TYPE_LABELS_AR || {}).splice(0, 6);
    // const enTypes = Object.values(COMPANY_TYPE_LABELS_EN || {}).splice(0, 6);

    return (
        <Section
            priority
            backgroundImageUrl="/images/home/hero/hero-bg.png"
            style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(8, 24, 47, 0.5) 80.27%, #08182F 100%)" }}
        >
            <div style={{ background: "linear-gradient(180deg, rgba(8, 24, 47, 0.4) 13.08%, rgba(25, 76, 149, 0) 100%)" }}>
                <Section.Inner className="flex flex-col min-h-screen">
                    <Navbar />

                    <div className="flex flex-col md:flex-col-reverse lg:flex-row justify-between lg:items-center mt-42 lg:mt-auto mb-16">
                        <div className="max-w-full lg:max-w-2xl py-8 text-white">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <h1 className="text-[32px] md:text-5xl font-semibold">{t("title")}</h1>
                                <p className="max-w-sm">{t("desc")}</p>
                            </div>

                            {/* <div className="mt-12 flex gap-4">
                                <Button className="py-3.5 flex-1 lg:max-w-50" variant={"white"}>
                                    {t("start_search_now")}
                                </Button>
                                <Button className="py-3.5 flex-1 lg:max-w-50" variant={"blur"}>
                                    {t("contact_us")}
                                </Button>
                            </div> */}
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <HomeCard
                                className="w-auto lg:w-75"
                                count={12}
                                label={t("cards.developers_label")}
                                description={t("cards.developers_desc")}
                                logos={stats.developerLogos || []}
                                backgroundImageUrl="/images/home/hero/card-1.png"
                                actionLabel={t("cards.view_developers")}
                                viewButtonPath="/developers"
                            />

                            <HomeCard
                                className="w-auto lg:w-75"
                                count={22}
                                label={t("cards.companies_label")}
                                description={t("cards.companies_desc")}
                                logos={stats.companyLogos || []}
                                backgroundImageUrl="/images/home/hero/card-2.png"
                                actionLabel={t("cards.view_companies")}
                                viewButtonPath="/companies"
                            />
                        </div>
                    </div>
                </Section.Inner>
            </div>
        </Section>
    );
}
