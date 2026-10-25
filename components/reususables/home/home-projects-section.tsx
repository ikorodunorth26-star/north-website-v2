import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { homeContent, homeProjects } from "@/lib/content/home";

import HomeCarousel from "./home-carousel";
import HomeSectionHeading from "./home-section-heading";
import HomeStoryCard from "./home-story-card";

const HomeProjectsSection = () => {
	const { projects } = homeContent;

	return (
		<section className="bg-[#f1efe4] py-16 lg:py-24" aria-labelledby="home-projects-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1360px]:px-0">
				<HomeSectionHeading id="home-projects-heading" title={projects.title} description={projects.description} ctaLabel={projects.cta} ctaHref="/projects" />
			</div>
			<div className="mt-10 overflow-hidden">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1360px]:px-0">
					<HomeCarousel
						label="community projects"
						footerAction={
							<Link
								href="/projects"
								className="inline-flex w-fit items-center gap-2 text-base font-bold leading-5 text-council-green underline-offset-4 transition-colors hover:text-council-gold hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
								{projects.cta}
								<ArrowUpRight className="size-4" aria-hidden="true" />
							</Link>
						}>
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
