import { FacebookIcon, InstagramIcon, LinkIcon, LocationIcon, MapIcon, PhoneCallIcon } from "@/assets/icons";
import { getLocalized } from "@/lib/utils";
import { CompaniesImageFallback, DevelopersAvatarFallback } from "@/media";
import { CompanyDto } from "@/services/types/website.types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";

interface CompanyProfileInfoProps {
    company: CompanyDto;
}

export default function CompanyProfileInfo({ company }: CompanyProfileInfoProps) {
    const t = useTranslations("common");
    const locale = useLocale();

    const getSocialLink = (type: string) => company.links?.find((l) => l.type?.toLowerCase() === type.toLowerCase())?.url;

    const instagram = getSocialLink("instagram");
    const facebook = getSocialLink("facebook");
    const website = getSocialLink("website");

    const branch = company.branches?.[0];

    return (
        <div className="md:min-w-106 relative">
            <div className="flex flex-col border overflow-hidden border-[#212F43] rounded-2xl p-4 z-10 min-h-110 sticky top-4 left-0">
                <Image
                    className="absolute inset-0 size-full pointer-events-none object-cover"
                    src={company.backgroundImageUrl || CompaniesImageFallback}
                    alt={`Background image for ${getLocalized(company.name, locale)}`}
                    fill
                />

                <div className="bg-linear-180 from-black/26 from-30.77% via-[#050F1E] via-58.5% to-[#08182F] to-100% absolute inset-0 size-full pointer-events-none opacity-90"></div>

                <div className="mt-auto relative z-10">
                    <div className="flex items-center gap-2 border-b border-white/20 pb-2 mb-3">
                        <Avatar className="size-16 rounded-full border border-white/10" url={company.logo || DevelopersAvatarFallback} alt={getLocalized(company.name, locale)} />

                        <div className="">
                            <h3 className="mb-1 text-lg text-white font-bold">{getLocalized(company.name, locale)}</h3>
                            <p className="text-[#AAB7CB] text-xs">
                                {company.types?.map((type) => getLocalized(type, locale)).join(", ")}
                            </p>
                        </div>
                    </div>

                    {branch && (
                        <div className={"flex items-center delay-300 my-2"}>
                            <LocationIcon className="text-[#B8C6E3]" />
                            <span className="text-white text-sm ms-1">
                                {getLocalized(branch.governorate?.name, locale)} / {getLocalized(branch.address, locale)}
                            </span>
                        </div>
                    )}

                    {(instagram || facebook || website) && (
                        <div className="">
                            <h4 className="text-xs mb-2">{t("social_media_accounts")}</h4>

                            <div className="my-2 border-t border-b border-white/6 flex items-center gap-1 text-[#B8C6E3] *:transition-all *:h-10">
                                {instagram && (
                                    <Link target="_blank" href={instagram} className="flex-1 grid place-items-center border-e border-white/10 hover:bg-white/5">
                                        <InstagramIcon />
                                    </Link>
                                )}
                                {facebook && (
                                    <Link target="_blank" href={facebook} className="flex-1 grid place-items-center border-e border-white/10 hover:bg-white/5">
                                        <FacebookIcon />
                                    </Link>
                                )}
                                {website && (
                                    <Link target="_blank" href={website} className="flex-1 grid place-items-center border-white/10 hover:bg-white/5">
                                        <LinkIcon className="size-5.5" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex gap-4 mt-4">
                        {company.phone && (
                            <Button className="flex-1 rounded-2xl py-3" variant={"secondary"} asChild>
                                <a href={`tel:${company.phone}`}>
                                    <PhoneCallIcon className="size-6" />
                                    <span>{t("call")}</span>
                                </a>
                            </Button>
                        )}
                        {branch?.location && (
                            <Button className="min-w-max rounded-2xl px-4! py-3" variant={"blur"} asChild>
                                <a href={branch.location} target="_blank">
                                    <MapIcon className="size-6" />
                                    <span>{t("show_branch")}</span>
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
