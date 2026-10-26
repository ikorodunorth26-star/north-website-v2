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
	caption?: string;
	gallery?: FigmaAsset[];
	body: ArticleSection[];
};

export const featuredArticle: NewsArticle = {
	slug: "agbede-triplets",
	category: "HEALTH",
	filterGroup: "community",
	title: "Triplets welcomed at Agbede Health Centre",
	summary: "On 24 October 2026 Mrs Omowunmi Ameen Apanisile presented gifts to the family of triplets born at Agbede Health Centre.",
	date: "24 October 2026",
	readTime: "2 min read",
	image: reportImages.agbedeTripletsFamily,
	caption: "The Chairman’s delegation with the family of the triplets at Agbede Health Centre.",
	gallery: [reportImages.agbedeTripletsFamily, reportImages.agbedeTripletsDelegation, reportImages.agbedeTripletsVisit, reportImages.agbedeTripletsParents, reportImages.agbedeTripletsGift],
	body: [
		{
			paragraphs: [
				"On 24 October 2026 the Chairman’s office welcomed triplets at Agbede Health Centre. Mayor Ameen Olawale Ibrahim Apanisile was represented by Mrs Omowunmi Ameen Apanisile, who brought a cash gift and supplies for the newborns.",
				"Hon. Ogunbiyi Adedoyin, Supervisor for Health, and Hon. Bola Adaramola, Supervisor for Education, joined the visit. The delegation also spoke about the centre’s 24-hour service, so pregnant women, nursing mothers and newborns can be seen outside ordinary hours.",
				"The Chairman congratulated the parents and wished the mother and the babies health and strength.",
			],
		},
	],
};

