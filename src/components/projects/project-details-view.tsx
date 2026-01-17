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
            <Section.Inner className="flex gap-8 w-full overflow-hidden">
                {/* Sidebar */}
                <ProjectSidebar complex={data} />

                {/* Main Content */}
                <div className="lg:col-span-8 xl:col-span-9 order-1 lg:order-2 space-y-6 w-full overflow-hidden">
                    <button onClick={back} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4 group p-4 bg-black/20 rounded-2xl border border-white/10">
                        <ArrowLeftIcon
                            className={`w-5 h-5 ${
                                locale === "ar" ? "rotate-180" : ""
                            } group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1`}
                        />
                    </button>

                    <ProjectGallery files={data.files} />

                    {data.developer && <ProjectDeveloperInfo developer={data.developer} />}

                    {data.installment && <ProjectInstallment installment={data.installment} startingPrice={data.starting_price} maxPrice={data.max_price} />}

                    {data.location && <ProjectMap location={data.location} title={data.name[locale]} />}

                    {data.features && data.features.length > 0 && <ProjectFeatures complex={data} />}

                    <ProjectDescription description={data.description} />
                </div>
            </Section.Inner>
        </Section>
    );
}
