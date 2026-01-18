import CompanyProfileDiscounts from "@/components/company-profile/discounts.company-profile";
import CompanyProfileInfo from "@/components/company-profile/info.company-profile";
import Section from "@/components/section";
import { getLocalized } from "@/lib/utils";
import { websiteService } from "@/services/website.service";
import { Metadata } from "next";

interface CompanyProfileProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export async function generateMetadata({ params }: CompanyProfileProps): Promise<Metadata> {
    const { id, locale } = await params;

    try {
        const company = await websiteService.getCompanyById(id);
        const name = getLocalized(company.name, locale);

        return {
            title: name,
            description: getLocalized(company.types?.[0], locale),
            openGraph: {
                title: name,
                description: getLocalized(company.types?.[0], locale),
                images: company.logo ? [company.logo] : [],
            },
        };
    } catch {
        return {
            title: "Company Profile",
        };
    }
}

export default async function CompanyProfile({ params }: CompanyProfileProps) {
    const { id } = await params;
    const company = await websiteService.getCompanyById(id);

    return (
        <Section className="bg-primary mt-8 lg:h-auto min-h-screen">
            <Section.Inner className="flex items-stretch flex-col md:flex-row gap-8">
                <CompanyProfileInfo company={company} />

                <CompanyProfileDiscounts discounts={company.discounts} />
            </Section.Inner>
        </Section>
    );
}
