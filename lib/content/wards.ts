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
		introduction: "Isiu Town is the administrative seat of Ikorodu North LCDA. From this secretariat, Mayor Apanisile began the New Deal and renewed the Marriage Registry for residents.",
		overviewHeading: "Where the New Deal went to work.",
		overviewParagraphs: [
			"Mayor Apanisile took office at the Isiu secretariat on 28 July 2025 and inaugurated the 6th Legislative Council the same day. In the first hundred days the Marriage Registry was renewed, and the chairman’s office was opened up with a reception and conference room.",
			"On 18 November 2025 he stood before residents here to set out that record: health facilities brought back into use, roads and culverts under way, and support placed in the hands of traders, artisans and elders.",
		],
		facilities: ["Council Secretariat", "Marriage Registry", "Oba of Isiu’s palace"],
		projectsEyebrow: "Project records",
		projects: [
			{
				status: "Completed",
				category: "Public facilities",
				title: "Marriage Registry",
				description: "The registry beside the secretariat was renewed in the first hundred days, so marriages can be recorded in a restored council building.",
				meta: "Renewed in the first 100 days",
			},
		],
	},
	{
		slug: "odogunyan",
		name: "Odogunyan",
		image: figmaAssets.home.wardOdogunyan,
		introduction: "Odogunyan is the industrial gateway of Ikorodu North. Mayor Apanisile has put water into its schools and kept the road works on the Agbede corridor moving.",
		overviewHeading: "Water in the schools, roads on the corridor.",
		overviewParagraphs: ["On 30 September 2025 Mayor Apanisile commissioned solar-powered water and new toilets at Zumratul Islamiyyah Primary School, Odogunyan, and at Idera Community Primary School, together with WaterAid. Along the same corridor, Oju Emuren–Agbede Road and Agbede–Ebuwawa Road were flagged off in October 2025 through Senator Tokunbo Abiru’s office, and in July 2026 the Mayor flagged off the rebuilding of Army Children Primary School at 174 Battalion."],
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
				status: "Completed",
				category: "Education",
				title: "Solar water at Zumratul Islamiyyah and Idera",
				description: "Each school received a solar-powered borehole, an elevated tank and new toilets. Mayor Apanisile handed the facilities over on 30 September 2025.",
				meta: "Commissioned 30 September 2025",
			},
			{
				status: "Ongoing",
				category: "Education",
				title: "174 Battalion Army Children Primary School",
				description: "Mayor Apanisile flagged off the reconstruction of the Army Children school at Losi-Onikoko, Odogunyan, at the end of his first year.",
				meta: "Flagged off July 2026",
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
		introduction: "Olorunda is a growing residential ward. The Adamo–Araro Road, inspected by Mayor Apanisile and reported complete in his first hundred days, now links its communities.",
		overviewHeading: "A finished road through a growing ward.",
		overviewParagraphs: ["Mayor Apanisile walked the Adamo–Araro Road while construction was still under way, alongside the council’s community development committee. Rep. Babajimi Benson facilitated the road. By the first hundred days the council reported it complete, serving Olorunda Primary and Secondary Schools and the homes along Adamo."],
		overviewNote: "Population, land area and CDA counts will be published once confirmed by the Budget and Planning department.",
		facilities: ["Adamo–Araro Road", "Olorunda Primary School", "Olorunda Secondary School"],
		projectsEyebrow: "Project records",
		projects: [
			{
				status: "Completed",
				category: "Roads",
				title: "Adamo–Araro Road",
				description: "Rep. Babajimi Benson facilitated the road. Mayor Apanisile inspected it during construction, and the council reported it complete in the first hundred days.",
				meta: "Completed November 2025",
			},
		],
		concern: true,
	},
	{
		slug: "erikorodo",
		name: "Erikorodo",
		image: figmaAssets.home.wardErikorodo,
		introduction: "Erikorodo is the ward of Council Leader Hon. Bose Benson Titilayo. At African Bethel Primary School, Mayor Apanisile commissioned clean water and new toilets for the pupils.",
		overviewHeading: "Clean water and toilets for African Bethel.",
		overviewParagraphs: ["On 30 September 2025 Mayor Apanisile commissioned a solar-powered borehole, an elevated tank and gender-friendly toilets at African Bethel Primary School. WaterAid delivered the work, and the same handover covered sister schools in Odogunyan. More than 4,500 pupils and staff were named as the first beneficiaries across the schools."],
		overviewNote: "Population and CDA counts will be published once confirmed.",
		facilities: ["African Bethel Primary School", "Solar water and sanitation works in primary schools"],
		projectsEyebrow: "Project records",
		projects: [
			{
				status: "Completed",
				category: "Education",
				title: "African Bethel Primary School water and sanitation",
				description: "A solar borehole, a 12,000-litre tank and new toilet cubicles were handed over by Mayor Apanisile with WaterAid on 30 September 2025.",
				meta: "Commissioned 30 September 2025",
			},
		],
		concern: true,
	},
	{
		slug: "agbala",
		name: "Agbala",
		image: figmaAssets.home.wardAgbala,
		introduction: "Agbala is linked to Apeka by completed box culverts. In July 2026 Mayor Apanisile flagged off High School Road, the next link for residents and businesses.",
		overviewHeading: "The culverts are in. The road has started.",
		overviewParagraphs: ["Box culverts linking Agbala to Apeka were completed in 2025, and the Mayor inspected the Apeka culvert on 28 October 2025. On the weekend of his first year in office he flagged off High School Road, Apeka, with Rep. Babajimi Benson beside him."],
		facilities: ["Apeka–Agbala box culverts", "High School Road, Apeka"],
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
				status: "Ongoing",
				category: "Roads",
				title: "High School Road, Apeka–Agbala",
				description: "Mayor Apanisile flagged off construction in July 2026 so residents and businesses in Apeka and Agbala can move more easily.",
				meta: "Flagged off July 2026",
			},
		],
		concern: true,
	},
];

export const getWard = (slug: string) => wards.find((ward) => ward.slug === slug);

export const wardNewsTitle = (name: string) => `Latest from ${name}`;

export const wardConcernTitle = (name: string) => `Have a concern in ${name}?`;
