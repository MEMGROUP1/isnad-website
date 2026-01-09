import { cn } from "@/lib/utils";
import { Location } from "./types";
import { MapPinIcon } from "lucide-react";

interface ProjectMapProps {
    location?: Location;
    title: string;
    className?: string;
}

export function ProjectMap({ location, title, className }: ProjectMapProps) {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
             <div className="flex items-center gap-2 text-white/80">
                <MapPinIcon className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">الموقع على الخريطة</span>
            </div>
            
            <div className="w-full h-64 rounded-3xl overflow-hidden relative bg-secondary-foreground/10 border border-white/10 group">
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                     <div className="text-center p-6">
                        <MapPinIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h4 className="text-white font-medium">{title}</h4>
                        <p className="text-white/50 text-xs mt-1">Map Component Placeholder</p>
                     </div>
                </div>
            </div>
        </div>
    )
}
