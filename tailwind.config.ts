import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: "class",
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./view/**/*.{ts,tsx}", "./utils/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.25rem",
				sm: "1.5rem",
				md: "2rem",
				lg: "2.5rem",
				xl: "5rem",
			},
			screens: {
				"2xl": "1440px",
			},
		},
		extend: {
			screens: {
				xs: { max: "380px" },
				sm: "600px",
			},
			fontFamily: {
				sans: ["var(--font-satoshi)", "Satoshi", "General Sans", "Arial", "sans-serif"],
			},
			fontSize: {
				"council-caption": ["0.625rem", { lineHeight: "1rem", letterSpacing: "0.0875em" }],
				"council-eyebrow": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.083em", fontWeight: "500" }],
				"council-body-sm": ["0.8125rem", { lineHeight: "1.25rem" }],
				"council-body": ["0.9375rem", { lineHeight: "1.5rem" }],
				"council-body-lg": ["1.125rem", { lineHeight: "1.75rem" }],
				"council-card-title": ["1.25rem", { lineHeight: "1.875rem" }],
				"council-section-title": ["2.375rem", { lineHeight: "3.4375rem", letterSpacing: "-0.02em" }],
				"council-display": ["3.25rem", { lineHeight: "3.625rem", letterSpacing: "-0.02em" }],
			},
			maxWidth: {
				council: "80rem",
			},
			animation: {
				"blur-in": "blur-in 1s ease-out",
				"slide-down": "slide-down 650ms cubic-bezier(0.22, 1, 0.36, 1)",
			},
			keyframes: {
				"blur-in": {
					"0%": {
						filter: "blur(10px)",
					},
					"100%": {
						filter: "blur(0px)",
					},
				},
				"slide-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-110%)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			boxShadow: {
				"nav": "0 9px 24px 10px rgb(0 0 0 / 0.1), 0 9px 40px 10px rgb(0 0 0 / 0.05)",
				"card": "0 20px 36px rgb(0 0 0 / 0.06)",
				"soft": "0 8px 20px rgb(0 0 0 / 0.04)",
				"dropdown": "0 8px 24px rgb(16 45 38 / 0.12)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				council: {
					green: "hsl(var(--primary))",
					dark: "hsl(var(--brand-dark))",
					nav: "hsl(var(--brand-nav))",
					surface: "hsl(var(--brand-surface))",
					border: "hsl(var(--brand-border))",
					cream: "hsl(var(--cream))",
					card: "hsl(var(--card))",
					muted: "hsl(var(--secondary))",
					image: "hsl(var(--surface-image))",
					text: "hsl(var(--foreground))",
					subtle: "hsl(var(--ink-subtle))",
					footer: "hsl(var(--footer-muted))",
					"footer-subtle": "hsl(var(--footer-subtle))",
					gold: "hsl(var(--gold))",
					"gold-soft": "hsl(var(--gold-soft))",
					lime: "hsl(var(--accent))",
				},
				status: {
					success: "hsl(var(--success))",
					"success-foreground": "hsl(var(--success-foreground))",
					"success-soft": "hsl(var(--success-soft))",
					warning: "hsl(var(--warning))",
					"warning-foreground": "hsl(var(--warning-foreground))",
					info: "hsl(var(--info))",
					"info-foreground": "hsl(var(--info-foreground))",
				},
			},
			borderRadius: {
				xs: "0.25rem",
				sm: "0.75rem",
				md: "1rem",
				lg: "var(--radius)",
				xl: "1.5rem",
				"2xl": "1.75rem",
				"3xl": "2rem",
				"4xl": "2.5rem",
			},
		},
	},
	plugins: [
		tailwindcssAnimate,
		heroui({
			themes: {
				light: {
					colors: {
						background: "#f8f5ed",
						foreground: "#173d32",
						focus: "#173d32",
						content1: "#fffdf8",
						content2: "#f1efe4",
						content3: "#ece8db",
						content4: "#e8e9df",
						default: {
							DEFAULT: "#ece8db",
							foreground: "#173d32",
						},
						primary: {
							DEFAULT: "#173d32",
							foreground: "#ffffff",
						},
						secondary: {
							DEFAULT: "#ece8db",
							foreground: "#173d32",
						},
						success: {
							DEFAULT: "#00bf56",
							foreground: "#ffffff",
						},
						warning: {
							DEFAULT: "#c39828",
							foreground: "#173d32",
						},
						danger: {
							DEFAULT: "#c45c48",
							foreground: "#ffffff",
						},
					},
				},
				dark: {
					colors: {
						background: "#102d26",
						foreground: "#f8f7f2",
						focus: "#ddeb9d",
						content1: "#15332b",
						content2: "#194337",
						content3: "#254c3f",
						content4: "#315247",
						default: {
							DEFAULT: "#194337",
							foreground: "#f8f7f2",
						},
						primary: {
							DEFAULT: "#ddeb9d",
							foreground: "#173d32",
						},
						secondary: {
							DEFAULT: "#194337",
							foreground: "#f8f7f2",
						},
						success: {
							DEFAULT: "#00bf56",
							foreground: "#ffffff",
						},
						warning: {
							DEFAULT: "#c39828",
							foreground: "#173d32",
						},
						danger: {
							DEFAULT: "#c45c48",
							foreground: "#ffffff",
						},
					},
				},
			},
		}),
	],
} satisfies Config;
