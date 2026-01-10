import ServiceCard from "../cards/service-card";
import Section from "../section";

export default function AboutPartnersSection() {
    return (
        <Section className="relative overflow-hidden hidden lg:flex">
            {/* services cards */}
            <div className="rotate-14 absolute end-0 top-0">
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
