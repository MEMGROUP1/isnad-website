import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n/request";

const expoArabic = localFont({
    src: [
        {
            path: "../../../public/font/ExpoArabic-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../public/font/ExpoArabic-Book.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/font/ExpoArabic-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../public/font/ExpoArabic-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../public/font/ExpoArabic-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-expo-arabic",
});

export const metadata: Metadata = {
    title: "Isnad Website",
    description: "Isnad Website",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}>) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body className={`${expoArabic.variable} font-sans antialiased dark`}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
