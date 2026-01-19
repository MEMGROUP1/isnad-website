"use client";

import { ErrorMessage } from "@/components/feedback/error-message";
import { LoadingSpinner } from "@/components/feedback/loading-spinner";
import ProjectDetailsView from "@/components/projects/project-details-view";
import { mapCityToComplex } from "@/lib/mappers";
import { websiteService } from "@/services/website.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Section from "../section";

export default function CityPageClient() {
    const params = useParams();
    const id = params.id as string;

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["website-city", id],
        queryFn: () => websiteService.getCityById(id),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <Section className="py-32 flex justify-center items-center h-screen">
                <LoadingSpinner size="lg" />
            </Section>
        );
    }

    if (error || !data) {
        return (
            <Section className="py-32 flex justify-center items-center h-screen">
                <ErrorMessage
                    title="Error loading city"
                    message={error instanceof Error ? error.message : "Could not load city details. Please try again."}
                    onRetry={() => refetch()}
                />
            </Section>
        );
    }

    const complex = mapCityToComplex(data);

    return <ProjectDetailsView data={complex} />;
}
