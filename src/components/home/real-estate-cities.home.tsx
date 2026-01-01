import { useTranslations } from "next-intl";
import Section from "../section";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HomeRealEstateCities() {
    const t = useTranslations("home.real_estate_cities");

    return (
        <Section.Outer
            className="flex max-h-154.5"
            backgroundImageUrl="/images/home/real-estate-cities/bg.png"
            style={{
                background: "linear-gradient(180deg, rgba(7, 20, 39, 0) 0%, rgba(8, 24, 47, 0.86) 68.03%, #08182F 100%)",
            }}
        >
            <Section className="flex items-center justify-end mt-auto gap-8 h-fit *:flex-1 py-8">
                <div className="text-white">
                    <h1 className="text-5xl mb-6">{t("title")}</h1>

                    <p className="text-xs text-[#EEF5FF] max-w-113.75">{t("desc")}</p>
                </div>

                <div className="flex items-stretch gap-2 text-white">
                    <div className="flex flex-col gap-2 *:flex-1 max-w-60">
                        <article className="backdrop-blur-[32px] p-4 rounded-3xl border border-white/10">
                            <h4 className="text-lg">{t("cards.card_1.header")}</h4>
                            <p className="text-sm mb-10">{t("cards.card_1.desc")}</p>
                            <Button variant={"blur"} className="w-full">
                                {t("cards.card_2.button")}
                            </Button>
                        </article>

                        <article className="backdrop-blur-[32px] p-4 rounded-3xl border border-white/10">
                            <h4 className="text-lg">{t("cards.card_2.header")}</h4>
                            <p className="text-sm mb-10">{t("cards.card_2.desc")}</p>
                            <Button variant={"blur"} className="w-full">
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
            </Section>
        </Section.Outer>
    );
}
