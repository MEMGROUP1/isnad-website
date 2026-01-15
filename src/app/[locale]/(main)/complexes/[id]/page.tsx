import ComplexPageClient from "@/components/complexes/complex-page-client";
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
        const data = await websiteService.getComplexById(id);
        return {
            title: data.name?.ar || data.name?.en || "Complex Details",
            description: data.description?.ar || data.description?.en || "",
        };
    } catch {
        return {
            title: "Complex Details",
        };
    }
}

export default async function Page({ params }: Props) {
    const { id } = await params;

    return (
        <PrefetchBoundary
            queries={[
                {
                    queryKey: ["website-complex", id],
                    queryFn: () => websiteService.getComplexById(id),
                },
            ]}
        >
            <ComplexPageClient />
        </PrefetchBoundary>
    );
}
