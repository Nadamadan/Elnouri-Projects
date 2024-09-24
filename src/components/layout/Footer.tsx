import { useTranslations } from "next-intl";
import { Logo } from "../Logo";
import { Separator } from "../ui/separator";
import { useFormatter } from "@/i18n";
import * as MediaIcons from "@/components/icons/Media";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface MediaItem {
  href: string;
  icon: keyof typeof MediaIcons;
}

export const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations("About");
  const f = useFormatter();
  const currentYear = f.dateTime(Date.now(), { year: "numeric" });

  const mediaItems: MediaItem[] = [
    { href: site.links.phone, icon: "Telephone" },
    { href: site.links.telegram, icon: "Telegram" },
    { href: site.links.instagram, icon: "Instegram" },
    { href: site.links.whatsapp, icon: "Whatsapp" },
    { href: site.links.facebook, icon: "Facebook" },
  ];

  return (
    <footer className={cn("mt-12 space-y-4 py-4 sm:mt-24", className)}>
      <div className="flex flex-wrap items-center justify-between">
        <Logo />
        <div className="flex gap-2 sm:gap-4 [&_svg]:size-8 sm:[&_svg]:size-10">
          {mediaItems.map(({ href, icon }) => {
            const Icon = MediaIcons[icon];
            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-80"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      <Separator />
      <p className="text-center text-xs text-muted-foreground sm:text-sm">
        &copy; {currentYear} - {t("rights")}
      </p>
    </footer>
  );
};
