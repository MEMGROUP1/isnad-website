import { DiscountIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";

interface Props {
    title?: string;
    desc?: string;
    expiredAt?: string;
    discountValue?: string;
}

export default function CompanyDiscountCard({
    desc = "يسري الخصم على مجموعة مختارة من الأجهزة المنزلية.",
    title = "خصم الأجهزة الكهربائية",
    expiredAt = "2026/5/10",
    discountValue = "20",
}: Props) {
    const t = useTranslations("common");

    return (
        <article
            className="rounded-2xl py-[0.5px] px-px overflow-hidden relative min-h-48 min-w-70 bg-linear-180 from-white/12 from-0% to-white/6 to-100%"
            style={{
                borderImageSource: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(248, 248, 248, 0.06) 100%)",
            }}
        >
            <div className="rounded-2xl size-full p-4 bg-primary flex flex-col">
                <div className="absolute top-6 end-0 border border-white/7 text-[#FF6262] px-4 py-1.5 rounded-s-full text-lg flex items-center">
                    <DiscountIcon className="me-1" />
                    <span className="text-[#FF6262]/50">%</span> {discountValue}
                </div>

                <div className="mt-auto w-full">
                    <div className="flex flex-col">
                        <h3 className="text-lg text-[#FBF5EF]">{title}</h3>
                        <small className="text-xs text-[#AAB7CB]">
                            {t("valid_until")}: {expiredAt}
                        </small>
                    </div>

                    <small className="text-xs mt-2 text-[#AAB7CB]">{desc}</small>
                </div>
            </div>
        </article>
    );
}
