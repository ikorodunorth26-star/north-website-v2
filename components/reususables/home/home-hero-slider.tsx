"use client";

import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

import { homeContent } from "@/lib/content/home";
import { cn } from "@/lib/utils";

import HomeEditorialSlide from "./home-editorial-slide";
import HomeHero from "./home-hero";

const slideCount = homeContent.editorialSlides.length + 1;

const HomeHeroSlider = () => {
	const [index, setIndex] = useState(0);

	const showSlide = (next: number) => {
		setIndex(((next % slideCount) + slideCount) % slideCount);
	};

	return (
		<div className="relative overflow-hidden" aria-roledescription="carousel" aria-label="Homepage highlights">
			<div
				className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
				style={{ width: `${slideCount * 100}%`, transform: `translate3d(-${(index * 100) / slideCount}%, 0, 0)` }}>
				<div className="relative shrink-0 [&_section>div.relative.z-10>div.flex.items-end.justify-between]:invisible" style={{ width: `${100 / slideCount}%` }} aria-hidden={index !== 0} inert={index !== 0}>
					<HomeHero />
				</div>

				{homeContent.editorialSlides.map((slide, editorialIndex) => {
					const slideIndex = editorialIndex + 1;

					return (
						<div key={slide.headline} className="shrink-0" style={{ width: `${100 / slideCount}%` }} aria-hidden={index !== slideIndex} inert={index !== slideIndex}>
							<HomeEditorialSlide
								{...slide}
								activeIndex={slideIndex}
								typing={index === slideIndex}
								onSelect={showSlide}
								onPrev={() => showSlide(slideIndex - 1)}
								onNext={() => showSlide(slideIndex + 1)}
							/>
						</div>
					);
				})}
			</div>

			{index === 0 ? (
				<div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 lg:bottom-10">
					<div className="mx-auto flex w-full max-w-council items-end justify-between px-5 md:px-10 min-[1408px]:px-0">
						<div className="pointer-events-auto flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
							{Array.from({ length: slideCount }, (_, itemIndex) => (
								<button
									key={itemIndex}
									type="button"
									role="tab"
									aria-selected={itemIndex === 0}
									aria-label={`Slide ${itemIndex + 1}`}
									className={cn("h-1 rounded-full", itemIndex === 0 ? "w-9 bg-council-lime" : "w-4 bg-white/25")}
									onClick={() => showSlide(itemIndex)}
								/>
							))}
						</div>
						<div className="pointer-events-auto flex items-center gap-3 lg:gap-4">
							<button
								type="button"
								className="inline-flex size-12 items-center justify-center rounded-full border border-white/25 bg-[#14382e]/75 text-white lg:size-[52px] lg:border-transparent lg:bg-council-green/80"
								aria-label="Previous slide"
								onClick={() => showSlide(index - 1)}>
								<MoveLeft className="size-[18px] lg:size-5" aria-hidden="true" />
							</button>
							<button
								type="button"
								className="inline-flex size-12 items-center justify-center rounded-full bg-[#1e5646] text-white lg:size-[52px] lg:bg-council-lime lg:text-council-green"
								aria-label="Next slide"
								onClick={() => showSlide(index + 1)}>
								<MoveRight className="size-[18px] lg:size-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default HomeHeroSlider;
