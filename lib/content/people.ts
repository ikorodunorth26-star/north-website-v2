import type { FigmaAsset } from "./figma-assets";
import { figmaAssets } from "./figma-assets";

export type PersonTeam = "executive" | "council" | "management" | "nulge";

export type PersonProfile = {
	slug: string;
	name: string;
	role: string;
	team: PersonTeam;
	image: FigmaAsset;
	bio: string;
	email?: string | null;
	phone?: string | null;
	ward?: string | null;
	departmentSlug?: string | null;
	highlights?: string[];
};

/** Meaningful biography is required before a public profile page is available. */
export const hasPublicProfile = (person: Pick<PersonProfile, "bio" | "highlights"> | null | undefined) => {
	if (!person) return false;
	const bio = person.bio?.trim() ?? "";
	const highlights = person.highlights?.filter((item) => item.trim()) ?? [];
	return bio.length >= 40 || highlights.length > 0;
};

export function personSlugFromName(name: string) {
	return name
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 80);
}

export function personHref(slug: string) {
	return `/government/people/${slug}`;
}

const NAME_STOP_WORDS = new Set(["hon", "honourable", "mayor", "dr", "mrs", "mr", "ms", "chief", "eng", "engr", "barr", "prof"]);

/** Significant name tokens for fuzzy person matching across short/long display names. */
export function personNameTokens(name: string) {
	return name
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, " ")
		.split(/\s+/)
		.filter((token) => token.length > 2 && !NAME_STOP_WORDS.has(token));
}

export function personNamesMatch(a: string, b: string) {
	const left = personNameTokens(a);
	const right = personNameTokens(b);
	if (!left.length || !right.length) return false;
	const [shorter, longer] = left.length <= right.length ? [left, right] : [right, left];
	return shorter.every((token) => longer.includes(token));
}

/**
 * Curated static profiles. Keep this list limited to people with verified public copy.
 * CMS/API profiles with biographies are merged at resolve time.
 * Sources used for research notes: Impact Newspaper, Authority News, Ajasa-Info, QuickGist, LASIEC.
 */
