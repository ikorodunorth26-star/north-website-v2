"use client";

import { useState } from "react";

import { FeaturedNewsCard, NewsCard, NewsPagination, NewsToolbar } from "@/components/reususables/news";
import { SectionHeading } from "@/components/reususables/site";
import { projectCategories, projects, type CouncilProject } from "@/lib/content/projects";

import SuggestProjectBanner from "./suggest-project-banner";

const pageSize = 9;

const featuredProject = projects[0];
const listedProjects = projects.slice(1);

const projectMatches = (project: CouncilProject, category: string, query: string) => {
	const matchesCategory = category === "all" || project.category === category;
	const matchesSearch = !query || [project.category, project.title, project.summary].some((value) => value.toLowerCase().includes(query));
	return matchesCategory && matchesSearch;
};

const ProjectsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchValue, setSearchValue] = useState("");
	const query = searchValue.trim().toLowerCase();
	const filteredProjects = listedProjects.filter((project) => projectMatches(project, activeCategory, query));
	const showPagination = activeCategory === "all" && !query;

	return (
		<section className="bg-background py-14 lg:py-16">
			<div className="mx-auto flex w-full min-w-0 max-w-council flex-col gap-9 px-5 md:px-10 min-[1408px]:px-0">
				{featuredProject ? (
					<div className="flex flex-col gap-9">
						<SectionHeading title="Featured project" titleClassName="text-[36px] leading-10 md:text-[40px] md:leading-[46px] lg:text-[44px] lg:leading-[50px]" />
						<FeaturedNewsCard article={featuredProject} href={`/projects/${featuredProject.slug}`} cta="View project" location={featuredProject.location} />
					</div>
				) : null}

				<div className="mt-8 flex min-w-0 flex-col gap-9 lg:mt-16">
					<SectionHeading title="All projects" titleClassName="text-[36px] leading-10 md:text-[40px] md:leading-[46px] lg:text-[44px] lg:leading-[50px]" />
					<NewsToolbar
						categories={projectCategories}
						activeCategory={activeCategory}
						onCategoryChange={setActiveCategory}
						searchValue={searchValue}
						onSearchChange={setSearchValue}
						filterLabel="Filter projects by category"
						searchId="project-search"
						searchLabel="Search projects"
						searchPlaceholder="Search projects"
						searchOpenLabel="Open project search"
						searchFullWidth
					/>
					{filteredProjects.length ? (
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{filteredProjects.map((project) => (
								<NewsCard key={project.slug} article={project} href={`/projects/${project.slug}`} cta="View project" date={project.date} />
							))}
						</div>
					) : (
						<div className="rounded-[20px] bg-card p-8 text-council-subtle">No projects match your current filter. Try another category or search term.</div>
					)}
					{showPagination ? <NewsPagination pageSize={Math.min(pageSize, filteredProjects.length)} totalPosts={filteredProjects.length} itemLabel="projects" label="Project pages" /> : null}
					<SuggestProjectBanner />
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
