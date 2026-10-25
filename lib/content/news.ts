import { figmaAssets, type FigmaAsset } from "./figma-assets";

export type NewsFilterGroup = "council" | "projects" | "community";

export type ArticleSection = {
	heading?: string;
	paragraphs: string[];
};

export type NewsArticle = {
	slug: string;
	category: string;
	filterGroup: NewsFilterGroup;
	title: string;
	summary: string;
	date: string;
	readTime: string;
	image: FigmaAsset;
	body: ArticleSection[];
};

const featuredBody: ArticleSection[] = [
	{
		paragraphs: [
			"Mayor Ameen Apanisile presented ‘The New Deal’ in January. Here is what it sets out for our communities.",
			"In [month/date], the council set out [number] priorities under ‘The New Deal’, its plan for the 2026 financial year. The budget totals [₦ amount] and focuses on [priority area 1], [priority area 2] and [priority area 3].",
		],
	},
	{
		heading: "What the budget covers",
		paragraphs: [
			"[Summary of the main spending areas, e.g. infrastructure, health, education and environment, with confirmed figures for each.]",
			"[Explain how the allocations compare with the previous year and what residents should expect to see in their wards.]",
		],
	},
	{
		heading: "What it means for your community",
		paragraphs: [
			"[Describe the projects planned for each ward — Isiu, Odogunyan, Olorunda, Erikorodo and Agbala — with confirmed locations and timelines.]",
		],
	},
	{
		heading: "How residents can take part",
		paragraphs: [
			"[Explain how residents can follow progress, attend [meeting/forum name] or share feedback with the council via [contact channel].]",
		],
	},
];

const buildBody = (summary: string, title: string): ArticleSection[] => [
	{
		paragraphs: [
			summary,
			"This story is part of Ikorodu North LCDA’s public record of council activity, community programmes and service updates for residents.",
		],
	},
	{
		heading: "What residents should know",
		paragraphs: [
			`The council will publish confirmed details, dates and next steps for “${title}” through its official communication channels as they become available.`,
		],
	},
	{
		heading: "How to follow up",
		paragraphs: [
			"Residents can contact the Public Affairs Unit for clarification, share feedback with the council, or check the News & Updates page for subsequent announcements.",
		],
	},
];

export const featuredArticle: NewsArticle = {
	slug: "the-new-deal-2026-budget-explained",
	category: "FEATURED / 2026 BUDGET",
	filterGroup: "council",
	title: "The New Deal: Ikorodu North’s 2026 budget explained",
	summary: "Mayor Ameen Apanisile presented ‘The New Deal’ in January. Here is what it sets out for our communities.",
	date: "1 January 2026",
	readTime: "5 min read",
	image: figmaAssets.news.councilHeadquartersBudget,
	body: featuredBody,
};

