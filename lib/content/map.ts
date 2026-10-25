export const mapCategories = [
	{ id: "government", label: "Government buildings", dotClassName: "bg-council-green", color: "#173d32" },
	{ id: "health", label: "Health centres", dotClassName: "bg-[#c45c48]", color: "#c45c48" },
	{ id: "schools", label: "Schools", dotClassName: "bg-[#5b86a8]", color: "#5b86a8" },
	{ id: "markets", label: "Markets", dotClassName: "bg-[#6f8f72]", color: "#6f8f72" },
	{ id: "commercial", label: "Commercial centres", dotClassName: "bg-[#c39828]", color: "#c39828" },
] as const;

export type MapCategoryId = (typeof mapCategories)[number]["id"];

export type MapPlace = {
	id: string;
	name: string;
	address: string;
	category: MapCategoryId;
	lat: number;
	lng: number;
};

export const mapPlaces: MapPlace[] = [
	{
		id: "secretariat",
		name: "Ikorodu North LCDA Secretariat",
		address: "Ikorodu–Shagamu Road, Isiu, Ikorodu, Lagos 104101",
		category: "government",
		lat: 6.659608,
		lng: 3.61872,
	},
	{
		id: "marriage-registry",
		name: "Marriage Registry",
		address: "Isiu, Ikorodu North LCDA",
		category: "government",
		lat: 6.6611,
		lng: 3.6168,
	},
	{
		id: "battalion-174",
		name: "174 Battalion",
		address: "Odogunyan, Ikorodu",
		category: "government",
		lat: 6.6665,
		lng: 3.5175,
	},
	{
		id: "isiu-phc",
		name: "Isiu Primary Health Centre",
		address: "Isiu Road, Isiu",
		category: "health",
		lat: 6.6569,
		lng: 3.6222,
	},
	{
		id: "agbede-phc",
		name: "Agbede Primary Health Centre",
		address: "Agbede Road, Agbede",
		category: "health",
		lat: 6.667423,
		lng: 3.489338,
	},
	{
		id: "omolaiye-hp",
		name: "Omolaiye Health Post",
		address: "Fiwakesin Covenant Estate, Agbede",
		category: "health",
		lat: 6.6692,
		lng: 3.492,
	},
	{
		id: "odo-nla-phc",
		name: "Odo Nla Primary Health Centre",
		address: "Shagamu Road, Odo Nla",
		category: "health",
		lat: 6.672392,
		lng: 3.537528,
	},
	{
		id: "parafa-phc",
		name: "Parafa Primary Health Centre",
		address: "Parafa Village, Erikorodo",
		category: "health",
		lat: 6.638925,
		lng: 3.547747,
	},
	{
		id: "lasunwon-phc",
		name: "Lasunwon Primary Health Centre",
		address: "Opposite LASUSTECH, off Sagamu Road, Lasunwon",
		category: "health",
		lat: 6.6426,
		lng: 3.5272,
	},
	{
		id: "agbala-paediatric",
		name: "Agbala Paediatric Centre",
		address: "Agbala, Ikorodu",
		category: "health",
		lat: 6.631522,
		lng: 3.508507,
	},
	{
		id: "lasustech",
		name: "Lagos State University of Science and Technology",
		address: "Awolowo Road, Ikorodu",
		category: "schools",
		lat: 6.640207,
		lng: 3.524484,
	},
	{
		id: "odogunyan-secondary",
		name: "Odogunyan Secondary School",
		address: "Odogunyan",
		category: "schools",
		lat: 6.664076,
		lng: 3.520489,
	},
	{
		id: "farm-settlement-primary",
		name: "Farm Settlement Community Primary School",
		address: "Sagamu Road, Odogunyan",
		category: "schools",
		lat: 6.658377,
		lng: 3.520519,
	},
	{
		id: "zumratul-primary",
		name: "Zumratul Islamiyyah Primary School",
		address: "Odogunyan",
		category: "schools",
		lat: 6.6558,
		lng: 3.5238,
	},
	{
		id: "idera-primary",
		name: "Idera Community Primary School",
		address: "Between Odogunyan and Agbede",
		category: "schools",
		lat: 6.6629,
		lng: 3.5049,
	},
	{
		id: "isiu-primary",
		name: "Local Government Primary School, Isiu",
		address: "Isiu",
		category: "schools",
		lat: 6.6578,
		lng: 3.6155,
	},
	{
		id: "isiu-jss",
		name: "Isiu Junior Secondary School",
		address: "Isiu",
		category: "schools",
		lat: 6.6624,
		lng: 3.621,
	},
	{
		id: "omolaye-primary",
		name: "Omolaye Primary School",
		address: "Agbede",
		category: "schools",
		lat: 6.6655,
		lng: 3.4868,
	},
	{
		id: "igbaga-secondary",
		name: "Igbaga Secondary School",
		address: "Igbaga",
		category: "schools",
		lat: 6.674794,
		lng: 3.582767,
	},
	{
		id: "isiu-market",
		name: "Isiu Market",
		address: "Isiu",
		category: "markets",
		lat: 6.6608,
		lng: 3.6142,
	},
	{
		id: "lucky-fibres",
		name: "Lucky Fibres",
		address: "Parafa, Odogunyan",
		category: "commercial",
		lat: 6.6426,
		lng: 3.545996,
	},
];

export const mapCategoryById = Object.fromEntries(mapCategories.map((category) => [category.id, category])) as Record<MapCategoryId, (typeof mapCategories)[number]>;

export const fullMapHref = "https://www.google.com/maps/search/?api=1&query=Ikorodu+North+LCDA+Ikorodu-Shagamu+Road+Isiu";
