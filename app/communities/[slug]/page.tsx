import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getWard, wards } from "@/lib/content/wards";
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
		return { title: "Community | Ikorodu North LCDA" };
	}

	return {
		title: `${ward.name} Ward | Ikorodu North LCDA`,
		description: ward.introduction,
	};
};

const WardPage = async ({ params }: WardPageProps) => {
	const { slug } = await params;

	if (!getWard(slug)) {
		notFound();
	}

	return <WardView slug={slug} />;
};

export default WardPage;
