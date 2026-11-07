import type { NulgeOfficer } from "@/lib/content/nulge-exco";
import { nulgeDirectory, withNulgeComradePrefix } from "@/lib/content/nulge-exco";
import {
	findStaticPersonProfileByName,
	getStaticPersonProfile,
	hasPublicProfile,
	listStaticPublicProfiles,
	personHref,
	personNamesMatch,
	personSlugFromName,
	type PersonProfile,
	type PersonTeam,
} from "@/lib/content/people";

type PublicPerson = {
	slug: string;
	team: string;
	name: string;
	title: string;
	bio?: string;
	email?: string | null;
	phone?: string | null;
	ward?: string | null;
	sortOrder?: number;
	portrait: {
		url: string;
		alt: string;
		width: number | null;
		height: number | null;
	} | null;
};

function apiOrigin() {
	const origin = (
		process.env.NEXT_PUBLIC_API_URL ||
		process.env.API_URL ||
		""
	).trim().replace(/\/$/, "");
	return origin;
}

function unwrapPeople(json: {
	data?: { people?: PublicPerson[]; person?: PublicPerson };
	people?: PublicPerson[];
	person?: PublicPerson;
}) {
	return {
		people: json.data?.people ?? json.people ?? [],
		person: json.data?.person ?? json.person ?? null,
	};
}

export async function fetchPublicPeople(team?: string): Promise<PublicPerson[]> {
	const origin = apiOrigin();
	if (!origin) return [];

	try {
		const query = team ? `?team=${team}` : "";
		const response = await fetch(`${origin}/v1/public/people${query}`, {
			next: { revalidate: 60 },
		});
		if (!response.ok) return [];
		const json = (await response.json()) as {
			data?: { people?: PublicPerson[] };
			people?: PublicPerson[];
		};
		return unwrapPeople(json).people;
	} catch {
		return [];
	}
}

export async function fetchPublicPerson(slug: string): Promise<PublicPerson | null> {
	const origin = apiOrigin();
	if (!origin) return null;

	try {
		const response = await fetch(`${origin}/v1/public/people/${slug}`, {
			next: { revalidate: 60 },
		});
		if (!response.ok) return null;
		const json = (await response.json()) as {
			data?: { person?: PublicPerson };
			person?: PublicPerson;
		};
		return unwrapPeople(json).person;
	} catch {
		return null;
	}
}

function toPersonProfile(person: PublicPerson): PersonProfile {
	return {
		slug: person.slug,
		name: person.name,
		role: person.title,
		team: (person.team as PersonTeam) || "management",
		image: person.portrait?.url
			? {
					src: person.portrait.url,
					width: person.portrait.width ?? 720,
					height: person.portrait.height ?? 1080,
					alt: person.portrait.alt || person.name,
				}
			: {
					src: "/images/placeholders/image-fallback.svg",
					width: 800,
					height: 500,
					alt: person.name,
				},
		bio: person.bio?.trim() ?? "",
		email: person.email,
		phone: person.phone,
		ward: person.ward,
	};
}

export function toNulgeOfficers(people: PublicPerson[]): NulgeOfficer[] {
	return [...people]
		.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0) || a.name.localeCompare(b.name))
		.map((person) => {
			const name = withNulgeComradePrefix(person.name);
			if (!person.portrait?.url) {
				return {
					name,
					role: person.title,
					image: {
						src: "/images/placeholders/image-fallback.svg",
						width: 800,
						height: 500,
						alt: name,
					},
					portraitPending: true,
				};
			}

			return {
				name,
				role: person.title,
				image: {
					src: person.portrait.url,
					width: person.portrait.width ?? 720,
					height: person.portrait.height ?? 1080,
					alt: person.portrait.alt || name,
				},
			};
		});
}

/** Prefer CMS data when the API has published NULGE officers; else static content. */
export async function resolveNulgeOfficers(): Promise<NulgeOfficer[]> {
	const people = await fetchPublicPeople("nulge");
	const officers = toNulgeOfficers(people);
	return officers.length > 0 ? officers : nulgeDirectory.officers;
}

export async function resolvePersonProfile(slug: string): Promise<PersonProfile | null> {
	const fromApi = await fetchPublicPerson(slug);
	if (fromApi) {
		const profile = toPersonProfile(fromApi);
		return hasPublicProfile(profile) ? profile : null;
	}

	const fromStatic = getStaticPersonProfile(slug);
	return fromStatic && hasPublicProfile(fromStatic) ? fromStatic : null;
}

export async function listPublicProfileSlugs(): Promise<string[]> {
	const fromApi = await fetchPublicPeople();
	const apiSlugs = fromApi
		.map(toPersonProfile)
		.filter((person) => hasPublicProfile(person))
		.map((person) => person.slug);
	const staticSlugs = listStaticPublicProfiles().map((person) => person.slug);
	return [...new Set([...apiSlugs, ...staticSlugs])];
}

function findApiProfileByName(people: PersonProfile[], name: string) {
	const slug = personSlugFromName(name);
	return people.find((person) => person.slug === slug) ?? people.find((person) => personNamesMatch(person.name, name));
}

export async function resolvePersonProfileHrefByName(name: string): Promise<string | null> {
	const hrefs = await resolvePersonProfileHrefsByNames([name]);
	return hrefs.get(name.trim()) ?? null;
}

/** Resolve public profile hrefs for many display names with a single API fetch. */
export async function resolvePersonProfileHrefsByNames(names: string[]): Promise<Map<string, string>> {
	const unique = [...new Set(names.map((name) => name.trim()).filter(Boolean))];
	const hrefs = new Map<string, string>();
	if (!unique.length) return hrefs;

	const apiProfiles = (await fetchPublicPeople()).map(toPersonProfile).filter((person) => hasPublicProfile(person));

	for (const name of unique) {
		const staticProfile = findStaticPersonProfileByName(name);
		if (staticProfile && hasPublicProfile(staticProfile)) {
			hrefs.set(name, personHref(staticProfile.slug));
			continue;
		}

		const apiProfile = findApiProfileByName(apiProfiles, name);
		if (apiProfile) {
			hrefs.set(name, personHref(apiProfile.slug));
		}
	}

	return hrefs;
}
