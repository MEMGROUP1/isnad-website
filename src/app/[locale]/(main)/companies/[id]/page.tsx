import CompanyProfileDiscounts from "@/components/company-profile/discounts.company-profile";
import CompanyProfileInfo from "@/components/company-profile/info.company-profile";
import Section from "@/components/section";

export default function CompanyProfile() {
    return (
        <Section className="bg-primary mt-8">
            <Section.Inner className="flex items-stretch flex-col md:flex-row gap-8">
                <CompanyProfileInfo />

                <CompanyProfileDiscounts />
            </Section.Inner>
        </Section>
    );
}
