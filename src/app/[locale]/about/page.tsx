import { HeaderContainer } from "@/components/layout/HeaderContainer";
import { Navbar } from "@/components/layout/Navbar";
import { Title } from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Link, setRequestLocale } from "@/i18n";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import effect from "public/assets/about-map.png";
import { Footer } from "@/components/layout/Footer";
import { Statistics } from "@/components/Statistics";
import { Suspense } from "react";

import heroImage from "public/assets/about-hero.webp";
import statisticsImage from "public/assets/about-statistics.webp";

export default function Page({ params }: { params: { locale: Lang } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("About");

  return (
    <div className="relative">
      <HeaderContainer>
        <Link
          href={"/home"}
          className={buttonVariants({
            className: "me-4 !rounded-full",
            size: "icon",
          })}
        >
          <ArrowLeft className="rtl:rotate-180" />
        </Link>
        <Navbar />
      </HeaderContainer>

      <div className="container">
        <main>
          <Title text={t("header")} className="my-6 sm:mb-12" />
          <div className="flex items-start justify-between gap-6 max-md:flex-col rtl:md:flex-row-reverse">
            <Image
              src={heroImage}
              alt="A group of kids in a school class"
              placeholder="blur"
              priority
            />
            <div className="max-w-prose space-y-4 max-sm:text-sm md:text-lg">
              <p>{t("Description.part1")}</p>
              <p>{t("Description.part2")}</p>
            </div>
          </div>

          <Title as="h3" text={t("achievements")} className="mb-12 mt-24" />
          <div className="relative rounded-3xl sm:min-h-96 sm:border sm:p-4 sm:py-14">
            <Image
              src={statisticsImage}
              alt="A group of kids in a school class"
              placeholder="blur"
              className="absolute inset-0 size-full rounded-3xl object-cover brightness-75 max-sm:hidden"
            />
            <Suspense fallback={null}>
              <Statistics />
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>

      <Image
        src={effect}
        alt="Background Map Effect"
        className="absolute left-0 top-0 -z-10 dark:invert"
      />
    </div>
  );
}
