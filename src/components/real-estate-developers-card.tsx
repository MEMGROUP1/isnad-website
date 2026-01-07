"use client";

import { ArrowRightIcon } from "@/assets/icons";
import { DevelopersAvatarFallback, DevelopersImageFallback } from "@/media";
import Image from "next/image";

/* eslint-disable @typescript-eslint/no-unused-vars */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {
    // TODO: Define props here
}

export default function RealEstateDevelopersCard() {
    return (
        <article className="flex flex-col gap-3 px-2 py-3 rounded-3xl border border-white/8">
            <div className="flex items-stretch gap-2">
                {/* avatar */}
                <div className="border border-image-[linear-gradient(208.75deg,_#8FABDA_-5.54%,_#FF924F_97.09%)_1] size-8.25 rounded-full p-px overflow-hidden">
                    <Image src={DevelopersAvatarFallback} alt={""} className="scale-105" />
                </div>

                <div className="">
                    <h4 className="text-white">FINآفلق جديدة للتطوير</h4>
                    <div className="flex items-center text-sm">
                        <span className="text-[#B8C6E3]">المجمعات: 6</span>
                        <span className="mx-2 text-[#132032]">|</span>
                        <span className="text-[#B8C6E3]">المشاريع: 12</span>
                    </div>
                </div>
            </div>

            <div className="h-58.75 rounded-xl overflow-hidden relative">
                <Image src={DevelopersImageFallback} className="size-full object-cover object-center" alt={""} />

                <div className="w-10 h-7.25 px-2 py-3 gap-2 rounded-[44px] absolute top-4 end-4">
                    <ArrowRightIcon className="text-primary rotate-45" />
                </div>
            </div>

            <div className="text-white">تطمح لتقديم مشاريع تحقق الاستدامة البيئية وتلبي توقعات السكان.</div>
        </article>
    );
}
