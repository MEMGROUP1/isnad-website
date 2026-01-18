"use client";

import { ChevronIcon, LocationIcon } from "@/assets/icons";
import { cn, getLocalized } from "@/lib/utils";
import { CompanyBranch } from "@/services/types/website.types";
import { useLocale } from "next-intl";
import { useState } from "react";
import { LocalizedString } from "../projects/types";
import { BranchItem } from "./branch-item";

interface BranchesListProps {
    branches: CompanyBranch[];
}

export function BranchesList({ branches }: BranchesListProps) {
    const locale = useLocale();
    const [openGovId, setOpenGovId] = useState<string | null>(null);

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

    const toggle = (id: string) => {
        setOpenGovId(openGovId === id ? null : id);
    };

    return (
        <div className="flex flex-col max-h-[60vh] overflow-y-auto">
            {groups.map((group) => {
                const isOpen = openGovId === group.id;
                const count = group.items.length;

                return (
                    <div key={group.id} className="border-b border-white/10 last:border-0">
                        <button
                            onClick={() => toggle(group.id)}
                            className={cn("w-full flex items-center justify-between p-4 transition-colors hover:bg-white/5", isOpen && "bg-white/5")}
                        >
                            {/* Left side (LTR) / End side (RTL) - Chevron & Info */}
                            <div className="flex items-center gap-2 text-[#AAB7CB]">
                                <ChevronIcon className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")} />
                                <span className="text-xs">
                                    {count} {locale === "ar" ? (count > 2 && count < 11 ? "فروع" : "فرع") : "Branches"}
                                </span>
                            </div>

                            {/* Right side (LTR) / Start side (RTL) - Name & Icon */}
                            <div className="flex items-center gap-3">
                                <span className="text-white font-medium">{getLocalized(group.name, locale) || "Unknown"}</span>
                                <div className="size-8 rounded-full border border-[#212F43] flex items-center justify-center shrink-0">
                                    <LocationIcon className="w-4 h-4 text-[#AAB7CB]" />
                                </div>
                            </div>
                        </button>

                        <div className={cn("grid transition-all duration-300 ease-in-out overflow-hidden", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                            <div className="overflow-hidden bg-[#050F1E]/50">
                                {group.items.map((branch) => (
                                    <BranchItem key={branch.id} branch={branch} />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
