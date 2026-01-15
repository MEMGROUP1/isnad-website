import CityPageClient from "@/components/cities/city-page-client";
import PrefetchBoundary from "@/components/prefetch-boundary";
import { websiteService } from "@/services/website.service";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    try {
        const data = await websiteService.getCityById(id);
        return {
            title: data.name?.ar || data.name?.en || "City Details",
            description: data.description?.ar || data.description?.en || "",
        };
    } catch {
        return {
            title: "City Details",
        };
    }
}

export default async function Page({ params }: Props) {
    const { id } = await params;

    return (
        <PrefetchBoundary
            queries={[
                {
                    queryKey: ["website-city", id],
                    queryFn: () => websiteService.getCityById(id),
                },
            ]}
        >
            <CityPageClient />
        </PrefetchBoundary>
    );
}
