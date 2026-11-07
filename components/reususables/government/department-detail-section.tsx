import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { NewsCard } from "@/components/reususables/news";
import { LocalImage, RelatedWorkSection } from "@/components/reususables/site";
import {
	departmentDetailCopy,
	departmentHref,
	departmentIcons,
	departmentPhoneHref,
	getRelatedDepartments,
	type CouncilDepartment,
} from "@/lib/content/departments";
import { getNewsForDepartment, getProjectsForDepartment, getArticleHref, relatedWorkLabels } from "@/lib/content/relations";

type DepartmentDetailSectionProps = {
	department: CouncilDepartment;
	/** Present only when the HOD has a published public profile. */
	hodProfileHref?: string | null;
};

const DepartmentDetailSection = ({ department, hodProfileHref }: DepartmentDetailSectionProps) => {
	const related = getRelatedDepartments(department.slug);
	const linkedProjects = getProjectsForDepartment(department.slug);
	const linkedNews = getNewsForDepartment(department.slug, 3);
	const hodPhone = department.head.phone ?? department.phone;
	const hodPhoneHref = department.head.phoneHref ?? departmentPhoneHref;
	const Icon = departmentIcons[department.icon];

	return (
		<>
			<section className="bg-background py-16">
				<div className="mx-auto grid w-full max-w-council items-start gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,732px)_minmax(280px,420px)] lg:justify-between lg:gap-16 min-[1408px]:px-0">
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-council-gold">{departmentDetailCopy.heading}</p>
						<h2 className="mt-3 text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{department.title}</h2>
						<div className="mt-5 max-w-[732px] space-y-4 text-lg font-normal leading-7 text-council-subtle">
							{department.paragraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
						<h3 className="mt-10 text-2xl font-medium leading-8 text-council-green">{departmentDetailCopy.responsibilitiesHeading}</h3>
						<ul className="mt-4 flex max-w-[732px] flex-col gap-3">
							{department.responsibilities.map((item) => (
								<li key={item} className="flex gap-3 text-lg font-normal leading-7 text-council-subtle">
									<span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-council-gold" aria-hidden="true" />
									{item}
								</li>
							))}
						</ul>
					</div>
					<aside className="rounded-[24px] bg-white p-6 shadow-soft lg:sticky lg:top-28">
						<p className="text-xs font-normal uppercase tracking-[0.08em] text-council-subtle">{departmentDetailCopy.deskLabel}</p>
						<div className="mt-5 flex items-center gap-4">
							<span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
								<Icon className="size-6" aria-hidden="true" />
							</span>
							<div className="min-w-0">
								<p className="text-lg font-medium leading-6 text-council-green">{department.title}</p>
								<p className="mt-1 text-sm font-normal text-council-subtle">{department.head.leadLabel}</p>
							</div>
						</div>
						<div className="mt-6 space-y-4">
							<div className="flex items-center gap-3">
								<span className="inline-flex size-10 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
									<Phone className="size-4" aria-hidden="true" />
								</span>
								<div>
									<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{departmentDetailCopy.phoneLabel}</p>
									<a href={departmentPhoneHref} className="text-base font-medium text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
										{department.phone}
									</a>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<span className="inline-flex size-10 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
									<Mail className="size-4" aria-hidden="true" />
								</span>
								<div className="min-w-0">
									<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{departmentDetailCopy.emailLabel}</p>
									<a
										href={`mailto:${department.email}`}
										className="block break-all text-base font-medium text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
										{department.email}
									</a>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</section>

			<section className="bg-[#F8F7F2] py-16 lg:py-20">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-council-gold">{departmentDetailCopy.hodProfileHeading}</p>
					<h2 className="mt-3 text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">Meet the Head of Department</h2>
					<article className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-soft lg:grid lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)]">
						<div className="relative aspect-[4/5] bg-council-green/5 lg:aspect-auto lg:min-h-[420px]">
							{department.head.image ? (
								<LocalImage
									src={department.head.image.src}
									alt={department.head.image.alt}
									className="absolute inset-0"
									imageClassName="object-cover object-top"
									sizes="(min-width: 1024px) 320px, 100vw"
								/>
							) : (
								<div className="absolute inset-0 flex items-center justify-center bg-council-lime/35 text-5xl font-medium text-council-green" aria-hidden="true">
									{department.head.name
										.split(" ")
										.filter(Boolean)
										.slice(0, 2)
										.map((part) => part[0]?.toUpperCase() ?? "")
										.join("")}
								</div>
							)}
						</div>
						<div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
							<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{departmentDetailCopy.headLabel}</p>
							<h3 className="mt-2 text-[28px] font-medium leading-9 text-council-green sm:text-[34px] sm:leading-10">{department.head.name}</h3>
							<p className="mt-2 text-base font-medium leading-6 text-council-subtle sm:text-lg sm:leading-7">{department.head.role}</p>
							<div className="mt-8 flex items-center gap-3 rounded-[20px] bg-[#F8F7F2] p-4 sm:p-5">
								<span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-council-lime text-council-green">
									<Phone className="size-5" aria-hidden="true" />
								</span>
								<div>
									<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{departmentDetailCopy.hodPhoneLabel}</p>
									<a href={hodPhoneHref} className="mt-1 block text-lg font-medium text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
										{hodPhone}
									</a>
								</div>
							</div>
							{hodProfileHref ? (
								<Link
									href={hodProfileHref}
									className="mt-6 inline-flex w-fit items-center gap-2 text-base font-bold text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									{departmentDetailCopy.hodViewProfile}
									<ArrowUpRight className="size-4" aria-hidden="true" />
								</Link>
							) : null}
						</div>
					</article>
				</div>
			</section>

			<section className="bg-background py-16 lg:py-20">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<div className="flex flex-col gap-4 border-b border-council-green/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-council-gold">From this desk</p>
							<h2 className="mt-3 text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{departmentDetailCopy.newsHeading}</h2>
						</div>
						<Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-bold text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
							{departmentDetailCopy.viewAllNews}
							<ArrowUpRight className="size-3.5" aria-hidden="true" />
						</Link>
					</div>
					{linkedNews.length ? (
						<ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
							{linkedNews.map((article) => (
								<li key={article.slug}>
									<NewsCard article={article} href={getArticleHref(article.slug)} cta={departmentDetailCopy.newsCta} date={article.date} />
								</li>
							))}
						</ul>
					) : (
						<p className="mt-10 text-base font-medium text-council-subtle">{departmentDetailCopy.newsEmpty}</p>
					)}
				</div>
			</section>

			{linkedProjects.length ? (
				<RelatedWorkSection
					eyebrow="On record"
					title={`Projects from ${department.title}`}
					projects={linkedProjects}
					articles={[]}
					emptyMessage={relatedWorkLabels.departmentEmpty}
					tone="sage"
				/>
			) : null}

			<section className="bg-background py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{departmentDetailCopy.relatedTitle}</h2>
					<ul className="mt-8 grid gap-6 lg:grid-cols-3">
						{related.map((item) => {
							const RelatedIcon = departmentIcons[item.icon];
							return (
								<li key={item.slug}>
									<article className="flex h-full flex-col rounded-[24px] bg-white p-6">
										<span className="inline-flex size-14 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
											<RelatedIcon className="size-6" aria-hidden="true" />
										</span>
										<h3 className="mt-5 text-[26px] font-bold leading-8 text-council-green lg:text-[32px] lg:leading-10">{item.title}</h3>
										<p className="mt-3 text-lg font-medium leading-7 text-council-subtle">{item.description}</p>
										<p className="mt-5 inline-flex w-fit rounded-full bg-council-lime/40 px-4 py-2 text-base font-medium text-council-green">{item.head.leadLabel}</p>
										<Link
											href={departmentHref(item.slug)}
											className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-lg font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
											{departmentDetailCopy.profileLabel}
											<ArrowUpRight className="size-[18px]" aria-hidden="true" />
										</Link>
									</article>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
};

export default DepartmentDetailSection;
