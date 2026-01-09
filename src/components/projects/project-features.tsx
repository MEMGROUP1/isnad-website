import { cn } from "@/lib/utils";
import { Complex } from "./types";
import { CheckCircle2Icon, ShieldCheckIcon, DumbbellIcon, CarIcon, UtensilsIcon, SnowflakeIcon } from "lucide-react";

interface ProjectFeaturesProps {
    complex?: Complex;
    className?: string;
}

export function ProjectFeatures({ complex, className }: ProjectFeaturesProps) {
    // Mock features for UI demonstration since we don't know the exact structure
    const features = [
        { icon: ShieldCheckIcon, label: "الأمان والمراقبة" },
        { icon: CarIcon, label: "موقف سيارات" },
        { icon: DumbbellIcon, label: "صالة رياضية" },
        { icon: UtensilsIcon, label: "مطاعم وكافيات" },
        { icon: SnowflakeIcon, label: "تكييف مركزي" },
        { icon: CheckCircle2Icon, label: "مساحات خضراء" },
    ];

    return (
        <div className={cn("flex flex-col gap-4 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md", className)}>
            <div className="flex items-center gap-2 text-white/80 border-b border-white/10 pb-3 mb-2">
                 <h3 className="text-sm font-medium">المميزات والخدمات</h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                        <feature.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature.label}</span>
                    </div>
                ))}
            </div>
             <button className="mt-2 text-primary text-sm hover:underline self-start">
                عرض كل الخدمات
            </button>
        </div>
    );
}
