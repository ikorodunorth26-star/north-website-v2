import CategoryFilter, { type CategoryOption } from "./category-filter";
import NewsSearch from "./news-search";

type NewsToolbarProps = {
	categories: readonly CategoryOption[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
	searchValue: string;
	onSearchChange: (value: string) => void;
	filterLabel?: string;
	searchId?: string;
	searchLabel?: string;
	searchPlaceholder?: string;
	searchOpenLabel?: string;
	searchFullWidth?: boolean;
};

const NewsToolbar = ({ categories, activeCategory, onCategoryChange, searchValue, onSearchChange, filterLabel, searchId, searchLabel, searchPlaceholder, searchOpenLabel, searchFullWidth = false }: NewsToolbarProps) => {
	return (
		<div className="flex w-full min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={onCategoryChange} label={filterLabel} />
			<NewsSearch value={searchValue} onChange={onSearchChange} id={searchId} label={searchLabel} placeholder={searchPlaceholder} openLabel={searchOpenLabel} fullWidth={searchFullWidth} />
		</div>
	);
};

export default NewsToolbar;
