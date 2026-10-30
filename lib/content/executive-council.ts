import { figmaAssets, type FigmaAsset } from "./figma-assets";

export type ExecutiveMember = {
	name: string;
	role: string;
	image: FigmaAsset;
};

export const executiveCouncilPage = {
	label: "Leadership",
	title: "Executive Council",
	description: "Meet the executive leadership guiding policy, coordinating council services and working for the people of Ikorodu North.",
};

export const executiveOffice = {
	heading: "Office of the Executive Chairman",
	introduction: "After eight years as Vice Chairman, Mayor Ameen Apanisile now leads the New Deal from the secretariat at Isiu.",
	name: "Mayor Ameen Olawale Ibrahim Apanisile",
	role: "Executive Chairman",
	image: figmaAssets.government.chairman,
	briefLabel: "Chairman’s Brief",
	statement: "We are delivering\nnot just projects, but impact.",
	paragraphs: [
		"A town planner, he was elected Executive Chairman in July 2025 to give Ikorodu North a New Deal in roads, care, schools and open government.",
		"His first hundred days renewed care at Odo-Nla, backed traders and young people through Iranlowo Owo Apa, and linked Apeka with Agbala.",
	],
	email: "chairman@ikorodunorthlcda.lg.gov.ng",
	phone: "+234 801 000 0000",
	phoneHref: "tel:+2348010000000",
	profileLabel: "View profile",
};

export const executiveDirectory = {
	title: "Meet your council.",
	description: "Meet the leaders supporting executive coordination and the day-to-day work of the council.",
	members: [
		{
			name: "Hon. Adesanya Mathew Aliu",
			role: "Vice Chairman",
			image: figmaAssets.government.viceChairman,
		},
		{ name: "Hon. Tijani Olakanmi Sheriff", role: "Secretary to the Local Government", image: figmaAssets.government.secretary },
		{ name: "Hon. Mojeed Oluwamayowa Saheed", role: "Chief of Staff", image: figmaAssets.government.chiefOfStaff },
		{ name: "Hon. Jokomba Kehinde", role: "Supervisor for Works", image: figmaAssets.government.works },
		{ name: "Hon. Banjo Olanrewaju Abiodun", role: "Supervisor for ICT", image: figmaAssets.government.ict },
		{ name: "Hon. Sulaimon Laolat", role: "Supervisor for WAPA", image: figmaAssets.government.wapa },
		{ name: "Hon. Adeyemi Adeniran Babatunde", role: "Supervisor for Special Duties", image: figmaAssets.government.specialDuties },
		{ name: "Hon. Alimi Lekan Idris", role: "Special Adviser, Students' Affairs", image: figmaAssets.government.students },
		{ name: "Hon. Olowolagba Olawale Adebayo", role: "Special Adviser, Information", image: figmaAssets.government.information },
		{ name: "Hon. Ogunba Adetunbosun", role: "Special Adviser, Youth and Sports", image: figmaAssets.government.youth },
		{ name: "Hon. Oyinloye Kayode Olabode", role: "Special Adviser, Procurement", image: figmaAssets.government.procurement },
		{ name: "Hon. Adaramola Abimbola", role: "Supervisor for Education", image: figmaAssets.government.education },
		{ name: "Hon. Olawale Ogunbela JP", role: "Supervisor for Agriculture, Rural Development, Food Security and Chieftaincy Affairs", image: figmaAssets.government.agriculture },
		{ name: "Hon. Baliqees Aderoju Ibrahim", role: "Special Adviser, Market Affairs", image: figmaAssets.government.market },
		{ name: "Hon. Adeniyi Afolabi Odugbesi", role: "Special Adviser, Political Affairs", image: figmaAssets.government.political },
		{ name: "Hon. Edu Hafsat", role: "Supervisor for Civic Engagement", image: figmaAssets.government.civic },
		{ name: "Hon. Fakumoju Kehinde Babayemisi", role: "Supervisor for Community Development", image: figmaAssets.government.community },
		{ name: "Hon. Ambali Olutusin", role: "Supervisor for Intergovernmental Affairs and Legislative Duties", image: figmaAssets.government.intergovernmental },
		{ name: "Hon. Ishmaheel Bashir", role: "Special Adviser, Project Monitoring", image: figmaAssets.government.projects },
		{ name: "Hon. Abiodun Salau", role: "Special Adviser, Tourism", image: figmaAssets.government.tourism },
		{ name: "Hon. Basirat Adewunmi Babatunde", role: "Supervisor for Budget and Planning", image: figmaAssets.government.budget },
	] satisfies ExecutiveMember[],
};

export const executiveRelated = {
	title: "More about your local government",
	links: [
		{ href: "/government/management-team", title: "Management Team", description: "Get to know the team behind council administration." },
		{ href: "/government/nulge-exco", title: "NULGE Exco", description: "Meet the staff union executives representing local government employees." },
		{ href: "/government/departments", title: "Departments", description: "Find the office responsible for the services you need." },
	],
};
