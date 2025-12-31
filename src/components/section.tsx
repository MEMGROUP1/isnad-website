import { cn } from "@/lib/utils";
import Image from "next/image";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className }: ContainerProps) {
    return <div className={cn("min-h-screen max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full", className)}>{children}</div>;
}

interface OuterProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundImageUrl?: string;
    children: React.ReactNode;
    className?: string;
}

Section.Outer = function Outer({ backgroundImageUrl, children, className, ...props }: OuterProps) {
    return (
        <section {...props} className={cn("w-full", className)}>
            {backgroundImageUrl && (
                <Image width={2186} height={1440} src={backgroundImageUrl ?? ""} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10" />
            )}
            {children}
        </section>
    );
};
