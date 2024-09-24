import { BrandText } from "@/components/BrandText";
import { Logo } from "@/components/Logo";
import { RadialGradient } from "@/components/RadialGradient";
import { KuwaitFlag } from "@/components/icons/KuwaitFlag";
import { HeaderContainer } from "@/components/layout/HeaderContainer";
import { buttonVariants } from "@/components/ui/button";
import { Link, setRequestLocale } from "@/i18n";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  params: { locale: Lang };
}

export default function Page({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations("Home");

  return (
    <RadialGradient>
      <HeaderContainer>
        <Logo />
        <KuwaitFlag className="h-auto w-12" />
      </HeaderContainer>
      <div className="container">
        <div className="mx-auto flex max-w-md flex-col items-center space-y-6 py-12 sm:space-y-8">
          <Image
            src="https://picsum.photos/id/111/240/240"
            alt="El-Nouri"
            width={240}
            height={240}
            className="rounded-full max-sm:w-48"
          />
          <BrandText />
          <Link
            href={"/home"}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            {t("startNow")}
          </Link>
        </div>
      </div>
    </RadialGradient>
  );
}
