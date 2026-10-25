"use client";

import { useMemo, useState } from "react";

import type { NewsArticle } from "@/lib/content/news";
import { newsCategories } from "@/lib/content/news";
import { cn } from "@/lib/utils";

import { SectionHeading } from "../site";
import FeaturedNewsCard from "./featured-news-card";
import NewsCard from "./news-card";
import NewsPagination from "./news-pagination";
import NewsToolbar from "./news-toolbar";

type NewsroomSectionProps = {
	featuredArticle: NewsArticle;
	articles: NewsArticle[];
};

const DESKTOP_PAGE_SIZE = 9;

const NewsroomSection = ({ featuredArticle, articles }: NewsroomSectionProps) => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchValue, setSearchValue] = useState("");

	const filteredArticles = useMemo(() => {
		const query = searchValue.trim().toLowerCase();
		return articles.filter((article) => {
			const matchesCategory = activeCategory === "all" || article.filterGroup === activeCategory;
			const matchesSearch =
				!query ||
				[article.category, article.title, article.summary].some((value) => value.toLowerCase().includes(query));
			return matchesCategory && matchesSearch;
		});
	}, [activeCategory, articles, searchValue]);

	const isDefaultView = activeCategory === "all" && !searchValue.trim();
	const featuredMatches =
		(activeCategory === "all" || featuredArticle.filterGroup === activeCategory) &&
		(!searchValue.trim() ||
			[featuredArticle.category, featuredArticle.title, featuredArticle.summary]
				.join(" ")
				.toLowerCase()
				.includes(searchValue.trim().toLowerCase()));

	return (
		<section className="bg-background px-5 py-14 md:px-10 lg:px-10 lg:py-16 xl:px-20">
			<div className="mx-auto flex w-full max-w-council flex-col gap-9">
				<NewsToolbar
					categories={newsCategories}
					activeCategory={activeCategory}
					onCategoryChange={setActiveCategory}
					searchValue={searchValue}
					onSearchChange={setSearchValue}
				/>

				{featuredMatches ? <FeaturedNewsCard article={featuredArticle} /> : null}

				<div className="flex flex-col gap-9">
					<SectionHeading title="Latest updates" eyebrow="PROJECTS, PEOPLE & PUBLIC SERVICE" />
					{filteredArticles.length ? (
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{filteredArticles.map((article, index) => (
								<NewsCard
									key={article.slug}
									article={article}
									className={cn(!isDefaultView || index < DESKTOP_PAGE_SIZE ? "" : "md:hidden")}
								/>
							))}
						</div>
					) : (
						<div className="rounded-[20px] bg-card p-8 text-council-subtle">
							No updates match your current filter. Try another category or search term.
						</div>
					)}
				</div>

				{isDefaultView ? <NewsPagination pageSize={Math.min(DESKTOP_PAGE_SIZE, articles.length)} totalPosts={articles.length} /> : null}
			</div>
		</section>
	);
};

export default NewsroomSection;
