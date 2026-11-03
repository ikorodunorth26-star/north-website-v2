import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { NewsCard } from "@/components/reususables/news";
import type { CouncilDepartment } from "@/lib/content/departments";
import type { NewsArticle } from "@/lib/content/news";
import type { CouncilProject } from "@/lib/content/projects";
import { departmentHref, getArticleHref, getProjectHref, relatedWorkLabels } from "@/lib/content/relations";
import { cn } from "@/lib/utils";

import LocalImage from "./local-image";

type RelatedWorkSectionProps = {
	eyebrow?: string;
	title: string;
	projects: CouncilProject[];
	articles: NewsArticle[];
	departments?: CouncilDepartment[];
	emptyMessage?: string;
	tone?: "sand" | "sage" | "cream";
};

const toneClass: Record<NonNullable<RelatedWorkSectionProps["tone"]>, string> = {
	sand: "bg-[#E8EDDE]",
	sage: "bg-[#eef2e8]",
	cream: "bg-[#F8F7F2]",
};

const CountChip = ({ label }: { label: string }) => (
	<span className="inline-flex rounded-full bg-council-green px-3.5 py-1.5 text-xs font-bold tracking-[0.04em] text-white">{label}</span>
);

const RelatedWorkSection = ({
	eyebrow,
	title,
	projects,
	articles,
	departments = [],
	emptyMessage = relatedWorkLabels.wardEmpty,
	tone = "cream",
}: RelatedWorkSectionProps) => {
	const hasWork = projects.length > 0 || articles.length > 0;
	const [leadProject, ...otherProjects] = projects;

	return (
		<section className={cn("py-16 lg:py-20", toneClass[tone])}>
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<div className="flex flex-col gap-5 border-b border-council-green/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
					<div>
						{eyebrow ? <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-council-gold">{eyebrow}</p> : null}
						<h2 className={cn("text-[32px] font-bold leading-10 text-council-green sm:text-[40px] sm:leading-[46px]", eyebrow && "mt-2")}>{title}</h2>
					</div>
					{hasWork ? (
						<div className="flex flex-wrap gap-2">
							{projects.length ? <CountChip label={`${projects.length} project${projects.length === 1 ? "" : "s"}`} /> : null}
							{articles.length ? <CountChip label={`${articles.length} stor${articles.length === 1 ? "y" : "ies"}`} /> : null}
						</div>
					) : null}
				</div>

				{!hasWork ? (
					<p className="mt-10 text-base font-medium text-council-subtle">{emptyMessage}</p>
				) : (
					<div className="mt-10 space-y-12">
						{leadProject ? (
							<div>
								<Link
									href={getProjectHref(leadProject.slug)}
									className="group relative block overflow-hidden rounded-[28px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									<div className="relative aspect-[16/10] sm:aspect-[21/9]">
										<LocalImage
											src={leadProject.image.src}
											alt={leadProject.image.alt}
											className="absolute inset-0"
											imageClassName="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
											sizes="(min-width: 1408px) 1248px, 100vw"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#0e241d]/88 via-[#0e241d]/35 to-transparent" aria-hidden="true" />
									</div>
									<div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
										<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-lime">{leadProject.category}</p>
										<h3 className="mt-2 max-w-[720px] text-[28px] font-bold leading-9 text-white sm:text-[34px] sm:leading-10">{leadProject.title}</h3>
										<p className="mt-3 flex items-center gap-2 text-sm font-medium text-white/80">
											<MapPin className="size-4 shrink-0" aria-hidden="true" />
											{leadProject.location}
											<span aria-hidden="true">·</span>
											{leadProject.date}
										</p>
									</div>
								</Link>

								{otherProjects.length ? (
									<ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
										{otherProjects.map((project) => (
											<li key={project.slug}>
												<Link
													href={getProjectHref(project.slug)}
													className="group flex h-full items-stretch gap-4 overflow-hidden rounded-[20px] bg-white p-3 transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0">
													<div className="relative w-[88px] shrink-0 overflow-hidden rounded-[14px] sm:w-[104px]">
														<LocalImage
															src={project.image.src}
															alt=""
															className="absolute inset-0"
															imageClassName="object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
															sizes="104px"
														/>
													</div>
													<div className="min-w-0 py-1 pr-1">
														<p className="text-[10px] font-bold uppercase tracking-[0.1em] text-council-gold">{project.category}</p>
														<p className="mt-1 line-clamp-2 text-base font-bold leading-5 text-council-green">{project.title}</p>
														<p className="mt-2 text-xs font-medium text-council-subtle">{project.location}</p>
													</div>
												</Link>
											</li>
										))}
									</ul>
								) : null}
							</div>
						) : null}

						{articles.length ? (
							<div>
								<div className="mb-5 flex items-end justify-between gap-4">
									<h3 className="text-xl font-bold text-council-green">{relatedWorkLabels.wardNewsTitle}</h3>
									<Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-bold text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
										{relatedWorkLabels.viewAllNews}
										<ArrowUpRight className="size-3.5" aria-hidden="true" />
									</Link>
								</div>
								<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
									{articles.slice(0, 3).map((article) => (
										<NewsCard key={article.slug} article={article} href={getArticleHref(article.slug)} cta={relatedWorkLabels.readStory} date={article.date} />
									))}
								</div>
							</div>
						) : null}

						{departments.length ? (
							<div className="border-t border-council-green/10 pt-8">
								<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">{relatedWorkLabels.wardDesksTitle}</p>
								<ul className="mt-4 flex flex-wrap gap-2">
									{departments.map((department) => (
										<li key={department.slug}>
											<Link
												href={departmentHref(department.slug)}
												className="inline-flex items-center gap-1.5 rounded-full border border-council-green/15 bg-white px-4 py-2.5 text-sm font-medium text-council-green transition-colors hover:border-council-green hover:bg-council-green hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
												{department.title}
												<ArrowUpRight className="size-3.5" aria-hidden="true" />
											</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				)}
			</div>
		</section>
	);
};

export default RelatedWorkSection;
