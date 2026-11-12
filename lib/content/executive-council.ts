import { contactPhones } from "./contact";
import { figmaAssets, type FigmaAsset } from "./figma-assets";

export type ExecutiveMember = {
	name: string;
	role: string;
	image: FigmaAsset;
	/** Public contact number when available. */
	phone?: string;
	/** Tailwind object-position class for face-safe cropping. */
	portraitFocus?: string;
};

export const executiveCouncilPage = {
	label: "Leadership",
	title: "Executive Council",
	description: "Meet the executive leadership guiding policy, coordinating council services and working for the people of Ikorodu North.",
};

const chairmanOfficePhone = contactPhones[0];

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
	phone: chairmanOfficePhone.label,
	phoneHref: chairmanOfficePhone.href,
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
		{ name: "Hon. Tijani Olakanmi Sheriff", role: "Secretary to the Local Government", image: figmaAssets.government.secretary, phone: "07030122210" },
		{ name: "Hon. Mojeed Oluwamayowa Saheed", role: "Chief of Staff", image: figmaAssets.government.chiefOfStaff, phone: "07058882780" },
		{ name: "Hon. Jokomba Kehinde", role: "Supervisor for Works", image: figmaAssets.government.works, phone: "08023366649" },
		{ name: "Hon. Banjo Olanrewaju Abiodun", role: "Supervisor for ICT", image: figmaAssets.government.ict, phone: "08024020182" },
		{ name: "Hon. Sulaimon Laolat", role: "Supervisor for WAPA", image: figmaAssets.government.wapa, phone: "08023443802" },
		{ name: "Hon. Adeyemi Adeniran Babatunde", role: "Supervisor for Special Duties", image: figmaAssets.government.specialDuties, phone: "08168700643" },
		{ name: "Hon. Adaramola Abimbola", role: "Supervisor for Education", image: figmaAssets.government.education, phone: "08024410449" },
		{ name: "Hon. Olawale Ogunbela JP", role: "Supervisor for Agriculture, Rural Development, Food Security and Chieftaincy Affairs", image: figmaAssets.government.agriculture, phone: "08023270896" },
		{ name: "Hon. Edu Hafsat", role: "Supervisor for Civic Engagement", image: figmaAssets.government.civic },
		{ name: "Hon. Fakumoju Kehinde Babayemisi", role: "Supervisor for Community Development", image: figmaAssets.government.community, phone: "08086697710" },
		{ name: "Hon. Ambali Olutusin", role: "Supervisor for Intergovernmental Affairs and Legislative Duties", image: figmaAssets.government.intergovernmental, phone: "08028962919" },
		{ name: "Hon. Basirat Adewunmi Babatunde", role: "Supervisor for Budget and Planning", image: figmaAssets.government.budget, phone: "07034854720" },
		{ name: "Hon. Ogunbiyi Adedoyin", role: "Supervisor for Health", image: figmaAssets.government.health, portraitFocus: "object-[center_18%]", phone: "09050226465" },
		{ name: "Hon. Alimi Lekan Idris", role: "Special Adviser, Students' Affairs", image: figmaAssets.government.students, phone: "08062635805" },
		{ name: "Hon. Olowolagba Olawale Adebayo", role: "Special Adviser, Information", image: figmaAssets.government.information, phone: "09055964661" },
		{ name: "Hon. Ogunba Adetunbosun", role: "Special Adviser, Youth and Sports", image: figmaAssets.government.youth, phone: "08139403333" },
		{ name: "Hon. Oyinloye Kayode Olabode", role: "Special Adviser, Procurement", image: figmaAssets.government.procurement, phone: "08033293187" },
		{ name: "Hon. Baliqees Aderoju Ibrahim", role: "Special Adviser, Market Affairs", image: figmaAssets.government.market, portraitFocus: "object-[center_18%]", phone: "09155144042" },
		{ name: "Hon. Adeniyi Afolabi Odugbesi", role: "Special Adviser, Political Affairs", image: figmaAssets.government.political, phone: "08033350746" },
		{ name: "Hon. Ishmaheel Bashir", role: "Special Adviser, Project Monitoring", image: figmaAssets.government.projects, phone: "08089408630" },
		{ name: "Hon. Abiodun Salau", role: "Special Adviser, Tourism", image: figmaAssets.government.tourism, phone: "08027467787" },
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
