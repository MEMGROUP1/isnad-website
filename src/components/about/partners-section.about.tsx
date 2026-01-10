import ServiceCard from "../cards/service-card";
import Section from "../section";

export default function AboutPartnersSection() {
    return (
        <Section className="relative overflow-hidden hidden lg:flex">
            {/* services cards */}
            <div className="absolute start-1/3 top-1/2 -translate-y-1/2 flex items-center h-[120%]">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>

            <Section.Inner>
                <div className=""></div>
            </Section.Inner>
        </Section>
    );
}
