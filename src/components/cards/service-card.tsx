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
            className={cn("h-full group border border-transparent relative", className)}
            style={{
                background: "linear-gradient(180.16deg, rgba(8, 24, 47, 0) 0.14%, rgba(8, 24, 47, 0.466346) 65.18%, #040C19 87.98%)",
            }}
        >
            <Image height={1155} width={334} src={""} className="size-full object-cover object-center" alt={""} />

            <div className="absolute bottom-0 left-0 -rotate-14 w-full p-4">
                <h3 className="text-[22px] max-w-60">دايز للاثاث Daze Furniture</h3>
                <p>{services?.join(", ") ?? "غرف نوم، صالات، سفرة، أثاث مكتبي، تفصيل حسب الطلب"}</p>
            </div>
        </article>
    );
}
