import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/reususables/site";
import { getWard, wards } from "@/lib/content/wards";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { WardView } from "@/view";

type WardPageProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
	return wards.map((ward) => ({ slug: ward.slug }));
};

export const generateMetadata = async ({ params }: WardPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const ward = getWard(slug);

	if (!ward) {
		return { title: "Community", robots: { index: false, follow: false } };
	}

	return createPageMetadata({
		title: `${ward.name} Ward`,
		description: ward.introduction,
		path: `/communities/${ward.slug}`,
		image: ward.image,
	});
};

const WardPage = async ({ params }: WardPageProps) => {
	const { slug } = await params;
	const ward = getWard(slug);

	if (!ward) {
		notFound();
	}

	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "About & History", path: "/about" },
					{ name: `${ward.name} Ward`, path: `/communities/${ward.slug}` },
				])}
			/>
			<WardView slug={slug} />
		</>
	);
};

export default WardPage;
