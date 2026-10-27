import { projectsPage } from "@/lib/content/projects";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { ProjectsView } from "@/view";

export const metadata = createPageMetadata({
	title: "Projects",
	description: projectsPage.description,
	path: "/projects",
});

const ProjectsPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Projects", path: "/projects" },
				])}
			/>
			<ProjectsView />
		</>
	);
};

export default ProjectsPage;
