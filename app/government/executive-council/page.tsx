import type { Metadata } from "next";

import { executiveCouncilPage } from "@/lib/content/executive-council";
import { ExecutiveCouncilView } from "@/view";

export const metadata: Metadata = {
	title: "Executive Council | Ikorodu North LCDA",
	description: executiveCouncilPage.description,
};

const ExecutiveCouncilPage = () => {
	return <ExecutiveCouncilView />;
};

export default ExecutiveCouncilPage;
