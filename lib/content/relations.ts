import { departmentHref, getDepartment } from "./departments";
import { allNewsArticles, getArticleHref, type NewsArticle } from "./news";
import { getProject, projects, type CouncilProject } from "./projects";
import { getWard, wards, type WardRecord } from "./wards";

export type WardSlug = (typeof wards)[number]["slug"];

export type ContentLinks = {
	wards?: WardSlug[];
	departments?: string[];
};

/** Place names and local landmarks that map into each ward. */
const wardPlaceTerms: Record<WardSlug, string[]> = {
	isiu: ["isiu", "eweye", "marriage registry", "council secretariat"],
	odogunyan: [
		"odogunyan",
		"agbede",
		"ebuwawa",
		"losi-onikoko",
		"174 battalion",
		"army children",
		"zumratul",
		"idera",
		"farm settlement",
		"irepodun",
		"arobiona",
		"odo-nla",
		"odonla",
		"odo nla",
	],
	olorunda: ["olorunda", "adamo", "araro", "igbaga", "maya", "ward e4"],
	erikorodo: ["erikorodo", "african bethel", "omigo"],
	agbala: ["agbala", "apeka"],
};

/** Keywords that connect content to a department desk. */
const departmentTerms: Record<string, string[]> = {
	"primary-health-care": ["health", "phc", "ambulance", "triplets", "medical", "maternal", "clinic"],
	"education-library-services": ["school", "classroom", "spelling bee", "education", "pupils", "grammar school", "library"],
	"works-infrastructure": ["road", "culvert", "drainage", "bus stop", "grader", "carriageway", "infrastructure"],
	"environmental-health-services": ["water", "sanitation", "toilet", "wash", "wateraid", "borehole", "kiosk"],
	"women-affairs-poverty-alleviation": ["iranlowo", "empowerment", "women leaders", "poverty"],
	"agriculture-rural-social-development": ["agriculture", "farm", "rural"],
	"public-affairs-unit": ["engagement", "community meeting", "progressive movement", "public affairs"],
	"tourism": ["champions cup", "tourism", "cultural", "heritage", "eweye day"],
	"information-communication-technology": ["ict", "digital", "technology"],
	"admin-human-resources": ["mandate", "seminar", "leadership team"],
};

const categoryDepartments: Record<string, string[]> = {
	Health: ["primary-health-care"],
	Education: ["education-library-services"],
	Roads: ["works-infrastructure"],
	"Water & sanitation": ["environmental-health-services"],
	Water: ["environmental-health-services"],
	Drainage: ["works-infrastructure"],
};

/** Explicit links for current content. New items can set `wards` / `departments` on the record, or rely on inference. */
const projectLinks: Record<string, ContentLinks> = {
	"odonla-primary-health-centre": { wards: ["odogunyan"], departments: ["primary-health-care"] },
	"solar-water-irepodun-arobiona-agbede": { wards: ["odogunyan"], departments: ["environmental-health-services", "education-library-services"] },
	"school-water-sanitation-2025": { wards: ["odogunyan", "erikorodo"], departments: ["environmental-health-services", "education-library-services"] },
	"adamo-araro-road": { wards: ["olorunda"], departments: ["works-infrastructure"] },
	"construction-of-high-school-road-apeka": { wards: ["agbala"], departments: ["works-infrastructure"] },
	"ongoing-construction-of-army-children-school": { wards: ["odogunyan"], departments: ["education-library-services", "works-infrastructure"] },
	"apeka-agbala-culverts": { wards: ["agbala"], departments: ["works-infrastructure"] },
	"igbaga-classroom-blocks": { wards: ["olorunda"], departments: ["education-library-services"] },
	"omigo-solar-water-facility": { wards: ["erikorodo"], departments: ["environmental-health-services"] },
	"maya-schools-wash-facilities": { wards: ["olorunda"], departments: ["environmental-health-services", "education-library-services"] },
};

