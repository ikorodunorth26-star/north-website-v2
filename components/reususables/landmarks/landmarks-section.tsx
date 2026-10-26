"use client";

import { useMemo, useState } from "react";

import { CategoryFilter } from "@/components/reususables/news";
import { LocalImage } from "@/components/reususables/site";
import { cultureNotes, landmarkGroups, landmarks, type LandmarkGroup } from "@/lib/content/landmarks";

const LandmarksSection = () => {
	const [activeGroup, setActiveGroup] = useState<LandmarkGroup | "all">("all");
	const visibleLandmarks = useMemo(() => landmarks.filter((landmark) => activeGroup === "all" || landmark.group === activeGroup), [activeGroup]);

	return (
		<>
			<section className="bg-[#F8F7F2] py-16 lg:py-24">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-[720px]">
							<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">Landmarks</p>
							<h2 className="mt-3 text-[32px] font-bold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">Places residents know by name.</h2>
						</div>
						<CategoryFilter categories={landmarkGroups} activeCategory={activeGroup} onCategoryChange={(value) => setActiveGroup(value as LandmarkGroup | "all")} label="Filter landmarks" />
					</div>
					<ul className="mt-10 grid gap-5 md:grid-cols-2">
						{visibleLandmarks.map((landmark) => (
							<li key={landmark.title} className="md:[&:last-child:nth-child(odd)]:col-span-2">
								<article className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white sm:flex-row">
									{landmark.image ? (
										<div className="relative h-56 w-full shrink-0 sm:h-auto sm:w-[46%] sm:self-stretch">
											<LocalImage src={landmark.image.src} alt={landmark.image.alt} className="h-full w-full" sizes="(min-width: 640px) 320px, 100vw" />
											{landmark.image.caption ? <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-council-green/90 to-transparent px-4 pb-3 pt-10 text-xs font-medium text-white">{landmark.image.caption}</p> : null}
										</div>
									) : null}
									<div className="flex flex-1 flex-col p-6 sm:p-8">
										<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">{landmark.place}</p>
										<h3 className="mt-3 text-[26px] font-bold leading-8 text-council-green">{landmark.title}</h3>
										<p className="mt-4 text-base font-normal leading-7 text-council-subtle">{landmark.summary}</p>
										{landmark.image?.credit ? (
											<p className="mt-4 text-xs leading-5 text-council-subtle">
												Photo:{" "}
												<a href={landmark.image.credit.href} className="underline decoration-council-subtle/40 underline-offset-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
													{landmark.image.credit.author}
												</a>
												,{" "}
												<a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline decoration-council-subtle/40 underline-offset-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
													CC BY-SA 4.0
												</a>
											</p>
										) : null}
									</div>
								</article>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-[#E8EDDE] py-16 lg:py-24">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">Culture</p>
					<h2 className="mt-3 max-w-[720px] text-[32px] font-bold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">Customs still kept in the wards.</h2>
					<div className="mt-10 grid gap-5 lg:grid-cols-2">
						{cultureNotes.map((note) => (
							<article key={note.title} className="rounded-[24px] bg-white p-6 sm:p-8">
								<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">{note.eyebrow}</p>
								<h3 className="mt-3 text-[28px] font-bold leading-9 text-council-green">{note.title}</h3>
								<div className="mt-4 space-y-4 text-base font-normal leading-7 text-council-subtle">
									{note.paragraphs.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default LandmarksSection;
