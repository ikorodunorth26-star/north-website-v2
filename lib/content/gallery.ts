import type { FigmaAsset } from "./figma-assets";
import { allNewsArticles, type NewsFilterGroup } from "./news";

export type GalleryFilterGroup = NewsFilterGroup;

export type GalleryAlbum = {
	slug: string;
	category: string;
	filterGroup: GalleryFilterGroup;
	title: string;
	summary: string;
	date: string;
	cover: FigmaAsset;
	photos: FigmaAsset[];
	relatedNewsHref?: string;
};

export const galleryPage = {
	label: "Visual Record",
	title: "Gallery",
	description: "Photographs from council events, community engagements, project handovers and programmes across Ikorodu North.",
};

const albumsFromNews: GalleryAlbum[] = allNewsArticles
	.filter((article): article is (typeof allNewsArticles)[number] & { gallery: FigmaAsset[] } => Boolean(article.gallery?.length))
	.map((article) => ({
		slug: article.slug,
		category: article.category,
		filterGroup: article.filterGroup,
		title: article.title,
		summary: article.summary,
		date: article.date,
		cover: article.image,
		photos: article.gallery,
		relatedNewsHref: `/news/${article.slug}`,
	}));

export const galleryAlbums: GalleryAlbum[] = albumsFromNews;

export const galleryCategories = [
	{ label: "All albums", value: "all" },
	{ label: "Council", value: "council" },
	{ label: "Projects", value: "projects" },
	{ label: "Community", value: "community" },
] as const;

export type GalleryCategoryValue = (typeof galleryCategories)[number]["value"];

export const getAlbumHref = (slug: string) => `/gallery/${slug}`;

export const getAlbum = (slug: string) => galleryAlbums.find((album) => album.slug === slug);

export const getRelatedAlbums = (slug: string, limit = 3) => galleryAlbums.filter((album) => album.slug !== slug).slice(0, limit);
