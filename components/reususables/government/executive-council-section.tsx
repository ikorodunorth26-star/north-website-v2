import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { LocalImage } from "@/components/reususables/site";
import { executiveDirectory, executiveOffice, executiveRelated, type ExecutiveMember } from "@/lib/content/executive-council";

const ExecutiveMemberCard = ({ member }: { member: ExecutiveMember }) => {
	return (
		<article className="flex flex-col gap-6 rounded-[20px] bg-council-card p-3">
			<div className="relative aspect-[387/285] overflow-hidden rounded-xl bg-council-image">
				<LocalImage src={member.image.src} alt={member.image.alt} className="absolute inset-0" imageClassName="object-cover object-[center_22%]" sizes="(min-width: 1024px) 387px, (min-width: 600px) 50vw, 100vw" />
			</div>
			<div className="flex flex-col gap-4 px-3 pb-3">
				<h3 className="text-2xl font-medium leading-8 text-council-green lg:text-[27px]">{member.name}</h3>
				<p className="text-xs font-medium uppercase tracking-[0.06em] text-council-gold">{member.role}</p>
				<p className="text-[15px] font-normal leading-6 text-council-subtle lg:hidden">{member.bio}</p>
			</div>
		</article>
	);
};

const ExecutiveCouncilSection = () => {
	return (
		<>
			<section className="bg-[#ece8db] py-16">
				<div className="mx-auto flex w-full max-w-council flex-col gap-8 px-5 md:px-10 min-[1408px]:px-0">
					<div className="flex max-w-[640px] flex-col gap-3.5">
						<h2 className="max-w-[500px] text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px] lg:text-[52px] lg:leading-[60px]">{executiveOffice.heading}</h2>
						<p className="max-w-[585px] text-lg font-medium leading-6 text-[#62726a]">{executiveOffice.introduction}</p>
					</div>
					<div className="overflow-hidden rounded-[24px] bg-white lg:grid lg:grid-cols-[307px_minmax(0,1fr)]">
						<div className="flex items-center gap-6 bg-council-green px-6 py-8 text-left lg:flex-col lg:justify-start lg:px-6 lg:pb-8 lg:pt-8 lg:text-center">
							<div className="relative size-[168px] shrink-0 overflow-hidden rounded-full lg:size-[194px]">
								<LocalImage src={executiveOffice.image.src} alt={executiveOffice.image.alt} className="absolute inset-0 bg-transparent" imageClassName="object-cover object-top" sizes="194px" priority />
							</div>
							<div>
								<p className="text-[27px] font-medium leading-8 text-white lg:text-[32px] lg:leading-[38px]">{executiveOffice.name}</p>
								<p className="mt-2 text-base font-medium text-council-lime lg:text-lg">{executiveOffice.role}</p>
							</div>
						</div>
						<div id="chairman-brief" className="flex flex-col gap-5 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
							<p className="text-xs font-normal text-[#62715c]">{executiveOffice.briefLabel}</p>
							<h3 className="whitespace-pre-line text-[28px] font-medium leading-9 text-council-green sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[45px]">{executiveOffice.statement}</h3>
							<div className="space-y-4 text-base font-normal leading-6 text-council-subtle">
								{executiveOffice.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</div>
							<div className="grid gap-4 sm:grid-cols-2">
								<a href={`mailto:${executiveOffice.email}`} className="rounded-2xl border border-[#e2e6e0] px-5 py-[18px] transition-colors hover:border-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									<p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#62715c]">Email</p>
									<p className="mt-2.5 flex items-center gap-2 text-sm text-council-subtle">
										<Mail className="size-4 shrink-0" aria-hidden="true" />
										<span className="break-all">{executiveOffice.email}</span>
									</p>
								</a>
								<a href={executiveOffice.phoneHref} className="rounded-2xl border border-[#e2e6e0] px-5 py-[18px] transition-colors hover:border-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									<p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#62715c]">Phone</p>
									<p className="mt-2.5 flex items-center gap-2 text-sm text-council-subtle">
										<Phone className="size-4 shrink-0" aria-hidden="true" />
										{executiveOffice.phone}
									</p>
								</a>
							</div>
							<Link href="#chairman-brief" className="inline-flex w-fit items-center gap-2.5 rounded-[32px] bg-council-green px-[22px] py-[15px] text-sm font-semibold text-council-lime transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none motion-reduce:hover:translate-y-0">
								{executiveOffice.profileLabel}
								<ArrowUpRight className="size-[18px]" aria-hidden="true" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-background py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<div className="max-w-[720px]">
						<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px] lg:text-[52px] lg:leading-[60px]">{executiveDirectory.title}</h2>
						<p className="mt-4 text-lg font-normal leading-7 text-council-subtle">{executiveDirectory.description}</p>
					</div>
					<ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{executiveDirectory.members.map((member) => (
							<li key={`${member.name}-${member.role}`}>
								<ExecutiveMemberCard member={member} />
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-[#eeeadf] py-14">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<h2 className="text-[28px] font-medium leading-9 text-council-green sm:text-[32px] sm:leading-[45px]">{executiveRelated.title}</h2>
					<ul className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
						{executiveRelated.links.map((link) => (
							<li key={link.href}>
								<Link href={link.href} className="flex flex-col gap-3 rounded-2xl py-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									<span className="inline-flex items-center gap-2 text-[22px] font-medium leading-[31px] text-council-green">
										{link.title}
										<ArrowUpRight className="size-5" aria-hidden="true" />
									</span>
									<span className="text-base leading-6 text-council-subtle">{link.description}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default ExecutiveCouncilSection;
