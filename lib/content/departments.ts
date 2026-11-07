import {
	BookOpen,
	ClipboardCheck,
	Coins,
	Compass,
	FileCheck,
	Files,
	FileText,
	GraduationCap,
	HeartPulse,
	Landmark,
	MessageSquare,
	ReceiptText,
	ShieldCheck,
	Store,
	UserRound,
	UserRoundCog,
	type LucideIcon,
} from "lucide-react";

import { contactPhones } from "./contact";
import type { FigmaAsset } from "./figma-assets";
import { figmaAssets } from "./figma-assets";

export type DepartmentIcon =
	| "userRoundCog"
	| "coins"
	| "heartPulse"
	| "graduationCap"
	| "clipboardCheck"
	| "shieldCheck"
	| "store"
	| "userRound"
	| "landmark"
	| "compass"
	| "bookOpen"
	| "messageSquare"
	| "fileCheck"
	| "fileText"
	| "receiptText"
	| "files";

export type DepartmentHead = {
	name: string;
	role: string;
	leadLabel: string;
	image?: FigmaAsset;
	phone?: string;
	phoneHref?: string;
};

export type CouncilDepartment = {
	slug: string;
	title: string;
	pageTitle: string;
	description: string;
	email: string;
	phone: string;
	icon: DepartmentIcon;
	group: "department" | "unit";
	health?: boolean;
	paragraphs: string[];
	responsibilities: string[];
	head: DepartmentHead;
};

export const departmentIcons: Record<DepartmentIcon, LucideIcon> = {
	userRoundCog: UserRoundCog,
	coins: Coins,
	heartPulse: HeartPulse,
	graduationCap: GraduationCap,
	clipboardCheck: ClipboardCheck,
	shieldCheck: ShieldCheck,
	store: Store,
	userRound: UserRound,
	landmark: Landmark,
	compass: Compass,
	bookOpen: BookOpen,
	messageSquare: MessageSquare,
	fileCheck: FileCheck,
	fileText: FileText,
	receiptText: ReceiptText,
	files: Files,
};

const phone = contactPhones[0].label;
export const departmentPhoneHref = contactPhones[0].href;

const managementPortrait = (file: string, width: number, height: number, alt: string): FigmaAsset => ({
	src: `/images/government/management/${file}`,
	width,
	height,
	alt,
});

export const departmentsPage = {
	label: "Service Network",
	title: "Departments",
	description: "Find the department or unit responsible for your enquiry, what it handles and how to reach it.",
};

export const departmentDirectory = {
	title: "Find a department",
	searchPlaceholder: "Search departments or services",
	filters: [
		{ label: "All departments", value: "all" },
		{ label: "Departments", value: "departments" },
		{ label: "Units", value: "units" },
		{ label: "Health & environment", value: "health" },
	],
	profileLabel: "View profile",
	empty: "No departments match that search.",
};

export const departmentDetailCopy = {
	label: "Department Directory",
	labelHref: "/government/departments",
	heading: "Overview",
	responsibilitiesHeading: "Key responsibilities",
	deskLabel: "Department desk",
	headLabel: "Head of Department",
	hodProfileHeading: "Head of Department",
	hodPhoneLabel: "Contact number",
	hodViewProfile: "View full profile",
	phoneLabel: "Phone",
	emailLabel: "Email",
	newsHeading: "Recent news",
	newsEmpty: "News linked to this desk will appear here as it is published.",
	newsCta: "Read story",
	viewAllNews: "All news",
	relatedTitle: "Other departments",
	profileLabel: "View profile",
};

export function departmentHref(slug: string) {
	return `/government/departments/${slug}`;
}

