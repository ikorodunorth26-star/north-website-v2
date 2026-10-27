import type { Metadata } from "next";

import { legalDocuments } from "@/lib/content/legal";
import { LegalView } from "@/view";

const document = legalDocuments["privacy-policy"];

export const metadata: Metadata = {
	title: `${document.title} | Ikorodu North LCDA`,
	description: document.description,
};

const PrivacyPolicyPage = () => {
	return <LegalView document={document} />;
};

export default PrivacyPolicyPage;
