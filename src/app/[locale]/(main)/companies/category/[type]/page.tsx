import CompanyCard from "@/components/cards/company-card";
import Section from "@/components/section";
import { CompanyDto } from "@/services/types/website.types";
import { websiteService } from "@/services/website.service";
import { notFound } from "next/navigation";

// Define the configuration for each category slug: mapped API types and localized titles
const CATEGORY_CONFIG: Record<
    string,
    {
        apiTypes: string[];
        title: { en: string; ar: string };
    }
> = {
    Furniture: {
        apiTypes: ["Furniture", "AntiqueShops", "FurnitureMovingCompanies"],
        title: { en: "Furniture", ar: "أثاث" },
    },
    Kitchens: {
        apiTypes: ["Kitchens"],
        title: { en: "Kitchens", ar: "مطابخ" },
    },
    HighEndFullSolutions: {
        apiTypes: ["SmartHome", "InteriorDesignCompanies"],
        title: { en: "High End Full Solutions", ar: "حلول منزلية متكاملة" },
    },
    WoodWorkFurnishing: {
        apiTypes: ["Furniture", "InteriorDesignCompanies"],
        title: { en: "Wood Work Furnishing", ar: "اعمال خشبية شاملة" },
    },
    ElectricalsAndElectronics: {
        apiTypes: ["Electric", "Electronics", "ElectronicsCompanies", "Lighting", "Cameras"],
        title: { en: "Electricals & Electronics", ar: "كهربائيات والكترونيات" },
    },
    HomeSupplies: {
        apiTypes: ["HomeSupplies", "HousekeepingCompanies", "CleaningCompanies", "HomeFragrances"],
        title: { en: "Home Supplies", ar: "منزلية" },
    },
    CurtainsAndBedding: {
        apiTypes: ["Curtains", "Bedding", "CarpetsAndRugs"],
        title: { en: "Curtains & Bedding", ar: "ستائر ومفروشات" },
    },
    PorcelainCeramicsSanitary: {
        apiTypes: ["Ceramics", "SanitaryWare"],
        title: { en: "Porcelain, Ceramics & Sanitary ware", ar: "بورسلين, سيراميك و صحيات" },
    },
    Insurance: {
        apiTypes: ["Insurance"],
        title: { en: "Insurance", ar: "تأمين" },
    },
};

interface PageProps {
    params: Promise<{
        type: string;
        locale: string;
    }>;
}

export default async function CategoryPage({ params }: PageProps) {
    const { type, locale } = await params;
    const config = CATEGORY_CONFIG[type];

    if (!config) {
        notFound();
    }

    let uniqueCompanies: CompanyDto[] = [];

    try {
        // Fetch companies for all mapped types in parallel.
        // Assuming getCompanies(type) returns matches for that type.
        const companiesArrays = await Promise.all(config.apiTypes.map((t) => websiteService.getCompanies(t)));

        // Flatten and deduplicate by ID
        const allCompanies = companiesArrays.flat();
        const uniqueCompaniesMap = new Map();

        allCompanies.forEach((company) => {
            if (!uniqueCompaniesMap.has(company.id)) {
                uniqueCompaniesMap.set(company.id, company);
            }
        });

        uniqueCompanies = Array.from(uniqueCompaniesMap.values());
    } catch (err) {
        console.error("Error fetching companies for category:", err);
    }

    const title = locale === "ar" ? config.title.ar : config.title.en;

    return (
        <Section className="lg:h-auto py-14">
            <Section.Inner>
                <h1 className="text-[32px] md:text-[38px] lg:text-[48px] mb-10 text-white mt-16 font-bold capitalize">{title}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {uniqueCompanies.length > 0 ? (
                        uniqueCompanies.map((company) => <CompanyCard key={company.id} company={company} disableHoverEffect />)
                    ) : (
                        <div className="col-span-full text-center text-white/50 py-10">
                            {locale === "ar" ? "لا توجد شركات في هذا التصنيف حالياً" : "No companies found in this category."}
                        </div>
                    )}
                </div>
            </Section.Inner>
        </Section>
    );
}
