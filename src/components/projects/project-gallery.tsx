import { cn } from "@/lib/utils";
import { ComplexFile } from "./types";
import { CompaniesImageFallback } from "@/media";
import Image from "next/image";

interface ProjectGalleryProps {
    files?: ComplexFile[];
    className?: string;
}

export function ProjectGallery({ files = [], className }: ProjectGalleryProps) {
    const mainImage = files[0]?.path || CompaniesImageFallback;

    return (
        <div className={cn("w-full", className)}>
             <div className="relative aspect-video w-full rounded-2xl overflow-hidden group border border-white/10">
                 <Image 
                    src={mainImage} 
                    alt="Project Gallery" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                 {/* Count Badge */}
                 <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs border border-white/10 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                     <span>{files.length > 0 ? files.length : 0} photos</span>
                 </div>

                 {/* Navigation Placeholders */}
                 <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md border border-white/10 transition-colors">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                 </button>
                 <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md border border-white/10 transition-colors">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                 </button>
             </div>
        </div>
    )
}
