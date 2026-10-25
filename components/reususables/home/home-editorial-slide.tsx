import Link from "next/link";
import { ArrowUpRight, MoveLeft, MoveRight } from "lucide-react";

import type { FigmaAsset } from "@/lib/content/figma-assets";
import { figmaAssets } from "@/lib/content/figma-assets";
import { LocalImage, TypewriterText } from "@/components/reususables/site";
import { cn } from "@/lib/utils";

type HomeEditorialSlideProps = {
	headline: string;
	description: string;
	cta: string;
	href: string;
	image: FigmaAsset;
	imageClassName: string;
	activeIndex: number;
	typing?: boolean;
	onSelect: (index: number) => void;
	onPrev: () => void;
	onNext: () => void;
};

const slideCount = 3;

const titleClassName = "whitespace-pre-line text-[36px] font-medium leading-[42px] tracking-[-0.7px] sm:text-[40px] sm:leading-[46px] md:text-[48px] md:leading-[54px] lg:text-[56px] lg:leading-[62px] lg:tracking-[-1.1px] xl:text-[64px] xl:leading-[70px]";

const HomeEditorialSlide = ({ headline, description, cta, href, image, imageClassName, activeIndex, typing = false, onSelect, onPrev, onNext }: HomeEditorialSlideProps) => {
	return (
		<article className="relative h-svh overflow-hidden bg-council-green text-white lg:h-[800px]">
			<div className="absolute inset-0 lg:left-1/2">
				<LocalImage
					src={image.src}
					alt={image.alt}
					className="absolute inset-0 bg-council-green"
					imageClassName={cn("object-cover object-[center_28%]", imageClassName)}
					sizes="(min-width: 1024px) 50vw, 100vw"
				/>
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--brand-dark)/0.94)_0%,hsl(var(--brand-dark)/0.78)_38%,hsl(var(--brand-dark)/0.46)_66%,hsl(var(--brand-dark)/0.22)_100%)] lg:bg-[linear-gradient(to_top,hsl(var(--brand-dark)/0.86)_0%,hsl(var(--brand-dark)/0.5)_46%,hsl(var(--brand-dark)/0.18)_74%,transparent_100%)]" aria-hidden="true" />
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light [background-size:420px_420px] lg:hidden"
					style={{ backgroundImage: `url(${figmaAssets.home.heroTexture.src})` }}
				/>
				<div className="absolute bottom-8 right-5 z-10 hidden items-center gap-3 lg:bottom-10 lg:right-[max(2.5rem,calc(50vw-39rem))] lg:flex min-[1408px]:right-[calc(50vw-41.5rem)]">
					<button
						type="button"
						className="inline-flex size-12 items-center justify-center rounded-full border border-white/40 bg-[#10261f]/35 text-white backdrop-blur-sm transition-colors hover:bg-[#10261f]/60 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
						aria-label="Previous slide"
						onClick={onPrev}>
						<MoveLeft className="size-[18px]" aria-hidden="true" />
					</button>
					<button
						type="button"
						className="inline-flex size-12 items-center justify-center rounded-full border border-white/40 bg-[#10261f]/45 text-white backdrop-blur-sm transition-colors hover:bg-[#10261f]/65 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
						aria-label="Next slide"
						onClick={onNext}>
						<MoveRight className="size-[18px]" aria-hidden="true" />
					</button>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-council-green lg:block" aria-hidden="true">
				<div
					className="absolute inset-0 opacity-25 mix-blend-soft-light [background-size:520px_520px]"
					style={{ backgroundImage: `url(${figmaAssets.home.heroTexture.src})` }}
				/>
			</div>

			<div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-council flex-col px-5 pb-6 pt-28 md:px-10 lg:pb-10 lg:pt-28 min-[1408px]:px-0">
				<div className="pointer-events-auto mt-auto lg:w-1/2 lg:pr-10">
					{typing ? <TypewriterText as="h2" text={headline} className={titleClassName} /> : <h2 className={titleClassName}>{headline}</h2>}
					<p className="mt-4 max-w-[22rem] text-base font-medium leading-6 text-white/90 sm:max-w-[34rem] lg:mt-5 lg:text-base lg:leading-7">{description}</p>
					<Link
						href={href}
						className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-[32px] bg-council-lime px-5 py-[14px] text-[15px] font-medium leading-[21px] text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:mt-8">
						{cta}
						<ArrowUpRight className="size-[18px]" aria-hidden="true" />
					</Link>
					<div className="mt-8 flex items-center justify-between lg:mt-10">
						<div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
							{Array.from({ length: slideCount }, (_, itemIndex) => (
								<button
									key={itemIndex}
									type="button"
									role="tab"
									aria-selected={itemIndex === activeIndex}
									aria-label={`Slide ${itemIndex + 1}`}
									className={cn("h-1 rounded-full", itemIndex === activeIndex ? "w-9 bg-council-lime" : "w-4 bg-white/35")}
									onClick={() => onSelect(itemIndex)}
								/>
							))}
						</div>
						<div className="flex items-center gap-3 lg:hidden">
							<button
								type="button"
								className="inline-flex size-11 items-center justify-center rounded-full border border-white/45 bg-[#10261f]/30 text-white backdrop-blur-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
								aria-label="Previous slide"
								onClick={onPrev}>
								<MoveLeft className="size-[18px]" aria-hidden="true" />
							</button>
							<button
								type="button"
								className="inline-flex size-11 items-center justify-center rounded-full border border-white/45 bg-[#10261f]/40 text-white backdrop-blur-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
								aria-label="Next slide"
								onClick={onNext}>
								<MoveRight className="size-[18px]" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default HomeEditorialSlide;
