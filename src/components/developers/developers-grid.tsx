"use client";

import RealEstateDevelopersCard from "@/components/cards/real-estate-developers-card";
import { ErrorMessage } from "@/components/feedback/error-message";
import { LoadingSpinner } from "@/components/feedback/loading-spinner";
import { NoData } from "@/components/feedback/no-data";
import { websiteService } from "@/services/website.service";
import { useQuery } from "@tanstack/react-query";

export default function DevelopersGrid() {
    const {
        data: developers,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["developers"],
        queryFn: websiteService.getDevelopers,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-50">
                <LoadingSpinner size="lg" className="text-white" />
            </div>
        );
    }

    if (isError) {
        return <ErrorMessage className="bg-white/5 border-white/10 text-white" />;
    }

    if (!developers || developers.length === 0) {
        return <NoData className="bg-white/5 border-white/10 text-white" />;
    }

    console.log(developers);
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developers.map((developer) => (
                <RealEstateDevelopersCard key={developer.id} developer={developer} />
            ))}
        </div>
    );
}
