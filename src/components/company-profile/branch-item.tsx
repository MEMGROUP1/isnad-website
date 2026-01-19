import { NavigationIcon } from "@/assets/icons";
import { getLocalized } from "@/lib/utils";
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
            className="flex items-center justify-between px-4 py-3 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors group text-end hover:rounded-2xl"
        >
            <div className="flex items-center justify-between gap-3 w-full">
                <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">{getLocalized(branch.governorate?.name, locale)}</span>
                    <span className="text-[#AAB7CB] text-xs mt-0.5 line-clamp-1 text-end" dir="rtl">
                        {getLocalized(branch.address, locale)}
                    </span>
                </div>

                <NavigationIcon className="text-secondary" />
            </div>
        </a>
    );
}
