"use client";

import { ProjectDescription } from "@/components/projects/project-description";
import { ProjectDeveloperInfo } from "@/components/projects/project-developer-info";
import { ProjectFeatures } from "@/components/projects/project-features";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectInstallment } from "@/components/projects/project-installment";
import { ProjectMap } from "@/components/projects/project-map";
import { ProjectSidebar } from "@/components/projects/project-sidebar";
import { Complex } from "@/components/projects/types";
import Section from "@/components/section";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

interface Props {
    data: Complex;
}

export default function ProjectDetailsView({ data }: Props) {
    const locale = useLocale() as "ar" | "en";
    const { back } = useRouter();

    return (
        <Section className="lg:h-auto bg-primary">
            <Section.Inner className="flex gap-8">
                {/* Sidebar */}
                <ProjectSidebar complex={data} />

                {/* Main Content */}
                <div className="lg:col-span-8 xl:col-span-9 order-1 lg:order-2 space-y-6">
                    <button onClick={back} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group">
                        <ArrowLeftIcon
                            className={`w-5 h-5 ${
                                locale === "ar" ? "rotate-180" : ""
                            } group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1`}
                        />
                        <span>{locale === "ar" ? "العودة" : "Back"}</span>
                    </button>

                    <ProjectGallery files={data.files} />

                    {data.developer && <ProjectDeveloperInfo developer={data.developer} />}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.installment && <ProjectInstallment installment={data.installment} />}
                        {data.location && <ProjectMap location={data.location} title={data.name[locale]} />}
                    </div>

                    {data.features && data.features.length > 0 && <ProjectFeatures complex={data} />}

                    <ProjectDescription description={data.description} />
                </div>
            </Section.Inner>
        </Section>
    );
}
