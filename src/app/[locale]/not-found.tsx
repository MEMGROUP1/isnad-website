"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { FileQuestion } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("notFound");

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-20 text-center relative overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-5">
                    <span className="text-[12rem] md:text-[20rem] font-black text-white text-center w-full block leading-none">404</span>
                </div>

                <div className="group relative flex items-center justify-center rounded-full bg-secondary/10 p-8 ring-1 ring-secondary/20 transition-all hover:bg-secondary/20 hover:ring-secondary/40 hover:scale-105 duration-300 animate-in fade-in zoom-in z-10">
                    <div className="absolute inset-0 rounded-full bg-secondary/5 blur-xl group-hover:bg-secondary/10 transition-all" />
                    <FileQuestion className="relative size-20 text-secondary" strokeWidth={1.5} />
                </div>

                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 delay-100 duration-500 fill-mode-both z-10 max-w-md mx-auto">
                    <h2 className="text-3xl font-semibold text-white">{t("title")}</h2>
                    <p className="text-white/70 text-lg leading-relaxed">{t("description")}</p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 delay-200 duration-500 fill-mode-both z-10">
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full px-8 h-12 text-base font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/20 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                        <Link href="/">{t("backHome")}</Link>
                    </Button>
                </div>
            </main>
        </div>
    );
}
