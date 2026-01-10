"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ComplexFile } from "./types";
import { CompaniesImageFallback } from "@/media";
import Image from "next/image";

interface ProjectGalleryProps {
    files?: ComplexFile[];
    className?: string;
}

export function ProjectGallery({ files = [], className }: ProjectGalleryProps) {
    // Determine images list safely
    const images = (files.length > 0 ? files : [{ path: CompaniesImageFallback, id: -1, type: 'image' }]) as unknown as { id: number; path: string | import("next/image").StaticImageData; type: string }[];
    
    // State for the currently displayed main image
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className={cn("w-full flex flex-col gap-4", className)}>
            {/* Main Active Image */}
            <div className="relative w-full h-75 md:h-100 lg:h-125 rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl group">
                 <Image 
                    key={activeImage.id} // Re-mount image component on change to trigger animation
                    src={activeImage.path} 
                    alt="Project Main View" 
                    fill 
                    className="object-cover animate-in fade-in zoom-in-105 duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
            </div>

            {/* Thumbnail Selection Slider */}
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                {images.map((file) => (
                    <div 
                        key={file.id} 
                        className={cn(
                            "relative h-24 w-36 shrink-0 rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 snap-start",
                            activeImage.id === file.id 
                                ? "border-[#E7A356] ring-2 ring-[#E7A356]/20 opacity-100 scale-105" 
                                : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                        )}
                        onClick={() => setActiveImage(file)}
                    >
                        <Image 
                            src={file.path} 
                            alt="Gallery Thumbnail" 
                            fill 
                            className="object-cover"
                            sizes="150px"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
