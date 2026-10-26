import { BookOpen, ClipboardCheck, Coins, FileCheck, Files, FileText, GraduationCap, HeartPulse, Landmark, MessageSquare, ReceiptText, ShieldCheck, Store, UserRound, UserRoundCog, type LucideIcon } from "lucide-react";

export type DepartmentIcon = "userRoundCog" | "coins" | "heartPulse" | "graduationCap" | "clipboardCheck" | "shieldCheck" | "store" | "userRound" | "landmark" | "bookOpen" | "messageSquare" | "fileCheck" | "fileText" | "receiptText" | "files";

export type CouncilDepartment = {
	title: string;
	description: string;
	email: string;
	phone: string;
	icon: DepartmentIcon;
	group: "department" | "unit";
	health?: boolean;
	href?: string;
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
	bookOpen: BookOpen,
	messageSquare: MessageSquare,
	fileCheck: FileCheck,
	fileText: FileText,
	receiptText: ReceiptText,
	files: Files,
};

const phone = "+234 XXX XXX XXXX";

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

export const councilDepartments: CouncilDepartment[] = [
	{ title: "Admin & Human Resources", description: "Handles the council's people and processes, including recruitment, training, staff welfare, records and day-to-day administration.", email: "hr@ikorodunorthlcda.gov.ng", phone, icon: "userRoundCog", group: "department" },
	{ title: "Finance & Accounts", description: "Keeps the council's money accountable through revenue collection, budgeting, payroll, spending controls and financial reporting", email: "finance@ikorodunorthlcda.gov.ng", phone, icon: "coins", group: "department" },
	{ title: "Primary Health Care", description: "Brings healthcare closer to home through PHC centres, immunisation, maternal and child health, and public health campaigns.", email: "phc@ikorodunorthlcda.gov.ng", phone, icon: "heartPulse", group: "department", health: true },
	{ title: "Education & Library Services", description: "Primary education support, scholarships and library services.", email: "education@ikorodunorthlcda.gov.ng", phone, icon: "graduationCap", group: "department" },
	{ title: "Planning, Budget, Research & Statistics", description: "Development planning, budget preparation and statistics.", email: "planning@ikorodunorthlcda.gov.ng", phone, icon: "clipboardCheck", group: "department" },
	{ title: "Environmental Health Services", description: "Sanitation, waste management and public health inspections.", email: "environmentalhealth@ikorodunorthlcda.gov.ng", phone, icon: "shieldCheck", group: "department", health: true },
	{ title: "Agriculture, Rural & Social Development", description: "Farmer support, rural empowerment and social development.", email: "agriculture@ikorodunorthlcda.gov.ng", phone, icon: "store", group: "department" },
	{ title: "Women Affairs & Poverty Alleviation", description: "Women's empowerment, skills programmes and poverty reduction.", email: "womenaffairs@ikorodunorthlcda.gov.ng", phone, icon: "userRound", group: "department" },
	{ title: "Works & Infrastructure", description: "Roads, drainage, public buildings and capital projects.", email: "works@ikorodunorthlcda.gov.ng", phone, icon: "landmark", group: "department" },
	{ title: "Legislative Unit", description: "Support for the Legislative House and its records.", email: "legislative@ikorodunorthlcda.gov.ng", phone, icon: "bookOpen", group: "unit" },
	{ title: "Public Affairs Unit", description: "Public communication, media relations and community updates.", email: "publicaffairs@ikorodunorthlcda.gov.ng", phone, icon: "messageSquare", group: "unit" },
	{ title: "Internal Audit Unit", description: "Audits of revenue and spending, and internal controls.", email: "audit@ikorodunorthlcda.gov.ng", phone, icon: "fileCheck", group: "unit" },
	{ title: "Legal Unit", description: "Legal advice, contracts and regulatory compliance.", email: "legal@ikorodunorthlcda.gov.ng", phone, icon: "fileText", group: "unit" },
	{ title: "Procurement Unit", description: "Public procurement, vendor registration and value for money.", email: "procurement@ikorodunorthlcda.gov.ng", phone, icon: "receiptText", group: "unit" },
	{ title: "Information & Communication Technology Unit", description: "Council systems, digital services and technical support.", email: "ict@ikorodunorthlcda.gov.ng", phone, icon: "files", group: "unit", href: "/government/departments/information-communication-technology" },
];

export const departmentReach = {
	title: "How to reach a department",
	steps: [
		{ number: "01", title: "Find the right desk", description: "Use the directory above to find the department or unit responsible for your enquiry." },
		{ number: "02", title: "Contact the department", description: "Call [department phone] or email [department email], or use the council contact form." },
		{ number: "03", title: "Visit in person", description: "Visit the council secretariat during office hours. Call ahead to confirm availability." },
	],
	notice: "Department contact details and Heads of Department will be published once verified.",
};
