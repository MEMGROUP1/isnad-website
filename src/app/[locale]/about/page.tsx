import Navbar from "@/components/navbar";
import Section from "@/components/section";

export default function AboutPage() {
    return (
        <Section backgroundImageUrl="/images/about/hero/bg.png">
            <div
                className="h-full flex flex-col"
                style={{
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(8, 24, 47, 0.949579) 92.58%, #08182F 100%)",
                }}
            >
                <Section.Inner className="flex-1 flex flex-col items-end">
                    <Navbar />
                    
                    <div className="mt-auto"></div>

                    <div className=""></div>
                </Section.Inner>
            </div>
        </Section>
    );
}
