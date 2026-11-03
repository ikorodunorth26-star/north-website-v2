import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { LocalImage, RelatedWorkSection } from "@/components/reususables/site";
import {
	departmentDetailCopy,
	departmentHref,
	departmentIcons,
	departmentPhoneHref,
	getRelatedDepartments,
	type CouncilDepartment,
} from "@/lib/content/departments";
import { getNewsForDepartment, getProjectsForDepartment, relatedWorkLabels } from "@/lib/content/relations";

type DepartmentDetailSectionProps = {
	department: CouncilDepartment;
};

const DepartmentDetailSection = ({ department }: DepartmentDetailSectionProps) => {
	const related = getRelatedDepartments(department.slug);
	const linkedProjects = getProjectsForDepartment(department.slug);
	const linkedNews = getNewsForDepartment(department.slug);

	return (
		<>
			<section className="bg-background py-16">
				<div className="mx-auto grid w-full max-w-council items-start gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,732px)_minmax(280px,420px)] lg:justify-between lg:gap-16 min-[1408px]:px-0">
					<div>
						<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{departmentDetailCopy.heading}</h2>
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
							{department.head.image ? (
								<div className="relative size-24 shrink-0 overflow-hidden rounded-full">
									<LocalImage
										src={department.head.image.src}
										alt={department.head.image.alt}
										className="absolute inset-0"
										imageClassName="object-cover object-top"
										sizes="96px"
									/>
								</div>
							) : (
								<div className="inline-flex size-24 shrink-0 items-center justify-center rounded-full bg-council-lime/45 text-2xl font-medium text-council-green" aria-hidden="true">
									{department.head.name
										.split(" ")
										.filter(Boolean)
										.slice(0, 2)
										.map((part) => part[0]?.toUpperCase() ?? "")
										.join("")}
								</div>
							)}
							<div>
								<p className="text-xs font-normal uppercase tracking-[0.08em] text-council-subtle">{departmentDetailCopy.headLabel}</p>
								<p className="mt-1 text-xl font-medium leading-6 text-council-green">{department.head.name}</p>
								<p className="mt-1 text-sm font-normal text-council-subtle">{department.head.role}</p>
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

			<RelatedWorkSection
				eyebrow="On record"
				title={`From ${department.title}`}
				projects={linkedProjects}
				articles={linkedNews}
				emptyMessage={relatedWorkLabels.departmentEmpty}
				tone="sage"
			/>

			<section className="bg-background py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{departmentDetailCopy.relatedTitle}</h2>
					<ul className="mt-8 grid gap-6 lg:grid-cols-3">
						{related.map((item) => {
							const Icon = departmentIcons[item.icon];
							return (
								<li key={item.slug}>
									<article className="flex h-full flex-col rounded-[24px] bg-white p-6">
										<span className="inline-flex size-14 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
											<Icon className="size-6" aria-hidden="true" />
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
