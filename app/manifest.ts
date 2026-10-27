import type { MetadataRoute } from "next";

import { siteDescription, siteLegalName, siteLogo, siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteLegalName,
		short_name: siteName,
		description: siteDescription,
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#f8f7f2",
		theme_color: "#173d32",
		lang: "en-NG",
		categories: ["government"],
		icons: [
			{
				src: siteLogo,
				sizes: "916x913",
				type: "image/webp",
				purpose: "any",
			},
		],
	};
}
