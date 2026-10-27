import { aboutPage } from "@/lib/content/about";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { AboutView } from "@/view";

export const metadata = createPageMetadata({
	title: "About & History",
	description: aboutPage.description,
	path: "/about",
});

const AboutPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "About & History", path: "/about" },
				])}
			/>
			<AboutView />
		</>
	);
};

export default AboutPage;
