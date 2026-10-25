import { figmaAssets, type FigmaAsset } from "./figma-assets";
import { projects } from "./projects";

export type HomeProject = {
	title: string;
	description: string;
	date: string;
	category: string;
	image: FigmaAsset;
	href: string;
};

export type HomeDepartment = {
	title: string;
	description: string;
	responsibleLead: string;
	category: string;
	icon: "landmark" | "wallet" | "heartPulse";
	href: string;
};

export type HomeAnnouncement = {
	title: string;
	summary: string;
	image: FigmaAsset;
	href: string;
};

export type HomeWard = {
	name: string;
	tag?: string;
	landmarks: string;
	image: FigmaAsset;
	href: string;
};

export type HomeTeamMember = {
	name: string;
	role: string;
	image: FigmaAsset;
	portraitMode?: "cutout" | "photo";
	href: string;
};

export const homeProjects: HomeProject[] = projects.map((project) => ({
	title: project.title,
	description: project.summary,
	date: project.date,
	category: project.category,
	image: project.image,
	href: `/projects/${project.slug}`,
}));

export const homeDepartments: HomeDepartment[] = [
	{
		title: "Admin & Human Resources",
		description: "Handles the council’s people and processes, including recruitment, training, staff welfare, records and day-to-day administration.",
		responsibleLead: "Headed by Human Resources Officer",
		category: "Council administration",
		icon: "landmark",
		href: "/government/departments",
	},
	{
		title: "Finance & Accounts",
		description: "Keeps the council’s money accountable through revenue collection, budgeting, payroll, spending controls and financial reporting.",
		responsibleLead: "Headed by Council Treasurer",
		category: "Public finance",
		icon: "wallet",
		href: "/government/departments",
	},
	{
		title: "Primary Health Care",
		description: "Brings healthcare closer to home through PHC centres, immunisation, maternal and child health, and public health campaigns.",
		responsibleLead: "Headed by Edu. & Library Services Dept.",
		category: "Community health",
		icon: "heartPulse",
		href: "/government/departments",
	},
];

export const homeAnnouncements: HomeAnnouncement[] = [
	{
		title: "The New Deal: Inside Ikorodu North’s 2026 Budget",
		summary: "The administration has presented its 2026 budget, setting out its priorities for the year ahead.",
		image: figmaAssets.news.councilHeadquartersBudget,
		href: "/news/the-new-deal-2026-budget-explained",
	},
	{
		title: "Monthly Environmental Sanitation Exercise",
		summary: "Join your neighbours in keeping Ikorodu North clean. Here’s what you need to know about this month’s exercise.",
		image: figmaAssets.news.communityTour,
		href: "/news/clean-neighbourhoods-together",
	},
	{
		title: "Mayor Apanisile Inspects Ongoing Solar-Powered Water Project",
		summary: "The Chairman visited the project site to review progress on a solar-powered water project for residents of [community].",
		image: figmaAssets.news.solarPoweredWaterProject,
		href: "/news/solar-powered-water-progress",
	},
	{
		title: "The New Deal: key priorities for 2026",
		summary: "A plain-language look at the priorities set out in the 2026 budget for Ikorodu North.",
		image: figmaAssets.news.councilArchive,
		href: "/news/new-deal-priorities-2026",
	},
	{
		title: "Giving young people a voice",
		summary: "How young people in Ikorodu North can take part in local programmes and council conversations.",
		image: figmaAssets.news.lasustechStudentLeaders,
		href: "/news/young-people-voice-local-development",
	},
	{
		title: "Your neighbourhood, your priorities",
		summary: "How to share your community’s needs with the council and get a response.",
		image: figmaAssets.news.neighbourhoodPriorities,
		href: "/news/neighbourhood-priorities",
	},
];

export const homeWards: HomeWard[] = [
	{
		name: "Isiu",
		tag: "Council Headquarters",
		landmarks: "Secretariat · Marriage Registry · Oba of Isiu’s palace",
		image: figmaAssets.home.wardIsiu,
		href: "/government/departments",
	},
	{
		name: "Odogunyan",
		tag: "Industrial gateway",
		landmarks: "Oju Emuren-Agbede Rd · 174 Battalion school · Ebuwawa Market",
		image: figmaAssets.home.wardOdogunyan,
		href: "/government/departments",
	},
	{
		name: "Olorunda",
		tag: "Residential growth",
		landmarks: "Adamo-Araro Rd · Olorunda Primary & Secondary Schools",
		image: figmaAssets.home.wardOlorunda,
		href: "/government/departments",
	},
	{
		name: "Erikorodo",
		tag: "Community life",
		landmarks: "African Bethel Primary School · Council Leader’s ward",
		image: figmaAssets.home.wardErikorodo,
		href: "/government/departments",
	},
	{
		name: "Agbala",
		tag: "Connected by culverts",
		landmarks: "Apeka–Agbala culverts · High School Road (planned)",
		image: figmaAssets.home.wardAgbala,
		href: "/government/departments",
	},
];

