import { figmaAssets, type FigmaAsset } from "./figma-assets";

export type WardProjectStatus = "Completed" | "Ongoing" | "Planned";

export type WardProject = {
	status: WardProjectStatus;
	category: string;
	title: string;
	description: string;
	meta: string;
};

export type WardRecord = {
	slug: string;
	name: string;
	image: FigmaAsset;
	introduction: string;
	overviewHeading: string;
	overviewParagraphs: string[];
	overviewNote?: string;
	facilities: string[];
	projectsEyebrow?: string;
	projects: WardProject[];
	projectsEmpty?: string;
	newsStory?: { label: string; title: string };
	concern?: boolean;
};

const projectsIntro = "Project details and statuses from the published community record.";
const newsEmptyTitle = "More local updates to come";
const newsEmptyDescription = "Ward-specific stories will appear here as they are published. Visit the news page for council-wide announcements.";

export const wardLabels = {
	back: "All communities",
	backHref: "/about#communities",
	pill: "Communities of Ikorodu North",
	overviewEyebrow: "Community overview",
	facilitiesTitle: "Local facilities & infrastructure",
	projectsTitle: "Projects in this ward",
	projectsDescription: projectsIntro,
	projectsCta: "Explore all council projects",
	projectsHref: "/projects",
	projectCta: "View project details",
	newsEyebrow: "News & local initiatives",
	newsEmptyTitle,
	newsEmptyDescription,
	newsCta: "View council news",
	newsHref: "/news",
	storyCta: "Read the story",
	concernDescription: "Tell the council about an issue in your neighbourhood or share an idea for your community.",
	concernCta: "Contact the council",
	concernHref: "/contact",
};

