import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/reususables/site";
import { getProject, projects } from "@/lib/content/projects";
import { articleJsonLd, breadcrumbJsonLd, createPageMetadata, publishedIso } from "@/lib/seo";
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
		return { title: "Project", robots: { index: false, follow: false } };
	}

	return createPageMetadata({
		title: project.title,
		description: project.summary,
		path: `/projects/${project.slug}`,
		image: project.image,
		type: "article",
		publishedTime: publishedIso(project.date),
	});
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		notFound();
	}

	const path = `/projects/${project.slug}`;

	return (
		<>
			<JsonLd
				data={[
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{ name: "Projects", path: "/projects" },
						{ name: project.title, path },
					]),
					articleJsonLd({
						kind: "Article",
						path,
						title: project.title,
						description: project.summary,
						image: project.image.src,
						date: project.date,
					}),
				]}
			/>
			<ProjectDetailView project={project} />
		</>
	);
};

export default ProjectPage;