export const councilDepartments: CouncilDepartment[] = [
	{
		slug: "admin-human-resources",
		title: "Admin & Human Resources",
		pageTitle: "Admin &\nHuman Resources",
		description: "Handles the council's people and processes, including recruitment, training, staff welfare, records and day-to-day administration.",
		email: "hr@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "userRoundCog",
		group: "department",
		paragraphs: [
			"Admin & Human Resources keeps the secretariat running. The department manages staff records, recruitment support, welfare matters and the administrative processes that other departments depend on.",
			"From correspondence and file management to training coordination and office support, the desk helps the council stay organised and responsive to residents and partner agencies.",
		],
		responsibilities: [
			"Coordinating recruitment support, staff posting and personnel records",
			"Managing staff welfare, leave and administrative correspondence",
			"Maintaining registry, filing and office support systems",
			"Supporting induction, training and capacity-building for council staff",
			"Coordinating day-to-day secretariat administration at Isiu",
			"Supporting inter-departmental workflow and service requests",
		],
		head: {
			name: "Mr. Nasiru Abayomi Samsideen",
			role: "Council Manager",
			leadLabel: "Headed by Council Manager",
			image: managementPortrait("nairu-abayomi-samsideen.webp", 720, 1080, "Mr. Nasiru Abayomi Samsideen"),
		},
	},
	{
		slug: "finance-accounts",
		title: "Finance & Accounts",
		pageTitle: "Finance &\nAccounts",
		description: "Keeps the council's money accountable through revenue collection, budgeting, payroll, spending controls and financial reporting.",
		email: "finance@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "coins",
		group: "department",
		paragraphs: [
			"Finance & Accounts is responsible for the council’s public money. The department supports revenue collection, payroll, spending controls and the financial records that keep the administration accountable.",
			"Working with the Council Treasurer, the desk helps departments plan within approved budgets and report spending clearly to leadership and oversight bodies.",
		],
		responsibilities: [
			"Supporting revenue collection and receipting processes",
			"Preparing and monitoring budgets with Planning & Budget",
			"Processing payroll and approved expenditure",
			"Maintaining ledgers, vouchers and financial records",
			"Supporting internal and external audit requests",
			"Producing financial reports for council leadership",
		],
		head: {
			name: "Bankole Esther Oluyemi",
			role: "Council Treasurer",
			leadLabel: "Headed by Council Treasurer",
			image: managementPortrait("bankole-esther-oluyemi.webp", 664, 996, "Bankole Esther Oluyemi"),
		},
	},
	{
		slug: "primary-health-care",
		title: "Primary Health Care",
		pageTitle: "Primary\nHealth Care",
		description: "Brings healthcare closer to home through PHC centres, immunisation, maternal and child health, and public health campaigns.",
		email: "phc@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "heartPulse",
		group: "department",
		health: true,
		paragraphs: [
			"Primary Health Care brings essential health services closer to residents through PHC centres across Ikorodu North. The department supports immunisation, maternal and child health, and community health outreach.",
			"The Medical Officer of Health leads clinical and public-health coordination so facilities remain responsive during routine care and council health programmes.",
		],
		responsibilities: [
			"Supporting PHC centres and community health outreach",
			"Coordinating immunisation and maternal and child health services",
			"Supporting public health campaigns and health education",
			"Working with partners on facility upgrades and equipment",
			"Monitoring service delivery across health posts and centres",
			"Supporting emergency and referral coordination with higher facilities",
		],
		head: {
			name: "Dr. Wajero K T",
			role: "Medical Officer of Health",
			leadLabel: "Headed by Health Care Dept.",
			image: managementPortrait("wajero-kt.webp", 664, 996, "Dr. Wajero K T"),
		},
	},
	{
		slug: "education-library-services",
		title: "Education & Library Services",
		pageTitle: "Education &\nLibrary Services",
		description: "Primary education support, scholarships and library services.",
		email: "education@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "graduationCap",
		group: "department",
		paragraphs: [
			"Education & Library Services supports learning across Ikorodu North. The department works with schools, teachers and partners on programmes that strengthen primary education and community access to learning resources.",
			"From scholarship support and school engagement to library services, the desk helps residents find education-related help through the council.",
		],
		responsibilities: [
			"Supporting primary education programmes and school engagement",
			"Coordinating scholarship and learning-support initiatives",
			"Managing library services and learning resources",
			"Working with partners on education infrastructure and materials",
			"Supporting competitions, literacy and student development activities",
			"Maintaining education records and community learning enquiries",
		],
		head: {
			name: "Mr Ganiyu Abideen Maiyegun",
			role: "Head of Department, Education & Library Services",
			leadLabel: "Headed by Education & Library Services Dept.",
			image: managementPortrait("ganiyu-abideen-maiyegun.webp", 664, 996, "Mr Ganiyu Abideen Maiyegun"),
		},
	},
	{
		slug: "planning-budget-research-statistics",
		title: "Planning, Budget, Research & Statistics",
		pageTitle: "Planning, Budget,\nResearch & Statistics",
		description: "Development planning, budget preparation and statistics.",
		email: "planning@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "clipboardCheck",
		group: "department",
		paragraphs: [
			"Planning, Budget, Research & Statistics helps the council plan with evidence. The department supports development planning, budget preparation and the statistics that guide service decisions.",
			"It works with departments to align proposals with approved priorities and to track the information leadership needs for planning and reporting.",
		],
		responsibilities: [
			"Coordinating development planning and project proposals",
			"Supporting annual budget preparation and review",
			"Collecting and organising council statistics and research inputs",
			"Tracking plan implementation across departments",
			"Supporting monitoring and evaluation requests",
			"Advising leadership on planning priorities and data needs",
		],
		head: {
			name: "Mr Ogunleye Akintope Abayomi",
			role: "Head of Department, Planning, Budget, Research & Statistics",
			leadLabel: "Headed by Planning & Budget Dept.",
			image: managementPortrait("ogunleye-akintope-abayomi.webp", 664, 996, "Mr Ogunleye Akintope Abayomi"),
		},
	},
	{
		slug: "environmental-health-services",
		title: "Environmental Health Services",
		pageTitle: "Environmental\nHealth Services",
		description: "Sanitation, waste management and public health inspections.",
		email: "environmentalhealth@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "shieldCheck",
		group: "department",
		health: true,
		paragraphs: [
			"Environmental Health Services protects community wellbeing through sanitation, waste management support and public health inspections. The department helps keep markets, streets and public spaces cleaner and safer.",
			"Officers work with communities and enforcement partners to address environmental health risks and support council cleanliness programmes.",
		],
		responsibilities: [
			"Supporting sanitation and environmental health inspections",
			"Coordinating waste management and cleanliness programmes",
			"Monitoring markets, abattoirs and public premises",
			"Supporting vector control and related public health actions",
			"Working with communities on environmental health education",
			"Reporting hazards and enforcement needs to leadership",
		],
		head: {
			name: "Mr Ahoton Jameson Thona",
			role: "Head of Department, Environmental Health Services",
			leadLabel: "Headed by Environmental Health Dept.",
			image: managementPortrait("ahoton-jameson-thona.webp", 664, 996, "Mr Ahoton Jameson Thona"),
		},
	},
	{
		slug: "agriculture-rural-social-development",
		title: "Agriculture, Rural & Social Development",
		pageTitle: "Agriculture, Rural &\nSocial Development",
		description: "Farmer support, rural empowerment and social development.",
		email: "agriculture@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "store",
		group: "department",
		paragraphs: [
			"Agriculture, Rural & Social Development supports farmers, rural communities and social development programmes across Ikorodu North. The department helps residents access agriculture support and community empowerment initiatives.",
			"It works with partners and council leadership to strengthen food systems, rural livelihoods and inclusive local development.",
		],
		responsibilities: [
			"Supporting farmers and agriculture extension activities",
			"Coordinating rural development and empowerment programmes",
			"Supporting social development and community livelihood initiatives",
			"Working with partners on agriculture and food security projects",
			"Tracking rural service needs and field reports",
			"Advising leadership on agriculture and rural priorities",
		],
		head: {
			name: "Mr. Akiode Oluwaseyi O.",
			role: "Head of Department, Agriculture, Rural & Social Development",
			leadLabel: "Headed by Agriculture Dept.",
			image: managementPortrait("akiode-oluwaseyi.webp", 809, 920, "Mr. Akiode Oluwaseyi O."),
		},
	},
	{
		slug: "women-affairs-poverty-alleviation",
		title: "Women Affairs & Poverty Alleviation",
		pageTitle: "Women Affairs &\nPoverty Alleviation",
		description: "Women's empowerment, skills programmes and poverty reduction.",
		email: "womenaffairs@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "userRound",
		group: "department",
		paragraphs: [
			"Women Affairs & Poverty Alleviation supports women’s empowerment, skills programmes and poverty-reduction initiatives. The department helps residents access council programmes that strengthen livelihoods and social inclusion.",
			"It works with communities and partners to design and deliver targeted support for women, families and vulnerable households.",
		],
		responsibilities: [
			"Coordinating women’s empowerment and skills programmes",
			"Supporting poverty alleviation and livelihood initiatives",
			"Working with community groups and partners on social support",
			"Tracking programme beneficiaries and service feedback",
			"Supporting gender-focused outreach and advocacy activities",
			"Advising leadership on women affairs and social inclusion priorities",
		],
		head: {
			name: "Mrs Balogun Zainab Mojisola",
			role: "Head of Department, Women Affairs & Poverty Alleviation",
			leadLabel: "Headed by Women Affairs Dept.",
			image: managementPortrait("balogun-zainab-mojisola.webp", 681, 1024, "Mrs Balogun Zainab Mojisola"),
		},
	},
	{
		slug: "works-infrastructure",
		title: "Works & Infrastructure",
		pageTitle: "Works &\nInfrastructure",
		description: "Roads, drainage, public buildings and capital projects.",
		email: "works@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "landmark",
		group: "department",
		paragraphs: [
			"Works & Infrastructure delivers and supervises the physical projects residents see every day: roads, drainage, public buildings and related capital works. The department supports planning, supervision and maintenance across the LCDA.",
			"It works with leadership and partners so infrastructure programmes stay on scope and respond to community needs.",
		],
		responsibilities: [
			"Supervising roads, drainage and public building works",
			"Supporting capital project planning and site supervision",
			"Coordinating maintenance of council facilities and assets",
			"Working with contractors and partners on infrastructure delivery",
			"Tracking project progress and field reports",
			"Advising leadership on works priorities and technical needs",
		],
		head: {
			name: "Eng. Akinsanya Sunday",
			role: "Head of Department, Works & Infrastructure",
			leadLabel: "Headed by Works & Infrastructure Dept.",
			image: managementPortrait("akinsanya-sunday.webp", 664, 996, "Eng. Akinsanya Sunday"),
		},
	},
	{
		slug: "tourism",
		title: "Tourism & Heritage",
		pageTitle: "Tourism &\nHeritage",
		description: "Local tourism promotion, cultural heritage, attractions and visitor experience across Ikorodu North.",
		email: "tourism@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "compass",
		group: "department",
		paragraphs: [
			"Tourism & Heritage promotes Ikorodu North’s cultural attractions, heritage, visitor experience and local tourism opportunities. It works with communities and partners to spotlight places, events and traditions that strengthen the area’s identity.",
			"The desk supports tourism planning, heritage documentation, stakeholder engagement and programmes that help residents and visitors discover what the LCDA has to offer.",
		],
		responsibilities: [
			"Promoting local tourism sites, culture, heritage and visitor attractions",
			"Supporting tourism events and community cultural programmes",
			"Working with partners on tourism and heritage development initiatives",
			"Coordinating visitor information and tourism enquiries",
			"Documenting attractions, heritage sites and tourism opportunities across wards",
			"Advising leadership on tourism and heritage priorities and partnerships",
		],
		head: {
			name: "Com. Olawore Elijah",
			role: "Head of Department, Tourism & Heritage",
			leadLabel: "Headed by Tourism & Heritage Dept.",
			image: managementPortrait("olawore-elijah.webp", 664, 996, "Com. Olawore Elijah"),
			phone,
			phoneHref: departmentPhoneHref,
		},
	},
	{
		slug: "legislative-unit",
		title: "Legislative Unit",
		pageTitle: "Legislative\nUnit",
		description: "Support for the Legislative House and its records.",
		email: "legislative@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "bookOpen",
		group: "unit",
		paragraphs: [
			"The Legislative Unit supports the Legislative House with records, proceedings and administrative coordination. It helps councillors and the Clerk keep legislative business organised and accessible.",
			"The unit maintains the documentation and support services that underpin sittings, resolutions and legislative correspondence.",
		],
		responsibilities: [
			"Supporting Legislative House sittings and proceedings",
			"Maintaining legislative records, minutes and correspondence",
			"Coordinating clerking support for councillors and committees",
			"Managing legislative documentation and filing systems",
			"Supporting communication between the House and the executive",
			"Assisting with legislative logistics and secretariat support",
		],
		head: {
			name: "Awonusi Ademola A",
			role: "Clerk of the House",
			leadLabel: "Headed by Clerk of the House",
			image: managementPortrait("awonusi-ademola.webp", 664, 996, "Awonusi Ademola A"),
		},
	},
	{
		slug: "public-affairs-unit",
		title: "Public Affairs Unit",
		pageTitle: "Public Affairs\nUnit",
		description: "Public communication, media relations and community updates.",
		email: "publicaffairs@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "messageSquare",
		group: "unit",
		paragraphs: [
			"Public Affairs manages the council’s public communication. The unit supports media relations, community updates and the messaging that keeps residents informed about programmes, projects and events.",
			"It works with leadership and departments to publish accurate information and respond to public communication needs.",
		],
		responsibilities: [
			"Coordinating council media relations and press support",
			"Publishing community updates and public announcements",
			"Supporting event coverage and official communication",
			"Managing public information requests routed to the unit",
			"Working with departments on clear public messaging",
			"Maintaining communication records and media archives",
		],
		head: {
			name: "Mr Japhet O Enemunhe",
			role: "Head of Public Affairs",
			leadLabel: "Headed by Public Affairs Unit",
			image: managementPortrait("japhet-enemunhe.webp", 664, 910, "Mr Japhet O Enemunhe"),
		},
	},
	{
		slug: "internal-audit-unit",
		title: "Internal Audit Unit",
		pageTitle: "Internal Audit\nUnit",
		description: "Audits of revenue and spending, and internal controls.",
		email: "audit@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "fileCheck",
		group: "unit",
		paragraphs: [
			"Internal Audit strengthens accountability across council operations. The unit reviews revenue, spending and internal controls so public funds are handled with proper checks.",
			"It supports leadership with independent assurance and helps departments improve compliance with approved financial and administrative procedures.",
		],
		responsibilities: [
			"Auditing revenue, expenditure and internal control processes",
			"Reviewing compliance with council financial procedures",
			"Supporting follow-up on audit findings and recommendations",
			"Working with Finance and departments on control improvements",
			"Preparing audit reports for council leadership",
			"Supporting external audit coordination where required",
		],
		head: {
			name: "Shobowale Olalekan",
			role: "HOU Audit",
			leadLabel: "Headed by Internal Audit Unit",
			image: managementPortrait("shobowale-olalekan.webp", 682, 1024, "Shobowale Olalekan"),
		},
	},
	{
		slug: "legal-unit",
		title: "Legal Unit",
		pageTitle: "Legal\nUnit",
		description: "Legal advice, contracts and regulatory compliance.",
		email: "legal@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "fileText",
		group: "unit",
		paragraphs: [
			"The Legal Unit provides legal advice, contract support and regulatory guidance for the council. It helps leadership and departments handle agreements, compliance questions and legal correspondence.",
			"The unit works to reduce legal risk and keep council actions aligned with applicable rules and approved processes.",
		],
		responsibilities: [
			"Providing legal advice to leadership and departments",
			"Reviewing contracts, agreements and legal documents",
			"Supporting regulatory compliance and legal correspondence",
			"Assisting with dispute-related documentation and guidance",
			"Working with departments on policy and procedure questions",
			"Maintaining legal records and advisory files",
		],
		head: {
			name: "Barr. Amusa Adebayo Aminat",
			role: "Head of Department, Legal",
			leadLabel: "Headed by Legal Unit",
			image: managementPortrait("amusa-adebayo-aminat.webp", 612, 924, "Barr. Amusa Adebayo Aminat"),
		},
	},
	{
		slug: "procurement-unit",
		title: "Procurement Unit",
		pageTitle: "Procurement\nUnit",
		description: "Public procurement, vendor registration and value for money.",
		email: "procurement@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "receiptText",
		group: "unit",
		paragraphs: [
			"The Procurement Unit supports transparent public purchasing for the council. It helps departments follow approved procurement processes, manage vendor engagement and pursue value for money.",
			"The unit works with requesting departments and oversight desks so goods and services are obtained through clear, accountable procedures.",
		],
		responsibilities: [
			"Coordinating public procurement processes and documentation",
			"Supporting vendor registration and supplier engagement",
			"Working with departments on procurement requests and specs",
			"Promoting value-for-money and procedural compliance",
			"Maintaining procurement records and award documentation",
			"Supporting audit and oversight requests on procurement files",
		],
		head: {
			name: "Procurement desk",
			role: "Head of Procurement Unit",
			leadLabel: "Headed by Procurement Unit",
		},
	},
	{
		slug: "information-communication-technology",
		title: "Information & Communication Technology Unit",
		pageTitle: "Information &\nCommunication Technology",
		description: "Council systems, digital services and technical support.",
		email: "ict@ikorodunorthlcda.lg.gov.ng",
		phone,
		icon: "files",
		group: "unit",
		paragraphs: [
			"The Information & Communication Technology Department supports the council’s digital operations, infrastructure and systems. It leads technology planning, maintains core systems, and helps departments use digital tools more effectively.",
			"The department also provides helpdesk support, manages digital security, and helps teams adopt technology that improves service delivery, reporting and public access to council information.",
		],
		responsibilities: [
			"Managing council networks, email, hardware and core digital infrastructure",
			"Developing and maintaining council websites, portals and digital services",
			"Providing ICT training and support for council staff and departments",
			"Supporting digital reporting, data collection and analytics across departments",
			"Managing digital security, backups and incident response for council systems",
			"Procuring and maintaining ICT equipment, software and licenses",
			"Coordinating helpdesk support and resolving ICT service requests",
			"Advising on digital transformation and ICT policy for council operations",
		],
		head: {
			name: "Mr Amori Muritala Kehinde",
			role: "Head of ICT",
			leadLabel: "Headed by ICT Unit",
			image: figmaAssets.government.hodIct,
		},
	},
];

export function getDepartment(slug: string) {
	return councilDepartments.find((department) => department.slug === slug);
}

export function getRelatedDepartments(slug: string, limit = 3) {
	const current = getDepartment(slug);
	const pool = councilDepartments.filter((department) => department.slug !== slug);
	const sameGroup = pool.filter((department) => department.group === current?.group);
	const ordered = [...sameGroup, ...pool.filter((department) => department.group !== current?.group)];
	return ordered.slice(0, limit);
}

export const departmentReach = {
	title: "How to reach a department",
	steps: [
		{ number: "01", title: "Find the right desk", description: "Use the directory above to find the department or unit responsible for your enquiry." },
		{ number: "02", title: "Contact the department", description: "Call the department phone or email listed on its profile, or use the council contact form." },
		{ number: "03", title: "Visit in person", description: "Visit the council secretariat during office hours. Call ahead to confirm availability." },
	],
	notice: "Department contact details and Heads of Department are published from the verified management record and will be updated as confirmed.",
};
