import { HomeCarousel, NewsCard, PhotoGallery } from "@/components/reususables";
import { ArticleLayout, ContentPlaceLinks, SectionHeading, StoryLink } from "@/components/reususables/site";
import { councilFacebookUrl, getRelatedProjects, type CouncilProject } from "@/lib/content/projects";
import { getDepartmentsForProject, getWardsForProject } from "@/lib/content/relations";

type ProjectDetailViewProps = {
	project: CouncilProject;
};

const ProjectDetailView = ({ project }: ProjectDetailViewProps) => {
	const relatedProjects = getRelatedProjects(project.slug);
	const linkedWards = getWardsForProject(project);
	const linkedDepartments = getDepartmentsForProject(project);

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
				<ContentPlaceLinks wards={linkedWards} departments={linkedDepartments} />
				<StoryLink href={councilFacebookUrl} external className="mt-10">
					Follow updates on Facebook
				</StoryLink>
			</ArticleLayout>

			{relatedProjects.length ? (
				<section className="overflow-x-clip bg-council-image py-16 lg:py-24">
					<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
						<SectionHeading title="Other projects" />
						<div className="mt-10">
							<HomeCarousel bleed autoSlide label="other projects">
								{relatedProjects.map((relatedProject) => (
									<div key={relatedProject.slug} className="w-[300px] sm:w-[360px] lg:w-[400px]">
										<NewsCard
											article={relatedProject}
											href={`/projects/${relatedProject.slug}`}
											cta="View project"
											date={relatedProject.date}
										/>
									</div>
								))}
							</HomeCarousel>
						</div>
					</div>
				</section>
			) : null}
		</>
	);
};

export default ProjectDetailView;
