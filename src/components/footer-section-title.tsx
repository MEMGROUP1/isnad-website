export default function FooterSectionTitle({ text }: { text: string }) {
    return (
        <h2 className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-secondary"></span>
            <span className="text-lg leading-[130%]">{text}</span>
        </h2>
    );
}
