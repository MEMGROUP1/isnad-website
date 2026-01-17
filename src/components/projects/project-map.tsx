import { cn } from "@/lib/utils";
import { Location } from "./types";

interface ProjectMapProps {
    location?: Location;
    title: string;
    className?: string;
}

export function ProjectMap({ location, className }: ProjectMapProps) {
    if (!location) return null;

    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <div className="h-100 border border-white/10 rounded-2xl overflow-hidden w-full aspect-video">
                <iframe
                    src={location}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
