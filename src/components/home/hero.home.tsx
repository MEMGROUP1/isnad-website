import { GeneralStatisticsDto } from "@/services/types/website.types";
import { useTranslations } from "next-intl";
import Navbar from "../navbar";
import Section from "../section";
import { Button } from "../ui/button";
import HomeCard from "../cards/home-card";

interface HomeHeroProps {
    stats: GeneralStatisticsDto;
}

export function HomeHero({ stats }: HomeHeroProps) {
    const t = useTranslations("home.hero");

    return (
        <Section
            backgroundImageUrl="/images/home/hero/home-hero.jpg"
            style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(8, 24, 47, 0.5) 80.27%, #08182F 100%)" }}
        >
            <div style={{ background: "linear-gradient(180deg, rgba(8, 24, 47, 0.4) 13.08%, rgba(25, 76, 149, 0) 100%)" }}>
                <Section.Inner className="flex flex-col min-h-screen">
                    <Navbar />

                    <div className="flex flex-col md:flex-col-reverse lg:flex-row justify-between lg:items-end mt-42 lg:mt-auto">
                        <div className="max-w-full lg:max-w-2xl py-8 text-white mb-16">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <h1 className="text-[32px] md:text-5xl font-semibold">{t("title")}</h1>
                                <p className="max-w-sm">{t("desc")}</p>
                            </div>

                            <div className="mt-12 flex gap-4">
                                <Button className="py-3.5 flex-1 lg:max-w-50" variant={"white"}>
                                    {t("start_search_now")}
                                </Button>
                                <Button className="py-3.5 flex-1 lg:max-w-50" variant={"blur"}>
                                    {t("contact_us")}
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 mb-16">
                            <HomeCard
                                className="w-auto lg:w-75"
                                count={stats.totalDevelopers}
                                label={t("cards.developers_label")}
                                description={t("cards.developers_desc")}
                                logos={stats.developerLogos || []}
                                backgroundImageUrl="/images/home/hero/home-hero.jpg"
                                actionLabel={t("cards.view_companies")}
                            />
                            
                            <HomeCard
                                className="w-auto lg:w-75"
                                count={stats.totalCompanies}
                                label={t("cards.companies_label")}
                                description={t("cards.companies_desc")}
                                logos={stats.companyLogos || []}
                                backgroundImageUrl="/images/home/hero/home-hero.jpg"
                                actionLabel={t("cards.view_companies")}
                            />

                        </div>
                    </div>
                </Section.Inner>
            </div>
        </Section>
    );
}
