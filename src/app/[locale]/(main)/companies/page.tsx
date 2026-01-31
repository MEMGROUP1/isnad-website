import CompaniesPageClient from "@/components/companies/companies-page-client";
import { websiteService } from "@/services/website.service";

export default async function Page() {
    const companies = await websiteService.getCompanies();

    return <CompaniesPageClient companies={companies} />;
}
