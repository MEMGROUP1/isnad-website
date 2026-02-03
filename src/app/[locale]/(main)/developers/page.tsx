import DevelopersGrid from "@/components/developers/developers-grid";
import PrefetchBoundary from "@/components/prefetch-boundary";
import Section from "@/components/section";
import { websiteService } from "@/services/website.service";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations("developers");

    return (
        <Section className="lg:h-auto py-14">
            <Section.Inner>
                <h1 className="text-[32px] md:text-[38px] lg:text-[48px] mb-10 text-white mt-16" dangerouslySetInnerHTML={{ __html: t.raw("title") }}></h1>

                <PrefetchBoundary
                    queries={[
                        {
                            queryKey: ["developers"],
                            queryFn: websiteService.getDevelopers,
                        },
                    ]}
                >
                    <DevelopersGrid />
                </PrefetchBoundary>
            </Section.Inner>
        </Section>
    );
}
