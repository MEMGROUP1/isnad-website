import { useTranslations } from "next-intl";
import Section from "../section";
import Image from "next/image";
import { Button } from "../ui/button";

export function AboutServices() {
    const t = useTranslations("about.services");

    return (
        <Section className="bg-[#EBEFF5]">
            <Section.Inner className="py-25.5 md:py-22 lg:py-40">
                <h1 className="mb-10 text-[32px] md:text-[38px] lg:text-[48px] text-[#08182F]" dangerouslySetInnerHTML={{ __html: t("title") }}></h1>

                <div className="flex flex-col-reverse lg:flex-row gap-10 *:flex-1">
                    <div className="">
                        <Image
                            src={"/images/home/about/about-bg.png"}
                            width={636}
                            height={459}
                            className="w-full object-cover object-center h-full"
                            alt={""}
                        />
                    </div>

                    <div className="">
                        <div className="space-y-4 mb-10">
                            <h2 className="border-b border-black/50 pb-4 text-[32px] text-black/50">{t("list.consultancy")}</h2>

                            <h2 className="border-b border-white pb-4 text-[32px] text-black/50">{t("resale")}</h2>

                            <div className="px-4 py-3 bg-white text-black space-y-4">
                                <h2 className="text-[32px]">{t("list.marketing.title")}</h2>
                                <small>{t("list.marketing.desc")}</small>
                            </div>

                            <h2 className="border-b border-white pb-4 text-[32px] text-black/50">{t("list.affiliate")}</h2>

                            <h2 className="pb-4 text-[32px] text-black/50">{t("list.turnkey")}</h2>
                        </div>

                        <div className="flex gap-3 *:flex-1 md:*:max-w-50">
                            <Button className="py-4">{t("view_all")}</Button>

                            <Button variant={"white"} className="border border-[#212F43] py-4">
                                {t("join_partner")}
                            </Button>
                        </div>
                    </div>
                </div>
            </Section.Inner>
        </Section>
    );
}
