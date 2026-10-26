import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HomeWardsSection } from "@/components/reususables/home";
import { NumberTicker } from "@/components/ui/number-ticker";
import { aboutCommunity, aboutHistory, aboutImpact, aboutIntroduction, aboutRelated } from "@/lib/content/about";

import { LocalImage, TypewriterText } from "../site";
import HistoryChapter from "./history-chapter";

const headingClassName = "whitespace-pre-line text-[32px] font-semibold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]";

const figureClassName = "text-[40px] font-bold leading-none tracking-normal text-council-green sm:text-[56px] lg:text-[64px]";

const AboutSection = () => {
	return (
		<>
			<section className="bg-background py-16">
				<div className="mx-auto grid w-full max-w-council items-center gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,570px)] lg:gap-16 min-[1408px]:px-0">
					<div className="flex flex-col gap-6">
						<TypewriterText as="h2" text={aboutIntroduction.heading} className={headingClassName} />
						<div className="space-y-4 text-lg font-medium leading-[25px] text-council-subtle">
							{aboutIntroduction.paragraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
					</div>
					<figure className="rounded-[20px] bg-council-card p-3">
						<LocalImage src={aboutIntroduction.image.src} alt={aboutIntroduction.image.alt} className="aspect-[16/10] w-full rounded-xl" sizes="(min-width: 1024px) 546px, calc(100vw - 64px)" />
						<figcaption className="px-2 pb-2 pt-3.5 text-center text-xs font-medium uppercase tracking-[1px] text-council-gold">{aboutIntroduction.caption}</figcaption>
					</figure>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<div className="mx-auto max-w-[720px] text-center">
						<p className="text-[13px] font-medium uppercase tracking-[2px] text-[#8C7947]">{aboutImpact.eyebrow}</p>
						<h2 className="mt-3 text-[32px] font-bold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{aboutImpact.title}</h2>
						<p className="mt-3 text-lg font-medium leading-[27px] text-council-subtle">{aboutImpact.description}</p>
					</div>
					<ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
						{aboutImpact.stats.map((stat, index) => (
							<li key={stat.label} className="rounded-[20px] bg-background px-6 py-8 text-center sm:px-8">
								<p className={figureClassName} aria-label={`${stat.value}${stat.suffix ?? ""}`}>
									<NumberTicker value={stat.value} delay={index * 0.12} useGrouping={false} className={figureClassName} />
									{stat.suffix}
								</p>
								<p className="mt-3 text-base font-medium leading-[22px] text-council-subtle">{stat.label}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-background py-16">
				<div className="mx-auto grid w-full max-w-council items-start gap-6 px-5 md:px-10 lg:grid-cols-2 lg:gap-10 min-[1408px]:px-0">
					<div className="flex flex-col gap-6">
						<TypewriterText as="h2" text={aboutHistory.heading} className={headingClassName} />
						<p className="text-lg font-medium leading-[27px] text-council-subtle">{aboutHistory.introduction}</p>
						{aboutHistory.chapters[0] ? <HistoryChapter chapter={aboutHistory.chapters[0]} /> : null}
					</div>
					{aboutHistory.chapters[1] ? <HistoryChapter chapter={aboutHistory.chapters[1]} /> : null}
					{aboutHistory.chapters[2] ? (
						<div className="lg:col-span-2">
							<HistoryChapter chapter={aboutHistory.chapters[2]} />
						</div>
					) : null}
				</div>
			</section>

			<HomeWardsSection id="communities" />

			<section className="bg-council-green py-16">
				<div className="mx-auto grid w-full max-w-council items-center gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-16 min-[1408px]:px-0">
					<LocalImage src={aboutCommunity.image.src} alt={aboutCommunity.image.alt} className="aspect-[620/430] w-full rounded-[20px]" sizes="(min-width: 1024px) 620px, calc(100vw - 40px)" />
					<div className="flex flex-col gap-6">
						<TypewriterText as="h2" text={aboutCommunity.heading} className="whitespace-pre-line text-[32px] font-semibold leading-10 text-[#F8F5ED] sm:text-[42px] sm:leading-[48px]" />
						<div className="space-y-4 text-lg font-medium leading-[26px] text-[#D2DDD4]">
							{aboutCommunity.paragraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
						<Link
							href={aboutCommunity.href}
							className="inline-flex w-fit items-center gap-2.5 rounded-[32px] bg-council-lime px-[22px] py-[15px] text-base font-bold leading-[22px] text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0">
							{aboutCommunity.cta}
							<ArrowUpRight className="size-[18px]" aria-hidden="true" />
						</Link>
					</div>
				</div>
			</section>

			<section className="bg-background pb-16 pt-14">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<p className="text-xs font-medium uppercase tracking-[1px] text-council-gold">{aboutRelated.eyebrow}</p>
					<h2 className="mt-4 text-[28px] font-bold leading-9 text-council-green sm:text-[32px] sm:leading-[37px]">{aboutRelated.title}</h2>
					<ul className="mt-8 grid gap-6 lg:grid-cols-3">
						{aboutRelated.links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="flex h-full flex-col gap-3 rounded-[20px] bg-council-card p-6 transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0">
									<span className="inline-flex items-center gap-2 text-[22px] font-medium leading-[25px] text-council-green">
										{link.title}
										<ArrowUpRight className="size-5" aria-hidden="true" />
									</span>
									<span className="text-base leading-[22px] text-council-subtle">{link.description}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default AboutSection;
