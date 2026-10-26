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
	description: "Your council, the five wards, and the story of Ikorodu North.",
};

export const aboutIntroduction = {
	heading: "A place to belong.\nA future we build together.",
	paragraphs: [
		"Ikorodu North lies in the north-east of Ikorodu Division, beside Ikorodu Central, Ikorodu West, Imota and Sagamu in Ogun State. The secretariat is at Isiu, on the road between Lagos and Ogun.",
		"The five wards are Isiu, Odogunyan, Olorunda, Erikorodo and Agbala. Mayor Ameen Olawale Ibrahim Apanisile has led the council since July 2025, after eight years as Vice Chairman. Hon. Mathew Aliu Adesanya serves with him.",
	],
	image: figmaAssets.news.councilArchive,
	caption: "IKORODU NORTH LCDA  /  COUNCIL HEADQUARTERS",
};

export const aboutImpact = {
	eyebrow: "Ikorodu North at a glance",
	title: "Our place",
	description: "Four figures from the council’s own record.",
	stats: [
		{ value: 5, label: "Wards" },
		{ value: 300, suffix: "+", label: "Community development areas" },
		{ value: 10, label: "Joint community development areas" },
		{ value: 2003, label: "Year the LCDA was created" },
	],
};

export const aboutHistory: { heading: string; introduction: string; chapters: AboutChapter[] } = {
	heading: "Our story,\nstill being written.",
	introduction: "The council dates from 2003. The towns are older.",
	chapters: [
		{
			number: "01",
			title: "Community roots",
			paragraphs: [
				"Ikorodu became a division in 1968 and a local government in 1976. Isiu, Odogunyan, Olorunda, Erikorodo and Agbala grew inside that older Ikorodu. Oba David Kayode Raji, Olupejobi II, the Eweye of Isiu, keeps its customs with the baales. Eweye Day is the yearly gathering in Isiu.",
			],
		},
		{
			number: "02",
			title: "Government closer to home",
			paragraphs: ["In 2003 Lagos cut Ikorodu North from Ikorodu Local Government and set the headquarters at Isiu. The Executive Chairman leads. Councillors represent the wards. The council’s record names those who have held the chair:"],
			points: [
				"Mayor Ameen Olawale Ibrahim Apanisile, incumbent Executive Chairman",
				"Dr. Adebisi Adeola Banjo, Executive Secretary, then Executive Chairman",
				"Sukurat Oke-Owo, Sole Administrator",
				"Hon. Muyideen Adeola Jokomba, Executive Chairman",
				"Mr. Kamoru Keshinro, Executive Secretary",
				"Hon. Kunle Ogunbela, pioneer Executive Chairman",
			],
		},
		{
			number: "03",
			title: "The next chapter",
			paragraphs: [
				"Residents elected Ameen Apanisile on 12 July 2025. He polled 13,844 votes, took office later that month, and received the handover from Builder Adeola Banjo. Hon. Mathew Aliu Adesanya is Vice Chairman.",
				"His priorities are infrastructure, healthcare, education, sanitation, security, opportunity for young people and small businesses, and an open council.",
			],
		},
	],
};

export const aboutCommunity = {
	heading: "Our people make\nthe difference.",
	paragraphs: ["More than 300 community development associations, in 10 joint bodies, carry the streets between elections. The council’s aim is an open administration that puts residents first."],
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
