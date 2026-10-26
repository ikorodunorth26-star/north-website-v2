import type { FigmaAsset } from "./figma-assets";

export type ManagementOfficer = {
	name: string;
	role: string;
	image: FigmaAsset;
};

const portrait = (file: string, width: number, height: number, alt: string): FigmaAsset => ({
	src: `/images/government/management/${file}`,
	width,
	height,
	alt,
});

export const managementTeamPage = {
	label: "Administration",
	title: "Management Team",
	description: "Meet the officers who run day-to-day administration and coordinate the council’s departments.",
};

export const managementOverview = {
	eyebrow: "Administrative arm",
	heading: "Council administration",
	description: "The administrative arm is led by the Council Manager. It coordinates the departments that deliver services across Ikorodu North, including administration, works, budget, agriculture, environment, health and education.",
	responsibilities: [
		{ title: "Council management", description: "The Council Manager coordinates departments and the day-to-day work of the secretariat at Isiu." },
		{ title: "Public finance", description: "The Council Treasurer keeps revenue, budgets, payroll and spending on record." },
		{ title: "Department desks", description: "Heads of department run works and infrastructure, primary health, education and library services, environmental health, budget and planning, agriculture, tourism, legal services, public affairs and information and communication technology." },
	],
};

export const managementDirectory = {
	title: "Meet the management team.",
	description: "The officers who keep administration moving from the secretariat at Isiu.",
	officers: [
		{ name: "Mr. Nasiru Abayomi Samsideen", role: "Council Manager", image: portrait("nairu-abayomi-samsideen.webp", 720, 1080, "Mr. Nairu Abayomi Samsideen") },
		{ name: "Bankole Esther Oluyemi", role: "Council Treasurer", image: portrait("bankole-esther-oluyemi.webp", 664, 996, "Bankole Esther Oluyemi") },
		{ name: "Awonusi Ademola A", role: "Clerk of the House", image: portrait("awonusi-ademola.webp", 664, 996, "Awonusi Ademola A") },
		{ name: "Mr Amori Muritala Kehinde", role: "Head of Department, Information & Communication Technology", image: portrait("amori-muritala-kehinde.webp", 664, 996, "Mr Amori Muritala Kehinde") },
		{ name: "Mr. Akiode Oluwaseyi O.", role: "Head of Department, Agriculture, Rural & Social Development", image: portrait("akiode-oluwaseyi.webp", 809, 920, "Mr. Akiode Oluwaseyi O.") },
		{ name: "Mr Ogunleye Akintope Abayomi", role: "Head of Department, Planning, Budget, Research & Statistics", image: portrait("ogunleye-akintope-abayomi.webp", 664, 996, "Mr Ogunleye Akintope Abayomi") },
		{ name: "Eng. Akinsanya Sunday", role: "Head of Department, Works & Infrastructure", image: portrait("akinsanya-sunday.webp", 664, 996, "Eng. Akinsanya Sunday") },
		{ name: "Dr. Wajero K T", role: "Medical Officer of Health", image: portrait("wajero-kt.webp", 664, 996, "Dr. Wajero K T") },
		{ name: "Com. Olawore Elijah", role: "Head of Department, Tourism", image: portrait("olawore-elijah.webp", 664, 996, "Com. Olawore Elijah") },
		{ name: "Mr Ganiyu Abideen Maiyegun", role: "Head of Department, Education & Library Services", image: portrait("ganiyu-abideen-maiyegun.webp", 664, 996, "Mr Ganiyu Abideen Maiyegun") },
		{ name: "Mr Japhet O Enemunhe", role: "Head of Public Affairs", image: portrait("japhet-enemunhe.webp", 664, 910, "Mr Japhet O Enemunhe") },
		{ name: "Mr Ahoton Jameson Thona", role: "Head of Department, Environmental Health Services", image: portrait("ahoton-jameson-thona.webp", 664, 996, "Mr Ahoton Jameson Thona") },
		{ name: "Barr. Amusa Adebayo Aminat", role: "Head of Department, Legal", image: portrait("amusa-adebayo-aminat.webp", 612, 924, "Barr. Amusa Adebayo Aminat") },
	] satisfies ManagementOfficer[],
};

export const managementRelated = {
	title: "More about your local government",
	links: [
		{ href: "/government/executive-council", title: "Executive Council", description: "Meet the executive leadership guiding policy and council services." },
		{ href: "/government/legislative-house", title: "Legislative Members", description: "Meet the representatives of our communities." },
		{ href: "/government/departments", title: "Departments", description: "Find the office responsible for the services you need." },
	],
};