const newsLinks: Record<string, ContentLinks> = {
	"agbede-triplets": { wards: ["odogunyan"], departments: ["primary-health-care"] },
	"first-100-days": { wards: ["isiu", "agbala", "odogunyan"], departments: ["public-affairs-unit", "works-infrastructure", "primary-health-care"] },
	"agbede-odogunyan-meetings": { wards: ["odogunyan"], departments: ["public-affairs-unit"] },
	"lagos-east-apc-women-leaders": { wards: ["isiu"], departments: ["women-affairs-poverty-alleviation", "public-affairs-unit"] },
	"spelling-bee-2026": { wards: ["isiu", "odogunyan", "olorunda"], departments: ["education-library-services"] },
	"olorunda-ward-e4-engagement": { wards: ["olorunda"], departments: ["public-affairs-unit", "works-infrastructure"] },
	"apanisile-progressive-movement": { wards: ["isiu"], departments: ["public-affairs-unit"] },
	"rescue-home-visit": { wards: ["isiu"], departments: ["public-affairs-unit", "primary-health-care"] },
	"serving-within-the-mandate": { wards: ["isiu"], departments: ["admin-human-resources"] },
	"adamo-mini-bus-stop": { wards: ["olorunda"], departments: ["works-infrastructure"] },
	"construction-of-high-school-road-apeka-flagoff": { wards: ["agbala"], departments: ["works-infrastructure"] },
	"ongoing-construction-of-army-children-school-flagoff": { wards: ["odogunyan"], departments: ["education-library-services"] },
	"apanisile-champions-cup": { wards: ["isiu"], departments: ["tourism", "public-affairs-unit"] },
	"igbaga-classroom-blocks": { wards: ["olorunda"], departments: ["education-library-services"] },
	"four-solar-water-facilities": { wards: ["odogunyan"], departments: ["environmental-health-services"] },
	"odonla-health-centre": { wards: ["odogunyan"], departments: ["primary-health-care"] },
	"iranlowo-owo-apa": { wards: ["isiu"], departments: ["women-affairs-poverty-alleviation"] },
	"october-project-inspection": { wards: ["isiu", "agbala", "odogunyan"], departments: ["works-infrastructure", "primary-health-care"] },
	"wateraid-school-handover": { wards: ["odogunyan", "erikorodo"], departments: ["environmental-health-services", "education-library-services"] },
};

const unique = <T,>(values: T[]) => [...new Set(values)];

const haystackForProject = (project: CouncilProject) =>
	[project.title, project.summary, project.location, project.category, ...project.paragraphs].join(" ").toLowerCase();

const haystackForNews = (article: NewsArticle) =>
	[
		article.title,
		article.summary,
		article.category,
		...article.body.flatMap((section) => section.paragraphs),
	]
		.join(" ")
		.toLowerCase();

const inferWards = (text: string): WardSlug[] => {
	const found = (Object.keys(wardPlaceTerms) as WardSlug[]).filter((slug) => wardPlaceTerms[slug].some((term) => text.includes(term)));
	return found;
};

const inferDepartments = (text: string, category?: string): string[] => {
	const fromCategory = category ? (categoryDepartments[category] ?? []) : [];
	const fromTerms = Object.entries(departmentTerms)
		.filter(([, terms]) => terms.some((term) => text.includes(term)))
		.map(([slug]) => slug);
	return unique([...fromCategory, ...fromTerms]).filter((slug) => Boolean(getDepartment(slug)));
};

export const resolveProjectLinks = (project: CouncilProject): Required<ContentLinks> => {
	const explicit = projectLinks[project.slug] ?? {};
	const fromFields = {
		wards: project.wards ?? [],
		departments: project.departments ?? [],
	};
	const text = haystackForProject(project);
	return {
		wards: unique([...(explicit.wards ?? []), ...fromFields.wards, ...inferWards(text)]) as WardSlug[],
		departments: unique([...(explicit.departments ?? []), ...fromFields.departments, ...inferDepartments(text, project.category)]),
	};
};

