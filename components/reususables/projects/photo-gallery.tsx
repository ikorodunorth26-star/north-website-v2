"use client";

import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalContent } from "@heroui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { FigmaAsset } from "@/lib/content/figma-assets";

import { LocalImage, SectionHeading } from "../site";

type PhotoGalleryProps = {
	photos: FigmaAsset[];
};

const previewLimit = 4;

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const activePhoto = activeIndex === null ? null : photos[activeIndex];
	const previewPhotos = photos.slice(0, previewLimit);
	const hiddenCount = photos.length - previewPhotos.length;

	useEffect(() => {
		if (activeIndex === null || photos.length < 2) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				setActiveIndex((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
			}
			if (event.key === "ArrowRight") {
				event.preventDefault();
				setActiveIndex((index) => (index === null ? index : (index + 1) % photos.length));
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [activeIndex, photos.length]);

	if (!photos.length) return null;

	const columnClass =
		previewPhotos.length >= 4
			? "grid-cols-2 sm:grid-cols-4"
			: previewPhotos.length === 3
				? "grid-cols-2 sm:grid-cols-3"
				: previewPhotos.length === 2
					? "grid-cols-2"
					: "grid-cols-1 sm:grid-cols-2";

	const showPrevious = () => {
		setActiveIndex((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
	};

	const showNext = () => {
		setActiveIndex((index) => (index === null ? index : (index + 1) % photos.length));
	};

	return (
		<section className="mt-16" aria-labelledby="photo-gallery-heading">
			<SectionHeading id="photo-gallery-heading" title="Photo gallery" titleClassName="font-bold" />
			<ul className={`mt-8 grid gap-3 sm:gap-4 ${columnClass}`}>
				{previewPhotos.map((photo, index) => {
					const isMoreTile = hiddenCount > 0 && index === previewPhotos.length - 1;
					const label = photo.alt ? `View larger photo: ${photo.alt}` : "View larger photo";

					return (
						<li key={`${photo.src}-${index}`}>
							<button
								type="button"
								className="group relative block w-full cursor-pointer rounded-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green md:rounded-[20px]"
								aria-label={isMoreTile ? `${label}. ${hiddenCount} more photos` : label}
								onClick={() => setActiveIndex(index)}>
								<LocalImage
									src={photo.src}
									alt=""
									loading="eager"
									className="aspect-[4/3] w-full rounded-xl md:rounded-[20px]"
									imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
									sizes="(min-width: 640px) 320px, 50vw"
								/>
								{isMoreTile ? (
									<span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#0e241d]/62 text-white transition-colors duration-300 group-hover:bg-[#0e241d]/72 md:rounded-[20px]">
										<span className="text-[32px] font-semibold leading-none tracking-[-0.03em] md:text-4xl">+{hiddenCount}</span>
									</span>
								) : null}
							</button>
						</li>
					);
				})}
			</ul>

			<Modal
				isOpen={activePhoto !== null}
				onOpenChange={(open) => {
					if (!open) setActiveIndex(null);
				}}
				size="5xl"
				backdrop="opaque"
				placement="center"
				hideCloseButton
				aria-label={activePhoto?.alt || "Photo"}
				classNames={{
					backdrop: "bg-[#0e241d]/85",
					base: "border-none bg-transparent shadow-none",
				}}>
				<ModalContent>
					{(onClose) =>
						activePhoto ? (
							<ModalBody className="relative gap-0 overflow-visible p-0">
								<div className="relative h-[min(78vh,820px)] w-full">
									<LocalImage src={activePhoto.src} alt={activePhoto.alt} className="h-full w-full rounded-xl bg-black/20 md:rounded-[20px]" imageClassName="object-contain" sizes="(min-width: 1024px) 1100px, 100vw" priority />
									<button
										type="button"
										onClick={onClose}
										aria-label="Close photo"
										className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-[#0e241d]/70 text-white transition-colors hover:bg-[#0e241d] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
										<X className="size-5" aria-hidden="true" />
									</button>
									{photos.length > 1 ? (
										<>
											<button
												type="button"
												onClick={showPrevious}
												aria-label="Previous photo"
												className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-council-green text-white transition-colors hover:bg-council-green/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime sm:size-11">
												<ChevronLeft className="size-5" aria-hidden="true" />
											</button>
											<button
												type="button"
												onClick={showNext}
												aria-label="Next photo"
												className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-council-lime text-council-green transition-colors hover:bg-council-lime/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime sm:size-11">
												<ChevronRight className="size-5" aria-hidden="true" />
											</button>
										</>
									) : null}
								</div>
								<p className="mt-3 text-center text-sm font-medium tracking-[0.08em] text-council-lime">
									{activeIndex !== null ? activeIndex + 1 : 0} / {photos.length}
								</p>
								{activePhoto.alt ? <p className="mt-1 text-center text-sm leading-5 text-white">{activePhoto.alt}</p> : null}
							</ModalBody>
						) : null
					}
				</ModalContent>
			</Modal>
		</section>
	);
};

export default PhotoGallery;
