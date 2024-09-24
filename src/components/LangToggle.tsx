"use client";

import { useLocale, usePathname, useRouter } from "@/i18n";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { inter, interAr } from "@/lib/fonts";

export const LangToggle = ({
  className,
  ...props
}: ComponentProps<typeof Button>) => {
  const router = useRouter();
  const lang = useLocale();
  const pathname = usePathname();

  const toggledLang = lang === "en" ? "ar" : "en";
  const font = lang === "en" ? interAr : inter;

  return (
    <Button
      size={"sm"}
      className={cn("leading-none", font.className, className)}
      onClick={() => {
        router.push(pathname, { locale: toggledLang });
      }}
      {...props}
    >
      {lang === "en" ? "عربي" : "English"}
    </Button>
  );
};
