import { figmaAssets } from "./figma-assets";
import { councilDepartments, departmentIcons, type CouncilDepartment, type DepartmentIcon } from "./departments";

export const ictDepartmentPage = {
	label: "Department Directory",
	labelHref: "/government/departments",
	title: "Information &\nCommunication Technology",
	description: "Digital strategy, infrastructure, systems support and technology services for council operations.",
};

export const ictDepartment = {
	heading: "About the department",
	paragraphs: [
		"The Information & Communication Technology Department supports the council’s digital operations, infrastructure and systems. It leads technology planning, maintains core systems, and helps departments use digital tools more effectively.",
		"The department also provides helpdesk support, manages digital security, and helps teams adopt technology that improves service delivery, reporting and public access to council information.",
	],
	responsibilitiesHeading: "Key responsibilities",
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
	deskLabel: "Department desk",
	headLabel: "Head of Department",
	name: "Mr Amori Muritala Kehinde",
	role: "Head of ICT",
	image: figmaAssets.government.hodIct,
	phoneLabel: "Phone",
	phone: "+234 XXX XXX XXXX",
	emailLabel: "Email",
	email: "ict@ikorodunorthlcda.lg.gov.ng",
};

const relatedLeads = [
	{ title: "Finance & Accounts", lead: "Headed by Council Treasurer" },
	{ title: "Education & Library Services", lead: "HOD: [Head of Department]" },
	{ title: "Primary Health Care", lead: "Headed by Edu. & Library Services Dept." },
] as const;

export type IctRelatedDepartment = CouncilDepartment & { lead: string; iconName: DepartmentIcon };

export const ictRelated = {
	title: "Other departments",
	profileLabel: "View profile",
	profileHref: "/government/departments",
	departments: relatedLeads.flatMap((item) => {
		const department = councilDepartments.find((entry) => entry.title === item.title);
		if (!department) return [];
		return [{ ...department, lead: item.lead, iconName: department.icon }];
	}),
};

export { departmentIcons };
