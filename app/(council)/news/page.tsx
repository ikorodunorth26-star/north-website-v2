import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { NewsView } from "@/view";

export const metadata = createPageMetadata({
	title: "News & Updates",
	description: "Official announcements, project updates and community programmes from Ikorodu North LCDA.",
	path: "/news",
});

const NewsPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "News & Updates", path: "/news" },
				])}
			/>
			<NewsView />
		</>
	);
};

export default NewsPage;