export const homeTeamMembers: HomeTeamMember[] = [
	{
		name: "Mayor Ameen Apanisile",
		role: "Executive Chairman",
		image: figmaAssets.home.mayorPortrait,
		portraitMode: "cutout",
		href: "/government/executive-council",
	},
	{
		name: "Hon. Mathew Aliu Adesanya",
		role: "Vice Chairman",
		image: figmaAssets.home.viceChairmanPortrait,
		portraitMode: "cutout",
		href: "/government/executive-council",
	},
	{
		name: "Hon Benson Titilayo Abosede",
		role: "Leader of the House",
		image: figmaAssets.home.leaderPortrait,
		portraitMode: "photo",
		href: "/government/legislative-house",
	},
	{
		name: "Hon jimoh Idris iliasu",
		role: "Deputy Leader of House",
		image: figmaAssets.home.deputyLeaderPortrait,
		portraitMode: "photo",
		href: "/government/legislative-house",
	},
	{
		name: "Hon Banjoko Babatunde O.",
		role: "Chip Whip",
		image: figmaAssets.home.chiefWhipPortrait,
		portraitMode: "photo",
		href: "/government/legislative-house",
	},
];

export const homeContent = {
	hero: {
		headline: "Welcome to\nIkorodu North",
		description: "Connect with your council, access essential services and discover what’s happening across our community.",
		cta: "Learn about us",
	},
	editorialSlides: [
		{
			headline: "Services Built\nAround You",
			description: "From health and education to permits and records, find the right department and get the help you need, faster.",
			cta: "Explore departments",
			href: "/government/departments",
			image: figmaAssets.home.heroCountyComplex,
			imageClassName: "lg:object-[24%_center]",
		},
		{
			headline: "Progress You\nCan See",
			description: "Follow the projects and programmes shaping a cleaner, safer and more prosperous Ikorodu North.",
			cta: "View our projects",
			href: "/projects",
			image: figmaAssets.home.heroSecretariat,
			imageClassName: "lg:object-[68%_center]",
		},
	],
	projects: {
		eyebrow: "Community Projects",
		title: "Building Ikorodu\nNorth, Together",
		description: "See the projects transforming communities across Ikorodu North.",
		cta: "View all projects",
	},
	departments: {
		eyebrow: "Departments",
		title: "Serving You,\nDepartment by Department",
		description: "Find the right office for your needs and see how each team serves the community.",
		cta: "View all departments",
	},
	announcements: {
		eyebrow: "Announcements",
		title: "Latest Announcements\nand Programmes",
		description: "See the projects transforming communities across Ikorodu North.",
		cta: "View all announcements",
	},
	chairman: {
		eyebrow: "From the Executive Chairman",
		title: "Building the Ikorodu North We Deserve",
		paragraphs: [
			"Ikorodu North is a community of energy, talent and possibility. After eight years as Vice Chairman, I took office as Executive Chairman in July 2025 with one duty: to bring government closer to the people.",
			"Our New Deal puts residents first. We are improving roads and public facilities, strengthening primary healthcare, supporting our schools, and keeping neighbourhoods cleaner and safer. We are also opening opportunities for young people, artisans and small businesses, and making the council more open and accountable.",
			"There is more to do, and it cannot be done alone. We will keep listening to our communities and working with you to build a stronger, more prosperous Ikorodu North.",
		],
		cta: "Read full profile",
	},
	wards: {
		eyebrow: "Communities of Ikorodu North",
		title: "Five wards. One council.\nDevelopment in every community.",
		description: "Explore each ward to see its public facilities, verified projects,\nphotographs and local updates, so residents can see development where they live.",
		cta: "Open the Interactive Map",
	},
	team: {
		eyebrow: "Government Team",
		title: "Ikorodu Local\nGovernment Team",
		description: "Meet our dedicated team of leaders, legislators, and professionals\nworking together to serve and develop Ikorodu Local Government Area.",
		cta: "View all",
	},
	map: {
		eyebrow: "Explore the LCDA",
		title: "Explore Ikorodu North LCDA",
		description: "Find council offices, health centres, schools, markets and community projects across our wards.",
		cta: "View Full Map",
	},
} as const;
