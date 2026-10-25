import type { Metadata } from "next";

import { aboutPage } from "@/lib/content/about";
import { AboutView } from "@/view";

export const metadata: Metadata = {
	title: "About & History | Ikorodu North LCDA",
	description: aboutPage.description,
};

const AboutPage = () => {
	return <AboutView />;
};

export default AboutPage;
