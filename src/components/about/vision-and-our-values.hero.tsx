import { useTranslations } from "next-intl";
import Section from "../section";

export default function AboutVisionAndOurValuesHero() {
    const t = useTranslations("about.vision_and_our_values");

    return (
        <Section className="bg-primary">
            <Section.Inner className="flex flex-col">
                <div className="">

                </div>
                <div className=""></div>
            </Section.Inner>
        </Section>
    );
}
