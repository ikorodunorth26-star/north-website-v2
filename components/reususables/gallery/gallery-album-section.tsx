import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { GalleryAlbum } from "@/lib/content/gallery";
import { getRelatedAlbums } from "@/lib/content/gallery";
import { PhotoGallery } from "@/components/reususables/projects";
import { ArticleLayout, SectionHeading } from "@/components/reususables/site";

import GalleryCard from "./gallery-card";

type GalleryAlbumSectionProps = {
	album: GalleryAlbum;
};

const GalleryAlbumSection = ({ album }: GalleryAlbumSectionProps) => {
	const relatedAlbums = getRelatedAlbums(album.slug);

	return (
		<>
			<ArticleLayout
				backHref="/gallery"
				backLabel="Back to Gallery"
				title={album.title}
				image={album.cover}
				caption={album.cover.alt}
				meta={
					<>
						<time dateTime={album.date}>{album.date}</time>
						<span aria-hidden="true">•</span>
						<span>{album.photos.length} photos</span>
						<span aria-hidden="true">•</span>
						<span>{album.category}</span>
					</>
				}>
				<p className="max-w-[720px] text-lg leading-8 text-council-green">{album.summary}</p>
				{album.relatedNewsHref ? (
					<p className="mt-6">
						<Link
							href={album.relatedNewsHref}
							className="inline-flex items-center gap-2 text-base font-medium text-council-green transition-colors hover:text-council-lime focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
							Read the related news story
							<ArrowUpRight className="size-4" aria-hidden="true" />
						</Link>
					</p>
				) : null}
				<PhotoGallery photos={album.photos} title="All photographs" previewLimit={album.photos.length} headingId="gallery-album-photos" />
			</ArticleLayout>

			{relatedAlbums.length ? (
				<section className="bg-council-image py-16 lg:py-24">
					<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
						<SectionHeading title="More albums" />
						<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{relatedAlbums.map((related) => (
								<GalleryCard key={related.slug} album={related} />
							))}
						</div>
					</div>
				</section>
			) : null}
		</>
	);
};

export default GalleryAlbumSection;
