import { GeneralStatisticsDto } from "@/services/types/website.types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../section";
import { AvatarGroup } from "../ui/avatar-group";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

interface HomePartnersAndOffersProps {
    stats: GeneralStatisticsDto;
}

export default function HomePartnersAndOffers({ stats }: HomePartnersAndOffersProps) {
    const t = useTranslations("home.partners_and_offers");

    // const categoriesKeys = [
    //     "furniture",
    //     "kitchens",
    //     "home_supplies",
    //     "electrical_appliances",
    //     "ceramics",
    //     "insurance",
    //     "wood_work",
    //     "curtains_bedding",
    // ];

    return (
        <Section className="flex lg:h-auto bg-primary text-white relative overflow-hidden">
            <Section.Inner className="flex flex-col-reverse md:flex-row md:items-center justify-end mt-auto gap-8 h-fit py-24">
                <div className="flex-1 relative z-10">
                    <h1 dangerouslySetInnerHTML={{ __html: t("title") }} className="text-5xl"></h1>
                    {/* <p className="mt-4 mb-4 text-lg max-w-142.5 text-white/70">{t("desc")}</p> */}

                    {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                        {categoriesKeys.map((key) => (
                            <div key={key} className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm p-2 rounded text-center text-xs md:text-sm border border-white/10 flex items-center justify-center min-h-12">
                                {t(`categories.${key}`)}
                            </div>
                        ))}
                    </div> */}

                    <div className="flex gap-4 mt-10">
                        <Button className="py-4 flex-1 lg:max-w-50" variant={"white"}>
                            <Link href={"/companies"}>{t("show_partners")}</Link>
                        </Button>

                        {/* <Button className="py-4 flex-1 lg:max-w-50" variant={"blur"}>
                            {t("join_as_partner")}
                        </Button> */}
                    </div>
                </div>

                <div className="h-fit max-w-47 relative z-10 space-y-6.25">
                    <AvatarGroup
                        images={stats.companyLogos || []}
                        totalCount={stats.totalCompanies}
                        className="*:size-10" // Override size if needed, though AvatarGroup default is size-9 md:size-10
                    />

                    <p>{t("isnad_discount", { companiesCount: 22 })}</p>
                </div>
            </Section.Inner>

            <Image
                className="absolute end-0 bottom-0 object-contain pointer-events-none w-auto h-full translate-y-1/6 ltr:-scale-x-100"
                src="/images/home/partners-and-offers/image.png"
                alt="Description"
                width={500}
                height={800}
            />
        </Section>
    );
}
