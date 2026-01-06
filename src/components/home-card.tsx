"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
    className?: string;
    // TODO: Add props
}

export default function HomeCard({ className }: Props) {
    // eslint-disable-next-line react-hooks/purity
    const [randomNumber] = useState(Math.floor(Math.random() * 1000));

    return (
        <article
            className={cn("text-white relative w-75 h-100 rounded-md overflow-hidden flex flex-col", className)}
            style={{ background: "linear-gradient(180deg, rgba(25, 25, 25, 0) 41.78%, rgba(8, 24, 47, 0.9) 84.1%);" }}
        >
            <Image
                src="/images/home/hero/home-hero.jpg"
                width={1093}
                height={720}
                alt=""
                className="w-full object-cover rounded-lg absolute inset-0 size-full -z-10"
            />

            <div className="flex gap-2 items-center rounded-s-full bg-[#08182FBF] py-1.5 px-4 absolute top-4 left-0">
                <span>عرض الشركات</span>
                <ArrowLeft size={16} />
            </div>

            <div className="mt-auto p-4">
                <div className="flex items-center gap-2 mb-3.5">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index + randomNumber}
                                className="block size-10 rounded-full -me-4 last-of-type:me-0 bg-white border border-gray-200 ring ring-white/10"
                            ></span>
                        ))}
                    </div>

                    <div className="">
                        <div className="text-[32px] leading-8">12+</div>
                        <div className="text-sm">مطور عقاري</div>
                    </div>
                </div>

                <div className="text-sm">مطوّر عقاري متخصص في إنشاء المجمعات السكنية والمشاريع الاستثمارية الحديثة</div>
            </div>
        </article>
    );
}
