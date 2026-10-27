import type { Metadata } from "next";

import { ProjectsView } from "@/view";

export const metadata: Metadata = {
	title: "Projects | Ikorodu North LCDA",
	description: "Commissioned projects across Ikorodu North LCDA, including solar water and school sanitation works.",
};

const ProjectsPage = () => {
	return <ProjectsView />;
};

export default ProjectsPage;
