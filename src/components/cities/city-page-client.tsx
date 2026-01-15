"use client";

import ProjectDetailsView from "@/components/projects/project-details-view";
import { mapCityToComplex } from "@/lib/mappers";
import { websiteService } from "@/services/website.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Section from "../section";

export default function CityPageClient() {
    const params = useParams();
    const id = params.id as string;

    const { data, isLoading, error } = useQuery({
        queryKey: ["website-city", id],
        queryFn: () => websiteService.getCityById(id),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <Section className="py-32 flex justify-center items-center h-screen">
                <div className="text-white">Loading...</div>
            </Section>
        );
    }

    if (error || !data) {
        return (
            <Section className="py-32 flex justify-center items-center h-screen">
                <div className="text-red-500">Error loading city</div>
            </Section>
        );
    }

    const complex = mapCityToComplex(data);

    return <ProjectDetailsView data={complex} />;
}
