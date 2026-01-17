import { useTranslations } from "next-intl";
import Section from "../section";
import { Button } from "../ui/button";
import Image from "next/image";

interface HomeRealEstateCitiesProps {
    totalCities: number;
}

export default function HomeRealEstateCities({ totalCities }: HomeRealEstateCitiesProps) {
    const t = useTranslations("home.real_estate_cities");

    return (
        <Section
            className="flex lg:max-h-154.5"
            backgroundImageUrl="/images/home/real-estate-cities/bg.png"
            style={{
                background: "linear-gradient(180deg, rgba(7, 20, 39, 0) 0%, rgba(8, 24, 47, 0.86) 68.03%, #08182F 100%)",
            }}
        >
            <Section.Inner className="flex flex-col-reverse lg:flex-row justify-end lg:items-center mt-auto gap-8 h-fit *:flex-1 py-8">
                <div className="text-white max-w-lg lg:max-w-full">
                    <h1 className="text-[32px] md:text-[38px] lg:text-[48px] mb-6 flex items-baseline gap-3">
                        {t("title")}
                        {totalCities > 0 && <span className="text-2xl md:text-3xl text-primary font-bold">{totalCities}</span>}
                    </h1>

                    <p className="text-xs text-[#EEF5FF] max-w-113.75">{t("desc")}</p>
                </div>

                <div className="flex flex-col md:flex-row items-stretch gap-2 text-white md:max-w-160">
                    <div className="flex flex-col gap-2 *:flex-1 lg:max-w-60">
                        <article className="flex flex-col backdrop-blur-[32px] p-4 rounded-3xl border border-white/10">
                            <h4 className="text-lg">{t("cards.card_1.header")}</h4>
                            <p className="text-sm mb-10">{t("cards.card_1.desc")}</p>

                            <Button variant={"blur"} className="w-full mt-auto">
                                {t("cards.card_2.button")}
                            </Button>
                        </article>

                        <article className="flex flex-col backdrop-blur-[32px] p-4 rounded-3xl border border-white/10">
                            <h4 className="text-lg">{t("cards.card_2.header")}</h4>
                            <p className="text-sm mb-10">{t("cards.card_2.desc")}</p>
                            <Button variant={"blur"} className="w-full mt-auto">
                                {t("cards.card_2.button")}
                            </Button>
                        </article>
                    </div>

                    <div className="flex-1">
                        <article className="backdrop-blur-[32px] p-2 rounded-3xl border border-white/10">
                            <div className="mb-2">
                                <Image src="/images/home/real-estate-cities/bg.png" width={372} height={202} alt="" className="w-full rounded-2xl" />
                            </div>

                            <div className="flex items-center gap-2 mb-10">
                                <div className="flex-1">
                                    <h4 className="text-lg">{t("cards.card_2.header")}</h4>
                                    <p className="text-sm">{t("cards.card_2.desc")}</p>
                                </div>

                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <span
                                            key={index + "real-estate-cities-card"}
                                            className="block size-9 rounded-full -me-4 last-of-type:me-0 bg-white border border-gray-200 ring ring-white/10"
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <Button variant={"blur"} className="w-full">
                                {t("cards.card_2.button")}
                            </Button>
                        </article>
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
