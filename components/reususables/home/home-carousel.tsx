"use client";

import { Children, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

type HomeCarouselProps = {
	children: React.ReactNode;
	label: string;
	footerAction?: React.ReactNode;
};

const HomeCarousel = ({ children, label, footerAction }: HomeCarouselProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
		dragFree: false,
		slidesToScroll: 1,
	});
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);
	const [progress, setProgress] = useState(0);

	const updateState = useCallback(() => {
		if (!emblaApi) return;
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
		setProgress(Math.min(Math.max(emblaApi.scrollProgress(), 0), 1));
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		const frame = requestAnimationFrame(updateState);
		emblaApi.on("select", updateState);
		emblaApi.on("scroll", updateState);
		emblaApi.on("reInit", updateState);
		return () => {
			cancelAnimationFrame(frame);
			emblaApi.off("select", updateState);
			emblaApi.off("scroll", updateState);
			emblaApi.off("reInit", updateState);
		};
	}, [emblaApi, updateState]);

	return (
		<div>
			<div ref={emblaRef} className="-mx-5 overflow-hidden md:-mx-10 min-[1360px]:mx-0" aria-label={label} aria-roledescription="carousel">
				<div className="flex touch-pan-y cursor-grab gap-6 px-5 pb-2 pt-1 active:cursor-grabbing md:px-10 lg:gap-8 min-[1360px]:px-0">
					{Children.map(children, (child, index) => (
						<motion.div
							className="min-w-0 shrink-0 grow-0"
							role="group"
							aria-roledescription="slide"
							aria-label={`${index + 1} of ${Children.count(children)}`}
							initial={{ opacity: 0, y: 28, scale: 0.98 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, margin: "-24px" }}
							transition={{ duration: 0.55, delay: index < 3 ? index * 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}>
							{child}
						</motion.div>
					))}
				</div>
			</div>
			<div className="mt-5 flex items-center justify-between gap-4">
				<div>{footerAction}</div>
				<div className="hidden h-1 w-28 overflow-hidden rounded-full bg-council-image sm:block" aria-hidden="true">
					<div className="h-full origin-left rounded-full bg-council-green transition-transform duration-150 ease-out" style={{ transform: `scaleX(${progress})` }} />
				</div>
				<div className="ml-auto flex items-center gap-3">
					<button
						type="button"
						onClick={() => emblaApi?.scrollPrev()}
						disabled={!canScrollPrev}
						className={cn(
							"inline-flex size-12 items-center justify-center rounded-full border border-council-image bg-white text-council-green transition-all hover:bg-council-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white",
						)}
						aria-label={`Scroll ${label} backwards`}>
						<MoveLeft className="size-5" aria-hidden="true" />
					</button>
					<button
						type="button"
						onClick={() => emblaApi?.scrollNext()}
						disabled={!canScrollNext}
						className={cn(
							"inline-flex size-12 items-center justify-center rounded-full bg-council-green text-white transition-all hover:bg-council-surface focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-council-green",
						)}
						aria-label={`Scroll ${label} forwards`}>
						<MoveRight className="size-5" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeCarousel;
