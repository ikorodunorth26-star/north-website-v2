import { figmaAssets, type FigmaAsset } from "./figma-assets";
import { reportImages } from "./report-images";

export const councilFacebookUrl = "https://www.facebook.com/profile.php?id=61578369553900";

export const projectsPage = {
	label: "Community Projects",
	title: "Projects",
	description: "A record of council projects across Ikorodu North: infrastructure, health, education and water, with their current status.",
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
		slug: "odonla-primary-health-centre",
		title: "Odo-Nla health centre, area office and ambulance",
		summary: "Staff quarters, a maternal waiting hall, an area office and a new ambulance were commissioned at Odo-Nla in the first 100 days.",
		date: "18 November 2025",
		location: "Odo-Nla",
		category: "Health",
		image: reportImages.odonlaPhc,
		gallery: [reportImages.odonlaPhc, reportImages.odonlaOffice, reportImages.ambulance, reportImages.healthOutreach],
		paragraphs: [
			"In the first hundred days, Mayor Ameen Apanisile commissioned staff quarters at Odo-Nla Primary Health Centre, a renovated maternal waiting hall, the area office and a new ambulance.",
			"Prince Abiodun Ogunleye, HRM Oba David Raji, the Eweye of Isiu, and a representative of the Permanent Secretary for Health District II joined the commissioning.",
			"The quarters are meant to support care outside ordinary hours. A free medical outreach in the same period reached more than 500 people, with cervical and prostate screening for more than 200.",
			"On 28 October 2025 the Chairman returned to inspect the children’s consultation ground, the area-office health centre and the doctor’s residence.",
		],
	},
	{
		slug: "solar-water-irepodun-arobiona-agbede",
		title: "Solar water in Irepodun, Arobiona and Agbede",
		summary: "Mayor Ameen Apanisile commissioned solar-powered water facilities in three communities, and an inclusive toilet at Farm Settlement Primary School.",
		date: "26 March 2026",
		location: "Irepodun, Arobiona and Agbede",
		category: "Water & sanitation",
		image: reportImages.fourWaterFacilities,
		gallery: [reportImages.fourWaterFacilities, reportImages.schoolWaterTank, reportImages.schoolSanitation, reportImages.schoolWaterGroup],
		paragraphs: [
			"On 26 March 2026, Mayor Ameen Olawale Ibrahim Apanisile commissioned and handed over solar-powered water and sanitation facilities at Farm Settlement Primary School and in Irepodun, Arobiona and Agbede.",
			"The facilities were delivered with WaterAid Nigeria, with support from Microsoft, and with the Lagos State Government. WaterAid set up a water and sanitation committee in each of the three communities, and an environmental health club at the school.",
			"The Chairman said potable water is a priority, and that solar power is there to keep the supply running at a lower cost. Reports of the commissioning say no fewer than 54,000 residents are expected to benefit.",
			"The gallery includes the council’s commissioning card and photographs from the earlier WaterAid school handover on 30 September 2025, the same partnership.",
		],
	},
	{
		slug: "school-water-sanitation-2025",
		title: "School water and toilets with WaterAid",
		summary: "On 30 September 2025 solar boreholes, elevated tanks and toilets were handed over at schools in Odogunyan and Erikorodo.",
		date: "30 September 2025",
		location: "Odogunyan and Erikorodo",
		category: "Water & sanitation",
		image: reportImages.schoolWaterTank,
		gallery: [reportImages.schoolWaterTank, reportImages.schoolWaterGroup, reportImages.schoolSanitation, reportImages.fourWaterFacilities],
		paragraphs: [
			"The 30 September 2025 handover covered Zumratul Islamiyyah and Idera Community Primary School in Odogunyan, and African Bethel Primary School in Erikorodo.",
			"Each site received a solar borehole, an elevated tank and toilets. The tanks at Idera carried the commissioning date. More than 4,500 pupils and staff were named as the first beneficiaries.",
			"A further round followed on 26 March 2026 at Farm Settlement Primary School and in Irepodun, Arobiona and Agbede.",
		],
	},
	{
		slug: "adamo-araro-road",
		title: "Adamo–Araro Road",
		summary: "Rep. Babajimi Benson facilitated the road. The Chairman inspected it in August 2025, and the hundred-days account reported it complete.",
		date: "1 August 2025",
		location: "Olorunda",
		category: "Roads",
		image: reportImages.adamoRoad,
		gallery: [reportImages.adamoRoad, reportImages.roadInspection],
		paragraphs: [
			"Adamo–Araro Road was facilitated by Rep. Babajimi Benson. Mayor Ameen Apanisile inspected the work on 1 August 2025, when published reports put it at about 80 percent.",
			"The first-hundred-days account in November 2025 listed the road among completed works. The photographs show the paved carriageway during that inspection.",
		],
	},
	{
		slug: "apeka-road-and-army-school",
		title: "High School Road, Apeka, and Army Children School",
		summary: "In July 2026 the council flagged off High School Road in Apeka and reconstruction of Army Children Primary School at Losi-Onikoko.",
		date: "26 July 2026",
		location: "Apeka and Losi-Onikoko",
		category: "Roads",
		image: reportImages.apekaFlagoff,
		gallery: [reportImages.apekaFlagoff, reportImages.apekaRoad],
		paragraphs: [
			"Mayor Ameen Apanisile flagged off High School Road, Apeka, with Rep. Babajimi Benson present. The road is a first-year work of the administration and remains ongoing from the flag-off.",
			"The same programme flagged off reconstruction of Army Children Primary School at Losi-Onikoko, beside 174 Battalion. Both sites were photographed at the flag-off, including the grader on the laterite road.",
		],
	},
	{
		slug: "apeka-agbala-culverts",
		title: "Apeka–Agbala link and culverts",
		summary: "Box culverts on the Apeka–Agbala link were completed in 2025. The Chairman inspected the Apeka culvert on 28 October 2025.",
		date: "28 October 2025",
		location: "Apeka and Agbala",
		category: "Roads",
		image: reportImages.drainageWorks,
		gallery: [reportImages.drainageWorks, reportImages.roadInspection, reportImages.apekaRoad],
		paragraphs: [
			"The first-hundred-days account listed the link between Apeka and Agbala, including its box culverts, among completed works.",
			"On 28 October 2025 Mayor Ameen Apanisile inspected the Apeka culvert as part of a wider tour that also took in the marriage registry, Oju Emuren–Agbede and Odo-Nla.",
			"The drainage photograph is from that inspection. High School Road, Apeka, was flagged off later, in July 2026.",
		],
	},
	{
		slug: "igbaga-classroom-blocks",
		title: "Six classroom blocks at Igbaga",
		summary: "On 8 April 2026 the Chairman commissioned six classroom blocks at Igbaga, facilitated by Rep. Babajimi Benson.",
		date: "8 April 2026",
		location: "Igbaga",
		category: "Education",
		image: reportImages.classroomsIgbaga,
		gallery: [reportImages.classroomsIgbaga],
		paragraphs: [
			"On 8 April 2026 Mayor Ameen Apanisile commissioned six blocks of classrooms at Igbaga. He credited Rep. Babajimi Benson with facilitating the buildings, and thanked the landowners who released the land.",
			"He asked families to use the classrooms as a public alternative to costly private schools. The council’s commissioning card shows the new block, the pupils and the gathering.",
		],
	},
	{
		slug: "omigo-solar-water-facility",
		title: "Omigo solar-powered water facility",
		summary: "A 20,000-litre solar borehole, treatment unit and two water kiosks now serve about 1,200 residents in Omigo.",
		date: "July 2026",
		location: "Omigo",
		category: "Water",
		image: figmaAssets.news.solarPoweredWaterProject,
		gallery: [figmaAssets.news.solarPoweredWaterProject, reportImages.schoolWaterTank],
		paragraphs: [
			"In July 2026, WaterAid Nigeria inaugurated a 20,000-litre solar-powered motorised borehole, a water treatment unit and two water kiosks in Omigo.",
			"The facility is part of the WASH Improvement Plus project, funded by the PepsiCo Foundation. It is expected to give about 1,200 residents a clean and reliable water supply.",
			"A water and sanitation committee in Omigo oversees day-to-day operation. Mayor Ameen Apanisile said the council will step in when a fault is beyond what the committee can handle.",
		],
	},
	{
		slug: "maya-schools-wash-facilities",
		title: "WASH facilities at Maya community schools",
		summary: "Maya Junior and Senior Community Grammar Schools received a 20,000-litre solar water facility, toilets and handwashing points for about 2,500 students and staff.",
		date: "23 September 2026",
		location: "Maya",
		category: "Education",
		image: reportImages.schoolWaterGroup,
		gallery: [reportImages.schoolWaterGroup, reportImages.schoolSanitation, reportImages.schoolWaterTank],
		paragraphs: [
			"On 23 September 2026, WaterAid Nigeria handed over water, sanitation and hygiene facilities at Maya Junior and Senior Community Grammar Schools.",
			"The facilities, funded by The Church of Jesus Christ of Latter-day Saints, include a 20,000-litre solar-powered water facility, gender-friendly toilets, group handwashing stations and drinking-water points. WaterAid said they should serve about 2,500 students and staff.",
			"Mayor Ameen Apanisile thanked the partners and noted that they have been working in the community since 2022. The photographs in the gallery are from the September 2025 school commissioning under the same partnership.",
		],
	},
];

export const projectCategories = [
	{ label: "All projects", value: "all" },
	{ label: "Health", value: "Health" },
	{ label: "Water & sanitation", value: "Water & sanitation" },
	{ label: "Water", value: "Water" },
	{ label: "Roads", value: "Roads" },
	{ label: "Education", value: "Education" },
] as const;

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const getRelatedProjects = (slug: string) => projects.filter((project) => project.slug !== slug);
