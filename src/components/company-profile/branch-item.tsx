import { NavigationIcon } from "@/assets/icons";
import { cn, getLocalized } from "@/lib/utils";
import { CompanyBranch } from "@/services/types/website.types";
import { useLocale } from "next-intl";

interface BranchItemProps {
    branch: CompanyBranch;
}

export function BranchItem({ branch }: BranchItemProps) {
    const locale = useLocale();

    return (
        <a
            href={branch.location || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors group text-end"
        >
            <div className="flex items-center gap-3 w-full">
                <div className="size-8 rounded-full bg-[#16263D] flex items-center justify-center border border-white/10 group-hover:border-[#C57340] transition-colors shrink-0">
                    <NavigationIcon className="w-4 h-4 text-[#C57340]" />
                </div>
                <div className="flex flex-col flex-1 items-end">
                    <span className="text-white text-sm font-medium">
                         {getLocalized(branch.governorate?.name, locale)}
                    </span>
                    <span className="text-[#AAB7CB] text-xs mt-0.5 line-clamp-1 text-end" dir="rtl">
                       {getLocalized(branch.address, locale)}
                    </span>
                </div>
            </div>
        </a>
    );
}
