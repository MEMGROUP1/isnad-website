import AboutHero from "@/components/about/hero.about";
import AboutIsnadDistinguishes from "@/components/about/isnad-distinguishes.about";
import AboutPartnersSection from "@/components/about/partners-section.about";
import { AboutServices } from "@/components/about/services.about";
import AboutVisionAndOurValuesHero from "@/components/about/vision-and-our-values.hero";

export default function AboutPage() {
    return (
        <>
            <AboutHero />

            <AboutVisionAndOurValuesHero />

            <AboutIsnadDistinguishes />

            <AboutServices />

            <AboutPartnersSection />
        </>
    );
}
