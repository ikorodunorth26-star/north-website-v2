import CategoryFilter, { type CategoryOption } from "./category-filter";
import NewsSearch from "./news-search";

type NewsToolbarProps = {
	categories: readonly CategoryOption[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
	searchValue: string;
	onSearchChange: (value: string) => void;
};

const NewsToolbar = ({ categories, activeCategory, onCategoryChange, searchValue, onSearchChange }: NewsToolbarProps) => {
	return (
		<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
			<NewsSearch value={searchValue} onChange={onSearchChange} />
		</div>
	);
};

export default NewsToolbar;
