"use client";

import { ArrowRight2Icon } from "@/assets/icons";
import { ProjectDescription } from "@/components/projects/project-description";
import { ProjectDeveloperInfo } from "@/components/projects/project-developer-info";
import { ProjectFeatures } from "@/components/projects/project-features";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectInstallment } from "@/components/projects/project-installment";
import { ProjectMap } from "@/components/projects/project-map";
import { ProjectSidebar } from "@/components/projects/project-sidebar";
import { Complex } from "@/components/projects/types";
import Section from "@/components/section";
import { useRouter } from "next/navigation";

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
    features: [
        {
            key: "security",
            title: { ar: "الأمان والمراقبة", en: "Security & Surveillance" },
            items: [
                { ar: "حراسة", en: "Security Guards" },
                { ar: "كاميرات مراقبة", en: "Surveillance Cameras" },
                { ar: "بوابة أمنية", en: "Security Gate" },
            ],
        },
        {
            key: "services",
            title: { ar: "خدمات المعيشة والراحة", en: "Living & Comfort Services" },
            items: [
                { ar: "مساحات خضراء", en: "Green Spaces" },
                { ar: "منظومة غاز", en: "Gas System" },
                { ar: "منظومة صرف صحي", en: "Sewage System" },
                { ar: "تبريد مركزي", en: "Central Cooling" },
            ],
        },
        {
            key: "gym",
            title: { ar: "قاعة ألعاب رياضية - GYM", en: "Gym & Sports Hall" },
            items: [
                { ar: "المرافق والخدمات العامة", en: "Public Facilities & Services" },
                { ar: "مطاعم", en: "Restaurants" },
                { ar: "مركز صحي", en: "Health Center" },
                { ar: "قاعة مناسبات", en: "Event Hall" },
            ],
        },
    ],
    installment: {
        min_down_payment: 25,
        max_years: 9,
    },
    starting_price: 150000000,
    max_price: 290000000,
    developer: {
        name: { ar: "إسناد", en: "ISNAD" },
        logo: "", // Empty to trigger CSS fallback
        complexes_count: 3,
        properties_count: 200,
    },
};

export default function ProjectPage() {
    // const t = useTranslations('common');
    // const params = useParams();
    // In a real scenario, fetch data using params.projectId

    // Mock loading state
    const isLoading = false;
    const error = null;

    const { back } = useRouter();

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
        <Section className="py-0 min-h-screen lg:h-auto bg-primary flex flex-col items-center">
            <Section.Inner className="flex flex-col xl:flex-row gap-8 px-4 md:px-8 w-full">
                {/* Main Content Area */}
                <div className="flex flex-col gap-4 flex-1 w-full min-w-0">
                    {/* Header with Back Button */}
                    <div className="flex justify-between items-center pt-4">
                        <button
                            onClick={() => back()}
                            className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-2xl border border-white/10 backdrop-blur-md transition-all self-start"
                        >
                            <ArrowRight2Icon className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Gallery Section */}
                    <ProjectGallery files={mockComplex.files} />

                    {/* Description Section */}
                    <ProjectDescription description={mockComplex.description} />

                    {/* Installment Section */}
                    {mockComplex.installment && (
                        <ProjectInstallment
                            installment={mockComplex.installment}
                            startingPrice={mockComplex.starting_price}
                            maxPrice={mockComplex.max_price ?? 1000000000}
                        />
                    )}

                    {/* Developer & Price Info */}
                    {mockComplex.developer && <ProjectDeveloperInfo developer={mockComplex.developer} />}

                    {/* Features Card */}
                    <ProjectFeatures complex={mockComplex} />

                    {/* Map Section */}
                    {mockComplex.location && <ProjectMap location={mockComplex.location} title={mockComplex.name.ar} />}

                    {/* Related Projects (Developer Row & Other prices logic can go here) */}
                    {/* <RelatedProjects currentProject={mockComplex} /> */}
                </div>

                {/* Right Sidebar (Sticky on Large Screens if needed, but per design usually distinct column) */}
                <ProjectSidebar complex={mockComplex} className="h-fit mt-4 mb-8 sticky top-4" />
            </Section.Inner>
        </Section>
    );
}
