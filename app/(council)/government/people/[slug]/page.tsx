import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/reususables/site";
import { listPublicProfileSlugs, resolvePersonProfile } from "@/lib/api/public-people";
import { personHref } from "@/lib/content/people";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { PersonProfileView } from "@/view";

type PersonPageProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
	const slugs = await listPublicProfileSlugs();
	return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: PersonPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const person = await resolvePersonProfile(slug);

	if (!person) {
		return { title: "Profile", robots: { index: false, follow: false } };
	}

	const description = person.bio.replace(/\s+/g, " ").trim().slice(0, 160);
	return createPageMetadata({
		title: person.name,
		description: description || `${person.name}, ${person.role} at Ikorodu North LCDA.`,
		path: personHref(person.slug),
		image: person.image,
	});
};

const PersonProfilePage = async ({ params }: PersonPageProps) => {
	const { slug } = await params;
	const person = await resolvePersonProfile(slug);

	if (!person) {
		notFound();
	}

	const path = personHref(person.slug);

	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Government", path: "/government/executive-council" },
					{ name: person.name, path },
				])}
			/>
			<PersonProfileView person={person} />
		</>
	);
};

export default PersonProfilePage;
