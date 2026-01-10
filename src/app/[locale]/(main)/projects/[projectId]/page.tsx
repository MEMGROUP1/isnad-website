"use client";

import { ArrowRight2Icon } from "@/assets/icons";
import { ProjectDescription } from "@/components/projects/project-description";
import { ProjectFeatures } from "@/components/projects/project-features";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectMap } from "@/components/projects/project-map";
import { ProjectSidebar } from "@/components/projects/project-sidebar";
import { RelatedProjects } from "@/components/projects/related-projects";
import { Complex } from "@/components/projects/types";
import Section from "@/components/section";
import Link from "next/link";

// Mock Data for demonstration
const mockComplex: Complex = {
    id: "1",
    name: { ar: "المجمع الذهبي للأبراج", en: "Golden Tower Complex" },
    description: {
        ar: "مجمع اليرموك هو مجمع سكني حديث مصمم بمعايير عالية ليوفر بيئة معيشية راقية وآمنة وبنية تحتية متطورة. يتميز بتصميم عصري يجمع بين المساحات الخضراء الواسعة والمرافق المتكاملة مما يجعل الحياة أكثر رفاهية.",
        en: "Al-Yarmouk complex is a modern residential complex designed with high standards to provide a classy and safe living environment. It features a modern design combining wide green spaces and integrated facilities.",
    },
    background_img: "/images/home/hero/home-hero.jpg",
    logo: "",
    governorate: { id: 1, name: { ar: "بغداد / اليرموك", en: "Baghdad / Yarmouk" } },
    location: { lat: 33.3152, lng: 44.3661 },
    files: [
        { id: 1, path: "/images/home/hero/home-hero.jpg", type: "image" },
        { id: 2, path: "/images/home/hero/home-hero.jpg", type: "image" },
    ],
};

export default function ProjectPage() {
    // const t = useTranslations('common');
    // const params = useParams();
    // In a real scenario, fetch data using params.projectId

    // Mock loading state
    const isLoading = false;
    const error = null;

    if (isLoading) {
        return (
            <Section className="py-32 flex justify-center items-center h-screen">
                <div className="text-white">Loading...</div>
            </Section>
        );
    }

    if (error) {
        return (
            <Section className="py-32 flex justify-center items-center h-screen">
                <div className="text-red-500">Error loading project</div>
            </Section>
        );
    }

    return (
        <Section className="py-0 min-h-screen lg:h-auto bg-[#020B16] flex flex-col items-center">
            <Section.Inner className="flex flex-col xl:flex-row gap-8 px-4 md:px-8 w-full">
                {/* Main Content Area */}
                <div className="flex flex-col gap-4 flex-1 w-full min-w-0">
                    {/* Header with Back Button */}
                    <div className="flex justify-between items-center pt-4">
                        <Link
                            href="/projects"
                            className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-2xl border border-white/10 backdrop-blur-md transition-all self-start"
                        >
                            <ArrowRight2Icon className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Gallery Section */}
                    <ProjectGallery files={mockComplex.files} />

                    {/* Description Section */}
                    <ProjectDescription description={mockComplex.description} />

                    {/* Features Card */}
                    <ProjectFeatures complex={mockComplex} />

                    {/* Map Section */}
                    {mockComplex.location && <ProjectMap location={mockComplex.location} title={mockComplex.name.ar} />}

                    {/* Related Projects (Developer Row & Other prices logic can go here) */}
                    <RelatedProjects currentProject={mockComplex} />
                </div>

                {/* Right Sidebar (Sticky on Large Screens if needed, but per design usually distinct column) */}
                <ProjectSidebar complex={mockComplex} className="h-fit mt-4 sticky top-4" />
            </Section.Inner>
        </Section>
    );
}
