import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { LocalImage } from "@/components/reususables/site";
import { departmentIcons, ictDepartment, ictRelated } from "@/lib/content/ict-department";

const IctDepartmentSection = () => {
	return (
		<>
			<section className="bg-background py-16">
				<div className="mx-auto grid w-full max-w-council items-start gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,732px)_minmax(280px,420px)] lg:justify-between lg:gap-16 min-[1408px]:px-0">
					<div>
						<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{ictDepartment.heading}</h2>
						<div className="mt-5 max-w-[732px] space-y-4 text-lg font-normal leading-7 text-council-subtle">
							{ictDepartment.paragraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
						<h3 className="mt-10 text-2xl font-medium leading-8 text-council-green">{ictDepartment.responsibilitiesHeading}</h3>
						<ul className="mt-4 flex max-w-[732px] flex-col gap-3">
							{ictDepartment.responsibilities.map((item) => (
								<li key={item} className="flex gap-3 text-lg font-normal leading-7 text-council-subtle">
									<span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-council-gold" aria-hidden="true" />
									{item}
								</li>
							))}
						</ul>
					</div>
					<aside className="rounded-[24px] bg-white p-6 shadow-soft lg:sticky lg:top-28">
						<p className="text-xs font-normal uppercase tracking-[0.08em] text-council-subtle">{ictDepartment.deskLabel}</p>
						<div className="mt-5 flex items-center gap-4">
							<div className="relative size-24 shrink-0 overflow-hidden rounded-full">
								<LocalImage src={ictDepartment.image.src} alt={ictDepartment.image.alt} className="absolute inset-0" imageClassName="object-cover object-top" sizes="96px" />
							</div>
							<div>
								<p className="text-xs font-normal uppercase tracking-[0.08em] text-council-subtle">{ictDepartment.headLabel}</p>
								<p className="mt-1 text-xl font-medium leading-6 text-council-green">{ictDepartment.name}</p>
								<p className="mt-1 text-sm font-normal text-council-subtle">{ictDepartment.role}</p>
							</div>
						</div>
						<div className="mt-6 space-y-4">
							<div className="flex items-center gap-3">
								<span className="inline-flex size-10 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
									<Phone className="size-4" aria-hidden="true" />
								</span>
								<div>
									<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{ictDepartment.phoneLabel}</p>
									<p className="text-base font-medium text-council-green">{ictDepartment.phone}</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<span className="inline-flex size-10 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
									<Mail className="size-4" aria-hidden="true" />
								</span>
								<div className="min-w-0">
									<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{ictDepartment.emailLabel}</p>
									<a href={`mailto:${ictDepartment.email}`} className="block break-all text-base font-medium text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
										{ictDepartment.email}
									</a>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</section>

			<section className="bg-background pb-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{ictRelated.title}</h2>
					<ul className="mt-8 grid gap-6 lg:grid-cols-3">
						{ictRelated.departments.map((department) => {
							const Icon = departmentIcons[department.iconName];
							return (
								<li key={department.title}>
									<article className="flex h-full flex-col rounded-[24px] bg-white p-6">
										<span className="inline-flex size-14 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
											<Icon className="size-6" aria-hidden="true" />
										</span>
										<h3 className="mt-5 text-[26px] font-bold leading-8 text-council-green lg:text-[32px] lg:leading-10">{department.title}</h3>
										<p className="mt-3 text-lg font-medium leading-7 text-council-subtle">{department.description}</p>
										<p className="mt-5 inline-flex w-fit rounded-full bg-council-lime/40 px-4 py-2 text-base font-medium text-council-green">{department.lead}</p>
										<Link href={ictRelated.profileHref} className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-lg font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
											{ictRelated.profileLabel}
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

export default IctDepartmentSection;
