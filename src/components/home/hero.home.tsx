import { useTranslations } from "next-intl";
import Navbar from "../navbar";
import Section from "../section";

export function HomeHero() {
    const t = useTranslations("home.hero")

    return (
        <Section.Outer
            backgroundImageUrl="/images/home/hero/home-hero.jpg"
            style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(8, 24, 47, 0.5) 80.27%, #08182F 100%)" }}
        >
            <div style={{ background: "linear-gradient(180deg, rgba(8, 24, 47, 0.4) 13.08%, rgba(25, 76, 149, 0) 100%);" }}>
                <Section className="w-full min-h-screen bg-cover bg-center flex flex-col h-screen">
                    <Navbar />

                    <div className="flex justify-between">
                
                    </div>  
                </Section>
            </div>
        </Section.Outer>
    );
}
