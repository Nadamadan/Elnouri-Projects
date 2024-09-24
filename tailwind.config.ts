import type { Config } from "tailwindcss";
import themePlugin from "./src/lib/theme";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	plugins: [themePlugin, require("tailwindcss-animate")],
} satisfies Config;

export default config;
