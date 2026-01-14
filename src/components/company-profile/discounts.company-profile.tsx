import { useTranslations } from "next-intl";
import CompanyDiscountCard from "../cards/company-discount-card";

export default function CompanyProfileDiscounts() {
    const t = useTranslations("company_profile");

    return (
        <div className="flex-1">
            <h2 className="text-2xl text-white mb-4">{t("title")}</h2>

            <div className="flex flex-wrap *:flex-1 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <CompanyDiscountCard key={index + "company-discount-card"} />
                ))}
            </div>
        </div>
    );
}
