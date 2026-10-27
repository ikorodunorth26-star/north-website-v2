import localFont from "next/font/local";

export const GeneralSans_SemiBold = localFont({
	src: "../public/fonts/GeneralSans/WEB/fonts/GeneralSans-Semibold.woff",
});

export const GeneralSans_Meduim = localFont({
	src: "../public/fonts/GeneralSans/WEB/fonts/GeneralSans-Medium.woff",
});

export const GeneralSans_Regular = localFont({
	src: "../public/fonts/GeneralSans/WEB/fonts/GeneralSans-Regular.woff",
});

export const Satoshi = localFont({
	src: [
		{
			path: "../public/fonts/Satoshi/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
	preload: true,
});
