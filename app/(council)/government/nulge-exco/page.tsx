import { nulgeExcoPage } from "@/lib/content/nulge-exco";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { NulgeExcoView } from "@/view";

export const metadata = createPageMetadata({
	title: "NULGE Exco",
	description: nulgeExcoPage.description,
	path: "/government/nulge-exco",
});

const NulgeExcoPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "NULGE Exco", path: "/government/nulge-exco" },
				])}
			/>
			<NulgeExcoView />
		</>
	);
};

export default NulgeExcoPage;
