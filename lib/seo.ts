import type { Metadata } from "next";

import { councilFacebookUrl } from "@/lib/content/projects";

export const siteName = "Ikorodu North LCDA";
export const siteLegalName = "Ikorodu North Local Council Development Area";
export const siteDescription =
	"Official digital home of Ikorodu North Local Council Development Area. News, projects, services and the five wards of the council in Lagos State.";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ikorodunorthlcda.lg.gov.ng").replace(/\/$/, "");

export const siteLogo = "/images/shared/ikorodu-north-lcda-logo.webp";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export const absoluteUrl = (path = "/") => {
	if (path.startsWith("http")) return path;
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return normalized === "/" ? siteUrl : `${siteUrl}${normalized}`;
};

export const publishedIso = (value?: string) => {
	if (!value) return undefined;
	const parsed = new Date(value);
	if (Number.isNaN(parsed.getTime())) return undefined;
	const month = String(parsed.getMonth() + 1).padStart(2, "0");
	const day = String(parsed.getDate()).padStart(2, "0");
	return `${parsed.getFullYear()}-${month}-${day}`;
};

const trimDescription = (value: string, max = 160) => {
	const clean = value.replace(/\s+/g, " ").trim();
	if (clean.length <= max) return clean;
	const sliced = clean.slice(0, max - 1);
	const boundary = sliced.lastIndexOf(" ");
	return `${(boundary > 80 ? sliced.slice(0, boundary) : sliced).trim()}…`;
};

type ShareImage = {
	src: string;
	width: number;
	height: number;
	alt: string;
};

type PageMetadataInput = {
	title: string;
	description: string;
	path: string;
	image?: ShareImage;
	type?: "website" | "article";
	publishedTime?: string;
};

const defaultShareImage = {
	url: "/opengraph-image",
	width: 1200,
	height: 630,
	alt: "Ikorodu North LCDA, the official council website",
};

export const createPageMetadata = ({ title, description, path, image, type = "website", publishedTime }: PageMetadataInput): Metadata => {
	const summary = trimDescription(description);
	const images = image ? [{ url: image.src, width: image.width, height: image.height, alt: image.alt || title }] : [defaultShareImage];
	const shared = {
		url: path,
		locale: "en_NG" as const,
		siteName,
		description: summary,
		...(images ? { images } : {}),
	};

	const openGraph: Metadata["openGraph"] =
		type === "article"
			? {
					...shared,
					type: "article",
					publishedTime,
					modifiedTime: publishedTime,
					authors: [siteLegalName],
				}
			: {
					...shared,
					type: "website",
				};

	return {
		title: path === "/" ? { absolute: title } : title,
		description: summary,
		alternates: { canonical: path },
		openGraph,
		twitter: {
			card: "summary_large_image",
			description: summary,
			...(images ? { images: images.map((item) => item.url) } : {}),
		},
	};
};

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.name,
		item: absoluteUrl(item.path),
	})),
});

export const articleJsonLd = ({
	path,
	title,
	description,
	image,
	date,
	kind,
}: {
	path: string;
	title: string;
	description: string;
	image?: string;
	date?: string;
	kind: "NewsArticle" | "Article";
}) => {
	const iso = publishedIso(date);

	return {
		"@context": "https://schema.org",
		"@type": kind,
		headline: title,
		description,
		mainEntityOfPage: absoluteUrl(path),
		...(image ? { image: [absoluteUrl(image)] } : {}),
		...(iso ? { datePublished: iso, dateModified: iso } : {}),
		inLanguage: "en-NG",
		author: {
			"@type": "GovernmentOrganization",
			name: siteLegalName,
			url: siteUrl,
		},
		publisher: {
			"@type": "GovernmentOrganization",
			name: siteLegalName,
			url: siteUrl,
			logo: {
				"@type": "ImageObject",
				url: absoluteUrl(siteLogo),
			},
		},
		isPartOf: { "@id": websiteId },
	};
};

export const siteJsonLd = () => ({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "GovernmentOrganization",
			"@id": organizationId,
			name: siteLegalName,
			alternateName: siteName,
			url: siteUrl,
			logo: {
				"@type": "ImageObject",
				url: absoluteUrl(siteLogo),
			},
			image: absoluteUrl(siteLogo),
			email: "info@ikorodunorthlcda.lg.gov.ng",
			telephone: "+2348165442373",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Ikorodu–Shagamu Road, Isiu",
				addressLocality: "Ikorodu",
				addressRegion: "Lagos",
				postalCode: "104101",
				addressCountry: "NG",
			},
			areaServed: {
				"@type": "AdministrativeArea",
				name: "Ikorodu North",
				containedInPlace: {
					"@type": "State",
					name: "Lagos State",
				},
			},
			contactPoint: [
				{
					"@type": "ContactPoint",
					telephone: "+2348165442373",
					email: "info@ikorodunorthlcda.lg.gov.ng",
					contactType: "customer service",
					areaServed: "NG",
					availableLanguage: ["English"],
				},
				{
					"@type": "ContactPoint",
					telephone: "+2348110479658",
					email: "admin@ikorodunorthlcda.lg.gov.ng",
					contactType: "customer service",
					areaServed: "NG",
					availableLanguage: ["English"],
				},
			],
			sameAs: [councilFacebookUrl],
		},
		{
			"@type": "WebSite",
			"@id": websiteId,
			url: siteUrl,
			name: siteName,
			description: siteDescription,
			inLanguage: "en-NG",
			publisher: { "@id": organizationId },
		},
	],
});
