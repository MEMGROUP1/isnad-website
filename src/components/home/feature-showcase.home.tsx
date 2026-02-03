import FeatureCard from "../cards/feature-card";
import { Link } from "@/i18n/routing";

export default function HomeFeatureShowcase() {
    const cards = [
        {
            type: "Furniture",
            image: "/images/home/feature-showcase/Furniture/image.png",
            features: ["Furniture", "اثاث"],
        },
        {
            type: "Kitchens",
            image: "/images/home/feature-showcase/Kitchens/image.png",
            features: ["Kitchens", "مطابخ"],
        },
        {
            type: "HighEndFullSolutions",
            image: "/images/home/feature-showcase/High End Full Solutions/image.png",
            features: ["High End Full Solutions", "حلول منزلية متكاملة"],
        },
        {
            type: "WoodWorkFurnishing",
            image: "/images/home/feature-showcase/Wood Work Furnishing/image.png",
            features: ["Wood Work Furnishing", "اعمال خشبية شاملة"],
        },
        {
            type: "ElectricalsAndElectronics",
            image: "/images/home/feature-showcase/Electricals & Electronics/image.png",
            features: ["Electricals & Electronics", "كهربائيات والكترونيات"],
        },
        {
            type: "HomeSupplies",
            image: "/images/home/feature-showcase/Home Supplies/image.png",
            features: ["Home Supplies", "منزلية"],
        },
        {
            type: "CurtainsAndBedding",
            image: "/images/home/feature-showcase/Curtains & Bedding/image.png",
            features: ["Curtains & Bedding", "ستائر ومفروشات"],
        },
        {
            type: "PorcelainCeramicsSanitary",
            image: "/images/home/feature-showcase/Porcelain, Ceramics & Sanitary ware/image.png",
            features: ["Porcelain, Ceramics & Sanitary ware", "بورسلين, سيراميك و صحيات"],
        },
        {
            type: "Insurance",
            image: "/images/home/feature-showcase/Insurance/image.png",
            features: ["Insurance", "تأمين"],
        },
    ];

    return (
        <section className="flex flex-wrap items-stretch gap-2 overflow-auto *:flex-1 bg-primary">
            {cards.map((card, index) => (
                <Link key={card.type + index} href={`/companies/category/${card.type}`} className="flex-1 block">
                    <FeatureCard image={card.image} features={card.features} tags={[]}  />
                </Link>
            ))}
        </section>
    );
}
