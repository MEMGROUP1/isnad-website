"use client";

import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import QueryProvider from "./query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    useLenisScroll();

    return <QueryProvider>{children}</QueryProvider>;
}
