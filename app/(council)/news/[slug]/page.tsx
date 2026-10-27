import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allNewsArticles } from "@/lib/content/news";
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
		return { title: "News article | Ikorodu North LCDA" };
	}

	return {
		title: `${article.title} | Ikorodu North LCDA`,
		description: article.summary,
	};
};

const NewsArticlePage = async ({ params }: NewsArticlePageProps) => {
	const { slug } = await params;
	const article = allNewsArticles.find((item) => item.slug === slug);

	if (!article) {
		notFound();
	}

	return <NewsArticleView article={article} />;
};

export default NewsArticlePage;
