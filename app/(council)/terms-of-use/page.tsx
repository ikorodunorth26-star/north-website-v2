import { legalDocuments } from "@/lib/content/legal";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { LegalView } from "@/view";

const document = legalDocuments["terms-of-use"];

export const metadata = createPageMetadata({
	title: document.title,
	description: document.description,
	path: "/terms-of-use",
});

const TermsOfUsePage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: document.title, path: "/terms-of-use" },
				])}
			/>
			<LegalView document={document} />
		</>
	);
};

export default TermsOfUsePage;
