import { figmaAssets, type FigmaAsset } from "./figma-assets";

export const councilFacebookUrl = "https://www.facebook.com/profile.php?id=61578369553900";

export const projectsPage = {
	label: "Community Projects",
	title: "Projects",
	description: "A record of council projects across Ikorodu North: infrastructure, health, environment and community programmes, with their current status.",
};

export type CouncilProject = {
	slug: string;
	title: string;
	summary: string;
	date: string;
	location: string;
	category: string;
	image: FigmaAsset;
	gallery: FigmaAsset[];
	paragraphs: string[];
};

export const projects: CouncilProject[] = [
	{
		slug: "solar-water-irepodun-arobiona-agbede",
		title: "Solar water in Irepodun, Arobiona and Agbede",
		summary: "Mayor Ameen Apanisile commissioned solar-powered water facilities in three communities, and an inclusive toilet at Farm Settlement Primary School.",
		date: "26 March 2026",
		location: "Irepodun, Arobiona and Agbede",
		category: "Water & sanitation",
		image: figmaAssets.news.solarPoweredWaterProject,
		gallery: [
			figmaAssets.news.solarPoweredWaterProject,
			figmaAssets.news.communityProjectDelivery,
			figmaAssets.news.communityTour,
			figmaAssets.news.neighbourhoodPriorities,
		],
		paragraphs: [
			"On 26 March 2026, Mayor Ameen Olawale Ibrahim Apanisile commissioned and handed over solar-powered water and sanitation facilities at Farm Settlement Primary School and in Irepodun, Arobiona and Agbede.",
			"The facilities were delivered with WaterAid Nigeria, with support from Microsoft, and with the Lagos State Government. They are meant to improve access to clean water and sanitation in the communities that received them.",
			"WaterAid set up a water, sanitation and hygiene committee in each of the three communities, and strengthened an environmental health club at the school, so residents and the school can look after the facilities.",
			"The Chairman said potable water is a priority for the administration, and that solar power is there to keep the supply running at a lower cost. He asked residents to protect the facilities. Reports of the commissioning say no fewer than 54,000 residents are expected to benefit.",
		],
	},
	{
		slug: "omigo-solar-water-facility",
		title: "Omigo solar-powered water facility",
		summary: "A 20,000-litre solar borehole, treatment unit and two water kiosks now serve about 1,200 residents in Omigo.",
		date: "July 2026",
		location: "Omigo",
		category: "Water",
		image: figmaAssets.news.communityProjectDelivery,
		gallery: [
			figmaAssets.news.communityProjectDelivery,
			figmaAssets.news.solarPoweredWaterProject,
			figmaAssets.news.communityTour,
			figmaAssets.news.neighbourhoodPriorities,
		],
		paragraphs: [
			"In July 2026, WaterAid Nigeria inaugurated a 20,000-litre solar-powered motorised borehole, a water treatment unit and two water kiosks in Omigo.",
			"The facility is part of the WASH Improvement Plus project, funded by the PepsiCo Foundation. It is expected to give about 1,200 residents a clean and reliable water supply.",
			"A water, sanitation and hygiene committee in Omigo oversees day-to-day operation and maintenance. Mayor Ameen Apanisile said the council will step in when a fault is beyond what the community committee can handle, and he asked residents to protect the facility.",
		],
	},
	{
		slug: "maya-schools-wash-facilities",
		title: "WASH facilities at Maya community schools",
		summary: "Maya Junior and Senior Community Grammar Schools received a 20,000-litre solar water facility, toilets and handwashing points for about 2,500 students and staff.",
		date: "23 September 2026",
		location: "Maya",
		category: "Education",
		image: figmaAssets.news.neighbourhoodPriorities,
		gallery: [
			figmaAssets.news.neighbourhoodPriorities,
			figmaAssets.news.communityTour,
			figmaAssets.news.communityProjectDelivery,
			figmaAssets.news.solarPoweredWaterProject,
		],
		paragraphs: [
			"On 23 September 2026, WaterAid Nigeria handed over water, sanitation and hygiene facilities at Maya Junior and Senior Community Grammar Schools.",
			"The facilities, funded by The Church of Jesus Christ of Latter-day Saints, include a 20,000-litre solar-powered water facility, gender-friendly toilets, group handwashing stations and drinking-water points. WaterAid said they should serve about 2,500 students and staff.",
			"Mayor Ameen Apanisile thanked the partners at the handover and noted that they have been working in the community since 2022. The school principals were asked to keep the facilities in use for the students.",
		],
	},
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const getRelatedProjects = (slug: string) => projects.filter((project) => project.slug !== slug);
