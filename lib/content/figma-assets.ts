export const figmaAssets = {
	brand: {
		councilLogo: {
			src: "/images/shared/ikorodu-north-lcda-logo.webp",
			width: 916,
			height: 913,
			alt: "Ikorodu North Local Council Development Area crest",
		},
		heroTexture: {
			src: "/images/shared/hero-noise-texture.webp",
			width: 1200,
			height: 1200,
			alt: "",
		},
	},
	news: {
		councilHeadquartersBudget: {
			src: "/images/news/council-headquarters-budget.webp",
			width: 1080,
			height: 1080,
			alt: "Council leadership presenting the 2026 budget",
		},
		solarPoweredWaterProject: {
			src: "/images/news/solar-powered-water-project.webp",
			width: 1080,
			height: 810,
			alt: "Solar-powered water infrastructure in Ikorodu North",
		},
		lasustechStudentLeaders: {
			src: "/images/news/lasustech-student-leaders.webp",
			width: 1600,
			height: 1066,
			alt: "Ikorodu North leadership meeting LASUSTECH student leaders",
		},
		communityTour: {
			src: "/images/news/community-tour.webp",
			width: 1080,
			height: 1080,
			alt: "Council officials touring communities across Ikorodu North",
		},
		councilArchive: {
			src: "/images/news/council-archive.webp",
			width: 1080,
			height: 1080,
			alt: "Ikorodu North council officials and community representatives",
		},
		neighbourhoodPriorities: {
			src: "/images/news/neighbourhood-priorities.webp",
			width: 1080,
			height: 1080,
			alt: "Residents and traditional leaders at a community gathering",
		},
		councilServicesGuide: {
			src: "/images/news/council-services-guide.webp",
			width: 417,
			height: 735,
			alt: "Ikorodu North council services building",
		},
		communityProjectDelivery: {
			src: "/images/news/community-project-delivery.webp",
			width: 4096,
			height: 2304,
			alt: "Community project delivery in Ikorodu North",
		},
	},
	home: {
		heroTexture: {
			src: "/images/home/hero-editorial-texture.webp",
			width: 1200,
			height: 1200,
			alt: "",
		},
		lagosAerial: {
			src: "/images/home/lagos-aerial-waterside.webp",
			width: 1920,
			height: 1080,
			alt: "",
		},
		mayorPortrait: {
			src: "/images/home/mayor-ameen-apanisile.webp",
			width: 848,
			height: 1457,
			alt: "Mayor Ameen Apanisile",
		},
		viceChairmanPortrait: {
			src: "/images/home/team-vice-chairman-mathew-adesanya.webp",
			width: 738,
			height: 999,
			alt: "Vice Chairman Mathew Aliu Adesanya",
		},
		leaderPortrait: {
			src: "/images/home/team-leader-benson-abosede.webp",
			width: 851,
			height: 1280,
			alt: "Leader of the House Benson Titilayo Abosede",
		},
		deputyLeaderPortrait: {
			src: "/images/home/team-deputy-leader-jimoh-iliasu.webp",
			width: 720,
			height: 1080,
			alt: "Deputy Leader of House Jimoh Idris Iliasu",
		},
		chiefWhipPortrait: {
			src: "/images/home/team-chief-whip-banjoko-babatunde.webp",
			width: 1132,
			height: 1200,
			alt: "Chief Whip Banjoko Babatunde O.",
		},
		wardIsiu: {
			src: "/images/home/ward-isiu.webp",
			width: 900,
			height: 491,
			alt: "Aerial view of Isiu community",
		},
		wardOdogunyan: {
			src: "/images/home/ward-odogunyan.webp",
			width: 900,
			height: 491,
			alt: "Street and buildings in Odogunyan",
		},
		wardOlorunda: {
			src: "/images/home/ward-olorunda.webp",
			width: 900,
			height: 491,
			alt: "Residential community in Olorunda",
		},
		wardErikorodo: {
			src: "/images/home/ward-erikorodo.webp",
			width: 900,
			height: 491,
			alt: "Homes and farmland in Erikorodo",
		},
		wardAgbala: {
			src: "/images/home/ward-agbala.webp",
			width: 900,
			height: 491,
			alt: "Community landscape in Agbala",
		},
	},
} as const;

export type FigmaAsset = {
	src: string;
	width: number;
	height: number;
	alt: string;
};
