import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, Phone } from "lucide-react";

import { LocalImage } from "@/components/reususables/site";
import { departmentHref, getDepartment } from "@/lib/content/departments";
import { personProfileCopy, type PersonProfile } from "@/lib/content/people";

type PersonProfileSectionProps = {
	person: PersonProfile;
};

const teamBackHref: Record<PersonProfile["team"], string> = {
	executive: "/government/executive-council",
	council: "/government/legislative-house",
	management: "/government/management-team",
	nulge: "/government/nulge-exco",
};

const teamBackLabel: Record<PersonProfile["team"], string> = {
	executive: "Executive Council",
	council: "Legislative House",
	management: "Management Team",
	nulge: "NULGE Exco",
};

const PersonProfileSection = ({ person }: PersonProfileSectionProps) => {
	const paragraphs = person.bio
		.split(/\n\s*\n/)
		.map((part) => part.trim())
		.filter(Boolean);
	const highlights = person.highlights?.filter((item) => item.trim()) ?? [];
	const department = person.departmentSlug ? getDepartment(person.departmentSlug) : undefined;
	const backHref = teamBackHref[person.team];
	const backLabel = teamBackLabel[person.team];

	return (
		<>
			<section className="bg-council-green">
				<div className="mx-auto grid w-full max-w-council items-end gap-10 px-5 pb-16 pt-36 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16 lg:pb-20 lg:pt-44 min-[1408px]:px-0">
					<div>
						<Link
							href={backHref}
							className="inline-flex w-fit items-center gap-2 text-sm font-bold text-council-lime focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
							<ArrowLeft className="size-4" aria-hidden="true" />
							{backLabel}
						</Link>
						<p className="mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-council-gold">{personProfileCopy.label}</p>
						<h1 className="mt-4 max-w-[720px] text-[42px] font-medium leading-[46px] tracking-[-0.84px] text-white md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-1.28px]">
							{person.name}
						</h1>
						<p className="mt-4 text-lg font-medium text-council-lime">{person.role}</p>
						{person.ward ? <p className="mt-2 text-sm font-medium text-white/70">{person.ward}</p> : null}
					</div>
					<figure className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-council-green/40">
						<LocalImage
							src={person.image.src}
							alt={person.image.alt}
							className="absolute inset-0"
							imageClassName="object-cover object-top"
							sizes="(min-width: 1024px) 420px, 100vw"
							priority
						/>
					</figure>
				</div>
			</section>

			<section className="bg-background py-16 lg:py-20">
				<div className="mx-auto grid w-full max-w-council items-start gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] lg:gap-16 min-[1408px]:px-0">
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-council-gold">Biography</p>
						<div className="mt-5 max-w-[720px] space-y-4 text-lg font-normal leading-7 text-council-subtle">
							{paragraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
						{highlights.length ? (
							<div className="mt-12">
								<h2 className="text-2xl font-medium leading-8 text-council-green">{personProfileCopy.highlightsHeading}</h2>
								<ul className="mt-5 flex flex-col gap-3">
									{highlights.map((item) => (
										<li key={item} className="flex gap-3 text-base font-normal leading-7 text-council-subtle">
											<span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-council-gold" aria-hidden="true" />
											{item}
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>

					<aside className="rounded-[24px] bg-white p-6 shadow-soft lg:sticky lg:top-28">
						<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{personProfileCopy.contactHeading}</p>
						<div className="mt-5 space-y-4">
							{person.email ? (
								<a
									href={`mailto:${person.email}`}
									className="flex items-start gap-3 rounded-2xl bg-[#F8F7F2] p-4 transition-colors hover:bg-council-lime/30 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-council-lime/55 text-council-green">
										<Mail className="size-4" aria-hidden="true" />
									</span>
									<span className="min-w-0">
										<span className="block text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">Email</span>
										<span className="mt-1 block break-all text-base font-medium text-council-green">{person.email}</span>
									</span>
								</a>
							) : null}
							{person.phone ? (
								<a
									href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
									className="flex items-start gap-3 rounded-2xl bg-[#F8F7F2] p-4 transition-colors hover:bg-council-lime/30 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-council-lime/55 text-council-green">
										<Phone className="size-4" aria-hidden="true" />
									</span>
									<span className="min-w-0">
										<span className="block text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">Phone</span>
										<span className="mt-1 block text-base font-medium text-council-green">{person.phone}</span>
									</span>
								</a>
							) : null}
							{!person.email && !person.phone ? (
								<p className="text-sm leading-6 text-council-subtle">Contact details will appear here when published.</p>
							) : null}
						</div>

						{department ? (
							<div className="mt-6 border-t border-council-green/10 pt-6">
								<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-subtle">{personProfileCopy.departmentLabel}</p>
								<Link
									href={departmentHref(department.slug)}
									className="mt-3 inline-flex items-center gap-2 text-base font-bold text-council-green hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									{department.title}
									<ArrowUpRight className="size-4" aria-hidden="true" />
								</Link>
							</div>
						) : null}
					</aside>
				</div>
			</section>
		</>
	);
};

export default PersonProfileSection;
