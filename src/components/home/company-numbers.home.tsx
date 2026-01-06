import { useTranslations } from "next-intl";
import Section from "../section";
import Image from "next/image";

export default function HomeCompanyNumbers() {
    const t = useTranslations("home.company_numbers");

    const cards = [
        {
            number: "M$128+",
            label: t("cards.realized_value"),
            className: "size-full flex border border-[#C573405C]",
        },
        {
            number: "18,950+",
            label: t("cards.trusted_investors"),
            className: "size-full flex border border-[#C573405C]",
        },
        {
            number: "145+",
            label: t("cards.selected_developments"),
            className: "size-full flex border border-[#C573405C]",
        },
        {
            number: "7,320+",
            label: t("cards.available_units"),
            className: "size-full flex border-[#C57340] bg-[#C57340] text-white",
        },
    ];

    return (
        <Section className="lg:h-auto">
            <Section.Inner className="flex flex-col lg:flex-row items-stretch *:flex-1 gap-10 py-16 h-auto">
                <div className="flex flex-col">
                    <h3 className="mb-10 font-sans">{t("title")}</h3>

                    <h1 dangerouslySetInnerHTML={{ __html: t("subtitle") }} className="text-[40px] md:text-[42px] mb-16 leading-[100%]"></h1>

                    <h2 className="text-2xl max-w-xl">{t("lunch")}</h2>

                    <Image width={636} height={355} src={"/images/home/about/about-bg.png"} alt={""} className="object-cover mt-12 h-88.75 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 *:border border-[#C573405C]">
                    {cards.map((card, index) => (
                        <article key={card.label + index} className={card.className + " p-8 flex flex-col justify-end min-h-93.75"}>
                            <h1 className="text-5xl mb-2">{card.number}</h1>
                            <p className="text-xs">{card.label}</p>
                        </article>
                    ))}
                </div>
            </Section.Inner>
        </Section>
    );
}
