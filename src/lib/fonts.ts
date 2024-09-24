import { Inter, Cairo } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

const interAr = Cairo({
	subsets: ["arabic"],
	display: "swap",
});

export { inter, interAr };
