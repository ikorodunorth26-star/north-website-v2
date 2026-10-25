import { cn } from "@/lib/utils";

export type CategoryOption = {
	label: string;
	value: string;
};

type CategoryFilterProps = {
	categories: readonly CategoryOption[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
	label?: string;
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, label = "Filter news by category" }: CategoryFilterProps) => {
	return (
		<div className="flex w-full min-w-0 flex-wrap gap-2 md:gap-2.5" role="group" aria-label={label}>
			{categories.map((category) => {
				const active = category.value === activeCategory;
				return (
					<button
						key={category.value}
						type="button"
						aria-pressed={active}
						onClick={() => onCategoryChange(category.value)}
						className={cn(
							"h-11 shrink-0 rounded-[30px] px-3 text-[13px] font-medium leading-[18px] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-[43px] md:rounded-[30px] md:px-[18px] md:text-sm",
							active ? "bg-council-green text-white" : "bg-council-muted text-council-green hover:bg-council-image",
						)}>
						{category.label}
					</button>
				);
			})}
		</div>
	);
};

export default CategoryFilter;
