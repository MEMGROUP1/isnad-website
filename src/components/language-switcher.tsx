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
            <SelectTrigger className="w-30">
                <SelectValue placeholder={t("language")} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="en">English</SelectItem>
            </SelectContent>
        </Select>
    );
}
