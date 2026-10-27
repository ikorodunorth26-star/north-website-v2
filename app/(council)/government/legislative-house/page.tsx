import { legislativeHousePage } from "@/lib/content/legislative-house";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { LegislativeHouseView } from "@/view";

export const metadata = createPageMetadata({
	title: "Legislative House",
	description: legislativeHousePage.description,
	path: "/government/legislative-house",
});

const LegislativeHousePage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Legislative House", path: "/government/legislative-house" },
				])}
			/>
			<LegislativeHouseView />
		</>
	);
};

export default LegislativeHousePage;
