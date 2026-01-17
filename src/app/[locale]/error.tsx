"use client";

import { useEffect } from "react";
import { ErrorMessage } from "@/components/feedback/error-message";
import Section from "@/components/section";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Section className="flex min-h-[50vh] items-center justify-center">
            <ErrorMessage
                title="Something went wrong!"
                message={error.message || "An unexpected error occurred."}
                onRetry={reset}
                className="backdrop-blur-sm"
            />
        </Section>
    );
}
