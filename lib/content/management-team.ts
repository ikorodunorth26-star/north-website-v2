import type { FigmaAsset } from "./figma-assets";

export type ManagementOfficer = {
	name: string;
	role: string;
	image: FigmaAsset;
	/** Public contact number when available. */
	phone?: string;
	/** Tailwind object-position class for face-safe cropping. */
	portraitFocus?: string;
};

const portrait = (file: string, width: number, height: number, alt: string): FigmaAsset => ({
	src: `/images/government/management/${file}`,
	width,
	height,
	alt,
});

const areaOfficerPortrait = (file: string, width: number, height: number, alt: string): FigmaAsset => ({
	src: `/images/government/nulge/${file}`,
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
	description: "The administrative arm is led by the Council Manager. It coordinates the departments that deliver services across Ikorodu North, including administration, works, budget, agriculture, environment, health, education and area offices.",
	responsibilities: [
		{ title: "Council management", description: "The Council Manager coordinates departments and the day-to-day work of the secretariat at Isiu." },
		{ title: "Public finance", description: "The Council Treasurer keeps revenue, budgets, payroll and spending on record." },
		{ title: "Department desks", description: "Heads of department run works and infrastructure, primary health, education and library services, environmental health, budget and planning, agriculture, tourism and heritage, legal services, public affairs and information and communication technology." },
		{ title: "Area offices", description: "Area officers keep council administration present in communities such as Agbede and Isiu, supporting local service delivery." },
	],
};

export const managementDirectory = {
	title: "Meet the management team.",
	description: "The officers who keep administration moving from the secretariat at Isiu.",
	officers: [
		{ name: "Mr. Nasiru Abayomi Samsideen", role: "Council Manager", image: portrait("nairu-abayomi-samsideen.webp", 720, 1080, "Mr. Nairu Abayomi Samsideen"), phone: "08034040295" },
		{ name: "Bankole Esther Oluyemi", role: "Council Treasurer", image: portrait("bankole-esther-oluyemi.webp", 664, 996, "Bankole Esther Oluyemi"), phone: "08033009463" },
		{ name: "Awonusi Ademola A", role: "Clerk of the House", image: portrait("awonusi-ademola.webp", 664, 996, "Awonusi Ademola A"), phone: "08034188308" },
		{ name: "Mr Amori Muritala Kehinde", role: "Head of Department, Information & Communication Technology", image: portrait("amori-muritala-kehinde.webp", 664, 996, "Mr Amori Muritala Kehinde"), phone: "08110479658" },
		{ name: "Mr. Akiode Oluwaseyi O.", role: "Head of Department, Agriculture, Rural & Social Development", image: portrait("akiode-oluwaseyi.webp", 809, 920, "Mr. Akiode Oluwaseyi O."), phone: "08023531163" },
		{ name: "Mr Ogunleye Akintope Abayomi", role: "Head of Department, Planning, Budget, Research & Statistics", image: portrait("ogunleye-akintope-abayomi.webp", 664, 996, "Mr Ogunleye Akintope Abayomi"), phone: "08033306894" },
		{ name: "Eng. Akinsanya Sunday", role: "Head of Department, Works & Infrastructure", image: portrait("akinsanya-sunday.webp", 664, 996, "Eng. Akinsanya Sunday"), phone: "07055552240 / 07075855762" },
		{ name: "Dr. Wajero K T", role: "Medical Officer of Health", image: portrait("wajero-kt.webp", 664, 996, "Dr. Wajero K T"), phone: "08035815694" },
		{ name: "Com. Olawore Elijah", role: "Head of Department, Tourism & Heritage", image: portrait("olawore-elijah.webp", 664, 996, "Com. Olawore Elijah"), phone: "08023555119" },
		{ name: "Mr Ganiyu Abideen Maiyegun", role: "Head of Department, Education & Library Services", image: portrait("ganiyu-abideen-maiyegun.webp", 664, 996, "Mr Ganiyu Abideen Maiyegun"), phone: "09158412089" },
		{ name: "Mr Japhet O Enemunhe", role: "Head of Public Affairs", image: portrait("japhet-enemunhe.webp", 664, 910, "Mr Japhet O Enemunhe"), phone: "08033032860" },
		{ name: "Mr Ahoton Jameson Thona", role: "Head of Department, Environmental Health Services", image: portrait("ahoton-jameson-thona.webp", 664, 996, "Mr Ahoton Jameson Thona"), phone: "07016503834" },
		{ name: "Barr. Amusa Adebayo Aminat", role: "Head of Department, Legal", image: portrait("amusa-adebayo-aminat.webp", 612, 924, "Barr. Amusa Adebayo Aminat"), phone: "08026316180" },
		{ name: "Shobowale Olalekan", role: "HOU Audit", image: portrait("shobowale-olalekan.webp", 682, 1024, "Shobowale Olalekan"), phone: "08033958484" },
		{ name: "Mrs Balogun Zainab Mojisola", role: "Head of Department, Women Affairs & Poverty Alleviation", image: portrait("balogun-zainab-mojisola.webp", 681, 1024, "Mrs Balogun Zainab Mojisola"), phone: "08024018440" },
		{ name: "Masha Aluroko M", role: "Area Officer Agbede", image: areaOfficerPortrait("masha-aluroko-m.webp", 720, 1080, "Masha Aluroko M"), phone: "08028272131" },
		{ name: "Okhidre Olayinka", role: "Area Officer Agbede II", image: areaOfficerPortrait("okhidre-olayinka.webp", 720, 1080, "Okhidre Olayinka"), phone: "08034408505" },
		{ name: "Osilesi Bukola", role: "Area Office Isiwu", image: areaOfficerPortrait("osilesi-bukola.webp", 720, 1080, "Osilesi Bukola"), phone: "08023982959" },
	] satisfies ManagementOfficer[],
};

export const managementRelated = {
	title: "More about your local government",
	links: [
		{ href: "/government/executive-council", title: "Executive Council", description: "Meet the executive leadership guiding policy and council services." },
		{ href: "/government/nulge-exco", title: "NULGE Exco", description: "Meet the staff union executives representing local government employees." },
		{ href: "/government/departments", title: "Departments", description: "Find the office responsible for the services you need." },
	],
};
