import type { Metadata } from "next";

import { legalDocuments } from "@/lib/content/legal";
import { LegalView } from "@/view";

const document = legalDocuments.accessibility;

export const metadata: Metadata = {
	title: `${document.title} | Ikorodu North LCDA`,
	description: document.description,
};

const AccessibilityPage = () => {
	return <LegalView document={document} />;
};

export default AccessibilityPage;
