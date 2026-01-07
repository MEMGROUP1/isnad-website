import FeatureCard from "../cards/feature-card";

export default function HomeFeatureShowcase() {
    const cards = [
        {
            image: "/images/home/feature-showcase/image-1.png",
            features: ["الميزة الأولى", "الميزة الثانية"],
            tags: ["الوسم الأول", "الوسم الثاني", "الوسم الثالث"],
        },
        {
            image: "/images/home/feature-showcase/image-2.png",
            features: ["الميزة الثالثة", "الميزة الرابعة"],
            tags: ["الوسم الرابع", "الوسم الخامس"],
        },
        {
            image: "/images/home/feature-showcase/image-3.png",
            features: ["الميزة الخامسة", "الميزة السادسة"],
            tags: ["الوسم السادس", "الوسم السابع", "الوسم الثامن", "الوسم التاسع"],
        },
        {
            image: "/images/home/feature-showcase/image-1.png",
            features: ["الميزة السابعة", "الميزة الثامنة"],
            tags: ["الوسم العاشر", "الوسم الحادي عشر"],
        },
        {
            image: "/images/home/feature-showcase/image-1.png",
            features: ["الميزة الأولى", "الميزة الثانية"],
            tags: ["الوسم الأول", "الوسم الثاني", "الوسم الثالث"],
        },
    ];

    return (
        <section className="flex flex-wrap items-stretch gap-2 overflow-auto *:flex-1 bg-primary">
            {cards.map((card, index) => (
                <FeatureCard key={card.image + index} image={card.image} features={card.features} tags={card.tags} />
            ))}
        </section>
    );
}
