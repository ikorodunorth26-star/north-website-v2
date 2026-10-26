import { figmaAssets, type FigmaAsset } from "./figma-assets";
import { reportImages } from "./report-images";
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
		title: "Triplets welcomed at Agbede Health Centre",
		summary: "Mrs Omowunmi Ameen Apanisile presented gifts to the family of triplets born at Agbede Health Centre.",
		image: reportImages.agbedeTripletsFamily,
		href: "/news/agbede-triplets",
	},
	{
		title: "Chairman holds community engagement meetings at Agbede and Odogunyan",
		summary: "Mayor Ameen Apanisile met residents at Agbede and Odogunyan to receive feedback, identify pressing needs, and discuss issues requiring government attention.",
		image: reportImages.agbedeMeetingBanner,
		href: "/news/agbede-odogunyan-meetings",
	},
	{
		title: "Chairman receives Lagos East APC women leaders",
		summary: "Mayor Ameen Apanisile received APC women leaders from Lagos East on a familiarisation and solidarity visit ahead of the forthcoming elections.",
		image: reportImages.womenLeadersGroup,
		href: "/news/lagos-east-apc-women-leaders",
	},
	{
		title: "Chairman hosts the second Spelling Bee",
		summary: "Public primary and secondary schools competed at the Council Hall, and the finalists received their certificates.",
		image: reportImages.spellingBeeFinalists,
		href: "/news/spelling-bee-2026",
	},
	{
		title: "Chairman meets Ward E4, Olorunda",
		summary: "Mayor Apanisile assured the Joint CDA and community stakeholders that no ward would be left out of the development agenda.",
		image: reportImages.olorundaChairman,
		href: "/news/olorunda-ward-e4-engagement",
	},
	{
		title: "Chairman receives the Apanisile Progressive Movement",
		summary: "Mayor Apanisile met the movement on continuity, Permanent Voter Card collection, and mobilisation ahead of the forthcoming elections.",
		image: reportImages.apmGroup,
		href: "/news/apanisile-progressive-movement",
	},
	{
		title: "First 100 days: the New Deal record at Isiu",
		summary: "Mayor Apanisile set out what the first hundred days had delivered, from Odo-Nla to Iranlowo Owo Apa.",
		image: reportImages.hundredDays,
		href: "/news/first-100-days",
	},
	{
		title: "Iranlowo Owo Apa: support for traders and households",
		summary: "Artisans, small businesses, young people, elders and vulnerable residents each received ₦100,000.",
		image: reportImages.empowermentCheques,
		href: "/news/iranlowo-owo-apa",
	},
	{
		title: "Four solar water facilities handed over",
		summary: "Solar water and sanitation facilities were commissioned at Farm Settlement Primary School and in Irepodun, Arobiona and Agbede.",
		image: reportImages.fourWaterFacilities,
		href: "/news/four-solar-water-facilities",
	},
	{
		title: "Six classroom blocks commissioned at Igbaga",
		summary: "The Chairman commissioned six classroom blocks facilitated by Rep. Babajimi Benson.",
		image: reportImages.classroomsIgbaga,
		href: "/news/igbaga-classroom-blocks",
	},
	{
		title: "WaterAid hands over school water and toilets",
		summary: "Solar boreholes, tanks and toilets were handed over at schools in Odogunyan and Erikorodo.",
		image: reportImages.schoolWaterTank,
		href: "/news/wateraid-school-handover",
	},
	{
		title: "October inspection of roads, water and the registry",
		summary: "The Chairman inspected the marriage registry, the Apeka culvert, Oju Emuren–Agbede and works at Odo-Nla.",
		image: reportImages.drainageWorks,
		href: "/news/october-project-inspection",
	},
];

export const homeWards: HomeWard[] = [
	{
		name: "Isiu",
		tag: "Council Headquarters",
		landmarks: "Secretariat · Marriage Registry · Oba of Isiu’s palace",
		image: figmaAssets.home.wardIsiu,
		href: "/communities/isiu",
	},
	{
		name: "Odogunyan",
		tag: "Industrial gateway",
		landmarks: "Oju Emuren-Agbede Rd · 174 Battalion school · Ebuwawa Market",
		image: figmaAssets.home.wardOdogunyan,
		href: "/communities/odogunyan",
	},
	{
		name: "Olorunda",
		tag: "Residential growth",
		landmarks: "Adamo-Araro Rd · Olorunda Primary & Secondary Schools",
		image: figmaAssets.home.wardOlorunda,
		href: "/communities/olorunda",
	},
	{
		name: "Erikorodo",
		tag: "Community life",
		landmarks: "African Bethel Primary School · Council Leader’s ward",
		image: figmaAssets.home.wardErikorodo,
		href: "/communities/erikorodo",
	},
	{
		name: "Agbala",
		tag: "Connected by culverts",
		landmarks: "Apeka–Agbala culverts · High School Road (planned)",
		image: figmaAssets.home.wardAgbala,
		href: "/communities/agbala",
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
