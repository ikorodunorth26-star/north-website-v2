import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/reususables/site";
import { allNewsArticles } from "@/lib/content/news";
import { articleJsonLd, breadcrumbJsonLd, createPageMetadata, publishedIso } from "@/lib/seo";
import { NewsArticleView } from "@/view";

type NewsArticlePageProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
	return allNewsArticles.map((article) => ({ slug: article.slug }));
};

export const generateMetadata = async ({ params }: NewsArticlePageProps): Promise<Metadata> => {
	const { slug } = await params;
	const article = allNewsArticles.find((item) => item.slug === slug);

	if (!article) {
		return { title: "News article", robots: { index: false, follow: false } };
	}

	return createPageMetadata({
		title: article.title,
		description: article.summary,
		path: `/news/${article.slug}`,
		image: article.image,
		type: "article",
		publishedTime: publishedIso(article.date),
	});
};

const NewsArticlePage = async ({ params }: NewsArticlePageProps) => {
	const { slug } = await params;
	const article = allNewsArticles.find((item) => item.slug === slug);

	if (!article) {
		notFound();
	}

	const path = `/news/${article.slug}`;

	return (
		<>
			<JsonLd
				data={[
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{ name: "News", path: "/news" },
						{ name: article.title, path },
					]),
					articleJsonLd({
						kind: "NewsArticle",
						path,
						title: article.title,
						description: article.summary,
						image: article.image.src,
						date: article.date,
					}),
				]}
			/>
			<NewsArticleView article={article} />
		</>
	);
};

export default NewsArticlePage;
