import { figmaAssets } from "./figma-assets";

export type AboutChapter = {
	number: string;
	title: string;
	paragraphs: string[];
	points?: string[];
};

export const aboutPage = {
	label: "Our Story",
	title: "About Ikorodu\nNorth LCDA",
	description: "Get to know your council, the communities it serves and the shared story of Ikorodu North Local Council Development Area.",
};

export const aboutIntroduction = {
	heading: "A place to belong.\nA future we build together.",
	paragraphs: [
		"Ikorodu North LCDA lies in the north-eastern part of Ikorodu Division. It shares boundaries with Ikorodu Central, Ikorodu West LCDA, Imota LCDA, and Sagamu in Ogun State. The secretariat is at Isiu, one of the older settlements in the area, on the road that carries people and goods between Lagos and Ogun State.",
		"The council serves five wards: Isiu, where the headquarters stands, Odogunyan, Olorunda, Erikorodo and Agbala. Around them are towns and villages with their own traditional leadership, including Adamo, Agbede, and the farm settlements at Erikorodo and Odogunyan. The council records more than 300 community development associations and 10 joint community development associations across those places.",
		"Mayor Ameen Olawale Ibrahim Apanisile has led the council since July 2025. He was Vice Chairman for eight years before residents elected him Executive Chairman. With him is Vice Chairman Mathew Aliu Adesanya. The work of the council is to connect those communities with local government: roads, health, education, sanitation, security, and the everyday services people come to the secretariat to find.",
	],
	image: figmaAssets.news.councilArchive,
	caption: "IKORODU NORTH LCDA  /  COUNCIL HEADQUARTERS",
};

export const aboutImpact = {
	eyebrow: "Ikorodu North at a glance",
	title: "Our place",
	description: "Measuring the progress we have made in service of the people of Ikorodu North.",
	stats: [
		{ value: 5, label: "Wards" },
		{ value: 300, suffix: "+", label: "Community development areas" },
		{ value: 10, label: "Joint community development areas" },
		{ value: 2003, label: "Year the LCDA was created" },
	],
};

export const aboutHistory: { heading: string; introduction: string; chapters: AboutChapter[] } = {
	heading: "Our story,\nstill being written.",
	introduction:
		"Ikorodu North is young as a council and old as a place. Its communities were part of Ikorodu long before Lagos carved out a council of their own in 2003.",
	chapters: [
		{
			number: "01",
			title: "Community roots",
			paragraphs: [
				"The wider Ikorodu area was administered with Lagos through the colonial years. Historians of the district place that administration between 1894 and 1954, through a native authority, a native court and a native treasury. Ikorodu became a division in 1968 and a local government area in 1976. The towns that are now Ikorodu North grew inside that older Ikorodu.",
				"Isiu, the headquarters, is a traditional settlement on the Lagos–Ogun corridor. Odogunyan grew into an industrial town. Olorunda, Erikorodo, Agbala, Adamo and Agbede kept a stronger tie to farming, trade and family land. Each community kept its own traditional structure. The Oba of Isiu, His Royal Majesty Oba David Kayode Raji, Olupejobi II, is a custodian of that heritage, together with the baales and community leaders across the wards.",
				"The culture is Yoruba. In Isiu, Eweye Day is kept each year as a gathering for unity and community development. Other annual events across the wards do the same work: they bring residents home, honour custom, and give the council a public life that is older than any administration.",
			],
		},
		{
			number: "02",
			title: "Government closer to home",
			paragraphs: [
				"In 2003 the Lagos State Government created Local Council Development Areas from the existing local governments, so that administration would reach communities that had outgrown a single council. In Ikorodu Division that decision, backed by a memorandum signed by the traditional rulers of Ikorodu, Igbogbo, Ijede and Imota and by political leaders of the division, produced five LCDAs alongside Ikorodu Local Government: Ikorodu North, Ikorodu West, Igbogbo/Bayeku, Ijede and Imota.",
				"Ikorodu North was cut from Ikorodu Local Government and given its headquarters at Isiu. Since then it has been led by elected chairmen, executive secretaries, a sole administrator and caretaker arrangements appointed by Lagos State. The Executive Chairman is the chief executive. Councillors represent the wards. A council manager coordinates the administrative departments, including administration and human resources, works and infrastructure, budget and planning, agriculture, environment, health and education.",
				"The council’s own record names the people who have held the chair:",
			],
			points: [
				"Hon. Kunle Ogunbela, pioneer Executive Chairman",
				"Mr. Kamoru Keshinro, Executive Secretary",
				"Hon. Muyideen Adeola Jokomba, Executive Chairman",
				"Sukurat Oke-Owo, Sole Administrator",
				"Dr. Adebisi Adeola Banjo, who served first as Executive Secretary and then as Executive Chairman",
				"Mayor Ameen Olawale Ibrahim Apanisile, incumbent Executive Chairman",
			],
		},
		{
			number: "03",
			title: "The next chapter",
			paragraphs: [
				"On 12 July 2025 residents elected Ameen Apanisile chairman. The returning officer declared the result at the Isiu secretariat: he polled 13,844 votes. He took office later that month, received the handover from Builder Adeola Banjo, and inaugurated the sixth legislative council. Hon. Mathew Aliu Adesanya serves with him as Vice Chairman.",
				"His stated work is the work he set out before the election and repeated on taking office: internally generated revenue, infrastructure, economic empowerment, education and skills, and a government that brings residents into the decisions. That sits beside the priorities he has named in office: infrastructure, healthcare, education, sanitation, security, opportunity for young people and small businesses, and an open, accountable council.",
				"The place those decisions have to serve is both industrial and rural. The Odogunyan Industrial Estate holds African Steel Mills, Lucky Fibres, PZ and many smaller firms. Farming, poultry and produce markets continue in Isiu, Adamo, Erikorodo, Agbala and Agbede. Lagos State University of Science and Technology stands in the council area, with public primary and secondary schools across the wards. The 174 Battalion of the Nigerian Army is at Odogunyan, alongside the police and other agencies that work in the communities.",
				"The next chapter is not only the council’s. It depends on residents, traditional rulers, community associations, schools and businesses using the secretariat, following the projects, and saying what their street still needs.",
			],
		},
	],
};

export const aboutCommunity = {
	heading: "Our people make\nthe difference.",
	paragraphs: [
		"From families and traders to factory workers, students and community associations, Ikorodu North is carried by the people who live in it. More than 300 community development associations, gathered into 10 joint bodies, are how streets organise themselves between elections.",
		"The council’s stated aim is an honest and open administration that takes the needs of those residents first: local resources, partnerships, and services close enough to use. Follow the projects and the conversations that connect the secretariat with the wards.",
	],
	cta: "Explore news",
	href: "/news",
	image: figmaAssets.news.councilArchive,
};

export const aboutRelated = {
	eyebrow: "Know your council",
	title: "More about your local government",
	links: [
		{
			title: "Legislative Members",
			description: "Meet the councillors who represent our wards.",
			href: "/government/legislative-house",
		},
		{
			title: "Management Team",
			description: "Meet the team that runs council administration.",
			href: "/government/management-team",
		},
		{
			title: "Departments",
			description: "Find the right office for the service you need.",
			href: "/government/departments",
		},
	],
};
