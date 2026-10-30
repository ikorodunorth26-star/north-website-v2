import type { NulgeOfficer } from "@/lib/content/nulge-exco";
import { nulgeDirectory } from "@/lib/content/nulge-exco";

type PublicPerson = {
	slug: string;
	team: string;
	name: string;
	title: string;
	sortOrder: number;
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

export async function fetchPublicPeople(team: string): Promise<PublicPerson[]> {
	const origin = apiOrigin();
	if (!origin) return [];

	try {
		const response = await fetch(`${origin}/v1/public/people?team=${team}`, {
			next: { revalidate: 60 },
		});
		if (!response.ok) return [];
		const json = (await response.json()) as {
			data?: { people?: PublicPerson[] };
			people?: PublicPerson[];
		};
		return json.data?.people ?? json.people ?? [];
	} catch {
		return [];
	}
}

export function toNulgeOfficers(people: PublicPerson[]): NulgeOfficer[] {
	return [...people]
		.sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name))
		.map((person) => {
			if (!person.portrait?.url) {
				return {
					name: person.name,
					role: person.title,
					image: {
						src: "/images/placeholders/image-fallback.svg",
						width: 800,
						height: 500,
						alt: person.name,
					},
					portraitPending: true,
				};
			}

			return {
				name: person.name,
				role: person.title,
				image: {
					src: person.portrait.url,
					width: person.portrait.width ?? 720,
					height: person.portrait.height ?? 1080,
					alt: person.portrait.alt || person.name,
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
