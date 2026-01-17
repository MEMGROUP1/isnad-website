"use client";

import { Logo } from "@/media";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Link, usePathname } from "@/i18n/routing";
import BurgerMenu from "./burger-menu";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
    const t = useTranslations("nav");
    const pathname = usePathname();

    const links = [
        { href: "/", label: t("links.home") },
        { href: "/about", label: t("links.about") },
        { href: "/developers", label: t("links.developers") },
        { href: "/projects", label: t("links.projects") },
        { href: "/companies", label: t("links.companies") },
    ];

    return (
        <nav className="max-w-360 w-full flex justify-between items-stretch mx-auto py-4 px-4 xl:px-0">
            <div className="flex items-center gap-8">
                <BurgerMenu />

                <Image src={Logo} alt="Logo" />

                <div className="hidden lg:block">
                    <LanguageSwitcher />
                </div>
            </div>

            <div className="bg-[#08182F7A] rounded-full px-1 py-0.75 hidden lg:flex items-center gap-4 mx-auto border border-white/5 h-full backdrop-blur-md">
                {links.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href + link.label}
                        data-active={pathname.endsWith(link.href)}
                        className="block border border-transparent px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors h-full text-white data-[active=true]:border-white/15 data-[active=true]:bg-white/15"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="">
                <Button variant={"white"} className="rounded-full h-full px-6 py-2.5">
                    {t("contact")}
                </Button>
            </div>
        </nav>
    );
}
