"use client";

import { useState } from "react";

import { revenueQuestions } from "@/lib/content/revenue";
import { cn } from "@/lib/utils";

const RevenueFaq = () => {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<div className="flex flex-col gap-3">
			{revenueQuestions.map((item, index) => {
				const open = openIndex === index;
				const panelId = `revenue-faq-${index}`;
				return (
					<div key={item.question} className="rounded-[20px] bg-[#fffdf8] px-6 py-[22px]">
						<button
							type="button"
							className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173d32]"
							aria-expanded={open}
							aria-controls={item.answer ? panelId : undefined}
							onClick={() => setOpenIndex(open ? -1 : index)}>
							<span className="text-lg font-medium leading-[26px] text-[#173d32] sm:text-[19px]">{item.question}</span>
							<span className="shrink-0 text-[22px] font-bold leading-[30px] text-[#c39828]" aria-hidden="true">
								{open ? "–" : "+"}
							</span>
						</button>
						{item.answer ? (
							<p id={panelId} className={cn("pt-3 text-base leading-[26px] text-[#54665e]", !open && "hidden")}>
								{item.answer}
							</p>
						) : null}
					</div>
				);
			})}
		</div>
	);
};

export default RevenueFaq;
