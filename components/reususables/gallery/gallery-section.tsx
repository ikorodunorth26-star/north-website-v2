"use client";

import { useMemo, useState } from "react";

import type { GalleryAlbum } from "@/lib/content/gallery";
import { galleryCategories } from "@/lib/content/gallery";

import { CategoryFilter } from "../news";
import { SectionHeading } from "../site";
import GalleryCard from "./gallery-card";

type GallerySectionProps = {
	albums: GalleryAlbum[];
};

const GallerySection = ({ albums }: GallerySectionProps) => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredAlbums = useMemo(() => {
		if (activeCategory === "all") return albums;
		return albums.filter((album) => album.filterGroup === activeCategory);
	}, [activeCategory, albums]);

	return (
		<section className="bg-background py-14 lg:py-16">
			<div className="mx-auto flex w-full max-w-council flex-col gap-9 px-5 md:px-10 min-[1408px]:px-0">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<SectionHeading title="Event albums" eyebrow="COUNCIL, PROJECTS & COMMUNITY" />
					<CategoryFilter
						categories={galleryCategories}
						activeCategory={activeCategory}
						onCategoryChange={setActiveCategory}
						label="Filter gallery albums by category"
					/>
				</div>

				{filteredAlbums.length ? (
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{filteredAlbums.map((album) => (
							<GalleryCard key={album.slug} album={album} />
						))}
					</div>
				) : (
					<div className="rounded-[20px] bg-card p-8 text-council-subtle">No albums match this filter. Try another category.</div>
				)}
			</div>
		</section>
	);
};

export default GallerySection;
