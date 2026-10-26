"use client";

import { useState } from "react";

import type { AboutChapter } from "@/lib/content/about";
import { cn } from "@/lib/utils";

type HistoryChapterProps = {
	chapter: AboutChapter;
	className?: string;
	tone?: "plain" | "panel";
};

const HistoryChapter = ({ chapter, className, tone = "plain" }: HistoryChapterProps) => {
	const [open, setOpen] = useState(false);
	const panelId = `history-chapter-${chapter.number}`;
	const panel = tone === "panel";

	return (
		<article className={cn("flex gap-5 rounded-[20px] p-6 sm:gap-6 sm:p-8", panel ? "bg-council-green" : "bg-council-card", className)}>
			<span className={cn("text-[34px] font-medium leading-[46px]", panel ? "text-council-lime" : "text-[#8C7947]")}>{chapter.number}</span>
			<div className="flex min-w-0 flex-1 flex-col">
				<h3 className={cn("text-[22px] font-medium leading-8 sm:text-[27px] sm:leading-[31px]", panel ? "text-[#F8F5ED]" : "text-council-green")}>{chapter.title}</h3>
				<div id={panelId} className={cn("mt-2 flex-1 flex-col space-y-4 text-[17px] font-medium leading-[26px]", panel ? "text-white/80" : "text-council-subtle", open ? "flex" : "hidden lg:flex")}>
					{chapter.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
					{chapter.points ? (
						<ul className={cn("relative flex flex-col", panel ? "mt-2 flex-1 justify-between gap-5 border-l border-council-lime/40 pl-5" : "space-y-2")}>
							{chapter.points.map((point) => (
								<li key={point} className="flex gap-3">
									<span aria-hidden="true" className={cn("mt-[11px] size-1.5 shrink-0 rounded-full", panel ? "-ml-[22px] bg-council-lime" : "bg-[#8C7947]")} />
									<span>{point}</span>
								</li>
							))}
						</ul>
					) : null}
				</div>
				<button
					type="button"
					className={cn(
						"mt-4 text-base font-bold leading-5 underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 lg:hidden",
						panel ? "text-council-lime focus-visible:ring-council-lime" : "text-council-green hover:text-council-gold focus-visible:ring-council-green",
					)}
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
