import type { Metadata } from "next";

import { legislativeHousePage } from "@/lib/content/legislative-house";
import { LegislativeHouseView } from "@/view";

export const metadata: Metadata = {
	title: "Legislative House | Ikorodu North LCDA",
	description: legislativeHousePage.description,
};

const LegislativeHousePage = () => {
	return <LegislativeHouseView />;
};

export default LegislativeHousePage;
