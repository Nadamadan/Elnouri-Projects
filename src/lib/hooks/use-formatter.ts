import { createFormatter, useNow, useTimeZone } from "next-intl";
import { useMemo } from "react";

import { getGlobalFormatOptions, useLocale } from "@/i18n";

export function useFormatter() {
	const locale = useLocale();
	const globalNow = useNow();
	const timeZone = useTimeZone();
	const formats = useMemo(() => {
		return getGlobalFormatOptions(locale);
	}, [locale]);

	const formattingLocale =
		{
			ar: "ar-EG",
			en: "en-US",
		}[locale] ?? locale;

	return useMemo(
		() =>
			createFormatter({
				formats,
				locale: formattingLocale,
				now: globalNow,
				timeZone,
				onError(error) {
					// eslint-disable-next-line no-console
					console.error(error);
				},
			}),
		[formats, globalNow, formattingLocale, timeZone],
	);
}
