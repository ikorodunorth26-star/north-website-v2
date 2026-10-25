import Link from "next/link";
import { ArrowUpRight, MoveLeft, MoveRight } from "lucide-react";

import type { FigmaAsset } from "@/lib/content/figma-assets";
import { figmaAssets } from "@/lib/content/figma-assets";
import { LocalImage } from "@/components/reususables/site";
import { cn } from "@/lib/utils";

type HomeEditorialSlideProps = {
	headline: string;
	description: string;
	cta: string;
	href: string;
	image: FigmaAsset;
	imageClassName: string;
	activeIndex: number;
	onSelect: (index: number) => void;
	onPrev: () => void;
	onNext: () => void;
};

const slideCount = 3;

const HomeEditorialSlide = ({ headline, description, cta, href, image, imageClassName, activeIndex, onSelect, onPrev, onNext }: HomeEditorialSlideProps) => {
	return (
		<article className="flex h-svh flex-col overflow-hidden bg-council-green text-white lg:grid lg:h-[800px] lg:grid-cols-2">
			<div className="relative order-2 flex min-h-0 flex-1 flex-col lg:order-1">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light [background-size:520px_520px]"
					style={{ backgroundImage: `url(${figmaAssets.home.heroTexture.src})` }}
				/>
				<div className="relative z-10 mt-auto px-5 pb-8 pt-8 md:px-10 lg:px-14 lg:pb-10 lg:pt-28 xl:px-20">
					<h2 className="whitespace-pre-line text-[32px] font-medium leading-9 tracking-[-0.6px] sm:text-[40px] sm:leading-[46px] md:text-[48px] md:leading-[54px] lg:text-[56px] lg:leading-[62px] lg:tracking-[-1.1px] xl:text-[64px] xl:leading-[70px]">{headline}</h2>
					<p className="mt-4 max-w-[34rem] text-[15px] font-medium leading-6 text-white/85 lg:mt-5 lg:text-base lg:leading-7">{description}</p>
					<Link
						href={href}
						className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-[32px] bg-council-lime px-5 py-[14px] text-[15px] font-medium leading-[21px] text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:mt-8">
						{cta}
						<ArrowUpRight className="size-[18px]" aria-hidden="true" />
					</Link>
					<div className="mt-8 flex items-center gap-1.5 lg:mt-10" role="tablist" aria-label="Hero slides">
						{Array.from({ length: slideCount }, (_, itemIndex) => (
							<button
								key={itemIndex}
								type="button"
								role="tab"
								aria-selected={itemIndex === activeIndex}
								aria-label={`Slide ${itemIndex + 1}`}
								className={cn("h-1 rounded-full", itemIndex === activeIndex ? "w-9 bg-council-lime" : "w-4 bg-white/30")}
								onClick={() => onSelect(itemIndex)}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="relative order-1 h-[42%] min-h-[220px] shrink-0 lg:order-2 lg:h-auto lg:min-h-0">
				<LocalImage src={image.src} alt={image.alt} className="absolute inset-0 bg-council-green" imageClassName={cn("object-cover", imageClassName)} sizes="(min-width: 1024px) 50vw, 100vw" />
				<div className="absolute bottom-4 right-4 z-10 flex items-center gap-3 lg:bottom-8 lg:right-8">
					<button
						type="button"
						className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-[#10261f]/45 text-white backdrop-blur-sm transition-colors hover:bg-[#10261f]/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white lg:size-12"
						aria-label="Previous slide"
						onClick={onPrev}>
						<MoveLeft className="size-[18px]" aria-hidden="true" />
					</button>
					<button
						type="button"
						className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-[#10261f]/55 text-white backdrop-blur-sm transition-colors hover:bg-[#10261f]/75 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white lg:size-12"
						aria-label="Next slide"
						onClick={onNext}>
						<MoveRight className="size-[18px]" aria-hidden="true" />
					</button>
				</div>
			</div>
		</article>
	);
};

export default HomeEditorialSlide;
