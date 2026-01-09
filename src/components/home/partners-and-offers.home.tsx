import { useTranslations } from "next-intl";
import Section from "../section";
import { Button } from "../ui/button";
import PartnerLogo from "../partner-logo";
import Image from "next/image";

export default function HomePartnersAndOffers() {
    const t = useTranslations("home.partners_and_offers");

    return (
        <Section className="flex lg:h-auto bg-primary text-white relative overflow-hidden">
            <Section.Inner className="flex flex-col-reverse md:flex-row md:items-center justify-end mt-auto gap-8 h-fit py-24">
                <div className="flex-1 relative z-10">
                    <h1 dangerouslySetInnerHTML={{ __html: t("title") }} className="text-5xl"></h1>
                    <p className="mt-4 mb-10 text-lg max-w-142.5 text-white/70">{t("desc")}</p>

                    <div className="flex gap-4">
                        <Button className="py-4 flex-1 lg:max-w-50" variant={"white"}>
                            {t("show_partners")}
                        </Button>

                        <Button className="py-4 flex-1 lg:max-w-50" variant={"blur"}>
                            {t("join_as_partner")}
                        </Button>
                    </div>
                </div>

                <div className="h-fit max-w-47 relative z-10 space-y-6.25">
                    <PartnerLogo size="lg" />

                    <p>{t("isnad_discount")}</p>
                </div>
            </Section.Inner>

            <Image
                className="absolute end-0 bottom-0 object-contain pointer-events-none w-auto h-full translate-y-1/6"
                src="/images/home/partners-and-offers/image.png"
                alt="Description"
                width={500}
                height={800}
            />
        </Section>
    );
}
