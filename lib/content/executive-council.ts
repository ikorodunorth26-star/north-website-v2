import { figmaAssets, type FigmaAsset } from "./figma-assets";

export type ExecutiveMember = {
	name: string;
	role: string;
	image: FigmaAsset;
	bio: string;
};

const pendingBiography = "Member name, official portfolio and biography will be published once appointment details are confirmed.";

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
	email: "chairman@ikorodunorthlcda.gov.ng",
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
			bio: "Supporting the Executive Chairman in council administration, leadership coordination and service to the communities of Ikorodu North.",
		},
		{ name: "Hon. Tijani Olakanmi Sheriff", role: "Secretary to the Local Government", image: figmaAssets.government.secretary, bio: pendingBiography },
		{ name: "Hon. Mojeed Oluwamayowa Saheed", role: "Chief of Staff", image: figmaAssets.government.chiefOfStaff, bio: pendingBiography },
		{ name: "Hon. Jokomba Kehinde", role: "Supervisor for Works", image: figmaAssets.government.works, bio: pendingBiography },
		{ name: "Hon. Banjo Olanrewaju Abiodun", role: "Supervisor for ICT", image: figmaAssets.government.ict, bio: pendingBiography },
		{ name: "Hon. Sulaimon Laolat", role: "Supervisor for WAPA", image: figmaAssets.government.wapa, bio: pendingBiography },
		{ name: "Hon. Adeyemi Adeniran Babatunde", role: "Supervisor for Special Duties", image: figmaAssets.government.specialDuties, bio: pendingBiography },
		{ name: "Hon. Alimi Lekan Idris", role: "Special Adviser, Students' Affairs", image: figmaAssets.government.students, bio: pendingBiography },
		{ name: "Hon. Olowolagba Olawale Adebayo", role: "Special Adviser, Information", image: figmaAssets.government.information, bio: pendingBiography },
		{ name: "Hon. Ogunba Adetunbosun", role: "Special Adviser, Youth and Sports", image: figmaAssets.government.youth, bio: pendingBiography },
		{ name: "Hon. Oyinloye Kayode Olabode", role: "Special Adviser, Procurement", image: figmaAssets.government.procurement, bio: pendingBiography },
		{ name: "Hon. Adaramola Abimbola", role: "Supervisor for Education", image: figmaAssets.government.education, bio: pendingBiography },
		{ name: "Hon. Olawale Ogunbela JP", role: "Supervisor for Agriculture, Rural Development, Food Security and Chieftaincy Affairs", image: figmaAssets.government.agriculture, bio: pendingBiography },
		{ name: "Hon. Baliqees Aderoju Ibrahim", role: "Special Adviser, Market Affairs", image: figmaAssets.government.market, bio: pendingBiography },
		{ name: "Hon. Adeniyi Afolabi Odugbesi", role: "Special Adviser, Political Affairs", image: figmaAssets.government.political, bio: pendingBiography },
		{ name: "Hon. Edu Hafsat", role: "Supervisor for Civic Engagement", image: figmaAssets.government.civic, bio: pendingBiography },
		{ name: "Hon. Fakumoju Kehinde Babayemisi", role: "Supervisor for Community Development", image: figmaAssets.government.community, bio: pendingBiography },
		{ name: "Hon. Ambali Olutusin", role: "Supervisor for Intergovernmental Affairs and Legislative Duties", image: figmaAssets.government.intergovernmental, bio: pendingBiography },
		{ name: "Hon. Ishmaheel Bashir", role: "Special Adviser, Project Monitoring", image: figmaAssets.government.projects, bio: pendingBiography },
		{ name: "Hon. Abiodun Salau", role: "Special Adviser, Tourism", image: figmaAssets.government.tourism, bio: pendingBiography },
		{ name: "Hon. Basirat Adewunmi Babatunde", role: "Supervisor for Budget and Planning", image: figmaAssets.government.budget, bio: pendingBiography },
	] satisfies ExecutiveMember[],
};

export const executiveRelated = {
	title: "More about your local government",
	links: [
		{ href: "/government/legislative-house", title: "Legislative Members", description: "Meet the representatives of our communities." },
		{ href: "/government/management-team", title: "Management Team", description: "Get to know the team behind council administration." },
		{ href: "/government/departments", title: "Departments", description: "Find the office responsible for the services you need." },
	],
};
