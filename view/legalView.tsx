import LegalDocumentBody from "@/components/reususables/legal/legal-document";
import { PageIntro } from "@/components/reususables/site";
import type { LegalDocument } from "@/lib/content/legal";

const LegalView = ({ document }: { document: LegalDocument }) => {
	return (
		<>
			<PageIntro label={document.label} title={document.title} description={document.description} />
			<LegalDocumentBody document={document} />
		</>
	);
};

export default LegalView;
