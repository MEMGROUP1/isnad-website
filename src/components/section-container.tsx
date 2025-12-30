import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionContainer({ children, className }: ContainerProps) {
    return <div className={cn("max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full", className)}>{children}</div>;
}

interface OuterProps {
    backgroundImageUrl?: string;
    children: React.ReactNode;
    className?: string;
}

SectionContainer.OuterSection = function OuterSection({ backgroundImageUrl, children, className }: OuterProps) {
    return (
        <section
            className={cn("w-full py-16 sm:py-20 lg:py-24", className)}
            style={{ background: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}
        >
            {children}
        </section>
    );
};
