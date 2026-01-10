"use client";

import { formatPrice } from "@/lib/utils";
import { Complex } from "./types";

interface ProjectInstallmentProps {
    installment: NonNullable<Complex["installment"]>;
    startingPrice?: number;
    maxPrice?: number;
}

export function ProjectInstallment({ installment, startingPrice = 100000000000, maxPrice = 1000000000 }: ProjectInstallmentProps) {
    if (!installment.min_down_payment || !installment.max_years) return null;

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl">
            <div className="bg-[#08182F] text-white rounded-2xl p-6 flex flex-row items-stretch justify-between relative overflow-hidden shadow-lg border border-white/5 w-full">
                {/* Right Side: Down Payment */}
                <div className="flex-1 flex flex-col items-start gap-1">
                    <span className="text-sm text-[#97A8BF] font-light text-right w-full">مقدمة:</span>
                    <div className="flex items-baseline flex-row-reverse w-full justify-end gap-1.5">
                        <span className="text-sm font-light text-[#97A8BF] transform">من السعر</span>
                        <span className="text-[2.5rem] leading-none text-secondary">{installment.min_down_payment}%</span>
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-px bg-white/10 mx-6 self-stretch" />

                {/* Left Side: Years */}
                <div className="flex-1 flex flex-col items-end gap-1">
                    <span className="text-sm text-[#97A8BF] font-light text-right w-full">تقسيط لغاية</span>
                    <div className="flex items-baseline flex-row-reverse w-full justify-end gap-1.5">
                        <span className="text-sm font-light text-[#97A8BF] transform">سنوات</span>
                        <span className="text-[2.5rem] leading-none text-secondary">{installment.max_years}</span>
                    </div>
                </div>
            </div>

            {/* Price Range Section */}
            <div className="flex flex-col gap-2 px-4 py-3">
                <h3 className="text-white/60 text-xs font-light text-right">رينج الاسعار</h3>

                {/* Starting Price Bar */}
                {startingPrice && (
                    <div className="">
                        <div className="text-right text-gray-200 text-sm font-light">
                            تبدأ الاسعار من <span className="text-white mx-1">{formatPrice(startingPrice)}</span>
                            {maxPrice && (
                                <>
                                    الى <span className="text-white mx-1">{formatPrice(maxPrice)}</span>
                                </>
                            )}
                            د.ع
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
