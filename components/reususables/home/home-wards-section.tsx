"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeContent, homeWards, type HomeWard } from "@/lib/content/home";
import { LocalImage } from "@/components/reususables/site";
import { cn } from "@/lib/utils";

import HomeSectionHeading from "./home-section-heading";

const WardRow = ({ ward, index, selected = false, linked = false }: { ward: HomeWard; index: number; selected?: boolean; linked?: boolean }) => {
	return (
		<>
			<span className={cn("absolute inset-y-3 left-0 w-[3px] rounded-full transition-colors", selected ? "bg-council-green" : "bg-transparent group-hover/ward:bg-council-green/30")} aria-hidden="true" />
			<span className={cn("relative size-14 shrink-0 overflow-hidden rounded-xl ring-2 ring-offset-2 ring-offset-white transition-[box-shadow,ring-color]", selected ? "ring-council-green" : "ring-transparent group-hover/ward:ring-council-green/25")}>
				<LocalImage src={ward.image.src} alt="" className="absolute inset-0" imageClassName="transition-transform duration-300 group-hover/ward:scale-105 motion-reduce:transition-none motion-reduce:group-hover/ward:scale-100" sizes="56px" />
			</span>
			<span className="min-w-0">
				<span className={cn("text-[11px] font-bold leading-4 tracking-[0.14em] transition-colors", selected ? "text-council-green" : "text-council-gold group-hover/ward:text-council-green")}>{String(index + 1).padStart(2, "0")}</span>
				<span className="mt-0.5 block truncate text-base font-semibold leading-6 text-council-green">{ward.name}</span>
				<span className="block truncate text-xs leading-4 text-council-subtle">{ward.tag}</span>
			</span>
			<ArrowRight className={cn("ml-auto size-4 shrink-0 transition-all duration-200", selected || linked ? "translate-x-0 text-council-green" : "-translate-x-1 text-council-green/0 group-hover/ward:translate-x-0 group-hover/ward:text-council-green/60")} aria-hidden="true" />
		</>
	);
};

const HomeWardsSection = ({ id = "home-wards-heading" }: { id?: string }) => {
	const { wards } = homeContent;
	const [activeIndex, setActiveIndex] = useState(0);
	const activeWard = homeWards[activeIndex] ?? homeWards[0];
	if (!activeWard) return null;

	const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
		event.preventDefault();
		const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
		const nextIndex = (activeIndex + direction + homeWards.length) % homeWards.length;
		setActiveIndex(nextIndex);
		document.getElementById(`ward-tab-${homeWards[nextIndex]?.name}`)?.focus();
	};

	return (
		<section className="bg-[#f8f5ed] py-16 lg:py-24" aria-labelledby={id}>
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<HomeSectionHeading id={id} eyebrow={wards.eyebrow} title={wards.title} description={wards.description} titleClassName="font-bold" columnClassName="max-w-none flex-1" descriptionClassName="max-w-none whitespace-pre-line" />

				<div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-5">
					<ul className="flex flex-col gap-3 lg:hidden">
						{homeWards.map((ward, index) => (
							<li key={ward.name}>
								<Link
									href={ward.href}
									className="group/ward relative flex w-full items-center gap-3 rounded-[20px] border border-transparent bg-white/40 px-3 py-3 text-left transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-council-green/15 hover:bg-white hover:shadow-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0">
									<WardRow ward={ward} index={index} linked />
								</Link>
							</li>
						))}
					</ul>
					<div role="tablist" aria-label="Wards of Ikorodu North" className="hidden h-full gap-3 lg:flex lg:flex-col lg:justify-between" onKeyDown={onKeyDown}>
						{homeWards.map((ward, index) => {
							const selected = index === activeIndex;
							return (
								<button
									key={ward.name}
									id={`ward-tab-${ward.name}`}
									type="button"
									role="tab"
									aria-selected={selected}
									aria-controls="ward-stage"
									tabIndex={selected ? 0 : -1}
									onClick={() => setActiveIndex(index)}
									className={cn(
										"group/ward relative flex w-auto items-center gap-3 rounded-[20px] border px-3 py-3 text-left transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0",
										selected ? "border-council-green/15 bg-white shadow-[0_14px_32px_-18px_rgba(23,61,50,0.65)]" : "border-transparent bg-white/40 hover:border-council-green/15 hover:bg-white hover:shadow-soft",
									)}>
									<WardRow ward={ward} index={index} selected={selected} />
								</button>
							);
						})}
					</div>

					<article id="ward-stage" role="tabpanel" aria-labelledby={`ward-tab-${activeWard.name}`} className="group relative hidden min-h-[460px] overflow-hidden rounded-[28px] bg-council-green sm:min-h-[520px] lg:block">
						<LocalImage
							key={activeWard.image.src}
							src={activeWard.image.src}
							alt={activeWard.image.alt}
							className="absolute inset-0"
							imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
							sizes="(min-width: 1024px) 70vw, 100vw"
							priority={activeIndex === 0}
						/>
						<div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--brand-dark)/0.88)_0%,hsl(var(--brand-dark)/0.42)_34%,transparent_62%)]" aria-hidden="true" />
						{activeWard.tag ? <span className="absolute left-5 top-5 rounded-full bg-[#FFFDF8CC] px-3 py-1.5 text-[11px] font-bold leading-4 text-council-green sm:left-7 sm:top-7">{activeWard.tag}</span> : null}
						<div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
							<p className="text-xs font-bold tracking-[0.16em] text-white/70">WARD {String(activeIndex + 1).padStart(2, "0")} / 05</p>
							<h3 className="mt-2 text-[36px] font-semibold leading-10 text-white sm:text-[48px] sm:leading-[52px]">{activeWard.name}</h3>
							<p className="mt-3 max-w-[460px] text-sm font-medium leading-6 text-white/72 sm:text-base">{activeWard.landmarks}</p>
							<Link
								href={activeWard.href}
								className="mt-6 inline-flex items-center gap-2 text-sm font-bold leading-5 text-[#DDCA90] transition-colors hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DDCA90]">
								Explore {activeWard.name}
								<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
							</Link>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default HomeWardsSection;
