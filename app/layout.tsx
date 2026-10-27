import type { Metadata, Viewport } from "next";
import { cn, ThemeProvider, InternetStatus, Satoshi } from "@/lib";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const appName = "Ikorodu North LCDA";
const appColor = "#173d32";

export const metadata: Metadata = {
	title: `${appName} `,
	description: "Official digital home of Ikorodu North Local Council Development Area.",
	manifest: "/manifest",
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
			lang="en"
			className={Satoshi.variable}
			suppressHydrationWarning>
			<body className={cn("m-auto min-h-screen bg-background bg-center bg-no-repeat font-sans antialiased scroll-smooth")}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
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
					<GoogleAnalytics gaId="" />
					<GoogleTagManager gtmId="" />
				</ThemeProvider>
			</body>
		</html>
	);
}
