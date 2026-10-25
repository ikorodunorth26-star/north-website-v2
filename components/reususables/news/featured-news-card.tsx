import { MapPin } from "lucide-react";

import type { NewsArticle } from "@/lib/content/news";
import { getArticleHref } from "@/lib/content/news";

import { InteractiveCard, LocalImage, StoryLink } from "../site";

type FeaturedNewsCardProps = {
	article: Pick<NewsArticle, "category" | "title" | "summary" | "image"> & { slug?: string };
	href?: string;
	cta?: string;
	location?: string;
};

const FeaturedNewsCard = ({ article, href, cta = "Read full story", location }: FeaturedNewsCardProps) => {
	const storyHref = href ?? (article.slug ? getArticleHref(article.slug) : "/news");

	return (
		<InteractiveCard className="grid gap-6 lg:min-h-[484px] lg:grid-cols-[minmax(0,56%)_minmax(0,1fr)]">
			<LocalImage
				src={article.image.src}
				alt={article.image.alt}
				priority
				className="h-[248px] rounded-xl lg:h-full"
				imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				sizes="(min-width: 1280px) 700px, (min-width: 1024px) 50vw, calc(100vw - 64px)"
			/>
			<div className="flex min-w-0 flex-col gap-4 px-2.5 pb-3 lg:gap-5 lg:p-6 xl:p-10">
				<p className="text-xs font-medium leading-[17px] tracking-[0.083em] text-council-gold">{article.category}</p>
				<h2 className="text-[25px] font-medium leading-[32px] tracking-[-0.5px] text-council-green lg:text-[29px] lg:leading-[38px] xl:text-[32px] xl:leading-[42px] xl:tracking-[-0.64px]">
					{article.title}
				</h2>
				<p className="text-[15px] font-medium leading-[22px] text-council-subtle lg:text-base lg:leading-6">{article.summary}</p>
				{location ? (
					<p className="flex items-center gap-2 text-sm font-medium leading-5 text-council-green">
						<MapPin className="size-4 shrink-0" aria-hidden="true" />
						<span>{location}</span>
					</p>
				) : null}
				<StoryLink href={storyHref}>{cta}</StoryLink>
			</div>
		</InteractiveCard>
	);
};

export default FeaturedNewsCard;
