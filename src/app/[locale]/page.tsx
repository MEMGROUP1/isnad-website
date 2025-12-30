import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("welcome")}</h1>
        <p className="text-xl">{t("home")}</p>
      </div>
    </div>
  );
}
