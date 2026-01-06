import HomeAbout from "@/components/home/about.home";
import HomeCompanyNumbers from "@/components/home/company-numbers.home";
import HomeFeatureShowcase from "@/components/home/feature-showcase.home";
import { HomeHero } from "@/components/home/hero.home";
import HomePartnersAndOffers from "@/components/home/partners-and-offers.home";
import HomeRealEstateCities from "@/components/home/real-estate-cities.home";
import HomeRealEstateDevelopers from "@/components/home/real-estate-developers.home";

export default function Home() {
    return (
        <>
            <HomeHero />

            <HomeAbout />

            <HomeCompanyNumbers />

            <HomeRealEstateCities />

            <HomeRealEstateDevelopers />
            
            <HomePartnersAndOffers />

            <HomeFeatureShowcase />
        </>
    );
}
