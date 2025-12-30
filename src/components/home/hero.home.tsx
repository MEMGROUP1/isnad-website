import Navbar from "../navbar";
import SectionContainer from "../section-container";

export function HomeHero() {
    return (
        <SectionContainer className="bg-[url('/images/home/hero/home-hero.jpg')] w-full min-h-screen bg-cover bg-center flex flex-col">
            <Navbar />
        </SectionContainer>
    );
}
