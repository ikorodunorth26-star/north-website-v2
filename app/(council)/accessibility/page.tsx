import { legalDocuments } from "@/lib/content/legal";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { LegalView } from "@/view";

const document = legalDocuments.accessibility;

export const metadata = createPageMetadata({
	title: document.title,
	description: document.description,
	path: "/accessibility",
});

const AccessibilityPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: document.title, path: "/accessibility" },
				])}
			/>
			<LegalView document={document} />
		</>
	);
};

export default AccessibilityPage;
