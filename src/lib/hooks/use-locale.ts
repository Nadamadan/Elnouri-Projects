import { useLocale as __useLocale } from "next-intl";

export const useLocale = () => {
	const locale = __useLocale() as Lang;

	if (!locale) {
		if (process.env.NODE_ENV === "development") {
			throw new Error("Fix this error in @/lib/hooks/use-locale.tsx");
		}
	}

	return locale;
};
