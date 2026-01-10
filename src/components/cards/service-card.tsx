import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
    className?: string;
    image: string;
    title: string;
    services: string[];
}

export default function ServiceCard({ className, services }: Partial<Props>) {
    return (
        <article
            className={cn("ltr:rotate-14 rtl:-rotate-14 h-full w-82.5 group border border-transparent relative overflow-hidden group", className)}
            style={{
                background: "linear-gradient(180.16deg, rgba(8, 24, 47, 0) 0.14%, rgba(8, 24, 47, 0.466346) 65.18%, #040C19 87.98%)",
            }}
        >
            <Image height={1155} width={334} src={"/images/fallback/71e321d176682a54ad86351ef39fc201aa17a56a.png"} className="size-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300" alt={""} />

            <div className="absolute inset-0 pointer-events-none size-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white"
            style={{
                boxShadow: "0px 4px 60px 8px #FFFFFFB2 inset",
                background: "linear-gradient(180.16deg, rgba(8, 24, 47, 0) 0.14%, rgba(8, 24, 47, 0.466346) 65.18%, #08182F 87.98%)",
            }}
            ></div>

            <div className="absolute bottom-16 left-0 ltr:-rotate-14 rtl:rotate-14 w-full p-6 z-20">
                <h3 className="text-[22px] max-w-60">دايز للاثاث Daze Furniture</h3>
                <p>{services?.join(", ") ?? "غرف نوم، صالات، سفرة، أثاث مكتبي، تفصيل حسب الطلب"}</p>
            </div>
        </article>
    );
}
