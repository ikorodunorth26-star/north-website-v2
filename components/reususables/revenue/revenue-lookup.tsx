"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import { isRevenueIntent, revenueLookupTabs, type RevenueIntent } from "@/lib/content/revenue";
import { cn } from "@/lib/utils";

const RevenueLookup = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const requested = searchParams.get("intent");
	const [intent, setIntent] = useState<RevenueIntent>(isRevenueIntent(requested) ? requested : "notice");

	useEffect(() => {
		setIntent(isRevenueIntent(requested) ? requested : "notice");
	}, [requested]);

	const activeTab = revenueLookupTabs.find((tab) => tab.id === intent) ?? revenueLookupTabs[0];

	const selectIntent = (next: RevenueIntent) => {
		setIntent(next);
		const params = new URLSearchParams(searchParams.toString());
		params.set("intent", next);
		router.replace(`/revenue?${params.toString()}#lookup`, { scroll: false });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form id="lookup" onSubmit={onSubmit} className="scroll-mt-8 rounded-[20px] bg-[#fffdf8] p-3 pb-6">
			<div className="grid grid-cols-1 gap-1 rounded-[14px] bg-[#e8e9df] p-1 sm:grid-cols-3" role="tablist" aria-label="What to look up">
				{revenueLookupTabs.map((tab) => {
					const selected = tab.id === intent;
					return (
						<button
							key={tab.id}
							type="button"
							role="tab"
							aria-selected={selected}
							onClick={() => selectIntent(tab.id)}
							className={cn(
								"flex min-h-11 items-center justify-center rounded-xl px-2 py-2.5 text-center text-[13px] font-medium leading-4 text-[#173d32] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173d32] sm:px-2 sm:text-[15px] sm:leading-5",
								selected && "bg-[#173d32] font-bold text-white",
							)}>
							{tab.label}
						</button>
					);
				})}
			</div>

			<div className="mt-5 flex flex-col gap-3 px-1 sm:flex-row sm:items-center sm:px-3">
				<label className="sr-only" htmlFor="revenue-reference">
					{activeTab.placeholder}
				</label>
				<input
					id="revenue-reference"
					name="reference"
					type="text"
					placeholder={activeTab.placeholder}
					aria-describedby="revenue-lookup-hint"
					className="h-[52px] min-w-0 flex-1 rounded-xl border border-[#e8e9df] bg-white px-[18px] text-base text-[#173d32] placeholder:text-[#54665e] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173d32]"
				/>
				<button
					type="submit"
					className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-xl bg-[#ddeb9d] px-7 text-base font-bold text-[#173d32] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173d32] focus-visible:ring-offset-2">
					Continue →
				</button>
			</div>

			<p id="revenue-lookup-hint" className="mt-5 px-1 text-sm leading-[19px] text-[#54665e] sm:px-3">
				Your notice number and RIN are printed on the demand notice delivered to your property.
			</p>
		</form>
	);
};

export default RevenueLookup;
