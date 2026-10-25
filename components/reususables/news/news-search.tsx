"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type NewsSearchProps = {
	value: string;
	onChange: (value: string) => void;
};

const NewsSearch = ({ value, onChange }: NewsSearchProps) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className={cn("self-end md:self-auto", expanded ? "w-full" : "w-fit", "md:w-[300px]")}>
			<button
				type="button"
				className={cn(
					"inline-flex size-12 items-center justify-center rounded-full border border-council-image bg-white text-council-green transition-colors hover:bg-council-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden",
					expanded && "hidden",
				)}
				aria-label="Open news search"
				aria-expanded={expanded}
				onClick={() => setExpanded(true)}>
				<Search className="size-[18px]" aria-hidden="true" />
			</button>

			<div className={cn(expanded ? "block" : "hidden", "relative h-12 w-full md:block md:h-[43px]")}>
				<label htmlFor="news-search" className="sr-only">
					Search news
				</label>
				<Search className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-council-subtle" aria-hidden="true" />
				<Input
					id="news-search"
					type="search"
					value={value}
					autoFocus={expanded}
					onChange={(event) => onChange(event.target.value)}
					onBlur={() => {
						if (!value) setExpanded(false);
					}}
					onKeyDown={(event) => {
						if (event.key === "Escape") setExpanded(false);
					}}
					placeholder="Search news"
					className="h-full rounded-[30px] border-council-image bg-white pl-12 pr-[18px] text-sm text-council-green shadow-none placeholder:text-council-subtle md:border-transparent"
				/>
			</div>
		</div>
	);
};

export default NewsSearch;
