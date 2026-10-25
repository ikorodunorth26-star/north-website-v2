"use client";

import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalContent } from "@heroui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { FigmaAsset } from "@/lib/content/figma-assets";

import { LocalImage, SectionHeading } from "../site";

type PhotoGalleryProps = {
	photos: FigmaAsset[];
};

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const activePhoto = activeIndex === null ? null : photos[activeIndex];

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

	const showPrevious = () => {
		setActiveIndex((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
	};

	const showNext = () => {
		setActiveIndex((index) => (index === null ? index : (index + 1) % photos.length));
	};

	return (
		<section className="mt-16" aria-labelledby="photo-gallery-heading">
			<SectionHeading id="photo-gallery-heading" title="Photo gallery" titleClassName="font-bold" />
			<ul className="mt-8 grid grid-cols-4 gap-3 sm:gap-4">
				{photos.map((photo, index) => (
					<li key={photo.src}>
						<button
							type="button"
							className="group block w-full cursor-pointer rounded-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green md:rounded-[20px]"
							aria-label={photo.alt ? `View larger photo: ${photo.alt}` : "View larger photo"}
							onClick={() => setActiveIndex(index)}>
							<LocalImage
								src={photo.src}
								alt=""
								className="aspect-[4/3] w-full rounded-xl md:rounded-[20px]"
								imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
								sizes="(min-width: 1408px) 320px, 25vw"
							/>
						</button>
					</li>
				))}
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
								{activePhoto.alt ? <p className="mt-3 text-center text-sm leading-5 text-white">{activePhoto.alt}</p> : null}
							</ModalBody>
						) : null
					}
				</ModalContent>
			</Modal>
		</section>
	);
};

export default PhotoGallery;
