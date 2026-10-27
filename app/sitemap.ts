import type { MetadataRoute } from "next";

import { allNewsArticles } from "@/lib/content/news";
import { projects } from "@/lib/content/projects";
import { wards } from "@/lib/content/wards";
import { absoluteUrl, publishedIso } from "@/lib/seo";

const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
	{ path: "/", changeFrequency: "weekly", priority: 1 },
	{ path: "/about", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/landmarks", changeFrequency: "monthly", priority: 0.7 },
	{ path: "/government/executive-council", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/government/legislative-house", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/government/management-team", changeFrequency: "monthly", priority: 0.7 },
	{ path: "/government/departments", changeFrequency: "monthly", priority: 0.7 },
	{ path: "/government/departments/information-communication-technology", changeFrequency: "monthly", priority: 0.6 },
	{ path: "/projects", changeFrequency: "weekly", priority: 0.9 },
	{ path: "/projects/suggest", changeFrequency: "monthly", priority: 0.6 },
	{ path: "/news", changeFrequency: "weekly", priority: 0.9 },
	{ path: "/revenue", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/contact", changeFrequency: "yearly", priority: 0.7 },
	{ path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
	{ path: "/terms-of-use", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = staticRoutes.map((route) => ({
		url: absoluteUrl(route.path),
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));

	const news = allNewsArticles.map((article) => {
		const lastModified = publishedIso(article.date);
		return {
			url: absoluteUrl(`/news/${article.slug}`),
			...(lastModified ? { lastModified } : {}),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		};
	});

	const projectPages = projects.map((project) => {
		const lastModified = publishedIso(project.date);
		return {
			url: absoluteUrl(`/projects/${project.slug}`),
			...(lastModified ? { lastModified } : {}),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		};
	});

	const communities = wards.map((ward) => ({
		url: absoluteUrl(`/communities/${ward.slug}`),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...pages, ...projectPages, ...news, ...communities];
}
