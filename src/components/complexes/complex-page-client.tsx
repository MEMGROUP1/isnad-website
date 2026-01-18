"use client";

import { ErrorMessage } from "@/components/feedback/error-message";
import { LoadingSpinner } from "@/components/feedback/loading-spinner";
import ProjectDetailsView from "@/components/projects/project-details-view";
import { mapComplexToComplex } from "@/lib/mappers";
import { websiteService } from "@/services/website.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Section from "../section";

export default function ComplexPageClient() {
    const params = useParams();
    const id = params.id as string;

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["website-complex", id],
        queryFn: () => websiteService.getComplexById(id),
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
                    title="Error loading complex"
                    message={error instanceof Error ? error.message : "Could not load complex details. Please try again."}
                    onRetry={() => refetch()}
                />
            </Section>
        );
    }

    const complex = mapComplexToComplex(data);

    return <ProjectDetailsView data={complex} />;
}
