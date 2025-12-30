import Navbar from "../navbar";
import Section from "../section";

export function HomeHero() {
    return (
        <Section.Outer backgroundImageUrl="/images/home/hero/home-hero.jpg">
            <Section className="w-full min-h-screen bg-cover bg-center flex flex-col">
                <Navbar />
            </Section>
        </Section.Outer>
    );
}
