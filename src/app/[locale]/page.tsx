import HomeAbout from "@/components/home/about.home";
import HomeCompanyNumbers from "@/components/home/company-numbers.home";
import HomeFeatureShowcase from "@/components/home/feature-showcase.home";
import { HomeHero } from "@/components/home/hero.home";
import HomePartnersAndOffers from "@/components/home/partners-and-offers.home";
import HomeRealEstateCities from "@/components/home/real-estate-cities.home";
import HomeRealEstateDevelopers from "@/components/home/real-estate-developers.home";
import { websiteService } from "@/services/website.service";

export default async function Home() {
    const stats = await websiteService.getGeneralStatistics();

    return (
        <>
            <HomeHero stats={stats} />

            <HomeAbout />

            <HomeCompanyNumbers />

            <HomeRealEstateCities stats={stats} />

            <HomeRealEstateDevelopers stats={stats} />

            <HomePartnersAndOffers stats={stats} />

            <HomeFeatureShowcase />
        </>
    );
}
