import { ProjectsSection } from "@/components/reususables/projects";
import { PageIntro } from "@/components/reususables/site";
import { projectsPage } from "@/lib/content/projects";

const ProjectsView = () => {
	return (
		<>
			<PageIntro label={projectsPage.label} title={projectsPage.title} description={projectsPage.description} />
			<ProjectsSection />
		</>
	);
};

export default ProjectsView;
