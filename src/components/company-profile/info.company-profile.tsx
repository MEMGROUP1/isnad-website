import { InstagramIcon, LinkedinIcon2, LinkIcon, LocationIcon, MapIcon, PhoneCallIcon, YoutubeIcon } from "@/assets/icons";
import { CompaniesImageFallback, DevelopersAvatarFallback } from "@/media";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";

export default function CompanyProfileInfo() {
    const t = useTranslations("common");

    return (
        <div className="md:min-w-106 relative">
            <div className="flex flex-col border overflow-hidden border-[#212F43] rounded-2xl p-4 z-10 min-h-110 sticky top-4 left-0">
                <Image
                    className="absolute inset-0 size-full pointer-events-none"
                    src={CompaniesImageFallback}
                    alt="Background image for Daze Furniture company profile"
                />

                <div className="bg-linear-180 from-black/26 from-30.77% via-[#050F1E] via-58.5% to-[#08182F] to-100% absolute inset-0 size-full pointer-events-none opacity-90"></div>

                <div className="mt-auto relative z-10">
                    <div className="flex items-center gap-2 border-b border-white/20 pb-2 mb-3">
                        <Avatar url={DevelopersAvatarFallback} alt="" />

                        <div className="">
                            <h3 className="mb-1 text-lg text-white font-bold">دايز للاثاث Daze Furniture</h3>
                            <p className="text-[#AAB7CB] text-xs">للمفروشات المنزلية.</p>
                        </div>
                    </div>

                    <div className={"flex items-center delay-300 my-2"}>
                        <LocationIcon className="text-[#B8C6E3]" />
                        <span className="text-white text-sm ms-1">بغداد/اليرموك/شارع نادي الصيد</span>
                    </div>

                    <div className="">
                        <h4 className="text-xs mb-2">{t("social_media_accounts")}</h4>

                        <div className="my-2 border-t border-b border-white/6 flex items-center *:flex-1 *:grid *:place-items-center *:p-2 text-[#B8C6E3] *:hover:bg-white/5 *:transition-all *:h-10">
                            <Link target="_blank" href={"#"} className="block border-e border-white/10">
                                <InstagramIcon />
                            </Link>
                            <Link target="_blank" href={"#"} className="block border-e border-white/10">
                                <LinkedinIcon2 />
                            </Link>
                            <Link target="_blank" href={"#"} className="block border-e border-white/10">
                                <YoutubeIcon />
                            </Link>
                            <Link target="_blank" href={"#"} className="block border border-transparent">
                                <LinkIcon className="size-5.5" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button className="flex-1 rounded-2xl py-3" variant={"secondary"}>
                            <PhoneCallIcon className="size-6" />
                            <span>{t("call")}</span>
                        </Button>
                        <Button className="min-w-max rounded-2xl px-4! py-3" variant={"blur"}>
                            <MapIcon className="size-6" />
                            <span>{t("show_branch")}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
