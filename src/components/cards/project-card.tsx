import { DevelopersImageFallback } from "@/media";
import Image from "next/image";

export default function ProjectCard() {
    return (
        <article className="rounded-xl overflow-hidden relative">
            <Image className="size-full object-center object-cover" src={DevelopersImageFallback} alt={""} />

            <div className="absolute left-0 bottom-0 w-full p-4">
                <Image src={""} alt={""} />

                <div className=""></div>
            </div>
        </article>
    );
}
