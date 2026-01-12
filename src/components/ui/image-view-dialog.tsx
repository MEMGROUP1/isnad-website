"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

interface ImageViewDialogProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | StaticImageData | null;
    altText?: string;
}

export function ImageViewDialog({ isOpen, onClose, imageSrc, altText = "Image Preview" }: ImageViewDialogProps) {
    // Prevent scrolling when dialog is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !imageSrc) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-50 cursor-pointer"
            >
                <X size={32} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                    <Image src={imageSrc} alt={altText} fill className="object-contain select-none" priority sizes="100vw" />
                </div>
            </div>
        </div>,
        document.body
    );
}
