"use client";

import { useLocale } from "@/i18n";
import { DirectionProvider } from "@radix-ui/react-direction";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function ClientProviders({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const lang = useLocale();

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<SessionProvider>
				<DirectionProvider dir={lang === "en" ? "ltr" : "rtl"}>
					<TooltipProvider>{children}</TooltipProvider>
				</DirectionProvider>
			</SessionProvider>
		</ThemeProvider>
	);
}
