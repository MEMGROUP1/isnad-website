import { useRef, useState, useEffect, useCallback } from "react";

export function useScrollControls() {
    const listRef = useRef<HTMLDivElement>(null);
    const [canScrollUp, setCanScrollUp] = useState(false);
    const [canScrollDown, setCanScrollDown] = useState(false);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const checkScroll = useCallback(() => {
        if (listRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listRef.current;
            setCanScrollUp(scrollTop > 0);
            setCanScrollDown(Math.ceil(scrollTop + clientHeight) < scrollHeight);
        }
    }, []);

    const stopScrolling = useCallback(() => {
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
    }, []);

    const startScrolling = useCallback((direction: "up" | "down", speed = 5) => {
        if (scrollIntervalRef.current) return;
        scrollIntervalRef.current = setInterval(() => {
            if (listRef.current) {
                const { scrollTop } = listRef.current;
                const amount = direction === "up" ? -speed : speed;
                listRef.current.scrollTop = scrollTop + amount;
            }
        }, 10);
    }, []);

    useEffect(() => {
        // Initial check
        // We might need a small delay or dependency on content changes in the parent
        // but for now this handles resize.
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => {
            window.removeEventListener("resize", checkScroll);
            stopScrolling();
        };
    }, [checkScroll, stopScrolling]);

    return {
        listRef,
        canScrollUp,
        canScrollDown,
        startScrolling,
        stopScrolling,
        checkScroll
    };
}
