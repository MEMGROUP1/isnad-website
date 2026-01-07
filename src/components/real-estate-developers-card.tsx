"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ArrowRightIcon } from "@/assets/icons";
import { DevelopersAvatarFallback, DevelopersImageFallback } from "@/media";
import Image from "next/image";


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {
    // TODO: Define props here
}

export default function RealEstateDevelopersCard() {
    return (
        <article className="flex flex-col gap-3 px-2 py-3 rounded-3xl border border-white/8 group cursor-pointer transition-colors duration-300 hover:border-white/20 hover:bg-white/5">
            <div className="flex items-center gap-2">
                {/* avatar */}
                <div
                    className="size-8.25 rounded-full p-px overflow-hidden shrink-0"
                    style={{
                        background: "linear-gradient(208.75deg, #8FABDA -5.54%, #FF924F 97.09%)",
                    }}
                >
                    <div className="p-px rounded-full bg-primary size-full">
                        <Image src={DevelopersAvatarFallback} alt="" className="rounded-full size-full object-cover" />
                    </div>
                </div>

                <div className="">
                    <h4 className="text-white transition-colors duration-300">
                        FINآفلق جديدة للتطوير
                    </h4>
                    <div className="flex items-center text-xs">
                        <span className="text-[#B8C6E3]">المجمعات: 6</span>
                        <span className="mx-2 text-[#132032]">|</span>
                        <span className="text-[#B8C6E3]">المشاريع: 12</span>
                    </div>
                </div>
            </div>

            <div className="h-58.75 rounded-xl overflow-hidden relative isolate">
                <Image
                    src={DevelopersImageFallback}
                    className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    alt=""
                />

                <div className="size-10 bg-white/90 backdrop-blur-sm rounded-full absolute top-4 end-4 flex items-center justify-center transition-all duration-300 group-hover:bg-primary shadow-sm hover:scale-110">
                    <ArrowRightIcon className="text-primary rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:text-white" />
                </div>
            </div>

            <div className="text-white text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                تطمح لتقديم مشاريع تحقق الاستدامة البيئية وتلبي توقعات السكان.
            </div>
        </article>
    );
}
