import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { GalleryView } from "@/view";

export const metadata = createPageMetadata({
	title: "Gallery",
	description: "Photographs from council events, community engagements, project handovers and programmes across Ikorodu North.",
	path: "/gallery",
});

const GalleryPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Gallery", path: "/gallery" },
				])}
			/>
			<GalleryView />
		</>
	);
};

export default GalleryPage;
