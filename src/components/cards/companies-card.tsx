import { DiscountIcon, LocationIcon } from "@/assets/icons";
import { CompaniesImageFallback, DevelopersAvatarFallback } from "@/media";
import Image from "next/image";

export default function CompaniesCard() {
    const tags = ["الوسم الأول", "الوسم الثاني", "الوسم الثالث"];

    return (
        <article className="relative rounded-3xl overflow-hidden h-97.5 group cursor-pointer">
            <Image src={CompaniesImageFallback} className="size-full" alt={""} />

            <div className="absolute end-0 top-4 bg-[#08182FBF] py-1.5 px-4 rounded-s-full flex items-center gap-1">
                <DiscountIcon />
                <div className="flex items-baseline gap-1 text-sm">
                    <span className="text-white/50">%</span>
                    <span className="text-white">30 خصم</span>
                </div>
            </div>

            <div className="absolute bottom-0 start-0 p-4 w-full">
                <div className="relative z-10">
                    <div className="mb-3 flex items-center gap-2">
                        <div className="border-2 border-white/10 rounded-full overflow-hidden size-12">
                            <Image src={DevelopersAvatarFallback} className="rounded-full" alt={""} />
                        </div>
                        <div className="">
                            <h3 className="mb-1 text-lg text-white">لاوفن-laufen</h3>
                            <p className="text-[#AAB7CB] text-xs">سيراميك فاخر للمطابخ والحمامات.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {tags.map((tag, index) => (
                            <div key={tag} className="flex items-center text-sm ease-out" style={{ transitionDelay: `${500 + index * 100}ms` }}>
                                <span className="text-secondary mr-0.5">#</span>
                                <span className="text-white">{tag.replace(" ", "_")}</span>
                            </div>
                        ))}
                    </div>
                    <div
                        className="h-0.5 my-2"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0.01%, rgba(255, 255, 255, 0.2) 48.09%, rgba(255, 255, 255, 0) 100.01%)",
                        }}
                    ></div>

                    <div className="flex items-center">
                        <LocationIcon />
                        <span className="text-[#B8C6E3]">بغداد/اليرموك/شارع نادي الصيد</span>
                    </div>
                </div>

                <div
                    className="absolute start-0 bottom-0 w-104.5 h-66.5 blur-2xl -scale-100 z-0 rounded-full translate-1/6"
                    style={{
                        background: "linear-gradient(135.54deg, #08182F 17.38%, #38404C 44.97%, #525760 83.02%)",
                    }}
                ></div>
            </div>
        </article>
    );
}
