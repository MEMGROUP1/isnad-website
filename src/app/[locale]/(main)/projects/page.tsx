import ProjectCard from "@/components/cards/project-card";
import PrefetchBoundary from "@/components/prefetch-boundary";
import Section from "@/components/section";
import { websiteService } from "@/services/website.service";
import { CityDto, ComplexDto } from "@/services/types/website.types";
import { useTranslations } from "next-intl";

async function ProjectsPageContent() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations("projects");

    const cities = await websiteService.getCities();
    const complexes = await websiteService.getComplexes();

    const cityCards = cities.map((city: CityDto) => ({
        id: city.id,
        name: city.name,
        type: city.type,
        backgroundImg: city.backgroundImg,
        logo: city.logo,
        minPrice: city.minPrice,
        maxPrice: city.maxPrice,
        governorate: city.governorate,
        totalUnits: city.totalUnits,
        projectType: "city" as const,
    }));

    const complexCards = complexes.map((complex: ComplexDto) => ({
        id: complex.id,
        name: complex.name,
        type: { ar: "مجمع سكني", en: "Residential Complex" },
        backgroundImg: complex.backgroundImg,
        logo: complex.logo,
        minPrice: complex.minPrice,
        maxPrice: complex.maxPrice,
        governorate: complex.governorate,
        projectType: "complex" as const,
    }));

    return (
        <Section className="lg:h-auto py-14">
            <Section.Inner>
                <h1 className="text-[32px] md:text-[38px] lg:text-[48px] mb-10 text-white" dangerouslySetInnerHTML={{ __html: t("title") }}></h1>

                {/* Cities & Integrated Residential Complexes Section */}
                {cityCards.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl text-white mb-6">{t("cities_section_title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cityCards.map((city) => (
                                <ProjectCard key={city.id} data={city} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Complexes Section */}
                {complexCards.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl text-white mb-6">{t("complexes_section_title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {complexCards.map((complex) => (
                                <ProjectCard key={complex.id} data={complex} />
                            ))}
                        </div>
                    </div>
                )}
            </Section.Inner>
        </Section>
    );
}

export default async function Page() {
    return (
        <PrefetchBoundary
            queries={[
                {
                    queryKey: ["website-cities"],
                    queryFn: () => websiteService.getCities(),
                },
                {
                    queryKey: ["website-complexes"],
                    queryFn: () => websiteService.getComplexes(),
                },
            ]}
        >
            <ProjectsPageContent />
        </PrefetchBoundary>
    );
}
