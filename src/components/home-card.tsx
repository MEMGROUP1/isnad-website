import Image from "next/image";

export default function HomeCard() {
    return <article style={{ background: "linear-gradient(180deg, rgba(25, 25, 25, 0) 41.78%, rgba(8, 24, 47, 0.9) 84.1%);" }}>
        <Image  src="/images/home/card/home-card.jpg" width={1093} height={720} alt="" className="w-full h-auto object-cover rounded-lg absolute inset-0 size-full" />


    </article>
}
