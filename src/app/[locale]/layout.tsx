import Footer from "@/components/footer";
import { Locale } from "@/i18n/request";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";

const expoArabic = localFont({
    src: [
        {
            path: "../../../public/font/Expo Arabic/expo-arabic-light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../public/font/Expo Arabic/expo-arabic-book.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/font/Expo Arabic/expo-arabic-medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../public/font/Expo Arabic/expo-arabic-semibold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../public/font/Expo Arabic/expo-arabic-bold.otf",
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
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body className={`${expoArabic.variable} font-sans antialiased bg-primary`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
