"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function LanguageSwitcher() {
    const t = useTranslations("nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <Select value={locale} onValueChange={handleLanguageChange}>
            <SelectTrigger
                size="auto"
                className="bg-white/5 backdrop-blur-2xl rounded-full data-placeholder:text-white border-white/10 px-6! py-2.5! uppercase"
            >
                <SelectValue placeholder={locale} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="ar">AR</SelectItem>
                <SelectItem value="en">EN</SelectItem>
            </SelectContent>
        </Select>
    );
}
