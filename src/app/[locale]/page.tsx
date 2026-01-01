import HomeAbout from "@/components/home/about.home";
import HomeCompanyNumbers from "@/components/home/company-numbers.home";
import { HomeHero } from "@/components/home/hero.home";

export default function Home() {
    return (
        <>
            <HomeHero />

            <HomeAbout />

            <HomeCompanyNumbers />
        </>
    );
}
