"use client";

import { useState } from "react";

import type { AboutChapter } from "@/lib/content/about";
import { cn } from "@/lib/utils";

type HistoryChapterProps = {
	chapter: AboutChapter;
};

const HistoryChapter = ({ chapter }: HistoryChapterProps) => {
	const [open, setOpen] = useState(false);
	const panelId = `history-chapter-${chapter.number}`;

	return (
		<article className="flex gap-5 rounded-[20px] bg-council-card p-6 sm:gap-6">
			<span className="text-[34px] font-medium leading-[46px] text-[#8C7947]">{chapter.number}</span>
			<div className="min-w-0 flex-1">
				<h3 className="text-[22px] font-medium leading-8 text-council-green sm:text-[27px] sm:leading-[31px]">{chapter.title}</h3>
				<div id={panelId} className={cn("mt-2 space-y-4 text-[17px] font-medium leading-[26px] text-council-subtle", open ? "block" : "hidden lg:block")}>
					{chapter.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
					{chapter.points ? (
						<ul className="space-y-2">
							{chapter.points.map((point) => (
								<li key={point} className="flex gap-3">
									<span aria-hidden="true" className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#8C7947]" />
									<span>{point}</span>
								</li>
							))}
						</ul>
					) : null}
				</div>
				<button
					type="button"
					className="mt-4 text-base font-bold leading-5 text-council-green underline-offset-4 hover:text-council-gold hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green lg:hidden"
					aria-expanded={open}
					aria-controls={panelId}
					onClick={() => setOpen((current) => !current)}>
					{open ? "Show less" : "Read more"}
				</button>
			</div>
		</article>
	);
};

export default HistoryChapter;
