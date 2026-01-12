import { cn } from "@/lib/utils";
import { Location } from "./types";

interface ProjectMapProps {
    location?: Location;
    title: string;
    className?: string;
}

export function ProjectMap({ className }: ProjectMapProps) {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <div className="h-100 border border-white/10 rounded-2xl overflow-hidden w-full aspect-video">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1384.3216170856624!2d44.336367581143946!3d33.31655292527544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2siq!4v1768041235634!5m2!1sen!2siq"
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
