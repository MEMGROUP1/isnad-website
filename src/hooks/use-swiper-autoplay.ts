import { useEffect, useRef, useState } from "react";

export function useSwiperAutoplay(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);
    const [resetKey, setResetKey] = useState(0);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(id);
        }
    }, [delay, resetKey]);

    const reset = () => setResetKey(prev => prev + 1);

    return { reset };
}
