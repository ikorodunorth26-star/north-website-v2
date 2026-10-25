import { figmaAssets, type FigmaAsset } from "./figma-assets";

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

export type HomeMapFeature = {
	label: string;
	countLabel: string;
	icon: "building" | "heartPulse" | "graduationCap" | "store" | "landmark" | "trees";
};

export const homeProjects: HomeProject[] = [
	{
		title: "Solar-Powered Water Project",
		description: "Mayor Ameen Apanisile inspected the solar-powered water project, which aims to bring clean, sustainable water to residents of Ikorodu North.",
		date: "January 2026",
		category: "Infrastructure",
		image: figmaAssets.news.solarPoweredWaterProject,
		href: "/news/solar-powered-water-project",
	},
	{
		title: "Youth Engagement with NANS, LASUSTECH",
		description: "The council partnered with student leaders from NANS at LASUSTECH on youth development in Ikorodu North.",
		date: "January 2026",
		category: "Youth & empowerment",
		image: figmaAssets.news.lasustechStudentLeaders,
		href: "/news/nans-student-leaders-lasustech",
	},
	{
		title: "Tour of Ikorodu North LCDA",
		description: "The Chairman toured communities across the LCDA to see local needs firsthand and meet residents.",
		date: "January 2026",
		category: "Community engagement",
		image: figmaAssets.news.communityTour,
		href: "/news/community-tour-ikorodu-north",
	},
];

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
		responsibleLead: "Headed by Primary Health Care Coordinator",
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
		image: figmaAssets.news.councilServicesGuide,
		href: "/news/clean-neighbourhoods-together",
	},
	{
		title: "Mayor Apanisile Inspects Ongoing Solar-Powered Water Project",
		summary: "The Chairman visited the project site to review progress on a solar-powered water project for residents of Ikorodu North.",
		image: figmaAssets.news.communityProjectDelivery,
		href: "/news/solar-powered-water-progress",
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
		name: "Hon. Jimoh Idris Iliasu",
		role: "Deputy Leader of House",
		image: figmaAssets.home.deputyLeaderPortrait,
		portraitMode: "photo",
		href: "/government/legislative-house",
	},
	{
		name: "Hon Banjoko Babatunde O.",
		role: "Chief Whip",
		image: figmaAssets.home.chiefWhipPortrait,
		portraitMode: "photo",
		href: "/government/legislative-house",
	},
];

export const homeMapFeatures: HomeMapFeature[] = [
	{ label: "Government buildings", countLabel: "7 locations", icon: "building" },
	{ label: "Health centres", countLabel: "11 locations", icon: "heartPulse" },
	{ label: "Schools", countLabel: "5 locations", icon: "graduationCap" },
	{ label: "Markets", countLabel: "8 locations", icon: "store" },
	{ label: "Commercial centers", countLabel: "18 locations", icon: "landmark" },
	{ label: "Parks & recreation", countLabel: "To be confirmed", icon: "trees" },
];

export const homeContent = {
	hero: {
		headline: "Welcome to\nIkorodu North",
		description: "Connect with your council, access essential services and discover what’s happening across our community.",
		cta: "Learn about us",
	},
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
		description: "Official council updates, public notices and programmes for residents.",
		cta: "View all announcements",
	},
	chairman: {
		eyebrow: "From the Executive Chairman",
		title: "Building the Ikorodu North We Deserve",
		paragraphs: [
			"Ikorodu North is full of energy, talent and possibility. Our job is to make sure our local government matches that ambition.",
			"Since taking office, our administration has focused on safer streets, stronger businesses and more transparent, responsive governance. But real progress is not measured in plans. It shows up in better services and opportunities for our young people.",
			"The journey is ongoing, and we cannot make it alone. Together, we will build an Ikorodu North that our children are proud to inherit.",
		],
		cta: "Read full profile",
	},
	wards: {
		eyebrow: "Communities of Ikorodu North",
		title: "Five wards. One council.\nDevelopment in every community.",
		description: "Explore each ward to see its public facilities, verified projects, photographs and local updates, so residents can see development where they live.",
		cta: "Open the Interactive Map",
	},
	team: {
		eyebrow: "Government Team",
		title: "Ikorodu Local Government Team",
		description: "Meet our dedicated team of leaders, legislators, and professionals working together to serve and develop Ikorodu Local Government Area.",
		cta: "View all",
	},
	map: {
		eyebrow: "Explore the LCDA",
		title: "Explore Ikorodu North LCDA",
		description: "Find council offices, health centres, schools, markets and community projects across our wards.",
		cta: "View Full Map",
	},
} as const;
