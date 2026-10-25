import { homeContent, homeProjects } from "@/lib/content/home";

import HomeCarousel from "./home-carousel";
import HomeSectionHeading from "./home-section-heading";
import HomeStoryCard from "./home-story-card";

const HomeProjectsSection = () => {
	const { projects } = homeContent;

	return (
		<section className="overflow-x-clip bg-[#f1efe4] py-16 lg:py-24" aria-labelledby="home-projects-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<HomeSectionHeading id="home-projects-heading" title={projects.title} description={projects.description} ctaLabel={projects.cta} ctaHref="/projects" titleClassName="font-bold" />
				<div className="mt-10">
					<HomeCarousel bleed autoSlide label="community projects">
						{homeProjects.map((project) => (
							<HomeStoryCard
								key={project.title}
								title={project.title}
								description={project.description}
								image={project.image}
								href={project.href}
								category={project.category}
								date={project.date}
								variant="project"
							/>
						))}
					</HomeCarousel>
				</div>
			</div>
		</section>
	);
};

export default HomeProjectsSection;
