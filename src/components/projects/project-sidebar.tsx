import { cn } from "@/lib/utils";
import { CompaniesImageFallback } from "@/media";
import { MapPinIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { Complex } from "./types";

interface ProjectSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    complex: Complex;
}

export function ProjectSidebar({ complex, className, ...props }: ProjectSidebarProps) {
    const locale = "ar"; // Default or get from context

    return (
        <aside
            className={cn(
                "relative w-full xl:w-100 shrink-0 rounded-3xl overflow-hidden bg-secondary text-white flex flex-col justify-end pt-37.5",
                className
            )}
            {...props}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src={complex.background_img || CompaniesImageFallback} alt={complex.name[locale]} fill className="object-cover" />
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.26) 30.77%, rgba(5, 15, 30, 0.90) 58.5%, #08182F 100%)`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center gap-6 px-6 pb-6 pt-6">
                {/* Logo & Name */}
                <div className="flex flex-col items-center gap-4 w-full">
                    {/* Logo Ring */}
                    <div className="w-20 h-20 rounded-full p-0.75 border-[3px] border-white/10 bg-[#08182F] overflow-hidden">
                        <Image
                            src={complex.logo || "/images/city-icon.png"}
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    {/* Name */}
                    <h2 className="text-xl font-normal text-center">{complex.name[locale] || complex.name.en}</h2>

                    {/* Meta Info (Location) */}
                    <div className="flex flex-col items-center w-full border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2 text-sm font-light opacity-80">
                            <MapPinIcon className="w-5 h-5 text-white" strokeWidth={1.5} />
                            <span>{complex.governorate.name[locale] || complex.governorate.name.en}</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex gap-3 w-full">
                        <button
                            onClick={() => window.open(`tel:6303`, "_self")}
                            className="flex-1 h-12 flex items-center justify-center gap-2 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors"
                        >
                            <PhoneCallIcon className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => window.open(`https://wa.me/9647874466303`, "_blank")}
                            className="flex-1 h-12 flex items-center justify-center gap-2 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors"
                        >
                            <div className="w-5 h-5">
                                {/* Custom Whatsapp SVG or Lucide replacement. Using MessageCircle for now if SVG not available, or copy SVG from snippet */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-full h-full"
                                >
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
