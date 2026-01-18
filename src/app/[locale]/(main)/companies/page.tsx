import CompanyCard from "@/components/cards/company-card";
import Section from "@/components/section";
import { websiteService } from "@/services/website.service";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations("companies");
    const companies = await websiteService.getCompanies();

    return (
        <Section className="lg:h-auto py-14">
            <Section.Inner>
                <h1 className="text-[32px] md:text-[38px] lg:text-[48px] mb-10 text-white" dangerouslySetInnerHTML={{ __html: t("title") }}></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companies.map((company) => (
                        <CompanyCard key={company.id} company={company} disableHoverEffect />
                    ))}
                </div>
            </Section.Inner>
        </Section>
    );
}
