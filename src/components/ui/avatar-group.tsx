import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarGroupProps {
    images: string[];
    totalCount?: number;
    max?: number;
    className?: string;
}

export function AvatarGroup({ images, totalCount = 0, max = 5, className }: AvatarGroupProps) {
    const count = totalCount || images.length;
    const visibleImages = count > max ? images.slice(0, max - 1) : images.slice(0, max);
    const remainingCount = count - visibleImages.length;

    return (
        <div className={cn("flex", className)}>
            {visibleImages.map((src, index) => (
                <div
                    key={index}
                    className="relative block size-9 md:size-10 rounded-full -me-4 last-of-type:me-0 bg-white border border-gray-200 ring ring-white/10 overflow-hidden"
                >
                    <Image src={src} alt="" fill className="object-cover" />
                </div>
            ))}
            {remainingCount > 0 && (
                <div className="relative flex items-center justify-center size-9 md:size-10 rounded-full -me-4 last-of-type:me-0 bg-white border border-gray-200 ring ring-white/10 text-xs font-bold text-secondary">
                    {remainingCount}+
                </div>
            )}
        </div>
    );
}
