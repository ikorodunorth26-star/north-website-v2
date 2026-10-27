import { executiveCouncilPage } from "@/lib/content/executive-council";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { ExecutiveCouncilView } from "@/view";

export const metadata = createPageMetadata({
	title: "Executive Council",
	description: executiveCouncilPage.description,
	path: "/government/executive-council",
});

const ExecutiveCouncilPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Executive Council", path: "/government/executive-council" },
				])}
			/>
			<ExecutiveCouncilView />
		</>
	);
};

export default ExecutiveCouncilPage;
