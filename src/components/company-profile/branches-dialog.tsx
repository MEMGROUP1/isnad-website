"use client";

import { MapIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CompanyBranch } from "@/services/types/website.types";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState } from "react";
import { BranchesList } from "./branches-list";

interface BranchesDialogProps {
    branches: CompanyBranch[];
    triggerLabel?: string;
}

export function BranchesDialog({ branches, triggerLabel }: BranchesDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("common");
    const locale = useLocale();

    if (!branches || branches.length === 0) return null;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="min-w-max rounded-2xl px-4! py-3" variant={"blur"}>
                    <MapIcon className="size-6" />
                    <span>{triggerLabel || t("show_branch")}</span>
                </Button>
            </DialogTrigger>

            <DialogContent
                showCloseButton={false}
                className="w-[92vw] max-w-180 rounded-[28px] border border-white/10 bg-[#0B1526] p-0 text-white"
                dir={locale === "ar" ? "rtl" : "ltr"}
            >
                <DialogHeader className="border-b border-white/10 px-6 py-5 text-center">
                    <DialogTitle className="text-lg font-normal text-white text-center">{t("choose_branch")}</DialogTitle>
                </DialogHeader>

                <div className="px-5 pb-5 pt-4">
                    <div className="rounded-[24px] border border-white/10 bg-[#0B1424] overflow-hidden shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
                        <BranchesList branches={branches} />
                    </div>
                </div>

                <DialogFooter className="px-5 pb-5">
                    <DialogClose asChild>
                        <Button className="w-full bg-[#16263D] hover:bg-[#1f304d] text-white h-12 rounded-2xl border border-white/10">{t("close")}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
