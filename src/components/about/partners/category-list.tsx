"use client";

import { cn } from "@/lib/utils";
import { ChevronIcon } from "@/assets/icons";
import { useScrollControls } from "@/hooks/use-scroll-controls";
import { COMPANY_TYPE, COMPANY_TYPE_LABELS_AR, COMPANY_TYPE_LABELS_EN } from "@/data/company.data";
import { useEffect } from "react";

interface CategoryListProps {
    activeCategoryValue: string | null;
    availableCategories: Set<string>;
    onCategoryChange: (value: string) => void;
    isRtl: boolean;
}

export function CategoryList({ activeCategoryValue, availableCategories, onCategoryChange, isRtl }: CategoryListProps) {
    const { listRef, canScrollUp, canScrollDown, startScrolling, stopScrolling, checkScroll } = useScrollControls();

    // Re-check scroll when available categories change
    useEffect(() => {
        checkScroll();
    }, [availableCategories, checkScroll]);

    return (
        <div className="relative mt-8">
            <div
                className={cn(
                    "absolute top-0 inset-x-0 h-20 bg-linear-to-b from-primary/50 to-transparent z-10 flex justify-center pt-2 transition-opacity duration-300",
                    canScrollUp ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
                onMouseEnter={() => startScrolling("up")}
                onMouseLeave={stopScrolling}
            >
                <ChevronIcon className="rotate-90" />
            </div>
            <div ref={listRef} onScroll={checkScroll} className="flex flex-col gap-2 overflow-y-auto max-h-96 hide-scrollbar">
                {COMPANY_TYPE.map((cat) => {
                    const isSelected = cat.value === activeCategoryValue;
                    const isDisabled = !availableCategories.has(cat.value);

                    return (
                        <button
                            key={cat.value}
                            onClick={() => !isDisabled && onCategoryChange(cat.value)}
                            disabled={isDisabled}
                            className={cn(
                                "w-54.5 h-11.75 shrink-0 flex items-center text-start px-4 transition-all duration-300 border-b",
                                isSelected ? "text-[#C57340]" : isDisabled ? "text-gray-500/50 border-[#FFFFFF0D] cursor-not-allowed" : "text-[#BCC6D8] border-[#FFFFFF0D]",
                            )}
                            style={
                                isSelected
                                    ? {
                                          borderImageSource: `linear-gradient(${isRtl ? "90deg" : "270deg"}, rgba(197, 115, 64, 0) 19.94%, #C57340 64.68%, rgba(197, 115, 64, 0) 101.15%)`,
                                          borderImageSlice: 1,
                                          borderBottomWidth: "1px",
                                          borderStyle: "solid",
                                      }
                                    : undefined
                            }
                        >
                            {isRtl
                                ? COMPANY_TYPE_LABELS_AR[cat.value as keyof typeof COMPANY_TYPE_LABELS_AR]
                                : COMPANY_TYPE_LABELS_EN[cat.value as keyof typeof COMPANY_TYPE_LABELS_EN]}
                        </button>
                    );
                })}
            </div>
            <div
                className={cn(
                    "absolute bottom-0 inset-x-0 h-20 bg-linear-to-t from-primary/50 from-0% to-transparent z-10 flex justify-center pb-2 items-end transition-opacity duration-300",
                    canScrollDown ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
                onMouseEnter={() => startScrolling("down")}
                onMouseLeave={stopScrolling}
            >
                <ChevronIcon className="-rotate-90" />
            </div>
        </div>
    );
}
