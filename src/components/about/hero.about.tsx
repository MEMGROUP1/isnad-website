import { useTranslations } from "next-intl";
import Navbar from "../navbar";
import Section from "../section";

export default function AboutHero() {
    const t = useTranslations("about.hero");

    return (
        <Section backgroundImageUrl="/images/about/hero/bg.png">
            <div
                className="h-full flex flex-col"
                style={{
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(8, 24, 47, 0.949579) 92.58%, #08182F 100%)",
                }}
            >
                <Section.Inner className="flex-1 flex flex-col justify-end">
                    <Navbar />

                    <div className="flex gap-4 lg:justify-end mb-10 mt-48 lg:mt-auto">
                        <div className="min-w-max">
                            <h2 className="text-[32px] md:text-[38px] lg:text-[48px]">25+</h2>
                            <small>{t("system_count")}</small>
                        </div>

                        <div className="min-w-max">
                            <h2 className="text-[32px] md:text-[38px] lg:text-[48px]">12+</h2>
                            <small>{t("system_count")}</small>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row *:flex-1 mb-8 gap-4">
                        <div className="">
                            <h1 className="text-[40px] md:text-[56px] lg:text-[72px]">{t("title")}</h1>
                        </div>

                        <div className="flex items-end space-y-4 max-w-120 lg:min-h-45">
                            <h2 className="text-lg">{t("in_isnad")}</h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mb-16">
                        <p className="text-lg text-secondary">{t("subtitle")}</p>
                        <h2 className="text-[24px] lg:text-[32px]">{t("paragraph")}</h2>
                    </div>
                </Section.Inner>
            </div>
        </Section>
    );
}
