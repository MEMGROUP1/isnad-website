import { useTranslations } from "next-intl";
import Section from "../section";

export default function HomeAbout() {
    const t = useTranslations("home.about");

    return (
        <Section
            backgroundImageUrl="/images/home/about/about-bg.png"
            className="pb-16"
            style={{
                background: "linear-gradient(180deg, rgba(7, 20, 39, 0) 0%, rgba(8, 24, 47, 0.86) 68.03%, #08182F 100%)",
            }}
        >
            <Section.Inner className="flex flex-col">
                <div className="mt-auto mb-16 flex flex-col lg:flex-row *:flex-1 text-white">
                    <div className="mt-75 lg:mt-0">
                        <h3 className="mb-10 font-sans">{t("title")}</h3>

                        <h1 dangerouslySetInnerHTML={{ __html: t("subtitle") }} className="text-[40px] md:text-[56px] lg:text-[72px] mb-16 leading-[100%]"></h1>

                        <h2 className="text-2xl max-w-xl mb-8 lg:mb-0">{t("lunch")}</h2>
                    </div>

                    <div className="flex">
                        <p className="mt-auto" dangerouslySetInnerHTML={{ __html: t("paragraph") }}></p>
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
