import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { LocalImage } from "@/components/reususables/site";
import { getWard, wardConcernTitle, wardLabels, wardNewsTitle, wards, type WardProjectStatus, type WardRecord } from "@/lib/content/wards";
import { cn } from "@/lib/utils";

const statusClassName: Record<WardProjectStatus, string> = {
	Completed: "bg-council-lime text-council-green",
	Ongoing: "bg-council-green text-white",
	Planned: "bg-[#ece8db] text-council-green",
};

const WardHero = ({ ward }: { ward: WardRecord }) => {
	return (
		<section className="bg-council-green">
			<div className="mx-auto grid w-full max-w-council items-center gap-10 px-5 pb-16 pt-36 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,520px)] lg:gap-16 lg:pb-20 lg:pt-44 min-[1408px]:px-0">
				<div>
					<Link href={wardLabels.backHref} className="inline-flex w-fit items-center gap-2 text-sm font-bold text-council-lime focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
						<ArrowLeft className="size-4" aria-hidden="true" />
						{wardLabels.back}
					</Link>
					<p className="mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-council-gold">{wardLabels.pill}</p>
					<h1 className="mt-4 max-w-[640px] text-[42px] font-medium leading-[46px] tracking-[-0.84px] text-white md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-1.28px]">{ward.name} Ward</h1>
					<p className="mt-5 max-w-[560px] text-lg font-normal leading-8 text-white/90">{ward.introduction}</p>
				</div>
				<figure>
					<div className="relative aspect-[16/11] overflow-hidden rounded-[24px] bg-council-green">
						<LocalImage src={ward.image.src} alt={ward.image.alt} className="absolute inset-0" imageClassName="object-cover" sizes="(min-width: 1024px) 520px, 100vw" priority />
					</div>
					<figcaption className="mt-3 text-xs leading-5 text-white/60">{ward.image.alt}</figcaption>
				</figure>
			</div>
		</section>
	);
};

