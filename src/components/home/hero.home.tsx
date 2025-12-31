import { useTranslations } from "next-intl";
import Navbar from "../navbar";
import Section from "../section";
import { Button } from "../ui/button";

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
                        <div className="max-w-xl p-8 text-white mb-16">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-5xl font-semibold">{t("title")}</h1>
                                <p className="max-w-sm">{t("desc")}</p>
                            </div>

                            <div className="">

                                <Button>{t("buttonText")}</Button>
                                <Button>{t("buttonText")}</Button>
                            </div>
                        </div>

                        <div className=""></div>
                    </div>
                </Section>
            </div>
        </Section.Outer>
    );
}
