"use client";

import { ChevronIcon } from "@/assets/icons";
import Image from "next/image";
import { Complex } from "./types";

interface ProjectDeveloperInfoProps {
    developer: NonNullable<Complex["developer"]>;
    startingPrice?: number;
}

export function ProjectDeveloperInfo({ developer }: ProjectDeveloperInfoProps) {
    const locale = "ar"; // Default

    return (
        <div className="rounded-2xl p-3 bg-white/5 flex items-center justify-between shadow-lg border border-white/10 h-20 w-full mt-2 cursor-pointer hover:bg-[#08182F]/80 transition-all">
            <div className="flex items-center gap-3">
                {/* Developer Logo */}
                <div className="w-12 h-12 bg-[#08182F] border border-white/10 rounded-lg flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden">
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-[7px] text-[#D4A056] leading-tight">
                        {developer.logo ? (
                            <Image
                                src={developer.logo}
                                alt={developer.name[locale]}
                                width={32}
                                height={32}
                                className="object-contain" // Use object-contain for logos
                            />
                        ) : (
                            <>
                                <span>إسناد</span>
                                <span className="uppercase tracking-widest text-[5px] text-white">ISNAD</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-0.5 text-right h-full">
                    <h4 className="text-white text-sm">{developer.name[locale]} المطور العقاري</h4>
                    <div className="flex items-center gap-2 text-[10px] text-[#B8C6E3] font-light whitespace-nowrap">
                        <span>{developer.complexes_count} مجمعات</span>
                        <span className="w-0.5 h-3 rounded-full bg-white/30"></span>
                        <span>{developer.properties_count} عقار</span>
                    </div>
                </div>
            </div>

            <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm font-medium pl-1 group me-1">
                <span className="pb-0.5">عرض</span>
                <ChevronIcon className="size-6" />
            </button>
        </div>
    );
}
