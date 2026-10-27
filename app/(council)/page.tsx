import { createPageMetadata } from "@/lib/seo";
import { HomeView } from "@/view";

export const metadata = createPageMetadata({
	title: "Ikorodu North LCDA",
	description: "Official digital home of Ikorodu North Local Council Development Area. News, projects, services and the five wards of the council in Lagos State.",
	path: "/",
});

const page = () => {
	return <HomeView />;
};

export default page;
