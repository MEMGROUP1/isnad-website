"use client";

import { useEffect, useState } from "react";

interface CounterProps {
    end: number;
    duration?: number;
    onEnd?: () => void;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function Counter({ end, duration = 2000, prefix = "", suffix = "", className }: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <span className={className}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}
