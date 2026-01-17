import { ErrorMessage } from "@/components/feedback/error-message";
import { NoData } from "@/components/feedback/no-data";
import RealEstateDevelopersCard from "@/components/cards/real-estate-developers-card";
import Section from "@/components/section";
import { websiteService } from "@/services/website.service";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations("developers");
    
    let developers = [];
    let isError = false;

    try {
        developers = await websiteService.getDevelopers();
    } catch (error) {
        console.error(error);
        isError = true;
    }

    return (
        <Section className="lg:h-auto py-14">
            <Section.Inner>
                <h1
                    className="text-[32px] md:text-[38px] lg:text-[48px] mb-10 text-white"
                    dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                ></h1>

                {isError ? (
                    <ErrorMessage className="bg-white/5 border-white/10 text-white" />
                ) : !developers || developers.length === 0 ? (
                    <NoData className="bg-white/5 border-white/10 text-white" />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {developers.map((developer) => (
                            <RealEstateDevelopersCard key={developer.id} developer={developer} />
                        ))}
                    </div>
                )}
            </Section.Inner>
        </Section>
    );
}
