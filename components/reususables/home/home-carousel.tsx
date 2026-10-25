"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

type HomeCarouselProps = {
	children: React.ReactNode;
	label: string;
	footerAction?: React.ReactNode;
	bleed?: boolean;
	autoSlide?: boolean;
};

const HomeCarousel = ({ children, label, footerAction, bleed = false, autoSlide = false }: HomeCarouselProps) => {
	const anchorRef = useRef<HTMLDivElement>(null);
	const [bleedWidth, setBleedWidth] = useState("100%");
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
		dragFree: false,
		slidesToScroll: 1,
	});
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const updateState = useCallback(() => {
		if (!emblaApi) return;
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
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

	useEffect(() => {
		if (!bleed) return;

		const measure = () => {
			const anchor = anchorRef.current;
			if (!anchor) return;
			const left = anchor.getBoundingClientRect().left;
			setBleedWidth(`${Math.max(anchor.clientWidth, Math.round(window.innerWidth - left))}px`);
		};

		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, [bleed]);

	useEffect(() => {
		emblaApi?.reInit();
	}, [emblaApi, bleedWidth]);

	useEffect(() => {
		if (!autoSlide || !emblaApi) return;
		const root = anchorRef.current;
		if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let timer: ReturnType<typeof setInterval> | undefined;
		let paused = false;
		let visible = false;

		const stop = () => {
			if (!timer) return;
			clearInterval(timer);
			timer = undefined;
		};

		const tick = () => {
			if (!visible || paused) return;
			if (emblaApi.canScrollNext()) emblaApi.scrollNext();
			else emblaApi.scrollTo(0);
		};

		const start = () => {
			if (timer) return;
			timer = setInterval(tick, 2800);
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
				if (visible) start();
				else stop();
			},
			{ threshold: 0.45 },
		);

		const pause = () => {
			paused = true;
		};
		const resume = () => {
			paused = false;
		};

		observer.observe(root);
		root.addEventListener("mouseenter", pause);
		root.addEventListener("mouseleave", resume);
		root.addEventListener("focusin", pause);
		root.addEventListener("focusout", resume);
		emblaApi.on("pointerDown", pause);
		emblaApi.on("pointerUp", resume);

		return () => {
			stop();
			observer.disconnect();
			root.removeEventListener("mouseenter", pause);
			root.removeEventListener("mouseleave", resume);
			root.removeEventListener("focusin", pause);
			root.removeEventListener("focusout", resume);
			emblaApi.off("pointerDown", pause);
			emblaApi.off("pointerUp", resume);
		};
	}, [autoSlide, emblaApi]);

	return (
		<div ref={anchorRef}>
			<div
				ref={emblaRef}
				className={cn("overflow-hidden", !bleed && "-mx-5 md:-mx-10 min-[1408px]:mx-0")}
				style={bleed ? { width: bleedWidth } : undefined}
				aria-label={label}
				aria-roledescription="carousel">
				<div className={cn("flex touch-pan-y cursor-grab pb-2 pt-1 active:cursor-grabbing", bleed ? "gap-3 pr-6 lg:gap-4" : "gap-6 px-5 md:px-10 lg:gap-8 min-[1408px]:px-0")}>
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
			<div className={cn("mt-8 flex items-center gap-4", bleed ? "justify-end" : "justify-center")}>
				{footerAction ? <div className="mr-auto">{footerAction}</div> : null}
				<div className={cn("flex items-center gap-3", footerAction && "ml-auto")}>
					<button
						type="button"
						onClick={() => emblaApi?.scrollPrev()}
						disabled={!canScrollPrev}
						className="inline-flex size-[46px] items-center justify-center rounded-full bg-council-lime text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
						aria-label={`Scroll ${label} backwards`}>
						<MoveLeft className="size-5" aria-hidden="true" />
					</button>
					<button
						type="button"
						onClick={() => emblaApi?.scrollNext()}
						disabled={!canScrollNext}
						className="inline-flex size-[46px] items-center justify-center rounded-full bg-council-lime text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
						aria-label={`Scroll ${label} forwards`}>
						<MoveRight className="size-5" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeCarousel;