export const resolveNewsLinks = (article: NewsArticle): Required<ContentLinks> => {
	const explicit = newsLinks[article.slug] ?? {};
	const fromFields = {
		wards: article.wards ?? [],
		departments: article.departments ?? [],
	};
	const text = haystackForNews(article);
	return {
		wards: unique([...(explicit.wards ?? []), ...fromFields.wards, ...inferWards(text)]) as WardSlug[],
		departments: unique([...(explicit.departments ?? []), ...fromFields.departments, ...inferDepartments(text)]),
	};
};

export const getProjectsForWard = (wardSlug: WardSlug, limit = 6) =>
	projects.filter((project) => resolveProjectLinks(project).wards.includes(wardSlug)).slice(0, limit);

export const getNewsForWard = (wardSlug: WardSlug, limit = 6) =>
	allNewsArticles.filter((article) => resolveNewsLinks(article).wards.includes(wardSlug)).slice(0, limit);

export const getDepartmentsForWard = (wardSlug: WardSlug, limit = 4) => {
	const counts = new Map<string, number>();
	for (const project of getProjectsForWard(wardSlug, 50)) {
		for (const slug of resolveProjectLinks(project).departments) {
			counts.set(slug, (counts.get(slug) ?? 0) + 2);
		}
	}
	for (const article of getNewsForWard(wardSlug, 50)) {
		for (const slug of resolveNewsLinks(article).departments) {
			counts.set(slug, (counts.get(slug) ?? 0) + 1);
		}
	}
	return [...counts.entries()]
		.sort((a, b) => b[1] - a[1])
		.map(([slug]) => getDepartment(slug))
		.filter((department): department is NonNullable<typeof department> => Boolean(department))
		.slice(0, limit);
};

export const getProjectsForDepartment = (departmentSlug: string, limit = 6) =>
	projects.filter((project) => resolveProjectLinks(project).departments.includes(departmentSlug)).slice(0, limit);

export const getNewsForDepartment = (departmentSlug: string, limit = 6) =>
	allNewsArticles.filter((article) => resolveNewsLinks(article).departments.includes(departmentSlug)).slice(0, limit);

export const getWardsForProject = (project: CouncilProject) =>
	resolveProjectLinks(project)
		.wards.map((slug) => getWard(slug))
		.filter((ward): ward is WardRecord => Boolean(ward));

export const getDepartmentsForProject = (project: CouncilProject) =>
	resolveProjectLinks(project)
		.departments.map((slug) => getDepartment(slug))
		.filter((department): department is NonNullable<typeof department> => Boolean(department));

export const getWardsForNews = (article: NewsArticle) =>
	resolveNewsLinks(article)
		.wards.map((slug) => getWard(slug))
		.filter((ward): ward is WardRecord => Boolean(ward));

export const getDepartmentsForNews = (article: NewsArticle) =>
	resolveNewsLinks(article)
		.departments.map((slug) => getDepartment(slug))
		.filter((department): department is NonNullable<typeof department> => Boolean(department));

export const getProjectHref = (slug: string) => `/projects/${slug}`;

export const relatedWorkLabels = {
	wardProjectsTitle: "Projects",
	wardNewsTitle: "Recent stories",
	wardDesksTitle: "Also involving",
	wardEmpty: "More local work will appear here as it is published.",
	departmentProjectsTitle: "Projects",
	departmentNewsTitle: "Recent stories",
	departmentEmpty: "Related work will appear here as it is published.",
	communitiesLabel: "Communities",
	departmentsLabel: "Council desks",
	viewProject: "View project",
	readStory: "Read story",
	viewDepartment: "Open desk",
	viewWard: "Open community",
	viewAllProjects: "All projects",
	viewAllNews: "All news",
	galleryLabel: "Gallery",
};

export { departmentHref, getArticleHref, getProject };
