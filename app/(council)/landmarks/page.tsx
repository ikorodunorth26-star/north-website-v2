import type { Metadata } from "next";

import { landmarksPage } from "@/lib/content/landmarks";
import { LandmarksView } from "@/view";

export const metadata: Metadata = {
	title: "Landmarks & culture | Ikorodu North LCDA",
	description: landmarksPage.description,
};

const LandmarksPage = () => {
	return <LandmarksView />;
};

export default LandmarksPage;
