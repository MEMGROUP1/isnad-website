"use client";

import { Link } from "@/i18n/routing";
import { AvatarGroup } from "../ui/avatar-group";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface Props {
    className?: string;
    count: number;
    label: string;
    description: string;
    logos: string[];
    backgroundImageUrl: string;
    actionLabel?: string;
    viewButtonPath?: string;
}

export default function HomeCard({ className, count, label, description, logos, backgroundImageUrl, actionLabel = "عرض الشركات", viewButtonPath }: Props) {
    return (
        <article className={cn("text-white relative w-full min-h-100 rounded-md overflow-hidden flex flex-col", className)}>
            <Image
                src={backgroundImageUrl}
                width={1093}
                height={720}
                alt=""
                className="w-full object-cover rounded-lg absolute inset-0 size-full -z-10"
                sizes="(max-width: 1024px) 100vw, 300px"
            />

            <Link
                href={viewButtonPath || "#"}
                className="flex gap-2 items-center rounded-s-full bg-[#08182FBF] py-1.5 px-4 absolute top-4 end-0 cursor-pointer transition-colors hover:bg-[#08182F]"
            >
                <span>{actionLabel}</span>
                <ArrowLeft size={16} className="ltr:-scale-x-100" />
            </Link>

            <div className="mt-auto p-4">
                <div className="flex items-center gap-2 mb-3.5">
                    <AvatarGroup images={logos} totalCount={count} />

                    <div className="">
                        <div className="text-[32px] leading-8" dir="ltr">
                            {count}+
                        </div>
                        <div className="text-sm">{label}</div>
                    </div>
                </div>

                <div className="text-sm line-clamp-2">{description}</div>
            </div>
        </article>
    );
}
