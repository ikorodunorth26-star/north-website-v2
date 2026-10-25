import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type NewsPaginationProps = {
	currentPage?: number;
	totalPages?: number;
	pageSize?: number;
	totalPosts?: number;
};

const pageButtonClass = "inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card px-4 text-sm font-medium text-council-green";

const NewsPagination = ({ currentPage = 1, totalPages = 3, pageSize = 9, totalPosts = 0 }: NewsPaginationProps) => {
	return (
		<nav className="hidden flex-col items-center gap-4 pt-6 md:flex" aria-label="News pages">
			<div className="flex items-center justify-center gap-2">
				<button type="button" disabled className={cn(pageButtonClass, "gap-2 opacity-60")}>
					<ArrowLeft className="size-4" aria-hidden="true" />
					Prev
				</button>
				{Array.from({ length: totalPages }, (_, index) => {
					const page = index + 1;
					const active = page === currentPage;
					return (
						<button
							key={page}
							type="button"
							aria-current={active ? "page" : undefined}
							className={cn(pageButtonClass, active && "border-council-green bg-council-green text-white")}>
							{page}
						</button>
					);
				})}
				<span className="inline-flex h-11 w-8 items-center justify-center text-sm text-council-green">…</span>
				<button type="button" className={pageButtonClass} aria-label="Last news page">
					[n]
				</button>
				<button type="button" className={cn(pageButtonClass, "gap-2")}>
					Next
					<ArrowRight className="size-4" aria-hidden="true" />
				</button>
			</div>
			<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-council-subtle">
				Showing 1–{pageSize} of {totalPosts || "[x]"} posts
			</p>
		</nav>
	);
};

export default NewsPagination;
