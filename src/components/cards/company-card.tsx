"use client";

import { DiscountIcon } from "@/assets/icons";
import { Avatar } from "@/components/ui/avatar";
import { useRouter } from "@/i18n/routing";
import { cn, getLocalized } from "@/lib/utils";
import { CompaniesImageFallback, DevelopersAvatarFallback } from "@/media";
import { CompanyDto } from "@/services/types/website.types";
import { useLocale } from "next-intl";
import Image from "next/image";

interface Props {
    className?: string;
    disableHoverEffect?: boolean;
    company: CompanyDto;
}

/**
 * CompanyCard
 * Displays company details card with hover reveal animation.
 */
export default function CompanyCard({ className, disableHoverEffect = false, company, ...props }: Props) {
    const { push } = useRouter();
    const locale = useLocale();

    const onClick = () => {
        push(`/companies/${company.id}`);
    };

    // const branch = company.branches?.[0];
    const discountValue = company.discount || "0";

    return (
        <article className={cn("relative rounded-3xl overflow-hidden h-97.5 cursor-pointer isolate", !disableHoverEffect && "group", className)} {...props} onClick={onClick}>
            <Image
                src={company.backgroundImageUrl || CompaniesImageFallback}
                className={cn("size-full object-cover transition-transform duration-700 ease-out", disableHoverEffect ? "scale-110" : "group-hover:scale-110")}
                alt={getLocalized(company.name, locale)}
                fill
            />

            <div className="absolute end-0 top-4 bg-[#08182FBF] py-1.5 px-4 rounded-s-full flex items-center gap-1 backdrop-blur-sm z-20">
                <DiscountIcon />
                <div className="flex items-baseline gap-1 text-sm">
                    <span className="text-white/50">%</span>
                    <span className="text-white">{discountValue}</span>
                </div>
            </div>

            <div className="absolute bottom-0 start-0 p-4 w-full z-20">
                <div className="relative z-10">
                    <div className="flex items-center gap-2">
                        <Avatar url={company.logo || DevelopersAvatarFallback} alt={getLocalized(company.name, locale)} />

                        <div className="">
                            <h3 className="mb-1 text-lg text-white font-bold">{getLocalized(company.name, locale)}</h3>
                            {/* <p className="text-[#AAB7CB] text-xs">
                                {company.types?.map(t => getLocalized(t, locale)).join(", ")}
                            </p> */}
                        </div>
                    </div>

                    <div
                        className={cn(
                            "grid transition-[grid-template-rows] duration-500 ease-out",
                            disableHoverEffect ? "grid-rows-[1fr]" : "grid-rows-[0fr] group-hover:grid-rows-[1fr]",
                        )}
                    >
                        <div className="overflow-hidden">
                            <div className={cn("pt-3 transition-opacity duration-500 delay-75", disableHoverEffect ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>
                                <div className="flex items-center gap-2 overflow-hidden mb-2 flex-wrap">
                                    {company.types?.map((tag, index) => (
                                        <div
                                            key={index}
                                            className={cn(
                                                "flex items-center text-sm transition-all duration-500 ease-out",
                                                disableHoverEffect ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                                            )}
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                            <span className="text-secondary mr-0.5">#</span>
                                            <span className="text-white">{getLocalized(tag, locale)}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* <div
                                    className={cn(
                                        "h-0.5 mb-2 transition-all duration-700 delay-300 origin-right",
                                        disableHoverEffect ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                                    )}
                                    style={{
                                        background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0.01%, rgba(255, 255, 255, 0.2) 48.09%, rgba(255, 255, 255, 0) 100.01%)",
                                    }}
                                ></div> */}

                                {/* {branch && (
                                    <div
                                        className={cn(
                                            "flex items-center transition-all duration-500 delay-300",
                                            disableHoverEffect ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                                        )}
                                    >
                                        <LocationIcon />
                                        <span className="text-[#B8C6E3] ms-1">
                                            {getLocalized(branch.governorate?.name, locale)} / {getLocalized(branch.address, locale)}
                                        </span>
                                    </div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        "absolute start-0 bottom-0 w-104.5 h-66.5 blur-2xl -scale-100 z-0 rounded-full ltr:translate-y-1/6 ltr:-translate-x-1/6 rtl:translate-1/6 transition-all duration-700",
                        disableHoverEffect ? "opacity-100" : "group-hover:opacity-100 opacity-90",
                    )}
                    style={{
                        background: "linear-gradient(135.54deg, #08182F 17.38%, #38404C 44.97%, #525760 83.02%)",
                    }}
                ></div>
            </div>
        </article>
    );
}