const WardSwitcher = ({ slug }: { slug: string }) => {
	return (
		<nav aria-label="Explore another ward" className="bg-white">
			<div className="mx-auto grid w-full max-w-council grid-cols-2 gap-3 px-5 py-10 sm:grid-cols-5 md:px-10 min-[1408px]:px-0">
				{wards.map((item) => {
					const current = item.slug === slug;
					return (
						<Link key={item.slug} href={`/communities/${item.slug}`} aria-current={current ? "page" : undefined} className={cn("inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-center text-base font-bold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green", current ? "bg-council-green text-white" : "bg-[#f3f0e6] text-council-green hover:bg-[#e7e2d4]")}>
							{item.name}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

const WardSection = ({ slug }: { slug: string }) => {
	const ward = getWard(slug);
	if (!ward) return null;

	return (
		<>
			<WardHero ward={ward} />
			<WardSwitcher slug={ward.slug} />
			<section className="bg-[#F8F7F2] py-20 lg:py-24">
				<div className="mx-auto grid w-full max-w-council items-center gap-8 px-5 md:px-10 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-16 min-[1408px]:px-0">
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">{wardLabels.overviewEyebrow}</p>
						<h2 className="mt-3 max-w-[724px] text-[32px] font-bold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{ward.overviewHeading}</h2>
						<div className="mt-5 max-w-[724px] space-y-4 text-lg font-medium leading-7 text-council-subtle">
							{ward.overviewParagraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
							{ward.overviewNote ? <p className="text-sm font-normal leading-6">{ward.overviewNote}</p> : null}
						</div>
					</div>
					<aside className="rounded-[24px] bg-white p-6 sm:p-8">
						<h3 className="text-[26px] font-bold leading-8 text-council-green">{wardLabels.facilitiesTitle}</h3>
						<ul className="mt-6 space-y-4">
							{ward.facilities.map((facility) => (
								<li key={facility} className="flex items-start gap-3 text-base font-medium leading-6 text-council-subtle">
									<span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-council-lime/70 text-council-green">
										<Check className="size-3.5" aria-hidden="true" />
									</span>
									{facility}
								</li>
							))}
						</ul>
					</aside>
				</div>
			</section>

			<section className="bg-[#E8EDDE] py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-[720px]">
							{ward.projectsEyebrow ? <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">{ward.projectsEyebrow}</p> : null}
							<h2 className="mt-3 text-[32px] font-bold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{wardLabels.projectsTitle}</h2>
							<p className="mt-3 text-base font-medium leading-6 text-council-subtle lg:text-[17px]">{wardLabels.projectsDescription}</p>
						</div>
						<Link href={wardLabels.projectsHref} className="inline-flex w-fit items-center gap-2 rounded-full bg-council-green px-5 py-3.5 text-base font-bold text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
							{wardLabels.projectsCta}
							<ArrowUpRight className="size-4" aria-hidden="true" />
						</Link>
					</div>
					{ward.projects.length > 0 ? (
						<ul className={cn("mt-8 grid gap-6", ward.projects.length >= 3 ? "lg:grid-cols-3" : ward.projects.length === 2 ? "lg:grid-cols-2" : undefined)}>
							{ward.projects.map((project) => (
								<li key={project.title}>
									<article className="flex h-full flex-col rounded-[24px] bg-white p-6">
										<div className="flex items-center gap-3">
											<span className={cn("rounded-full px-3 py-1 text-xs font-bold", statusClassName[project.status])}>{project.status}</span>
											<span className="text-[11px] font-bold uppercase tracking-[0.08em] text-council-gold">{project.category}</span>
										</div>
										<h3 className="mt-4 text-[28px] font-bold leading-9 text-council-green">{project.title}</h3>
										<p className="mt-3 text-base font-normal leading-6 text-council-subtle">{project.description}</p>
										<p className="mt-4 text-[13px] font-medium text-council-subtle">{project.meta}</p>
										<Link href={wardLabels.projectsHref} className="mt-5 inline-flex w-fit items-center gap-2 text-base font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
											{wardLabels.projectCta}
											<ArrowUpRight className="size-4" aria-hidden="true" />
										</Link>
									</article>
								</li>
							))}
						</ul>
					) : (
						<p className="mt-8 rounded-[24px] bg-white px-6 py-10 text-center text-[28px] font-bold leading-9 text-council-green">{ward.projectsEmpty}</p>
					)}
				</div>
			</section>

			<section className="bg-[#F8F7F2] py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">{wardLabels.newsEyebrow}</p>
					<h2 className="mt-3 text-[32px] font-bold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{wardNewsTitle(ward.name)}</h2>
					{ward.newsStory ? (
						<article className="mt-8 max-w-[720px] rounded-[24px] bg-white p-6 sm:p-8">
							<p className="text-xs font-bold uppercase tracking-[0.08em] text-council-gold">{ward.newsStory.label}</p>
							<h3 className="mt-3 text-[28px] font-bold leading-9 text-council-green sm:text-[32px] sm:leading-10">{ward.newsStory.title}</h3>
							<Link href={wardLabels.newsHref} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-council-green/20 px-5 py-3 text-base font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
								{wardLabels.storyCta}
								<ArrowUpRight className="size-4" aria-hidden="true" />
							</Link>
						</article>
					) : (
						<div className="mt-8 rounded-[24px] bg-white px-6 py-10 text-center">
							<h3 className="text-[28px] font-bold leading-9 text-council-green">{wardLabels.newsEmptyTitle}</h3>
							<p className="mx-auto mt-3 max-w-[640px] text-base leading-6 text-council-subtle">{wardLabels.newsEmptyDescription}</p>
							<Link href={wardLabels.newsHref} className="mt-6 inline-flex items-center gap-2 rounded-full border border-council-green/20 px-5 py-3 text-base font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
								{wardLabels.newsCta}
								<ArrowUpRight className="size-4" aria-hidden="true" />
							</Link>
						</div>
					)}
				</div>
			</section>

			{ward.concern ? (
				<section className="bg-background pb-16">
					<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
						<div className="flex flex-col gap-6 rounded-[28px] bg-council-green px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
							<div className="max-w-[720px]">
								<h2 className="text-[32px] font-bold leading-10 text-white sm:text-[40px] sm:leading-[46px]">{wardConcernTitle(ward.name)}</h2>
								<p className="mt-3 text-base font-medium leading-6 text-white/80 lg:text-[17px]">{wardLabels.concernDescription}</p>
							</div>
							<Link href={wardLabels.concernHref} className="inline-flex w-fit items-center gap-2 rounded-full bg-council-lime px-5 py-3.5 text-base font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white">
								{wardLabels.concernCta}
								<ArrowUpRight className="size-4" aria-hidden="true" />
							</Link>
						</div>
					</div>
				</section>
			) : null}
		</>
	);
};

export default WardSection;
