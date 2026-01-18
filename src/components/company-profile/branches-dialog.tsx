"use client";

import { MapIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { CompanyBranch } from "@/services/types/website.types";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { BranchesList } from "./branches-list";

interface BranchesDialogProps {
    branches: CompanyBranch[];
    triggerLabel?: string;
}

export function BranchesDialog({ branches, triggerLabel }: BranchesDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("common");

    if (!branches || branches.length === 0) return null;

    return (
        <>
            <Button className="min-w-max rounded-2xl px-4! py-3" variant={"blur"} onClick={() => setIsOpen(true)}>
                <MapIcon className="size-6" />
                <span>{triggerLabel || t("show_branch")}</span>
            </Button>

            <Dialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={t("choose_branch")} // "اختر الفرع" needs to be in translations or hardcoded if specific
                className="md:max-w-md w-full bg-[#08182F] text-white"
            >
                <div className="mt-2">
                    {/* We can pass title to Dialog, so I used it there */}
                    {/* Render the list */}
                    <BranchesList branches={branches} />

                    {/* Close button at bottom if needed or rely on X in Dialog or backdrop */}
                    <div className="p-4 pt-2">
                        <Button className="w-full bg-[#16263D] hover:bg-[#1f304d] text-white h-12 rounded-xl border border-white/10" onClick={() => setIsOpen(false)}>
                            {t("close")}
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
