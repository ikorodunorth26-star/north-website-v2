"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type NewsSearchProps = {
	value: string;
	onChange: (value: string) => void;
	id?: string;
	label?: string;
	placeholder?: string;
	openLabel?: string;
	fullWidth?: boolean;
};

const NewsSearch = ({ value, onChange, id = "news-search", label = "Search news", placeholder = "Search news", openLabel = "Open news search", fullWidth = false }: NewsSearchProps) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className={cn("w-full md:w-[300px]", !fullWidth && "self-end md:self-auto", !fullWidth && (expanded ? "w-full" : "w-fit"))}>
			<button
				type="button"
				className={cn(
					"inline-flex size-12 items-center justify-center rounded-full border border-council-image bg-white text-council-green transition-colors hover:bg-council-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden",
					(expanded || fullWidth) && "hidden",
				)}
				aria-label={openLabel}
				aria-expanded={expanded}
				onClick={() => setExpanded(true)}>
				<Search className="size-[18px]" aria-hidden="true" />
			</button>

			<div className={cn(expanded || fullWidth ? "block" : "hidden", "relative h-12 w-full md:block md:h-[43px]")}>
				<label htmlFor={id} className="sr-only">
					{label}
				</label>
				<Search className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-council-subtle" aria-hidden="true" />
				<Input
					id={id}
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
					placeholder={placeholder}
					className="h-full rounded-[30px] border-council-image bg-white pl-12 pr-[18px] text-sm text-council-green shadow-none placeholder:text-council-subtle md:border-transparent"
				/>
			</div>
		</div>
	);
};

export default NewsSearch;