export const staticPersonProfiles: PersonProfile[] = [
	{
		slug: "mayor-ameen-olawale-ibrahim-apanisile",
		name: "Mayor Ameen Olawale Ibrahim Apanisile",
		role: "Executive Chairman",
		team: "executive",
		image: figmaAssets.government.chairman,
		bio: [
			"Mayor Ameen Olawale Ibrahim Apanisile is the Executive Chairman of Ikorodu North Local Council Development Area. A town planner from the Apanisile and Olokunola families of Ikorodu, he completed primary and secondary education in Lagos before training in town and regional planning.",
			"He holds an HND in Town and Regional Planning from the Federal Polytechnic Ilaro, a B.Sc in Building Survey and Property Management from the University of Bolton in the United Kingdom, and an MBA in Finance from Ladoke Akintola University of Technology (LAUTECH), Ogbomoso.",
			"His career spans public and private service in Nigeria and the United Kingdom, including roles with the Lagos State Internal Revenue Service (LIRS), the Nigeria Police Force, El-Ameen Bros Nig Enterprise, City Facility Management, Prime Time Recruitment Limited, Royal Mail and Park Cakes Limited.",
			"He served eight years as Vice Chairman of Ikorodu North LCDA before winning the July 2025 local government election on the APC ticket with 13,844 votes. He took office in July 2025 and leads the New Deal agenda for infrastructure, healthcare, education, sanitation, youth opportunity and open government from the secretariat at Isiu.",
			"Under his leadership the council has advanced climate-smart programmes on waste management, green infrastructure and community engagement. In 2026 he was selected to receive the Second Global Climate Change Champion Award, to be presented at COP 31 in Turkey by Nurses Across the Borders.",
		].join("\n\n"),
		email: "chairman@ikorodunorthlcda.lg.gov.ng",
		phone: "08165442373 (24hrs)",
		highlights: [
			"HND Town & Regional Planning (Federal Polytechnic Ilaro); B.Sc Building Survey & Property Management (University of Bolton, UK); MBA Finance (LAUTECH).",
			"Eight years as Vice Chairman before election as Executive Chairman in July 2025.",
			"Leads the New Deal agenda across infrastructure, health, education, sanitation and opportunity.",
			"Selected for the Global Climate Change Champion Award at COP 31 (Turkey, 2026).",
		],
	},
	{
		slug: "hon-mathew-aliu-adesanya",
		name: "Hon. Mathew Aliu Adesanya",
		role: "Vice Chairman",
		team: "executive",
		image: figmaAssets.government.viceChairman,
		bio: [
			"Hon. Mathew Aliu Adesanya is the Vice Chairman of Ikorodu North Local Council Development Area. A long-serving community and political leader in the council, he previously served as Secretary to the Local Government and later as a Supervisory Councillor, including a tour as Supervisor for Education.",
			"He contested successive chairmanship cycles before emerging as the APC Vice Chairmanship candidate alongside Mayor Ameen Apanisile for the 2025 local government elections. The APA-MATH ticket campaigned across the five wards and took office after the July 2025 poll.",
			"As Vice Chairman he brings administrative experience from the secretariat and cabinet to support day-to-day coordination of the New Deal agenda and inter-council engagement across Ikorodu Division.",
		].join("\n\n"),
		highlights: [
			"Former Secretary to Ikorodu North LCDA (SLG).",
			"Former Supervisory Councillor, including Supervisor for Education.",
			"Elected Vice Chairman on the APC APA-MATH ticket in July 2025.",
		],
	},
	{
		slug: "hon-benson-titilayo-abosede",
		name: "Hon Benson Titilayo Abosede",
		role: "Leader of the House",
		team: "council",
		image: figmaAssets.government.leader,
		ward: "Ward E2 · Erikorodo",
		bio: [
			"Hon. Benson Titilayo Abosede (also known as Bose Benson) represents Ward E2 Erikorodo in the Ikorodu North LCDA Legislative Council. She was elected Councillor in the July 2025 local government elections and emerged Leader of the House at the inauguration of the sixth Legislative Council.",
			"In office she has focused on skills, livelihoods and community empowerment. She facilitated the SPEED UP LAGOS Anti-Poverty Squad street-to-street training programme, which graduated more than 500 residents in gele and make-up, AI graphics design, catering and tailoring at Aladiye Town Hall, Maya.",
			"As Leader of the House she works with colleagues across the five wards to support the Executive Chairman and strengthen legislative oversight for residents of Ikorodu North.",
		].join("\n\n"),
		highlights: [
			"Councillor for Ward E2 Erikorodo; elected Leader of the House in July 2025.",
			"Facilitated SPEED UP LAGOS skills training for 500+ residents in Maya, Erikorodo.",
			"Focus on entrepreneurship, poverty reduction and community development.",
		],
	},
];

const staticBySlug = new Map(staticPersonProfiles.map((person) => [person.slug, person]));
const staticByName = new Map(staticPersonProfiles.map((person) => [person.name.toLowerCase(), person]));

export function getStaticPersonProfile(slug: string) {
	return staticBySlug.get(slug);
}

export function findStaticPersonProfileByName(name: string) {
	const trimmed = name.trim();
	if (!trimmed) return undefined;

	const direct = staticByName.get(trimmed.toLowerCase());
	if (direct) return direct;

	const slug = personSlugFromName(trimmed);
	const bySlug = staticBySlug.get(slug);
	if (bySlug) return bySlug;

	return staticPersonProfiles.find((person) => personNamesMatch(person.name, trimmed));
}

export function listStaticPublicProfiles() {
	return staticPersonProfiles.filter((person) => hasPublicProfile(person));
}

export const personProfileCopy = {
	label: "Profiles",
	labelHref: "/government/management-team",
	highlightsHeading: "At a glance",
	contactHeading: "Contact",
	backLabel: "Back to government",
	viewProfile: "View profile",
	departmentLabel: "Department",
};
