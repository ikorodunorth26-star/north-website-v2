import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { NewsCard } from "@/components/reususables";
import { LocalImage, SectionHeading } from "@/components/reususables/site";
import { figmaAssets } from "@/lib/content/figma-assets";
import type { NewsArticle } from "@/lib/content/news";
import { getRelatedArticles } from "@/lib/content/news";

type NewsArticleViewProps = {
	article: NewsArticle;
};

const NewsArticleView = ({ article }: NewsArticleViewProps) => {
	const relatedArticles = getRelatedArticles(article.slug);

	return (
		<>
			<section className="relative isolate overflow-hidden bg-council-green">
				<div
					aria-hidden="true"
					className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
					style={{ backgroundImage: `url(${figmaAssets.brand.heroTexture.src})`, backgroundSize: "600px 600px" }}
				/>
				<div aria-hidden="true" className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#2a6857]/40 via-[#245947]/20 to-transparent" />
				<div className="relative z-10 mx-auto min-h-[380px] w-full max-w-council px-5 pb-14 pt-44 lg:min-h-[476px] lg:px-0 lg:pt-[182px]">
					<Link
						href="/news"
						className="inline-flex items-center gap-2 rounded-[32px] py-1.5 pr-3 text-base font-medium text-white transition-colors hover:text-council-lime focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
						<ChevronLeft className="size-4" aria-hidden="true" />
						Back to News
					</Link>
					<h1 className="mt-5 max-w-[747px] text-4xl font-medium leading-[42px] tracking-[-0.72px] text-council-cream md:text-5xl md:leading-[52px] md:tracking-[-0.96px]">
						{article.title}
					</h1>
					<div className="mt-5 flex items-center gap-4 text-base leading-[22px] text-[#dfe5df]">
						<time dateTime={article.date}>{article.date}</time>
						<span aria-hidden="true">•</span>
						<span>{article.readTime}</span>
					</div>
				</div>
			</section>

			<div className="relative z-10 -mt-14 px-5 lg:px-[140px]">
				<div className="mx-auto max-w-[1160px]">
					<LocalImage
						src={article.image.src}
						alt={article.image.alt}
						priority
						className="aspect-[326/220] rounded-xl md:aspect-[1160/600] md:rounded-[20px]"
						sizes="(min-width: 1024px) 1160px, calc(100vw - 40px)"
					/>
					<p className="mt-3 text-xs leading-[19px] text-council-subtle">[Image caption: describe photo and credit]</p>
				</div>
			</div>

			<article className="mx-auto max-w-[720px] px-5 py-16 lg:px-0 lg:py-[72px]">
				<div className="space-y-6">
					{article.body.map((section, index) => (
						<section key={`${section.heading ?? "intro"}-${index}`} className="space-y-6">
							{section.heading ? <h2 className="pt-6 text-xl font-medium leading-9 text-council-green">{section.heading}</h2> : null}
							{section.paragraphs.map((paragraph) => (
								<p key={paragraph} className={index === 0 && paragraph === section.paragraphs[0] ? "text-lg leading-8 text-council-green" : "text-[15px] leading-[30px] text-council-subtle"}>
									{paragraph}
								</p>
							))}
						</section>
					))}
				</div>
			</article>

			<section className="bg-council-image px-5 py-16 lg:px-20 lg:py-24">
				<div className="mx-auto w-full max-w-council">
					<SectionHeading title="Related news" />
					<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{relatedArticles.map((relatedArticle) => (
							<NewsCard key={relatedArticle.slug} article={relatedArticle} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default NewsArticleView;
