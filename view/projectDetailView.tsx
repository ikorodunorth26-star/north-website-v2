import { NewsCard, PhotoGallery } from "@/components/reususables";
import { ArticleLayout, SectionHeading, StoryLink } from "@/components/reususables/site";
import { councilFacebookUrl, getRelatedProjects, type CouncilProject } from "@/lib/content/projects";

type ProjectDetailViewProps = {
	project: CouncilProject;
};

const ProjectDetailView = ({ project }: ProjectDetailViewProps) => {
	const relatedProjects = getRelatedProjects(project.slug);

	return (
		<>
			<ArticleLayout
				backHref="/projects"
				backLabel="Back to projects"
				title={project.title}
				image={project.image}
				meta={
					<>
						<span>{project.category}</span>
						<span aria-hidden="true">•</span>
						<time dateTime={project.date}>{project.date}</time>
					</>
				}>
				<div className="space-y-6">
					{project.paragraphs.map((paragraph, index) => (
						<p key={paragraph} className={index === 0 ? "text-lg leading-8 text-council-green" : "text-[15px] leading-[30px] text-council-subtle"}>
							{paragraph}
						</p>
					))}
				</div>
				<PhotoGallery photos={project.gallery} />
				<StoryLink href={councilFacebookUrl} external className="mt-10">
					Follow updates on Facebook
				</StoryLink>
			</ArticleLayout>

			{relatedProjects.length ? (
				<section className="bg-council-image py-16 lg:py-24">
					<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
						<SectionHeading title="Other projects" />
						<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{relatedProjects.map((relatedProject) => (
								<NewsCard
									key={relatedProject.slug}
									article={relatedProject}
									href={`/projects/${relatedProject.slug}`}
									cta="View project"
									date={relatedProject.date}
								/>
							))}
						</div>
					</div>
				</section>
			) : null}
		</>
	);
};

export default ProjectDetailView;
