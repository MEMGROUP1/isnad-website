import { useTranslations } from "next-intl";
import Section from "../section";

export default function AboutIsnadDistinguishes() {
    const t = useTranslations("about.isnad_distinguishes");

    const cards = [
        {
            title: t("cards.market_expertise.title"),
            desc: t("cards.market_expertise.desc"),
        },

        {
            title: t("cards.smart_analysis.title"),
            desc: t("cards.smart_analysis.desc"),
        },

        {
            title: t("cards.transparency.title"),
            desc: t("cards.transparency.desc"),
        },
    ];

    return (
        <Section className="bg-primary lg:h-auto">
            <Section.Inner>
                <h1 className="text-[40px] md:text-[56px] lg:text-[72px] mb-8.5" dangerouslySetInnerHTML={{ __html: t("title") }}></h1>

                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    {cards.map((card, index) => (
                        <div key={index + "AboutIsnadDistinguishes"} className="bg-[#EBEFF5] p-8 flex flex-col justify-between min-h-97.5 md:min-w-90 text-[#08182F] flex-1">
                            <h2 className="text-[32px]">{card.title}</h2>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </Section.Inner>
        </Section>
    );
}
