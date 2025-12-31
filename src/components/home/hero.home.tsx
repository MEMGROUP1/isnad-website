import { useTranslations } from "next-intl";
import Navbar from "../navbar";
import Section from "../section";
import { Button } from "../ui/button";
import HomeCard from "../home-card";

export function HomeHero() {
    const t = useTranslations("home.hero")

    return (
        <Section.Outer
            backgroundImageUrl="/images/home/hero/home-hero.jpg"
            style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(8, 24, 47, 0.5) 80.27%, #08182F 100%)" }}
        >
            <div style={{ background: "linear-gradient(180deg, rgba(8, 24, 47, 0.4) 13.08%, rgba(25, 76, 149, 0) 100%);" }}>
                <Section className="flex flex-col min-h-screen">
                    <Navbar />

                    <div className="flex justify-between items-end mt-auto">
                        <div className="max-w-2xl p-8 text-white mb-16">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <h1 className="text-5xl font-semibold">{t("title")}</h1>
                                <p className="max-w-sm">{t("desc")}</p>
                            </div>

                            <div className="mt-12 flex gap-4">
                                <Button className="py-3.5 min-w-50" variant={"white"}>{t("start_search_now")}</Button>
                                <Button className="py-3.5 min-w-50" variant={"blur"}>{t("contact_us")}</Button>
                            </div>
                        </div>

                        <div className="flex gap-6 mb-16">
                            <HomeCard />

                            <HomeCard />
                        </div>
                    </div>
                </Section>
            </div>
        </Section.Outer>
    );
}
