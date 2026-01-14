import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

const avatarVariants = cva(
    "border-2 border-white/10 rounded-full overflow-hidden shrink-0 bg-white/5 relative",
    {
        variants: {
            size: {
                xs: "size-8",
                sm: "size-10",
                default: "size-12",
                lg: "size-16",
                xl: "size-20",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    url: string | StaticImageData;
    alt: string;
}

export function Avatar({ className, size, url, alt, ...props }: AvatarProps) {
    return (
        <div className={cn(avatarVariants({ size, className }))} {...props}>
            <Image
                src={url}
                alt={alt}
                className="size-full object-cover"
                fill={typeof url === "string"}
            />
        </div>
    );
}
