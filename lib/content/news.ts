import type { FigmaAsset } from "./figma-assets";
import { reportImages } from "./report-images";

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

export const featuredArticle: NewsArticle = {
	slug: "first-100-days",
	category: "FEATURED / FIRST 100 DAYS",
	filterGroup: "council",
	title: "First 100 days: the New Deal record at Isiu",
	summary: "On 18 November 2025 Mayor Ameen Apanisile set out what the first hundred days had delivered, from Odo-Nla to the Iranlowo Owo Apa programme.",
	date: "18 November 2025",
	readTime: "5 min read",
	image: reportImages.hundredDays,
	body: [
		{
			paragraphs: [
				"Mayor Ameen Olawale Ibrahim Apanisile used the first-hundred-days gathering at Isiu to set out the New Deal: infrastructure, healthcare, education, sanitation, and a council that residents can reach.",
				"He came to the office after eight years as Vice Chairman. The record he read out was the work done since he took office in late July 2025.",
			],
		},
		{
			heading: "What was commissioned",
			paragraphs: [
				"At Odo-Nla he commissioned staff quarters, a maternal waiting hall, an area office and a new ambulance, so the health centre can keep care going beyond the working day.",
				"The council also renewed the Marriage Registry and the CDC house, and opened a reception and conference room at the chairman’s office.",
				"The Apeka–Agbala link, including its box culverts, was reported complete. Traders, artisans, young people, elders and vulnerable residents received ₦100,000 each under Iranlowo Owo Apa.",
			],
		},
		{
			heading: "Work still moving",
			paragraphs: [
				"He named roads still to be taken forward, including Radio–Eruwen Road, Abiodun Ogunleye Drive, Oju Emuren Road, Francis Okon–Oluwaseun Road and Ebuwawa Road.",
				"WaterAid work was already under way at African Bethel Primary School, Zumratul Islamiyyah, Idera, Agbodo Alara and Farm Settlement Primary School. A free medical outreach had reached more than 500 people, with cervical and prostate screening for more than 200.",
			],
		},
	],
};