export const wards: WardRecord[] = [
	{
		slug: "isiu",
		name: "Isiu",
		image: figmaAssets.home.wardIsiu,
		introduction: "Isiu Town is the administrative seat of Ikorodu North LCDA, home to the council secretariat, the Marriage Registry and the palace of the Oba of Isiu.",
		overviewHeading: "The council seat of Ikorodu North.",
		overviewParagraphs: [
			"The council secretariat stands in Isiu Town on the Ikorodu-Shagamu Road. Mayor Apanisile assumed office here on 28 July 2025 and inaugurated the 6th Legislative Council.",
			"The Marriage Registry was among the facilities inspected on 28 October 2025. Population, land area and CDA counts for the ward will be published once confirmed by the Budget and Planning department.",
		],
		facilities: ["Council Secretariat", "Marriage Registry", "Oba of Isiu’s palace"],
		projects: [],
		projectsEmpty: "No ward-only project record yet",
	},
	{
		slug: "odogunyan",
		name: "Odogunyan",
		image: figmaAssets.home.wardOdogunyan,
		introduction: "Odogunyan is the industrial gateway of Ikorodu North, home to Ebuwawa Market, the Agbede corridor and the 174 Battalion barracks community.",
		overviewHeading: "A growing ward at the heart of the road programme.",
		overviewParagraphs: ["Odogunyan sits along the Ikorodu–Shagamu corridor and connects the council to Agbede, Ebuwawa and the Ikorodu Industrial Estate. Its communities are served by Zumratul Islamiyyah and Farm Settlement primary schools, where solar-powered water and sanitation facilities are being delivered with WaterAid."],
		overviewNote: "Population, land area and CDA counts will be published once confirmed by the Budget and Planning department.",
		facilities: ["Ebuwawa Market", "Zumratul Islamiyyah Primary School", "Farm Settlement Primary School", "174 Battalion Army Children Primary School", "Oju Emuren–Agbede Road · under construction", "Agbede–Ebuwawa Road · under construction"],
		projectsEyebrow: "Project records",
		projects: [
			{
				status: "Ongoing",
				category: "Roads",
				title: "Oju Emuren–Agbede Road",
				description: "Construction of the link road, flagged off in October 2025 and facilitated through Senator Tokunbo Abiru’s constituency office.",
				meta: "Flagged off October 2025",
			},
			{
				status: "Ongoing",
				category: "Roads",
				title: "Agbede–Ebuwawa Road",
				description: "The second of two Senator Abiru-facilitated road projects, connecting Agbede to Ebuwawa Market.",
				meta: "Flagged off October 2025",
			},
			{
				status: "Planned",
				category: "Education",
				title: "174 Battalion Army Children Primary School",
				description: "Full reconstruction of the school in Odogunyan, advertised for tender in June 2026.",
				meta: "Tender issued June 2026",
			},
		],
		newsStory: {
			label: "Project flag-off · 25 October 2025",
			title: "Mayor Apanisile and Senator Abiru flag off Oju Emuren–Agbede and Agbede–Ebuwawa roads",
		},
		concern: true,
	},
	{
		slug: "olorunda",
		name: "Olorunda",
		image: figmaAssets.home.wardOlorunda,
		introduction: "Olorunda is a growing residential ward, served by Olorunda Primary and Secondary Schools and by the Adamo–Araro Road completed in the administration’s first 100 days.",
		overviewHeading: "Residential communities linked by a completed road.",
		overviewParagraphs: ["Adamo–Araro Road was delivered within the first 100 days and reported on 20 November 2025 as part of the New Deal service delivery agenda."],
		overviewNote: "Population, land area and CDA counts will be published once confirmed by the Budget and Planning department.",
		facilities: ["Adamo–Araro Road", "Olorunda Primary School", "Olorunda Secondary School"],
		projectsEyebrow: "Project records",
		projects: [
			{
				status: "Completed",
				category: "Roads",
				title: "Adamo–Araro Road",
				description: "Road project delivered within the administration’s first 100 days as part of the New Deal service delivery agenda.",
				meta: "Completed November 2025",
			},
		],
		concern: true,
	},
	{
		slug: "erikorodo",
		name: "Erikorodo",
		image: figmaAssets.home.wardErikorodo,
		introduction: "Erikorodo is the ward of Council Leader Hon. Bose Benson Titilayo. African Bethel Primary School is among its public facilities.",
		overviewHeading: "Community life, education and local representation.",
		overviewParagraphs: ["Hon. Bose Benson Titilayo of Erikorodo Ward emerged Council Leader when the 6th Legislative Council was inaugurated on 28 July 2025. Schools in Erikorodo are part of the WaterAid solar water and sanitation programme."],
		overviewNote: "Population and CDA counts will be published once confirmed.",
		facilities: ["African Bethel Primary School", "Solar water and sanitation works in primary schools"],
		projectsEyebrow: "Project records",
		projects: [
			{
				status: "Ongoing",
				category: "Education",
				title: "Solar Water & Sanitation in Primary Schools",
				description: "Solar-powered boreholes and rehabilitated sanitation facilities delivered with WaterAid across Erikorodo and Odogunyan wards.",
				meta: "Programme total: 6 completed · 4 ongoing",
			},
		],
		concern: true,
	},
	{
		slug: "agbala",
		name: "Agbala",
		image: figmaAssets.home.wardAgbala,
		introduction: "Agbala is linked to Apeka by completed box culverts. High School Road is approved and was advertised for tender in June 2026.",
		overviewHeading: "Access restored, with a new road out to tender.",
		overviewParagraphs: ["Box culverts linking Agbala to Apeka were completed in 2025 to ease flooding and restore year-round access. The Mayor inspected the Apeka culvert on 28 October 2025. Construction of High School Road, Apeka–Agbala, was advertised for competitive tender on 11 June 2026."],
		facilities: ["Apeka–Agbala box culverts", "High School Road · tender issued"],
		projectsEyebrow: "Project records",
		projects: [
			{
				status: "Completed",
				category: "Drainage",
				title: "Apeka–Agbala Box Culverts",
				description: "Box culverts linking Agbala to Apeka to ease flooding and restore year-round access between the two communities.",
				meta: "Completed 2025",
			},
			{
				status: "Planned",
				category: "Roads",
				title: "High School Road, Apeka–Agbala",
				description: "Construction approved by the council and advertised for competitive tender in June 2026.",
				meta: "Tender issued June 2026",
			},
		],
		concern: true,
	},
];

export const getWard = (slug: string) => wards.find((ward) => ward.slug === slug);

export const wardNewsTitle = (name: string) => `Latest from ${name}`;

export const wardConcernTitle = (name: string) => `Have a concern in ${name}?`;
