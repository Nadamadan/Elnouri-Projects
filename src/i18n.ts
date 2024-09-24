import type { IntlConfig } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig } from "next-intl/server";
import { getLocale as _getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./lib/config";

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`../messages/${locale}.json`)).default,
		timeZone: "Asia/Riyadh",
		formats: getGlobalFormatOptions(locale),
	};
});

export { useLocale } from "@/lib/hooks/use-locale";
export { useFormatter } from "@/lib/hooks/use-formatter";
export { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({ locales });

export const getLocale = async () => {
	const locale = (await _getLocale()) as Lang;
	return locale;
};

export function getGlobalFormatOptions(
	locale: "en" | "ar" | Record<never, never>,
): IntlConfig["formats"] {
	return {
		dateTime: {
			date: {
				dateStyle: "long",
				timeZone: "Asia/Riyadh",
				numberingSystem: locale === "ar" ? "arab" : "latn",
			},
			time: {
				dateStyle: "medium",
				timeStyle: "medium",
				timeZone: "Asia/Riyadh",
				numberingSystem: locale === "ar" ? "arab" : "latn",
			},
		},
		number: {
			currency: {
				style: "currency",
				currency: "KWD",
				maximumFractionDigits: 1,
				numberingSystem: locale === "ar" ? "arab" : "latn",
			},
		},
	};
}

// ensure translations files match
type MessagesEn = typeof import("../messages/en.json");
type MessagesAr = typeof import("../messages/ar.json");
export type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

export type TranslationFilesMatch = Equal<MessagesEn, MessagesAr>;

const __should_be_true__: TranslationFilesMatch = true;
