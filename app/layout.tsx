import type { Metadata, Viewport } from "next";
import { cn, ThemeProvider, InternetStatus, Satoshi } from "@/lib";
import { JsonLd } from "@/components/reususables/site";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { siteDescription, siteJsonLd, siteLegalName, siteName, siteUrl } from "@/lib/seo";

const appColor = "#173d32";
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	description: siteDescription,
	applicationName: siteName,
	authors: [{ name: siteLegalName, url: siteUrl }],
	creator: siteLegalName,
	publisher: siteLegalName,
	category: "government",
	referrer: "origin-when-cross-origin",
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_NG",
		url: "/",
		siteName,
		description: siteDescription,
	},
	twitter: {
		card: "summary_large_image",
		description: siteDescription,
	},
	...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
};

export const viewport: Viewport = {
	themeColor: appColor,
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en-NG"
			className={Satoshi.variable}
			suppressHydrationWarning>
			<body className={cn("m-auto min-h-screen bg-background bg-center bg-no-repeat font-sans antialiased scroll-smooth")}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<JsonLd data={siteJsonLd()} />
					<NextTopLoader
						color="#c39828"
						showSpinner={false}
						easing="ease"
					/>
					{children}

					<Toaster
						position="top-right"
						expand={false}
					/>
					<InternetStatus />
					{googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
					{googleTagManagerId ? <GoogleTagManager gtmId={googleTagManagerId} /> : null}
				</ThemeProvider>
			</body>
		</html>
	);
}
