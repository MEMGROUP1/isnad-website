"use client";

import ProjectDetailsView from "@/components/projects/project-details-view";
import { mapComplexToComplex } from "@/lib/mappers";
import { websiteService } from "@/services/website.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Section from "../section";

export default function ComplexPageClient() {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ["website-complex", id],
    queryFn: () => websiteService.getComplexById(id),
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
        <div className="text-red-500">Error loading complex</div>
      </Section>
    );
  }

  const complex = mapComplexToComplex(data);

  return <ProjectDetailsView data={complex} />;
}
