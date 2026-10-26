import { NewsCard, PhotoGallery } from "@/components/reususables";
import { ArticleLayout, SectionHeading } from "@/components/reususables/site";
import type { NewsArticle } from "@/lib/content/news";
import { getRelatedArticles } from "@/lib/content/news";

type NewsArticleViewProps = {
	article: NewsArticle;
};

const NewsArticleView = ({ article }: NewsArticleViewProps) => {
	const relatedArticles = getRelatedArticles(article.slug);

	return (
		<>
			<ArticleLayout
				backHref="/news"
				backLabel="Back to News"
				title={article.title}
				image={article.image}
				caption={article.caption ?? "[Image caption: describe photo and credit]"}
				meta={
					<>
						<time dateTime={article.date}>{article.date}</time>
						<span aria-hidden="true">•</span>
						<span>{article.readTime}</span>
					</>
				}>
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
				{article.gallery ? <PhotoGallery photos={article.gallery} /> : null}
			</ArticleLayout>

			<section className="bg-council-image py-16 lg:py-24">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
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
