"use client";

import { useSwiperAutoplay } from "@/hooks/use-swiper-autoplay";
import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useRef, useState } from "react";

interface VerticalSwiperProps<T> {
    items: T[];
    renderItem: (item: T, isActive: boolean) => React.ReactNode;
    className?: string;
    slideClassName?: string;
    activeIndex: number;
    onIndexChange: (index: number) => void;
    autoplayInterval?: number | null;
    height?: number | string;
    itemHeight?: number;
    gap?: number;
}

export default function VerticalSwiper<T>({
    items,
    renderItem,
    className,
    slideClassName,
    activeIndex,
    onIndexChange,
    autoplayInterval = 3000,
    height = "100%",
    itemHeight = 160,
    gap = 16,
}: VerticalSwiperProps<T>) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [virtualIndex, setVirtualIndex] = useState(activeIndex);

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setContainerHeight(entry.contentRect.height);
                }
            });
            resizeObserver.observe(containerRef.current);
            return () => resizeObserver.disconnect();
        }
    }, []);

    // Sync virtualIndex with activeIndex to maintain infinite scroll continuity without "rewind"
    useEffect(() => {
        if (items.length === 0) return;
        const currentMod = ((virtualIndex % items.length) + items.length) % items.length;
        if (currentMod === activeIndex) return;

        let diff = activeIndex - currentMod;
        // Adjust for shortest path (wrap-around)
        if (Math.abs(diff) > items.length / 2) {
            if (diff > 0) diff -= items.length;
            else diff += items.length;
        }

         
        setVirtualIndex((prev) => prev + diff);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex, items.length]);

    const { reset: resetAutoplay } = useSwiperAutoplay(() => {
        if (items.length === 0) return;
        const nextIndex = (activeIndex + 1) % items.length;
        onIndexChange(nextIndex);
    }, autoplayInterval);

    // Calculate effective render range based on container height
    // We render extra items to prevent pop-in for infinite scrolling
    const offsetRange = useMemo(() => {
        if (!containerHeight || items.length === 0) return [];

        const halfHeight = containerHeight / 2;
        const itemStride = itemHeight + gap;
        // Number of items to fill half the container
        const itemsToEdge = Math.ceil(halfHeight / itemStride);

        // Add generous buffer (2 items) to ensure items sliding in/out are rendered well before/after entering viewport
        // This is crucial when overflow is visible or when scrolling fast
        const buffer = itemsToEdge + 2;

        const indices = [];
        for (let i = -buffer; i <= buffer; i++) {
            indices.push(i);
        }
        return indices;
    }, [containerHeight, itemHeight, gap, items.length]);

    return (
        <div ref={containerRef} className={cn("overflow-hidden relative select-none", className)} style={{ height }}>
            {/* Wrapper div to maintain relative positioning context if needed, though items are absolute */}
            <div className="relative w-full h-full">
                {offsetRange.map((offset) => {
                    const currentVirtualIndex = virtualIndex + offset;
                    // Use virtual index as key to ensure continuous sliding without DOM recycling artifacts (flying items)
                    const key = currentVirtualIndex;

                    // Handle negative modulo correctly
                    const realIndex = ((currentVirtualIndex % items.length) + items.length) % items.length;
                    const item = items[realIndex];

                    const isActive = realIndex === activeIndex;

                    // Calculate top position. Center is containerHeight/2.
                    const top = containerHeight / 2 - itemHeight / 2 + offset * (itemHeight + gap);

                    return (
                        <div
                            key={key}
                            className={cn("absolute left-0 right-0 w-full flex justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]")}
                            style={{
                                top: `${top}px`,
                                height: itemHeight,
                                zIndex: isActive ? 20 : 10,
                            }}
                            onClick={() => {
                                onIndexChange(realIndex);
                                resetAutoplay();
                            }}
                        >
                            <div
                                className={cn(
                                    "transition-all duration-500 shrink-0 cursor-pointer relative w-full h-full",
                                    isActive ? "opacity-100 grayscale-0" : "grayscale",
                                    slideClassName,
                                )}
                            >
                                {renderItem(item, isActive)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
