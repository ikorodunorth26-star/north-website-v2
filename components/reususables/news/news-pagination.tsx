import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type NewsPaginationProps = {
	currentPage?: number;
	totalPages?: number;
	pageSize?: number;
	totalPosts?: number;
	onPageChange?: (page: number) => void;
	itemLabel?: string;
	label?: string;
	className?: string;
};

const pageButtonClass = "inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card px-4 text-sm font-medium text-council-green transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const pageList = (current: number, total: number) => {
	if (total <= 5) return Array.from({ length: total }, (_, index) => index + 1);
	const pages: Array<number | "ellipsis"> = [1];
	if (current > 3) pages.push("ellipsis");
	for (let page = Math.max(2, current - 1); page <= Math.min(total - 1, current + 1); page += 1) pages.push(page);
	if (current < total - 2) pages.push("ellipsis");
	pages.push(total);
	return pages;
};

const NewsPagination = ({ currentPage = 1, totalPages = 3, pageSize = 9, totalPosts = 0, onPageChange, itemLabel = "posts", label = "News pages", className }: NewsPaginationProps) => {
	const interactive = Boolean(onPageChange);
	const pages = interactive ? Math.max(1, totalPages) : totalPages;
	const page = Math.min(Math.max(currentPage, 1), pages);
	const start = totalPosts === 0 ? 0 : (page - 1) * pageSize + 1;
	const end = Math.min(page * pageSize, totalPosts);
	const numbers = interactive ? pageList(page, pages) : Array.from({ length: pages }, (_, index) => index + 1);

	return (
		<nav className={cn("hidden flex-col items-center gap-4 pt-6 md:flex", className)} aria-label={label}>
			<div className="flex items-center justify-center gap-2">
				<button type="button" disabled={interactive ? page === 1 : true} className={cn(pageButtonClass, "gap-2")} onClick={() => onPageChange?.(page - 1)}>
					<ArrowLeft className="size-4" aria-hidden="true" />
					Prev
				</button>
				{numbers.map((item, index) =>
					item === "ellipsis" ? (
						<span key={`ellipsis-${index}`} className="inline-flex h-11 w-8 items-center justify-center text-sm text-council-green">
							…
						</span>
					) : (
						<button
							key={item}
							type="button"
							aria-current={item === page ? "page" : undefined}
							className={cn(pageButtonClass, item === page && "border-council-green bg-council-green text-white")}
							onClick={() => onPageChange?.(item)}>
							{item}
						</button>
					),
				)}
				{interactive ? null : (
					<>
						<span className="inline-flex h-11 w-8 items-center justify-center text-sm text-council-green">…</span>
						<button type="button" className={pageButtonClass} aria-label="Last news page">
							[n]
						</button>
					</>
				)}
				<button type="button" disabled={interactive ? page === pages : false} className={cn(pageButtonClass, "gap-2")} onClick={() => onPageChange?.(page + 1)}>
					Next
					<ArrowRight className="size-4" aria-hidden="true" />
				</button>
			</div>
			<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-council-subtle">
				Showing {interactive ? `${start}–${end}` : `1–${pageSize}`} of {totalPosts || "[x]"} {itemLabel}
			</p>
		</nav>
	);
};

export default NewsPagination;
