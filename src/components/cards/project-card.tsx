import { LocationIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { CompaniesImageFallback, Logo } from "@/media";
import { PlusIcon } from "lucide-react";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLElement> {
    disableHoverEffect?: boolean;
}

export default function ProjectCard({ className, disableHoverEffect = false, ...props }: Props) {
    return (
        <article
            className={cn("relative rounded-3xl overflow-hidden h-80 cursor-pointer isolate w-full", !disableHoverEffect && "group", className)}
            {...props}
        >
            {/* Background Image */}
            <Image
                src={CompaniesImageFallback}
                className={cn(
                    "size-full object-cover transition-transform duration-700 ease-out",
                    disableHoverEffect ? "scale-100" : "group-hover:scale-105"
                )}
                alt="Project Image"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
                style={{
                    background: "linear-gradient(180deg, rgba(8, 24, 47, 0) 0%, rgba(8, 24, 47, 0.9) 100%)",
                }}
            />

            {/* Top Left Badge (End in RTL) */}
            <div className="absolute top-4 end-4 z-20">
                <div className="bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1.5 rounded-full flex items-center justify-center font-medium">
                    مكتمل
                </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 start-0 w-full p-5 z-20 text-white">
                <div className="flex items-end gap-2 border-b border-white/10 pb-3">
                    {/* Logo & Plus Button */}
                    <div className="relative shrink-0">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center outline-2 outline-white/10 relative overflow-hidden">
                            <Image src={Logo} alt="" className="w-10 h-auto text-primary" />
                        </div>
                        {/* Plus Button */}
                        <div className="absolute bottom-0 start-0 border-2 border-primary translate-1 size-6 bg-[#F5F5F7] rounded-full flex items-center justify-center z-10 cursor-pointer hover:bg-white transition-colors">
                            <PlusIcon className="size-4 text-secondary" />
                        </div>
                    </div>

                    {/* Title & Type */}
                    <div>
                        <h3 className="text-lg mb-1 text-[#FBF5EF]">المجمع الذهبي للأبراج</h3>
                        <div className="text-[#EEF5FF] text-sm">عقار سكني 12.2K</div>
                    </div>
                </div>

                {/* Price */}
                <div className="text-sm text-[#EEF5FF] my-2" dir="rtl">
                    من 200 مليون - 300 مليون IQD
                </div>

                {/* Location */}
                <div className="flex items-center text-[#EEF5FF] text-sm gap-1">
                    <LocationIcon className="size-5 shrink-0" />
                    <span>بغداد/اليرموك/شارع نادي الصيد</span>
                </div>
            </div>
        </article>
    );
}