const articleSeed: Array<Omit<NewsArticle, "body"> & { body?: ArticleSection[] }> = [
	{
		slug: "solar-powered-water-project",
		category: "INFRASTRUCTURE",
		filterGroup: "projects",
		title: "Chairman inspects solar-powered water project",
		summary: "On 21 January, Mayor Apanisile visited the ongoing solar-powered water project at [site].",
		date: "21 January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.solarPoweredWaterProject,
		body: [],
	},
	{
		slug: "nans-student-leaders-lasustech",
		category: "YOUTH & EMPOWERMENT",
		filterGroup: "community",
		title: "Chairman meets NANS student leaders at LASUSTECH",
		summary: "On 31 January, the Chairman engaged NANS youth at LASUSTECH on [key topics].",
		date: "31 January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.lasustechStudentLeaders,
		body: [],
	},
	{
		slug: "community-tour-ikorodu-north",
		category: "COMMUNITY",
		filterGroup: "community",
		title: "Chairman tours communities across Ikorodu North",
		summary: "On 16 January, the Chairman toured the LCDA to hear residents and review [projects/sites].",
		date: "16 January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.communityTour,
		body: [],
	},
	{
		slug: "new-deal-priorities-2026",
		category: "COUNCIL NEWS",
		filterGroup: "council",
		title: "The New Deal: key priorities for 2026",
		summary: "A plain-language summary of [priority areas] in the 2026 budget.",
		date: "January 2026",
		readTime: "4 min read",
		image: figmaAssets.news.councilArchive,
		body: [],
	},
	{
		slug: "clean-neighbourhoods-together",
		category: "ENVIRONMENT",
		filterGroup: "community",
		title: "Keeping our neighbourhoods clean, together",
		summary: "What residents need to know about [sanitation date] and shared spaces.",
		date: "January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.communityTour,
		body: [],
	},
	{
		slug: "solar-powered-water-progress",
		category: "INFRASTRUCTURE",
		filterGroup: "projects",
		title: "Solar-powered water: project progress update",
		summary: "Latest status of the water project at [site], with [milestone] details.",
		date: "January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.solarPoweredWaterProject,
		body: [],
	},
	{
		slug: "young-people-voice-local-development",
		category: "YOUTH",
		filterGroup: "community",
		title: "Giving young people a voice in local development",
		summary: "How youth in Ikorodu North can take part in [programme name].",
		date: "January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.lasustechStudentLeaders,
		body: [],
	},
	{
		slug: "neighbourhood-priorities",
		category: "COMMUNITY",
		filterGroup: "community",
		title: "Your neighbourhood, your priorities",
		summary: "How to share your community’s needs with the council and get a response.",
		date: "January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.neighbourhoodPriorities,
		body: [],
	},
	{
		slug: "council-services-guide",
		category: "COUNCIL NEWS",
		filterGroup: "council",
		title: "Your guide to services at Ikorodu North LCDA",
		summary: "What the council offers residents, and where to [access services].",
		date: "January 2026",
		readTime: "4 min read",
		image: figmaAssets.news.councilServicesGuide,
		body: [],
	},
	{
		slug: "cleaner-ikorodu-north-actions",
		category: "ENVIRONMENT",
		filterGroup: "community",
		title: "Small actions for a cleaner Ikorodu North",
		summary: "Simple everyday steps to keep our streets and drains clean.",
		date: "January 2026",
		readTime: "2 min read",
		image: figmaAssets.news.communityTour,
		body: [],
	},
	{
		slug: "community-project-delivery",
		category: "PROJECTS",
		filterGroup: "projects",
		title: "Tracking a community project from plan to delivery",
		summary: "How [project name] moves through planning, delivery and public updates.",
		date: "January 2026",
		readTime: "4 min read",
		image: figmaAssets.news.communityProjectDelivery,
		body: [],
	},
	{
		slug: "lasustech-student-links",
		category: "EDUCATION & YOUTH",
		filterGroup: "community",
		title: "Strengthening ties with LASUSTECH students",
		summary: "Follow-up on the Chairman’s 31 January NANS engagement: [outcomes].",
		date: "January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.lasustechStudentLeaders,
		body: [],
	},
	{
		slug: "raise-concern-council",
		category: "DRAFT  /  COMMUNITY",
		filterGroup: "community",
		title: "How to raise a concern with your council",
		summary: "Steps for reporting issues and requesting information from the council.",
		date: "January 2026",
		readTime: "3 min read",
		image: figmaAssets.news.neighbourhoodPriorities,
		body: [],
	},
];

export const newsArticles: NewsArticle[] = articleSeed.map((article): NewsArticle => ({
	...article,
	body: article.body?.length ? article.body : buildBody(article.summary, article.title),
}));

export const allNewsArticles = [featuredArticle, ...newsArticles];

export const newsCategories = [
	{ label: "All updates", value: "all" },
	{ label: "Council", value: "council" },
	{ label: "Projects", value: "projects" },
	{ label: "Community", value: "community" },
] as const;

export type NewsCategoryValue = (typeof newsCategories)[number]["value"];

export const getArticleHref = (slug: string) => `/news/${slug}`;

export const getRelatedArticles = (slug: string, limit = 3) => allNewsArticles.filter((article) => article.slug !== slug).slice(0, limit);
