/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/lib/utils";
import { CompaniesImageFallback, Logo } from "@/media"; // Using Logo from media as fallback
import Image from "next/image";
import { useMemo } from "react";
import { Complex } from "./types";
import { LocationIcon, PhoneIcon, WhatsappIcon } from "@/assets/icons";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/request";

interface ProjectSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    complex: Complex;
}

export function ProjectSidebar({ complex, className, ...props }: ProjectSidebarProps) {
    const { locale } = useParams(); // Default

    // Helper to format numbers (e.g. 12200 -> 12.2 K)
    const formatCompactNumber = (num: number) => {
        return new Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(num);
    };

    const formatPrice = (num: number) => {
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(num);
    };

    const developer = complex.developer;
    // Fallbacks if data is missing
    const unitCount = 0;
    // const towerCount = developer?.complexes_count || 0;

    // Price formatting logic - memoized
    const priceString = useMemo(() => {
        const startPrice = complex.starting_price;
        const maxPrice = complex.max_price;
        const priceLabel = locale == "ar" ? "د.ع" : "IQD";

        if (startPrice) {
            if (maxPrice) {
                return `من ${formatPrice(startPrice)} - ${formatPrice(maxPrice)} ${priceLabel}`;
            } else {
                return `من ${formatPrice(startPrice)} ${priceLabel}`;
            }
        }
        return "";
    }, [complex.starting_price, complex.max_price]);

    return (
        <div className={cn("flex flex-col gap-4 w-full xl:w-100 shrink-0", className)} {...props}>
            {/* Main Sidebar Card */}
            <div className="relative w-full h-125 overflow-hidden bg-[#08182F] text-white rounded-2xl shadow-2xl border border-white/5">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image src={complex.background_img || CompaniesImageFallback} alt={complex.name[locale as Locale]} fill className="object-cover" />
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.26) 30.77%, rgba(5, 15, 30, 0.9) 58.5%, #08182F 100%)`,
                        }}
                    />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end">
                    {/* Stats & Logo Row */}
                    <div className="flex items-center justify-between w-full mb-2">
                        {/* Right Side Stat */}
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-lg tracking-wide">{formatCompactNumber(complex.total_units || unitCount)}</span>
                            <span className="text-xs text-[#AAB7CB] font-light mt-1">عقار سكني</span>
                        </div>

                        {/* Center Logo */}
                        <div className="relative -mt-12">
                            {/* Lift it up slightly into image */}
                            <div className="size-20 rounded-full outline-[3px] outline-white/10 bg-[#08182F] overflow-hidden flex items-center justify-center shadow-xl flex-2">
                                <Image
                                    src={developer?.logo || Logo} // Use developer logo or fallback
                                    alt="logo"
                                    width={90}
                                    height={90}
                                    className="object-contain w-16 h-16"
                                />
                            </div>
                        </div>

                        {/* Left Side Stat */}
                        <div className="flex flex-col items-center flex-1">
                            {/* <span className="text-lg tracking-wide">{towerCount}+</span>
                            <span className="text-xs text-[#AAB7CB] font-light mt-1 text-center min-w-max">اكثر من {towerCount} ابراج سكنية</span> */}
                        </div>
                    </div>

                    {/* Project Name */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl text-white mb-4 leading-relaxed">{complex.name[locale as Locale] || complex.name.en}</h2>
                    </div>

                    {/* Info Block (Location & Price) */}
                    <div className="flex flex-col gap-4 mb-6 mx-6">
                        {/* Location */}
                        <div className="flex items-center gap-2">
                            <LocationIcon className="w-6 h-6 text-white shrink-0" strokeWidth={1.5} />
                            <span className="text-base font-normal text-white">{complex.governorate.name[locale as Locale]}</span>
                        </div>
                        {/* Price */}
                        {priceString && (
                            <div className="flex items-center gap-2 text-right mt-1">
                                <span className="text-lg font-light text-white dir-rtl">{priceString}</span>
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="mx-6 mb-6">
                        <div className="w-full h-px bg-white/10" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 w-full px-6 mb-4">
                        <button
                            onClick={() => window.open(`tel:07863036303`, "_self")}
                            className="flex-1 h-14 rounded-[2rem] border border-white/10 bg-[#16263D] hover:bg-[#1f304d] transition-colors flex items-center justify-center group"
                        >
                            <PhoneIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={() => window.open(`https://wa.me/07863036303`, "_blank")}
                            className="flex-1 h-14 rounded-[2rem] border border-white/10 bg-[#16263D] hover:bg-[#1f304d] transition-colors flex items-center justify-center group"
                        >
                            {/* Whatsapp SVG */}
                            <div className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
                                <WhatsappIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
