import type { FigmaAsset } from "./figma-assets";

export type NulgeOfficer = {
	name: string;
	role: string;
	image: FigmaAsset;
	/** Portrait not yet available — show branded pending state. */
	portraitPending?: boolean;
	/** Tailwind object-position class for face-safe cropping. */
	portraitFocus?: string;
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

/** Ensure every NULGE display name carries the Comr. honorific. */
export function withNulgeComradePrefix(name: string) {
	const trimmed = name.trim();
	if (!trimmed) return trimmed;
	if (/^comr\.?\b/i.test(trimmed) || /^comrade\b/i.test(trimmed)) {
		return trimmed.replace(/^(comrade|comr\.?)\s*/i, "Comr. ");
	}
	return `Comr. ${trimmed}`;
}

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
				"Budget, environment, education, agriculture, health and AHR representatives keep department staff connected to the union.",
		},
	],
};

export const nulgeDirectory = {
	title: "Meet the NULGE Exco.",
	description:
		"The elected and appointed officers serving Ikorodu North NULGE for this term.",
	officers: [
		{
			name: "Comr. Adebayo Femi",
			role: "Acting Chairman",
			image: portrait("adebayo-femi.webp", "Comr. Adebayo Femi"),
		},
		{
			name: "Comr. Ogunlaru Jamiu",
			role: "Vice Chairman",
			image: portrait("ogunlaru-jamiu.webp", "Comr. Ogunlaru Jamiu"),
		},
		{
			name: "Comr. Sanni Moshood",
			role: "Secretary",
			image: portrait("sanni-moshood.webp", "Comr. Sanni Moshood"),
		},
		{
			name: "Comr. Adeniran Isiaka",
			role: "Treasurer",
			image: portrait("adeniran-isiaka.webp", "Comr. Adeniran Isiaka"),
		},
		{
			name: "Comr. Ajisebutu Mulikat",
			role: "Woman Leader",
			image: portrait("ajisebutu-mulikat.webp", "Comr. Ajisebutu Mulikat"),
		},
		{
			name: "Comr. Oyeniran Quam",
			role: "The Young",
			image: portrait("oyeniran-quam.webp", "Comr. Oyeniran Quam"),
		},
		{
			name: "Comr. Awobajo Hafeez",
			role: "Asst Secretary",
			image: portrait("awobajo-hafeez.webp", "Comr. Awobajo Hafeez"),
		},
		{
			name: "Comr. Ajirotutu Ramat",
			role: "Rep Budget",
			image: portrait("ajirotutu-ramat.webp", "Comr. Ajirotutu Ramat"),
		},
		{
			name: "Comr. Omitade Muminat",
			role: "Rep Environment",
			image: portrait("omitade-muminat.webp", "Comr. Omitade Muminat"),
		},
		{
			name: "Comr. Halimat Balogun",
			role: "Auditor",
			image: pendingPortrait("Comr. Halimat Balogun"),
			portraitPending: true,
		},
		{
			name: "Comr. Olatunji Babatunde",
			role: "Trustee",
			image: portrait("olatunji-babatunde.webp", "Comr. Olatunji Babatunde"),
		},
		{
			name: "Comr. Adesoji Oluwatoyin",
			role: "Rep Education",
			image: pendingPortrait("Comr. Adesoji Oluwatoyin"),
			portraitPending: true,
		},
		{
			name: "Comr. Metibemu Elizabeth",
			role: "Rep Finance",
			image: pendingPortrait("Comr. Metibemu Elizabeth"),
			portraitPending: true,
		},
		{
			name: "Comr. Ogunfodunrin Olawale",
			role: "Rep Agric",
			image: portrait("ogunfodunrin-olawale.webp", "Comr. Ogunfodunrin Olawale"),
		},
		{
			name: "Comr. Aniooja Saheed",
			role: "Rep AHR",
			image: portrait("aniooja-saheed.webp", "Comr. Aniooja Saheed"),
		},
		{
			name: "Comr. Yassuf Olamide",
			role: "Rep Health",
			image: pendingPortrait("Comr. Yassuf Olamide"),
			portraitPending: true,
		},
		{
			name: "Comr. Adeniji Husenat Mopelola",
			role: "Marriage Registrar",
			image: portrait(
				"adeniji-husenat-mopelola.webp",
				"Comr. Adeniji Husenat Mopelola",
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
			description: "Find the office responsible for the services you need.",
			title: "Departments",
		},
	],
};
