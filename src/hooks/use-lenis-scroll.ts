"use client";

import { useEffect } from "react";
import Lenis, { LenisOptions } from "lenis";

export function useLenisScroll(options: LenisOptions = {}) {
    useEffect(() => {
        if (typeof window === "undefined") return;

        if (window.innerWidth < 1024) return;

        const lenis = new Lenis({
            duration: 1.2, // The duration of the smooth scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            overscroll: true,
            ...options,
        });

        // RAF loop for Lenis
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [options]);
}