export const newsArticles: NewsArticle[] = [
	{
		slug: "apeka-road-army-school-flagoff",
		category: "INFRASTRUCTURE",
		filterGroup: "projects",
		title: "High School Road, Apeka, and Army Children School flagged off",
		summary: "In July 2026 the council flagged off High School Road in Apeka and reconstruction of Army Children Primary School at Losi-Onikoko.",
		date: "26 July 2026",
		readTime: "3 min read",
		image: reportImages.apekaFlagoff,
		body: [
			{
				paragraphs: [
					"Mayor Ameen Apanisile joined Rep. Babajimi Benson to flag off High School Road, Apeka, in the first year of the administration. The same programme covered reconstruction of Army Children Primary School at Losi-Onikoko, by 174 Battalion.",
					"Both works were marked as ongoing from the flag-off. The road is the council’s own first-year project. The school rebuild sits beside the battalion community in Odogunyan.",
				],
			},
		],
	},
	{
		slug: "igbaga-classroom-blocks",
		category: "EDUCATION",
		filterGroup: "projects",
		title: "Six classroom blocks commissioned at Igbaga",
		summary: "On 8 April 2026 the Chairman commissioned six classroom blocks at Igbaga, facilitated by Rep. Babajimi Benson.",
		date: "8 April 2026",
		readTime: "3 min read",
		image: reportImages.classroomsIgbaga,
		body: [
			{
				paragraphs: [
					"On Wednesday 8 April 2026, Mayor Ameen Apanisile commissioned six blocks of classrooms at Igbaga. He thanked Rep. Babajimi Benson for facilitating the buildings, and the landowners who released the land.",
					"He described the classrooms as a public alternative to costly private schools, and asked parents to use them so fewer children stay out of school. He also asked residents to register, validate or replace their voter cards while the exercise was open.",
				],
			},
		],
	},
	{
		slug: "four-solar-water-facilities",
		category: "WATER & SANITATION",
		filterGroup: "projects",
		title: "Four solar water facilities handed over",
		summary: "On 26 March 2026 the Chairman commissioned solar water and sanitation facilities at Farm Settlement Primary School and in Irepodun, Arobiona and Agbede.",
		date: "26 March 2026",
		readTime: "3 min read",
		image: reportImages.fourWaterFacilities,
		body: [
			{
				paragraphs: [
					"Mayor Ameen Apanisile commissioned and handed over the facilities with WaterAid Nigeria, with support from Microsoft and the Lagos State Government. WaterAid formed a water and sanitation committee in each of the three communities, and an environmental health club at the school.",
					"Reports of the handover say no fewer than 54,000 residents are expected to benefit. The Chairman asked residents to protect the facilities, and said solar power is meant to keep the supply running at a lower cost.",
					"The same partnership later added a 20,000-litre solar borehole, treatment unit and two kiosks in Omigo, and facilities for about 2,500 students and staff at Maya Junior and Senior Community Grammar Schools.",
				],
			},
		],
	},
	{
		slug: "odonla-health-centre",
		category: "HEALTH",
		filterGroup: "projects",
		title: "Odo-Nla health centre reopened for longer care",
		summary: "Staff quarters, a maternal waiting hall, an area office and a new ambulance were commissioned at Odo-Nla in the first 100 days.",
		date: "18 November 2025",
		readTime: "4 min read",
		image: reportImages.odonlaPhc,
		body: [
			{
				paragraphs: [
					"The first-hundred-days programme commissioned staff quarters at Odo-Nla Primary Health Centre, a renovated maternal waiting hall, the area office and a new ambulance.",
					"Prince Abiodun Ogunleye, HRM Oba David Raji, the Eweye of Isiu, and a representative of the Permanent Secretary for Health District II joined the Chairman at the commissioning.",
					"The quarters are meant to support care outside ordinary hours. The ambulance gives the council a vehicle for emergency response. A free outreach at the same period reached more than 500 people.",
				],
			},
		],
	},
	{
		slug: "iranlowo-owo-apa",
		category: "COMMUNITY",
		filterGroup: "community",
		title: "Iranlowo Owo Apa: ₦100,000 for traders and households",
		summary: "Artisans, small businesses, young people, elders and vulnerable residents each received ₦100,000 under the empowerment programme.",
		date: "18 November 2025",
		readTime: "3 min read",
		image: reportImages.empowermentCheques,
		body: [
			{
				paragraphs: [
					"Iranlowo Owo Apa was launched at the first-hundred-days gathering. Beneficiaries drawn from communities across Ikorodu North each received ₦100,000.",
					"The list covered small-scale business owners, artisans, young people, elders and vulnerable residents. The Chairman presented it as direct support while larger roads, schools and health works continue.",
				],
			},
		],
	},
	{
		slug: "october-project-inspection",
		category: "PROJECTS",
		filterGroup: "projects",
		title: "Chairman’s October inspection of roads, water and the registry",
		summary: "On 28 October 2025 Mayor Apanisile inspected the marriage registry, the Apeka culvert, Oju Emuren–Agbede and works at Odo-Nla.",
		date: "28 October 2025",
		readTime: "3 min read",
		image: reportImages.drainageWorks,
		body: [
			{
				paragraphs: [
					"The 28 October 2025 tour took in the renovated marriage registry, area offices around the LASTMA yard, the Apeka culvert, and the Oju Emuren–Agbede road.",
					"At Odo-Nla the team looked at the children’s consultation ground, the area-office health centre and the doctor’s residence. The tour also stopped at water works for Agbodo Alara school.",
					"The Apeka–Agbala culverts were already in the completed list from the first hundred days. Oju Emuren–Agbede had been flagged off the same month with Senator Tokunbo Abiru.",
				],
			},
		],
	},
	{
		slug: "wateraid-school-handover",
		category: "WATER & SANITATION",
		filterGroup: "projects",
		title: "WaterAid hands over school water and toilets",
		summary: "On 30 September 2025 solar boreholes, tanks and toilets were handed over at schools in Odogunyan and Erikorodo.",
		date: "30 September 2025",
		readTime: "3 min read",
		image: reportImages.schoolWaterTank,
		body: [
			{
				paragraphs: [
					"The 30 September 2025 handover covered Zumratul Islamiyyah and Idera Community Primary School in Odogunyan, and African Bethel Primary School in Erikorodo. Each site received a solar borehole, an elevated tank and toilets.",
					"Idera’s tanks carried the commissioning date on the banner. More than 4,500 pupils and staff were named as the first beneficiaries across the schools.",
					"The Chairman has since commissioned a further round, on 26 March 2026, at Farm Settlement Primary School and in Irepodun, Arobiona and Agbede.",
				],
			},
		],
	},
	{
		slug: "adamo-araro-road-inspection",
		category: "ROADS",
		filterGroup: "projects",
		title: "Chairman inspects Adamo–Araro Road",
		summary: "Rep. Babajimi Benson facilitated Adamo–Araro Road. On 1 August 2025 the Chairman inspected it at about 80 percent, and the hundred-days account later reported it complete.",
		date: "1 August 2025",
		readTime: "3 min read",
		image: reportImages.adamoRoad,
		body: [
			{
				paragraphs: [
					"Adamo–Araro Road was facilitated by Rep. Babajimi Benson for Olorunda. Mayor Ameen Apanisile inspected the work on 1 August 2025, when reports put it at about 80 percent.",
					"By the first-hundred-days account in November 2025, the road was reported complete. The inspection photographs show the paved carriageway and the trucks still on site.",
				],
			},
		],
	},
	{
		slug: "chairman-assumes-office",
		category: "COUNCIL NEWS",
		filterGroup: "council",
		title: "Mayor Apanisile assumes office with the 6th Legislative Council",
		summary: "On 28 July 2025 Hon. Ameen Olawale Apanisile was sworn in as Executive Chairman, and the 6th Legislative Council took its oath at Isiu.",
		date: "28 July 2025",
		readTime: "3 min read",
		image: reportImages.assumesOffice,
		body: [
			{
				paragraphs: [
					"The handover followed the July 2025 election. Builder Adeola Banjo left the chair, and Hon. Ameen Olawale Ibrahim Apanisile, Mayor of Ikorodu North, took the oath after eight years as Vice Chairman.",
					"The same day the 6th Legislative Council was inaugurated at the secretariat in Isiu. Hon. Mathew Aliu Adesanya serves as Vice Chairman.",
				],
			},
		],
	},
];

export const allNewsArticles = [featuredArticle, ...newsArticles];

export const newsCategories = [
	{ label: "All updates", value: "all" },
	{ label: "Council", value: "council" },
	{ label: "Projects", value: "projects" },
	{ label: "Community", value: "community" },
] as const;

export type NewsCategoryValue = (typeof newsCategories)[number]["value"];

export const getArticleHref = (slug: string) => `/news/${slug}`;

export const getArticle = (slug: string) => allNewsArticles.find((article) => article.slug === slug);

export const getRelatedArticles = (slug: string, limit = 3) => allNewsArticles.filter((article) => article.slug !== slug).slice(0, limit);
