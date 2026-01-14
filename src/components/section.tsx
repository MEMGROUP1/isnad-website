import { cn } from "@/lib/utils";
import Image from "next/image";

interface OuterProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundImageUrl?: string;
    children: React.ReactNode;
    className?: string;
}
export default function Section({ backgroundImageUrl, children, className, ...props }: OuterProps) {
    return (
        <section {...props} className={cn("w-full h-auto lg:h-screen relative px-4", className)}>
            {backgroundImageUrl && (
                <Image
                    width={2186}
                    height={1440}
                    src={backgroundImageUrl ?? ""}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
                />
            )}
            {children}
        </section>
    );
}

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

Section.Inner = function Inner({ children, className }: ContainerProps) {
    return <div className={cn("max-w-360 mx-auto px-4 lg:px-0 w-full h-full", className)}>{children}</div>;
};
