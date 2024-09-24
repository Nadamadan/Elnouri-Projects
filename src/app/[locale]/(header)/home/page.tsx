import { BrandText } from "@/components/BrandText";
import { Link, setRequestLocale } from "@/i18n";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page({ params }: { params: { locale: Lang } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("Home");

  const routes = [
    { name: t("endowments"), href: "/endowments" },
    { name: t("projects"), href: "/projects" },
    { name: t("reports"), href: "/repoerts" },
    { name: t("about"), href: "/about" },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 rtl:bg-gradient-to-l" />
        <Image
          src="https://picsum.photos/id/112/1920/1080"
          alt="El-Nouri Projects Overview"
          width={1920}
          height={1080}
          className="size-full object-cover"
          priority
        />
      </div>

      <main className="flex-1 px-4 flex-center">
        <BrandText />
      </main>

      <footer className="grid h-24 grid-cols-3 gap-px bg-background sm:grid-cols-4">
        {routes.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="bg-primary font-medium text-primary-foreground transition flex-center hover:opacity-80 max-sm:last:col-span-3 sm:text-lg"
          >
            {name}
          </Link>
        ))}
      </footer>
    </div>
  );
}
