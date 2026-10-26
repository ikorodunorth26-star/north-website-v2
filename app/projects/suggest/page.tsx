import type { Metadata } from "next";

import { suggestProjectPage } from "@/lib/content/suggest-project";
import { SuggestProjectView } from "@/view";

export const metadata: Metadata = {
	title: "Suggest a project | Ikorodu North LCDA",
	description: suggestProjectPage.description,
};

const SuggestProjectPage = () => {
	return <SuggestProjectView />;
};

export default SuggestProjectPage;
