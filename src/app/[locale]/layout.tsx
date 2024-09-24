import { ClientProviders } from "@/components/ClientProviders";
import { getGlobalFormatOptions, setRequestLocale } from "@/i18n";
import { locales } from "@/lib/config";
import { inter, interAr } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Alnouri",
  description: "El-Nuri Charity Projects around the world",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Lang };
}>) {
  setRequestLocale(locale);

  const isAr = locale === "ar";
  const messages = await getMessages();

  return (
    <html dir={isAr ? "rtl" : "ltr"} lang={locale}>
      <body
        className={cn(
          "bg-background text-foreground",
          isAr ? interAr.className : inter.className,
        )}
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="Asia/Riyadh"
          formats={getGlobalFormatOptions(locale)}
        >
          <ClientProviders>{children}</ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
