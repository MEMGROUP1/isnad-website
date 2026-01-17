import { getLocalized } from "@/lib/utils";
import { CompanyDiscount } from "@/services/types/website.types";
import { useLocale, useTranslations } from "next-intl";
import CompanyDiscountCard from "../cards/company-discount-card";
import { NoData } from "../feedback/no-data";

interface CompanyProfileDiscountsProps {
    discounts: CompanyDiscount[];
}

export default function CompanyProfileDiscounts({ discounts }: CompanyProfileDiscountsProps) {
    const t = useTranslations("company_profile");
    const locale = useLocale();

    if (!discounts || discounts.length === 0) {
        return (
            <div className="flex-1 min-h-50">
                <h2 className="text-2xl text-white mb-4">{t("title")}</h2>
                <NoData className="border-white/10 text-white/50" />
            </div>
        );
    }

    return (
        <div className="flex-1 min-h-screen">
            <h2 className="text-2xl text-white mb-4">{t("title")}</h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {discounts.map((discount, index) => (
                    <CompanyDiscountCard
                        key={discount.id || index}
                        title={getLocalized(discount.description, locale)}
                        discountValue={discount.percentage.toString()}
                        desc={getLocalized(discount.description, locale)}
                        expiredAt={null}
                    />
                ))}
            </div>
        </div>
    );
}
