/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useSwiperAutoplay } from "@/hooks/use-swiper-autoplay";

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

    const { reset: resetAutoplay } = useSwiperAutoplay(() => {
        if (items.length === 0) return;
        const nextIndex = (activeIndex + 1) % items.length;

        onIndexChange(nextIndex);
    }, autoplayInterval);

    const translateY = useMemo(() => {
        if (!containerHeight) return 0;
        const itemCenter = activeIndex * (itemHeight + gap) + itemHeight / 2;
        const containerCenter = containerHeight / 2;
        return containerCenter - itemCenter;
    }, [activeIndex, containerHeight, itemHeight, gap, items.length]);

    return (
        <div ref={containerRef} className={cn("overflow-hidden relative flex flex-col items-center select-none", className)} style={{ height }}>
            <div
                className="flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] absolute w-full"
                style={{
                    transform: `translateY(${translateY}px)`,
                    gap: `${gap}px`,
                }}
            >
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={index}
                            className={cn(
                                "transition-all duration-500 shrink-0 cursor-pointer relative",
                                isActive ? "opacity-100 z-10 grayscale-0" : "grayscale",
                                slideClassName
                            )}
                            style={{ height: itemHeight }}
                            onClick={() => {
                                onIndexChange(index);
                                resetAutoplay();
                            }}
                        >
                            {renderItem(item, isActive)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
