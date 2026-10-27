import { legalDocuments } from "@/lib/content/legal";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { LegalView } from "@/view";

const document = legalDocuments["privacy-policy"];

export const metadata = createPageMetadata({
	title: document.title,
	description: document.description,
	path: "/privacy-policy",
});

const PrivacyPolicyPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: document.title, path: "/privacy-policy" },
				])}
			/>
			<LegalView document={document} />
		</>
	);
};

export default PrivacyPolicyPage;
