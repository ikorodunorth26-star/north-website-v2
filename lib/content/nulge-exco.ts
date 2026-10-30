import type { FigmaAsset } from "./figma-assets";

export type NulgeOfficer = {
	name: string;
	role: string;
	image: FigmaAsset;
	/** Portrait not yet available — show branded pending state. */
	portraitPending?: boolean;
};

const portrait = (
	file: string,
	alt: string,
	width = 720,
	height = 1080,
): FigmaAsset => ({
	src: `/images/government/nulge/${file}`,
	width,
	height,
	alt,
});

const pendingPortrait = (alt: string): FigmaAsset => ({
	src: "/images/placeholders/image-fallback.svg",
	width: 800,
	height: 500,
	alt,
});

export const nulgeExcoPage = {
	label: "Workforce",
	title: "IKORODU NORTH NULGE EXCO",
	description:
		"Meet the Nigeria Union of Local Government Employees executives representing staff across Ikorodu North LCDA.",
};

export const nulgeOverview = {
	eyebrow: "Staff union leadership",
	heading: "NULGE executives",
	description:
		"NULGE is the Nigeria Union of Local Government Employees. These officers speak for the workforce, support staff welfare, and work with council leadership on labour and service matters across the LCDA.",
	responsibilities: [
		{
			title: "Staff representation",
			description:
				"The executive committee represents local government employees in dialogue with council management and public institutions.",
		},
		{
			title: "Welfare and solidarity",
			description:
				"Officers coordinate welfare concerns, youth and women leadership, and peer support across departments and area offices.",
		},
		{
			title: "Service desks",
			description:
				"Budget, environment, education, agriculture, health, AHR and area office representatives keep field staff connected to the union.",
		},
	],
};

export const nulgeDirectory = {
	title: "Meet the NULGE Exco.",
	description:
		"The elected and appointed officers serving Ikorodu North NULGE for this term.",
	officers: [
		{
			name: "Adebayo Femi",
			role: "Chairman",
			image: portrait("adebayo-femi.webp", "Adebayo Femi"),
		},
		{
			name: "Ogunlaru Jamiu",
			role: "Vice Chairman",
			image: portrait("ogunlaru-jamiu.webp", "Ogunlaru Jamiu"),
		},
		{
			name: "Sanni Moshood",
			role: "Secretary",
			image: portrait("sanni-moshood.webp", "Sanni Moshood"),
		},
		{
			name: "Adeniran Isiaka",
			role: "Treasurer",
			image: portrait("adeniran-isiaka.webp", "Adeniran Isiaka"),
		},
		{
			name: "Ajisebutu Mulikat",
			role: "Woman Leader",
			image: portrait("ajisebutu-mulikat.webp", "Ajisebutu Mulikat"),
		},
		{
			name: "Oyeniran Quam",
			role: "The Young",
			image: portrait("oyeniran-quam.webp", "Oyeniran Quam"),
		},
		{
			name: "Awobajo Hafeez",
			role: "Asst Secretary",
			image: portrait("awobajo-hafeez.webp", "Awobajo Hafeez"),
		},
		{
			name: "Ajirotutu Ramat",
			role: "Rep Budget",
			image: portrait("ajirotutu-ramat.webp", "Ajirotutu Ramat"),
		},
		{
			name: "Omitade Muminat",
			role: "Rep Environment",
			image: portrait("omitade-muminat.webp", "Omitade Muminat"),
		},
		{
			name: "Halimat Balogun",
			role: "Auditor",
			image: pendingPortrait("Halimat Balogun"),
			portraitPending: true,
		},
		{
			name: "Olatunji Babatunde",
			role: "Trustee",
			image: portrait("olatunji-babatunde.webp", "Olatunji Babatunde"),
		},
		{
			name: "Adesoji Oluwatoyin",
			role: "Rep Education",
			image: pendingPortrait("Adesoji Oluwatoyin"),
			portraitPending: true,
		},
		{
			name: "Metibemu Elizabeth",
			role: "Rep Finance",
			image: pendingPortrait("Metibemu Elizabeth"),
			portraitPending: true,
		},
		{
			name: "Ogunfodunrin Olawale",
			role: "Rep Agric",
			image: portrait("ogunfodunrin-olawale.webp", "Ogunfodunrin Olawale"),
		},
		{
			name: "Aniooja Saheed",
			role: "Rep AHR",
			image: portrait("aniooja-saheed.webp", "Aniooja Saheed"),
		},
		{
			name: "Yassuf Olamide",
			role: "Rep Health",
			image: pendingPortrait("Yassuf Olamide"),
			portraitPending: true,
		},
		{
			name: "Masha Aluroko M",
			role: "Area Officer Agbede",
			image: portrait("masha-aluroko-m.webp", "Masha Aluroko M"),
		},
		{
			name: "Okhidre Olayinka",
			role: "Area Officer Agbede II",
			image: portrait("okhidre-olayinka.webp", "Okhidre Olayinka"),
		},
		{
			name: "Osilesi Bukola",
			role: "Area Office Isiwu",
			image: portrait("osilesi-bukola.webp", "Osilesi Bukola"),
		},
		{
			name: "Adeniji Husenat Mopelola",
			role: "Marriage Registrar",
			image: portrait(
				"adeniji-husenat-mopelola.webp",
				"Adeniji Husenat Mopelola",
				799,
				1200,
			),
		},
	] satisfies NulgeOfficer[],
};

export const nulgeRelated = {
	title: "More about your local government",
	links: [
		{
			href: "/government/management-team",
			title: "Management Team",
			description: "Meet the officers who run day-to-day administration at the secretariat.",
		},
		{
			href: "/government/executive-council",
			title: "Executive Council",
			description: "Meet the executive leadership guiding policy and council services.",
		},
		{
			href: "/government/departments",
			title: "Departments",
			description: "Find the office responsible for the services you need.",
		},
	],
};
