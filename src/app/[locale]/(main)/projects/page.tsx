import ProjectCard from "@/components/cards/project-card";
import Section from "@/components/section";
import { websiteService } from "@/services/website.service";
import { CityDto, ComplexDto } from "@/services/types/website.types";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations("projects");

    const [cities, complexes] = await Promise.all([websiteService.getCities(), websiteService.getComplexes()]);

    const cityCards = cities.map((city: CityDto) => ({
        id: city.id,
        name: { ar: city.name?.ar ?? "", en: city.name?.en ?? "" },
        type: { ar: city.type?.ar ?? "", en: city.type?.en ?? "" },
        backgroundImg: city.backgroundImg,
        logo: city.logo,
        minPrice: city.minPrice,
        maxPrice: city.maxPrice,
        governorate: city.governorate,
        totalUnits: city.totalUnits,
        projectType: "city" as const,
        builtStatus: city.builtStatus,
    }));

    const complexCards = complexes.map((complex: ComplexDto) => ({
        id: complex.id,
        name: { ar: complex.name?.ar ?? "", en: complex.name?.en ?? "" },
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
