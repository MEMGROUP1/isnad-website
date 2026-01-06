import { Logo } from "@/media";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    const t = useTranslations("nav");

    const links = [
        { href: "#", label: t("links.home") },
        { href: "#", label: t("links.about") },
        { href: "#developers", label: t("links.developers") },
        { href: "#projects", label: t("links.projects") },
        { href: "#companies", label: t("links.companies") },
    ];

    return (
        <nav className="max-w-[90vw] w-full flex justify-center items-stretch mx-auto py-4">
            <div className="flex items-center gap-8">
                <Image src={Logo} alt="Logo" />

                <Select>
                    <SelectTrigger
                        size="auto"
                        className="bg-white/5 backdrop-blur-2xl rounded-full data-placeholder:text-white border-white/10 px-6! py-2.5!"
                    >
                        <SelectValue placeholder="IQ" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="IQ">IQ</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="bg-[#08182F7A] rounded-full px-1 py-0.75 flex items-center gap-6 mx-auto border border-white/5 h-full">
                {links.map((link) => (
                    <Link
                        key={link.href + link.label}
                        href={link.href}
                        className="block border border-white/15 bg-white/15 px-5 py-2.5 rounded-full hover:bg-white/25 transition-colors h-full text-white"
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
