"use client";

import { BurgerMenuIcon, ChevronIcon, EmailIcon, FacebookIcon, InstagramIcon, LinkedInIcon, PlanetIcon, WhatsappIcon, XIcon } from "@/assets/icons";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Logo } from "@/media";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";

export default function BurgerMenu() {
    const [open, setOpen] = useState(false);
    const t = useTranslations();
    const pathname = usePathname();
    const [, startTransition] = useTransition();

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    // Close menu on route change
    useEffect(() => {
        startTransition(() => {
            setOpen(false);
        });
    }, [pathname]);

    const links = [
        { href: "/", label: t("nav.links.home") },
        { href: "/about", label: t("nav.links.about") },
        { href: "/developers", label: t("nav.links.developers") },
        { href: "/projects", label: t("nav.links.projects") },
        { href: "/companies", label: t("nav.links.companies") },
    ];

    const socialLinks = [
        { icon: EmailIcon, href: "#" },
        { icon: WhatsappIcon, href: "#" },
        { icon: LinkedInIcon, href: "#" },
        { icon: FacebookIcon, href: "#" },
        { icon: InstagramIcon, href: "#" },
    ];

    const toggleLanguage = () => {
        // Implement language toggle logic here if needed
        // For now, it just reloads or redirects to the other locale
        // Assuming current is 'ar' based on the image text
    };

    return (
        <>
            <Button variant={"blur"} className="lg:hidden py-2.5! bg-primary/50 hover:bg-primary/60" onClick={() => setOpen(true)}>
                <span className="sr-only">Open menu</span>
                <BurgerMenuIcon />
            </Button>

            {/* Overlay & Menu */}
            {open && (
                <div className="fixed inset-0 z-50 flex flex-col bg-[#162032]/95 backdrop-blur-xl animate-in slide-in-from-right-10 fade-in duration-300">
                    {/* Header */}
                    <div className="flex flex-row-reverse items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <Image src={Logo} alt="Logo" className="h-10 w-auto" />
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                        >
                            <div className="flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                <XIcon className="size-5" />
                            </div>
                            <span className="text-sm">{t("common.close")}</span>
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex flex-col justify-center px-6 gap-6 mt-16">
                        {links.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "group flex items-center justify-between gap-4 text-2xl text-[#B8C6E3] transition-all duration-300 py-2",
                                    pathname === link.href && "text-white"
                                )}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span>{link.label}</span>
                                <ChevronIcon className="" />
                            </Link>
                        ))}
                    </div>

                    {/* Language Switcher (Inside list or separate) */}
                    <div className="flex px-6 my-14">
                        <button
                            className="group flex items-center justify-between gap-4 text-lg md:text-xl font-normal transition-all w-full"
                            onClick={toggleLanguage}
                        >
                            <div className="flex items-center gap-3">
                                <PlanetIcon className="size-6" />
                                <div className="text-[#B8C6E3]">
                                    العربية <span className="text-secondary">AR</span>
                                </div>
                            </div>
                            <ChevronIcon className="" />
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="p-8 space-y-4">
                        <div className="flex">
                            <h3 className="text-white/80 text-lg font-medium flex flex-row-reverse items-center gap-2 after:content-[''] after:size-2 after:rounded-full after:bg-secondary">
                                {t("common.social_media_accounts")}
                            </h3>
                        </div>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="flex items-center justify-center w-14 h-12 rounded-full bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                                >
                                    <social.icon className="size-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Add 'close' to common translations if missing, or use loose string temporarily
