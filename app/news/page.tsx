import type { Metadata } from "next";

import { NewsView } from "@/view";

export const metadata: Metadata = {
	title: "News & Updates | Ikorodu North LCDA",
	description: "Official announcements, project updates and community programmes from Ikorodu North LCDA.",
};

const NewsPage = () => {
	return <NewsView />;
};

export default NewsPage;
