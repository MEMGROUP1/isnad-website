import { useTranslations } from "next-intl";
import Section from "../section";
import Image from "next/image";

export default function AboutVisionAndOurValuesHero() {
    const t = useTranslations("about.vision_and_our_values");

    return (
        <Section className="bg-primary lg:h-auto">
            <Section.Inner className="flex flex-col gap-4 py-22">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="">
                        <Image className="min-w-full lg:min-w-135 h-135 object-cover" src={"/images/about/vision-and-our-values/vision-image.png"} width={500} height={540} alt={""} />
                    </div>
                    <div className="flex flex-col gap-10">
                        <h1 className="text-[32px] md:text-[38px] lg:text-[48px]" dangerouslySetInnerHTML={{ __html: t("vision.title") }}></h1>
                        <p className="text-[#B8C6E3] text-[22px]">{t("vision.desc")}</p>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="flex flex-col gap-10">
                        <h1 className="text-[32px] md:text-[38px] lg:text-[48px]" dangerouslySetInnerHTML={{ __html: t("our_values.title") }}></h1>
                        <p className="text-[#B8C6E3] text-[22px]" dangerouslySetInnerHTML={{ __html: t("our_values.desc") }}></p>
                    </div>

                    <div className="">
                        <Image className="min-w-full lg:min-w-135 h-135 object-cover" src={"/images/about/vision-and-our-values/value-image.png"} width={500} height={540} alt={""} />
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
