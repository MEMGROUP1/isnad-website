"use client";

import { Logo } from "@/media";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Link, usePathname } from "@/i18n/routing";
import BurgerMenu from "./burger-menu";

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
        <nav className="max-w-360 w-full flex justify-between items-stretch mx-auto py-4">
            <div className="flex items-center gap-8">
                <BurgerMenu />

                <Image src={Logo} alt="Logo" />

                <Select>
                    <SelectTrigger
                        size="auto"
                        className="bg-white/5 backdrop-blur-2xl rounded-full data-placeholder:text-white border-white/10 px-6! py-2.5! hidden lg:flex"
                    >
                        <SelectValue placeholder="IQ" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="IQ">IQ</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="bg-[#08182F7A] rounded-full px-1 py-0.75 hidden lg:flex items-center gap-6 mx-auto border border-white/5 h-full">
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
