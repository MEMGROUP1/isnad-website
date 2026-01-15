// Placeholder component until the real one is implemented
import ProjectCard from "@/components/cards/project-card";

export function RelatedProjects() {
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
