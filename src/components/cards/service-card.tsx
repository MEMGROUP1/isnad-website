"use client";

import { useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
    className?: string;
    image: string;
    title: string;
    services: string[];
    link?: string;
}

export default function ServiceCard({ className, services, title, image, link }: Partial<Props>) {
    const { push } = useRouter();

    return (
        <article
            className={cn(
                "ltr:rotate-14 rtl:-rotate-14 h-full w-82.5 group border border-transparent relative overflow-hidden group cursor-pointer",
                className,
            )}
            style={{
                background: "linear-gradient(180.16deg, rgba(8, 24, 47, 0) 0.14%, rgba(8, 24, 47, 0.466346) 65.18%, #040C19 87.98%)",
            }}
            onClick={() => (link ? push(link) : push("/companies"))}
        >
            <Image
                height={1155}
                width={1155}
                src={image ?? "/images/fallback/71e321d176682a54ad86351ef39fc201aa17a56a.png"}
                className="size-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                alt={title ?? ""}
            />

            <div
                className="absolute inset-0 pointer-events-none size-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white"
                style={{
                    boxShadow: "0px 4px 60px 8px #FFFFFFB2 inset",
                    background: "linear-gradient(180.16deg, rgba(8, 24, 47, 0) 0.14%, rgba(8, 24, 47, 0.466346) 65.18%, #08182F 87.98%)",
                }}
            ></div>

            <div className="absolute bottom-24 left-0 ltr:-rotate-14 rtl:rotate-14 w-full p-6 z-20">
                <h3 className="text-[22px] max-w-60 line-clamp-2">{title ?? "دايز للاثاث Daze Furniture"}</h3>
                <p className="line-clamp-2 text-sm text-gray-300 mt-2">
                    {services?.join(", ") ?? "غرف نوم، صالات، سفرة، أثاث مكتبي، تفصيل حسب الطلب"}
                </p>
            </div>
        </article>
    );
}
