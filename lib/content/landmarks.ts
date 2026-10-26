import { figmaAssets, type FigmaAsset } from "./figma-assets";
import { reportImages } from "./report-images";

export const landmarksPage = {
	label: "Places & heritage",
	title: "Landmarks\n& Culture",
	description: "The places that hold Ikorodu North together: the secretariat at Isiu, the university gate, the Odogunyan industries, and the customs kept by the Eweye and the Baales.",
};

export type LandmarkGroup = "administration" | "learning" | "industry" | "tradition" | "movement" | "community";

export type LandmarkImage = FigmaAsset & {
	caption?: string;
	credit?: {
		author: string;
		href: string;
	};
};

export type Landmark = {
	title: string;
	place: string;
	group: LandmarkGroup;
	summary: string;
	href?: string;
	image?: LandmarkImage;
};

export const landmarkGroups = [
	{ label: "All places", value: "all" },
	{ label: "Council", value: "administration" },
	{ label: "Learning", value: "learning" },
	{ label: "Industry", value: "industry" },
	{ label: "Culture", value: "tradition" },
	{ label: "Routes", value: "movement" },
	{ label: "Community", value: "community" },
] as const;

export const landmarks: Landmark[] = [
	{
		title: "Ikorodu North LCDA Secretariat",
		place: "Isiu Town",
		group: "administration",
		summary: "The secretariat at Isiu is the council’s administrative seat, on the Ikorodu–Shagamu Road. From here the chairman’s office, the legislative house and the departments serve the five wards.",
		href: "/communities/isiu",
		image: figmaAssets.home.heroSecretariat,
	},
	{
		title: "Lagos State University of Science and Technology",
		place: "First Gate",
		group: "learning",
		summary: "The council’s record names LASUSTECH, formerly Lagos State Polytechnic, as the state university in Ikorodu North. The community opposite the main gate is known as First Gate, also Lambo-Lasunwon, on the Ikorodu–Shagamu road.",
		image: {
			src: "/images/landmarks/lasustech-gate.png",
			width: 498,
			height: 307,
			alt: "West Gate of Lagos State University of Science and Technology, Ikorodu",
		},
	},
	{
		title: "Odogunyan Industrial Estate",
		place: "Odogunyan",
		group: "industry",
		summary: "Odogunyan is the LCDA’s industrial and residential hub. The council names African Steel Mills, Lucky Fibres and PZ among the large works there, alongside smaller factories and the settlements around them.",
		href: "/communities/odogunyan",
		image: {
			...figmaAssets.home.wardOdogunyan,
			caption: "Idera Community Primary School, Odogunyan",
		},
	},
	{
		title: "Isiu Town and the Eweye palace",
		place: "Isiu",
		group: "tradition",
		summary: "Isiu is one of the older settlements in the LCDA and the seat of the Eweye. His Royal Majesty Oba David Kayode Raji (Olupejobi II) is the custodian of its customs, with Baales across the other communities. In April 2025 a foundation was laid for an ultra-modern Eweye palace.",
		href: "/communities/isiu",
		image: {
			...reportImages.hundredDaysCrowd,
			caption: "A gathering at Isiu",
		},
	},
	{
		title: "Ikorodu–Shagamu corridor",
		place: "Lagos to Ogun State",
		group: "movement",
		summary: "Ikorodu North is the gateway between Lagos and Ogun. The Ikorodu–Shagamu road carries trade toward Ogijo and Sagamu, and links the industrial estate, the secretariat and the wards along the way.",
		image: {
			...figmaAssets.home.wardOlorunda,
			caption: "Adamo–Araro Road, Olorunda",
		},
	},
	{
		title: "Marriage Registry",
		place: "Isiu",
		group: "administration",
		summary: "The Marriage Registry beside the secretariat was renewed in the first hundred days, so residents can register marriages closer to home.",
		href: "/communities/isiu",
		image: {
			...figmaAssets.home.heroSecretariat,
			caption: "The secretariat compound at Isiu",
		},
	},
	{
		title: "174 Battalion",
		place: "Losi-Onikoko, Odogunyan",
		group: "community",
		summary: "The battalion sits in Odogunyan. Army Children Primary School at Losi-Onikoko, beside the barracks, was flagged off for reconstruction in July 2026.",
		href: "/communities/odogunyan",
	},
	{
		title: "Isiu Market",
		place: "Isiu",
		group: "community",
		summary: "Isiu Market is the trading ground beside the headquarters town, where produce and household goods move between the wards and the highway.",
		href: "/communities/isiu",
	},
	{
		title: "Farm settlements",
		place: "Erikorodo and Odogunyan",
		group: "industry",
		summary: "The council records farm settlements at Erikorodo and Odogunyan. Farming, poultry and produce markets also sustain Isiu, Adamo, Agbala, Agbede and the other rural communities.",
		href: "/communities/erikorodo",
	},
];

export const cultureNotes = [
	{
		eyebrow: "Annual festival",
		title: "Eweye Day",
		paragraphs: [
			"Eweye Day is the annual celebration of Isiu, held to strengthen unity and community development. The council names it as the LCDA’s principal cultural event.",
			"The 2024 festival opened at the Eweye’s palace and ran through a cultural day, a market and artisans’ day, education programmes, football, a ram competition, free healthcare, sanitation and a grand finale.",
		],
	},
	{
		eyebrow: "Traditional leadership",
		title: "The Eweye and the Baales",
		paragraphs: [
			"Traditional institutions sit alongside the council. Oba David Kayode Raji (Olupejobi II), the Eweye of Isiu, keeps the customs of the headquarters town.",
			"Baales and community leaders carry the same duty in the other wards. The council records more than 300 community development associations and 10 joint associations across those places.",
		],
	},
];
