import { suggestProjectPage } from "@/lib/content/suggest-project";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { SuggestProjectView } from "@/view";

export const metadata = createPageMetadata({
	title: "Suggest a project",
	description: suggestProjectPage.description,
	path: "/projects/suggest",
});

const SuggestProjectPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Projects", path: "/projects" },
					{ name: "Suggest a project", path: "/projects/suggest" },
				])}
			/>
			<SuggestProjectView />
		</>
	);
};

export default SuggestProjectPage;
