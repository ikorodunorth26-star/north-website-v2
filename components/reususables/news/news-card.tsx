import { Calendar } from "lucide-react";

import type { NewsArticle } from "@/lib/content/news";
import { getArticleHref } from "@/lib/content/news";
import { cn } from "@/lib/utils";

import { InteractiveCard, LocalImage, StoryLink } from "../site";

type NewsCardProps = {
	article: Pick<NewsArticle, "category" | "title" | "summary" | "image"> & { slug?: string };
	href?: string;
	cta?: string;
	date?: string;
	className?: string;
};

const monthAndYear = (date: string) => {
	const parts = date.trim().split(/\s+/);
	if (parts.length >= 3 && /^\d+$/.test(parts[0])) {
		return `${parts[1]} ${parts[2]}`;
	}
	return date;
};

const NewsCard = ({ article, href, cta = "Read full story", date, className }: NewsCardProps) => {
	const storyHref = href ?? (article.slug ? getArticleHref(article.slug) : "/news");

	return (
		<InteractiveCard className={cn("flex flex-col", className)}>
			<LocalImage
				src={article.image.src}
				alt={article.image.alt}
				className="h-[216px] w-full rounded-xl"
				imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 64px)"
			/>
			<div className="flex flex-1 flex-col gap-4 px-2.5 pb-3 pt-5">
				<p className="text-xs font-medium leading-[17px] tracking-[0.083em] text-council-gold">{article.category}</p>
				<h3 className={cn("line-clamp-2 text-xl leading-7 text-council-green md:text-[21px] md:leading-[30px]", date ? "font-bold" : "font-medium")}>{article.title}</h3>
				<p className="line-clamp-2 text-sm font-medium leading-[21px] text-council-subtle">{article.summary}</p>
				{date ? (
					<p className="flex items-center gap-2 text-sm font-medium leading-5 text-council-green">
						<Calendar className="size-4 shrink-0" aria-hidden="true" />
						<time dateTime={date}>{monthAndYear(date)}</time>
					</p>
				) : null}
				<StoryLink href={storyHref}>{cta}</StoryLink>
			</div>
		</InteractiveCard>
	);
};

export default NewsCard;
