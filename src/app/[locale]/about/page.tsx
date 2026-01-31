import AboutHero from "@/components/about/hero.about";
import AboutIsnadDistinguishes from "@/components/about/isnad-distinguishes.about";
import AboutPartnersSection from "@/components/about/partners-section.about";
import { AboutServices } from "@/components/about/services.about";
import AboutVisionAndOurValuesHero from "@/components/about/vision-and-our-values.hero";
import { websiteService } from "@/services/website.service";

export default async function AboutPage() {
    const stats = await websiteService.getGeneralStatistics();

    return (
        <>
            <AboutHero stats={stats} />

            <AboutVisionAndOurValuesHero />

            <AboutIsnadDistinguishes />

            <AboutServices />

            <AboutPartnersSection />
        </>
    );
}
