"use client";

import { ChevronIcon } from "@/assets/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn, getLocalized } from "@/lib/utils";
import { CompanyBranch } from "@/services/types/website.types";
import { useLocale } from "next-intl";
import { LocalizedString } from "../projects/types";
import { BranchItem } from "./branch-item";

interface BranchesListProps {
    branches: CompanyBranch[];
}

export function BranchesList({ branches }: BranchesListProps) {
    const locale = useLocale();

    // Group branches by governorate
    const groupedBranches = branches.reduce(
        (acc, branch) => {
            const govId = branch.governorate?.id || "unknown";
            if (!acc[govId]) {
                acc[govId] = {
                    id: govId,
                    name: branch.governorate?.name as LocalizedString,
                    items: [],
                };
            }
            acc[govId].items.push(branch);
            return acc;
        },
        {} as Record<string, { id: string; name?: LocalizedString; items: CompanyBranch[] }>,
    );

    const groups = Object.values(groupedBranches);

    return (
        <Accordion type="single" collapsible className="flex flex-col max-h-[60vh] p-2 overflow-y-auto gap-4 hide-scrollbar rounded-2xl!">
            {groups.map((group) => {
                const count = group.items.length;

                return (
                    <AccordionItem key={group.id} value={group.id} className="rounded-xl p-0">
                        <AccordionTrigger
                            className={cn("group p-0 px-2 py-1 flex items-center border border-transparent data-[state=open]:border-b-white/10 rounded-none", "[&>svg]:hidden")}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 flex items-center justify-center shrink-0 rounded-2xl bg-white/10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.4"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.7368 10.8064C14.7368 9.43255 13.6236 8.31934 12.2507 8.31934C10.8769 8.31934 9.76367 9.43255 9.76367 10.8064C9.76367 12.1792 10.8769 13.2924 12.2507 13.2924C13.6236 13.2924 14.7368 12.1792 14.7368 10.8064Z"
                                            stroke="#FBF5EF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.2498 21.25C12.2498 21.25 4.97391 16.5108 4.79058 10.5973C4.66185 6.44514 8.12963 2.75012 12.2498 2.75012C16.3699 2.75012 19.8368 6.44508 19.7099 10.5973C19.5255 16.632 12.2498 21.25 12.2498 21.25Z"
                                            stroke="#FBF5EF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-white text-sm font-medium">{getLocalized(group.name, locale) || "Unknown"}</span>
                            </div>

                            <div className="flex items-center gap-2 text-[#AAB7CB]">
                                <span className="text-xs">
                                    {count} {locale === "ar" ? (count > 2 && count < 11 ? "فروع" : "فرع") : "Branches"}
                                </span>
                                <span className="flex">
                                    <ChevronIcon className="transition-transform duration-300 -rotate-90 group-data-[state=open]:rotate-90" />
                                </span>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="pt-0 pb-0 my-2 space-y-2">
                            {group.items.map((branch, index) => (
                                <BranchItem key={branch.id ?? `${group.id}-${index}`} branch={branch} />
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
