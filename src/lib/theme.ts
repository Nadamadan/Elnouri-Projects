import plugin from "tailwindcss/plugin";

const themePlugin = plugin(
	({ addBase, addUtilities }) => {
		addBase({
			":root": {
				"--background": "0 0% 100%", //black
				"--foreground": "0 0 20%", // M light gray
				"--card": "0 0% 100%",
				"--card-foreground": "0 0 20%", // M
				"--popover": "0 0% 100%", //black
				"--popover-foreground": "0 0 20%", // M light gray
				"--primary": "142.1 76.2% 36.3%", //light green
				"--primary-foreground": "355.7 100% 97.3%", // dark green
				"--secondary": "47.9 95.8% 53.1%", // M yellow
				"--secondary-blue": "221.2 83.2% 53.3%", // +
				"--secondary-foreground": "355.7 100% 97.3%", // M
				"--muted": "240 4.8% 95.9%", //dark gray
				"--muted-foreground": "240 3.8% 46.1%", // dark gray
				"--accent": "240 4.8% 95.9%", //black
				"--accent-foreground": "240 5.9% 10%", //white
				"--destructive": "0 84.2% 60.2%", // dark red
				"--destructive-foreground": "0 0% 98%",
				"--border": "240 5.9% 90%",
				"--input": "240 5.9% 90%",
				"--ring": "142.1 76.2% 36.3%",
				"--radius": "0.75rem",
				"--chart-1": "12 76% 61%",
				"--chart-2": "173 58% 39%",
				"--chart-3": "197 37% 24%",
				"--chart-4": "43 74% 66%",
				"--chart-5": "27 87% 67%",
			},
			".dark": {
				"--background": "20 14.3% 4.1%",
				"--foreground": "0 0% 95%",
				"--card": "24 9.8% 10%",
				"--card-foreground": "0 0% 95%",
				"--popover": "0 0% 9%",
				"--popover-foreground": "0 0% 95%",
				"--primary": "142.1 70.6% 45.3%",
				"--primary-foreground": "144.9 80.4% 10%",
				"--secondary": " 47.9 95.8% 53.1%", // M
				"--secondary-blue": "217.2 91.2% 59.8%", // +
				"--secondary-foreground": "144.9 80.4% 10%", // M
				"--muted": "0 0% 15%",
				"--muted-foreground": "240 5% 64.9%",
				"--accent": "12 6.5% 15.1%",
				"--accent-foreground": "0 0% 98%",
				"--destructive": "0 62.8% 30.6%",
				"--destructive-foreground": "0 85.7% 97.3%",
				"--border": "240 3.7% 15.9%",
				"--input": "240 3.7% 15.9%",
				"--ring": "142.4 71.8% 29.2%",
				"--chart-1": "220 70% 50%",
				"--chart-2": "160 60% 45%",
				"--chart-3": "30 80% 55%",
				"--chart-4": "280 65% 60%",
				"--chart-5": "340 75% 55%",
			},
			"*": {
				"@apply border-border": {},
			},
		});
		addUtilities({
			".flex-center": {
				"@apply flex items-center justify-center": {},
			},
		});
	},
	{
		prefix: "",
		theme: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					"2xl": "4rem",
				},
				screens: {
					"2xl": "1536px",
				},
			},
			extend: {
				colors: {
					border: "hsl(var(--border))",
					input: "hsl(var(--input))",
					ring: "hsl(var(--ring))",
					background: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					primary: {
						DEFAULT: "hsl(var(--primary))",
						foreground: "hsl(var(--primary-foreground))",
					},
					// 'secondary' is customized; use 'muted' instead for Shad UI compatibility
					secondary: {
						DEFAULT: "hsl(var(--secondary))",
						foreground: "hsl(var(--secondary-foreground))",
						blue: "hsl(var(--secondary-blue))",
					},
					destructive: {
						DEFAULT: "hsl(var(--destructive))",
						foreground: "hsl(var(--destructive-foreground))",
					},
					muted: {
						DEFAULT: "hsl(var(--muted))",
						foreground: "hsl(var(--muted-foreground))",
					},
					accent: {
						DEFAULT: "hsl(var(--accent))",
						foreground: "hsl(var(--accent-foreground))",
					},
					popover: {
						DEFAULT: "hsl(var(--popover))",
						foreground: "hsl(var(--popover-foreground))",
					},
					card: {
						DEFAULT: "hsl(var(--card))",
						foreground: "hsl(var(--card-foreground))",
					},
				},
				borderRadius: {
					lg: "var(--radius)",
					md: "calc(var(--radius) - 2px)",
					sm: "calc(var(--radius) - 4px)",
				},
				keyframes: {
					"accordion-down": {
						from: { height: "0" },
						to: { height: "var(--radix-accordion-content-height)" },
					},
					"accordion-up": {
						from: { height: "var(--radix-accordion-content-height)" },
						to: { height: "0" },
					},
					shimmer: {
						"100%": { transform: "translateX(100%)" },
					},
				},
				animation: {
					"accordion-down": "accordion-down 0.2s ease-out",
					"accordion-up": "accordion-up 0.2s ease-out",
					shimmer: "shimmer 2s infinite",
				},
			},
		},
	},
);

export default themePlugin;
