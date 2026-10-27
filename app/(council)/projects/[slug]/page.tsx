import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProject, projects } from "@/lib/content/projects";
import { ProjectDetailView } from "@/view";

type ProjectPageProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
	return projects.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		return { title: "Project | Ikorodu North LCDA" };
	}

	return {
		title: `${project.title} | Ikorodu North LCDA`,
		description: project.summary,
	};
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		notFound();
	}

	return <ProjectDetailView project={project} />;
};

export default ProjectPage;
