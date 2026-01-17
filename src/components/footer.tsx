import { Logo, MemLogo } from "@/media";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FooterSectionTitle from "./footer-section-title";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, LinkedInIcon, WhatsappIcon, EmailIcon } from "@/assets/icons";

export default function Footer() {
    const t = useTranslations("footer");

    const links = [
        { label: t("links.home"), href: "/" },
        { label: t("links.about_isnad"), href: "/about" },
        { label: t("links.contact_us"), href: "/contact" },
        { label: t("links.developers"), href: "/developers" },
        { label: t("links.projects"), href: "/projects" },
        { label: t("links.companies"), href: "/companies" },
    ];

    const socials = [
        { label: "Instagram", href: "https://www.instagram.com/isnad.iq/", icon: InstagramIcon },
        { label: "Facebook", href: "https://www.facebook.com/isnad.iq?mibextid=LQQJ4d", icon: FacebookIcon },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/isnad-real-estate/", icon: LinkedInIcon },
        { label: "Whatsapp", href: "https://wa.me/07863036303", icon: WhatsappIcon },
        { label: "Email", href: "mailto:info@isnad-iq.com", icon: EmailIcon },
    ];

    return (
        <footer className="w-full bg-primary px-4 md:px-8 lg:px-16 py-12 flex flex-col items-center justify-center overflow-hidden text-white relative mt-16">
            <Image
                src="/images/footer-image.png"
                alt=""
                width={1430}
                height={370}
                className="absolute w-full h-full pointer-events-none opacity-30"
            />

            <div className="max-w-360 mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-10">
                            <Image className="w-28" src={Logo} alt="Logo" />
                            <h1 className="text-[32px]">{t("slogan")}</h1>
                        </div>

                        <div className="space-y-4">
                            <FooterSectionTitle text={t("page_links")} />

                            <div className="grid grid-cols-3 gap-2">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm text-center rounded-[48px] py-2.75 px-4 opacity-100 text-white bg-white/5 hover:bg-white/10 min-w-full lg:min-w-31.5 cursor-pointer transition-colors duration-300 flex items-center justify-center"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="space-y-2 mb-8">
                            <FooterSectionTitle text={t("social_media")} />
                            <div className="flex gap-2 mt-3">
                                {socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <Link
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="w-14.5 h-12 flex items-center justify-center rounded-[32px] bg-white/5 hover:bg-white/10 transition-colors duration-300 p-[12px_16px] opacity-100"
                                        >
                                            <Icon width={24} height={24} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <FooterSectionTitle text={t("contact")} />

                            <div className="text-end" dir="ltr">
                                <h1 className="text-[#97A8BF] w-full">07863036303</h1>
                                <h1 className="text-[#97A8BF] w-full">info@isnad-iq.com</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col">
                    <div
                        className="h-0.5 mb-6"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0.01%, rgba(255, 255, 255, 0.2) 48.09%, rgba(255, 255, 255, 0) 100.01%)",
                        }}
                    ></div>

                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center">
                            <Image src={MemLogo} alt="Mem Logo" />
                        </div>

                        <small dir="ltr">{t("copyright")}</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
