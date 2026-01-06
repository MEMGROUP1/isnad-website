import { cn } from "@/lib/utils";

interface Props {
    image: string;
    features: Array<string>;
    tags: Array<string>;
    className?: string;
}

export default function FeatureCard({ image, features, tags, className }: Props) {
    return (
        <article className={cn("relative h-112.25 md:min-w-70 overflow-hidden group", className)}>
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/85 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h2 className="text-lg mb-2 leading-tight">{features.join(", ")}</h2>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <div
                            key={tag}
                            className="flex items-center text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                            style={{ transitionDelay: `${500 + index * 100}ms` }}
                        >
                            <span className="text-secondary mr-0.5">#</span>
                            <span>{tag.replace(" ", "_")}</span>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