const firstHundredDays: NewsArticle = {
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
		slug: "agbede-odogunyan-meetings",
		category: "COMMUNITY",
		filterGroup: "community",
		title: "Chairman holds community engagement meetings at Agbede and Odogunyan",
		summary: "On Saturday, 24 October 2026, Mayor Ameen Olawale Ibrahim Apanisile held separate community engagement meetings at Agbede and Odogunyan to receive feedback from residents, identify pressing needs, and discuss issues requiring government attention.",
		date: "24 October 2026",
		readTime: "5 min read",
		image: reportImages.agbedeMeetingBanner,
		caption: "Residents at the Agbede Joint CDA community engagement meeting on 24 October 2026.",
		gallery: [
			reportImages.agbedeMeetingBanner,
			reportImages.agbedeMeetingSpeaker,
			reportImages.agbedeMeetingTable,
			reportImages.agbedeMeetingAudience,
			reportImages.agbedeMeetingCrowd,
			reportImages.agbedeMeetingWomen,
			reportImages.agbedeMeetingMen,
			reportImages.agbedeMeetingTent,
			reportImages.agbedeMeetingHall,
			reportImages.agbedeMeetingResidents,
			reportImages.agbedeMeetingClose,
		],
		body: [
			{
				heading: "The meetings",
				paragraphs: [
					"The Executive Chairman of Ikorodu North LCDA, Mayor Ameen Olawale Ibrahim Apanisile, on Saturday, 24 October 2026, held separate community engagement meetings at Agbede and Odogunyan. He sat with residents to receive their feedback, identify pressing needs, and discuss the issues that require government attention.",
					"The two meetings were held apart so that each community could speak for itself. At Agbede, the gathering was the Agbede Joint CDA Community Engagement Meeting. At Odogunyan, residents met the Chairman on their own ground. In both places the purpose was the same: to hear the people directly, rather than decide for them from the secretariat.",
					"Residents and stakeholders made recommendations and identified priority areas for intervention. They set out the matters they want the council to take up, and they asked that those matters be treated as the work of government, not left as comments from a meeting.",
				],
			},
			{
				heading: "What was said",
				paragraphs: [
					"Speaking at the meetings, the APC candidate for the Lagos State House of Assembly, Ikorodu Constituency I, Hon. Toyin Gafar Bolowotan, commended Hon. Babajimi Benson for his infrastructural interventions across Ikorodu Division. He pointed to that record of work and called for stronger collaboration among elected representatives, so that the council, the constituency, and the division are pulling in the same direction for the people who live here.",
					"The Director of Strategy, Research and Statistics at the i-Care Foundation, Mayor Muhydeen (Deen) Sanwoola, urged elected representatives to improve service delivery and to provide meaningful democratic dividends. His charge was that public office should be felt in the daily life of residents, and that the benefit of representation should be real, not promised.",
				],
			},
			{
				heading: "The Chairman’s commitment",
				paragraphs: [
					"Mayor Apanisile reaffirmed his administration’s commitment to inclusive, people-oriented governance. He noted that the feedback from residents would guide policies, projects, and programmes across the LCDA. What was said at Agbede and at Odogunyan, he said, would shape what the council does next, not sit in a report.",
					"He also urged residents to participate actively in the electoral process and to support the APC to sustain development. The work already begun, he told them, depends on the people staying involved and on the party that is carrying that work being kept in place to finish it.",
				],
			},
			{
				heading: "Who was present",
				paragraphs: [
					"Present were the Deputy Mayor, Hon. Mathew Aliu Adesanya; the host Councillor, Hon. Babatunde Banjoko Oluwaseun (BBO); the Special Assistant on Information; the Supervisor for Health and Education, Hon. Adedoyin Jokotex; Hon. Bola Daramola; and the Senior Special Assistant on Health, Hon. Wale Adepitan. Political leaders, community stakeholders, and residents filled the meetings with them.",
					"The engagements reaffirmed the administration’s commitment to direct communication, community participation, and development driven by the needs of the people. Agbede and Odogunyan were heard on the same day, in their own communities, and the Chairman left both meetings with their recommendations in hand.",
				],
			},
		],
	},
	{
		slug: "lagos-east-apc-women-leaders",
		category: "COUNCIL NEWS",
		filterGroup: "council",
		title: "Chairman receives Lagos East APC women leaders",
		summary: "On Friday, 23 October 2026, Mayor Ameen Olawale Ibrahim Apanisile received All Progressives Congress women leaders from the Lagos East Senatorial District on a familiarisation and solidarity visit ahead of the forthcoming elections.",
		date: "23 October 2026",
		readTime: "5 min read",
		image: reportImages.womenLeadersGroup,
		caption: "Mayor Ameen Apanisile with the Lagos East APC women leaders at the council on 23 October 2026.",
		gallery: [
			reportImages.womenLeadersGroup,
			reportImages.womenLeadersChairman,
			reportImages.womenLeadersTable,
			reportImages.womenLeadersAddress,
			reportImages.womenLeadersSpeaker,
			reportImages.womenLeadersForum,
		],
		body: [
			{
				heading: "The visit",
				paragraphs: [
					"The Executive Chairman of Ikorodu North Local Council Development Area, Mayor Ameen Olawale Ibrahim Apanisile, on Friday, 23 October 2026, received a delegation of All Progressives Congress women leaders from the Lagos East Senatorial District. The visit was a familiarisation and solidarity call, made ahead of the forthcoming elections.",
					"The delegation was led by Dcn. Aderibigbe Wonuola Osinowo, JP, the Lagos East Senatorial District Women Leader. She brought the women leaders to the Council Chairman to strengthen political relationships, to discuss areas of mutual interest, and to express solidarity with the council leadership as the party prepares for the upcoming electoral exercise.",
				],
			},
			{
				heading: "What was discussed",
				paragraphs: [
					"The visit gave the Chairman and the women leaders time for constructive engagement. Their discussions centred on party unity, on grassroots participation, and on the vital role of women in party organisation and mobilisation. The leaders set out how women carry the party in the wards and communities, and how that work has to be recognised as the party goes into the elections.",
					"Their presence also underscored the importance of sustained consultation, collaboration, and cooperation among party stakeholders across the district. Lagos East was not treated as a distant structure. The women leaders came to Ikorodu North so that the council and the district women leadership could speak to each other directly.",
				],
			},
			{
				heading: "The Chairman’s welcome",
				paragraphs: [
					"Mayor Ameen Apanisile warmly welcomed the delegation. He acknowledged the contributions of women leaders to party organisation and to grassroots engagement, and he expressed his appreciation for the visit. He reiterated the importance of cooperation, of mutual understanding, and of a shared commitment to the party’s progress.",
					"He reaffirmed his commitment to party unity. The Chairman told the delegation that the council leadership and the women leaders of Lagos East have the same interest in a party that stays together, that listens at the grassroots, and that goes into the elections as one.",
				],
			},
			{
				heading: "What the visit affirmed",
				paragraphs: [
					"The visit further highlighted the value of engagement among party stakeholders in fostering cordial relationships and in strengthening collaboration at the grassroots level. A familiarisation call of this kind keeps the district women leadership and the council in conversation, rather than meeting only when an election is already at the door.",
					"Dcn. Aderibigbe Wonuola Osinowo, JP, and the women leaders left the Chairman with the solidarity of the Lagos East Senatorial District women leadership, and with a clear place in the consultation that will carry the party through the forthcoming elections.",
				],
			},
		],
	},
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
	firstHundredDays,
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
