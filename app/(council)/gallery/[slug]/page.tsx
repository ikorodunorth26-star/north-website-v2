import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/reususables/site";
import { galleryAlbums, getAlbum } from "@/lib/content/gallery";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { GalleryAlbumView } from "@/view";

type GalleryAlbumPageProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
	return galleryAlbums.map((album) => ({ slug: album.slug }));
};

export const generateMetadata = async ({ params }: GalleryAlbumPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const album = getAlbum(slug);

	if (!album) {
		return { title: "Gallery album", robots: { index: false, follow: false } };
	}

	return createPageMetadata({
		title: album.title,
		description: album.summary,
		path: `/gallery/${album.slug}`,
		image: album.cover,
	});
};

const GalleryAlbumPage = async ({ params }: GalleryAlbumPageProps) => {
	const { slug } = await params;
	const album = getAlbum(slug);

	if (!album) {
		notFound();
	}

	const path = `/gallery/${album.slug}`;

	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Gallery", path: "/gallery" },
					{ name: album.title, path },
				])}
			/>
			<GalleryAlbumView album={album} />
		</>
	);
};

export default GalleryAlbumPage;
