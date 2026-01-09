// Placeholder component until the real one is implemented
import Section from "@/components/section";
import { Complex } from "./types";
import ProjectCard from "@/components/cards/project-card";

interface RelatedProjectsProps {
    currentProject?: Complex;
}
export function RelatedProjects({ currentProject }: RelatedProjectsProps) {
    return (
        <div className="w-full flex-col flex gap-8 py-10 border-t border-white/10 mt-10">
            <h3 className="text-2xl text-white font-medium px-4">مشاريع مشابهة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {Array.from({ length: 2 }).map((_, index) => (
                    <ProjectCard key={index + "related"} />
                ))}
            </div>
        </div>
    )
}
