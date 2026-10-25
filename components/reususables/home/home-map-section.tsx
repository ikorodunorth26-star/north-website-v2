import Link from "next/link";
import { Building2, GraduationCap, HeartPulse, Landmark, MapPin, Maximize2, Minus, Plus, Store, Trees } from "lucide-react";

import { homeContent, homeMapFeatures } from "@/lib/content/home";
import { cn } from "@/lib/utils";

import HomeSectionHeading from "./home-section-heading";

const featureIcons = {
	building: Building2,
	heartPulse: HeartPulse,
	graduationCap: GraduationCap,
	store: Store,
	landmark: Landmark,
	trees: Trees,
};

const HomeMapSection = () => {
	const { map } = homeContent;

	return (
		<section id="home-map" className="bg-gradient-to-b from-[#f8f7f2] to-[#e8ebdf] py-16 lg:py-24" aria-labelledby="home-map-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1360px]:px-0">
				<HomeSectionHeading id="home-map-heading" eyebrow={map.eyebrow} title={map.title} description={map.description} centered />
				<div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[minmax(0,900px)_356px] lg:gap-6">
					<article className="rounded-[20px] bg-card p-4 shadow-soft sm:p-5 lg:p-6">
						<div className="flex flex-wrap items-center justify-between gap-4">
							<div className="flex items-center gap-3">
								<span className="inline-flex size-11 items-center justify-center rounded-2xl bg-council-lime/60 text-council-green">
									<MapPin className="size-5" aria-hidden="true" />
								</span>
								<div>
									<h3 className="text-lg font-medium leading-7 text-council-green">Ikorodu North LCDA Map</h3>
									<p className="text-[13px] leading-5 text-council-subtle">Ikorodu North, Lagos State</p>
								</div>
							</div>
							<div className="flex items-center gap-2" aria-hidden="true">
								<span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-council-green shadow-soft">
									<Plus className="size-4" />
								</span>
								<span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-council-green shadow-soft">
									<Minus className="size-4" />
								</span>
								<span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-council-green shadow-soft">
									<Maximize2 className="size-4" />
								</span>
							</div>
						</div>

						<div className="relative mt-5 h-[430px] overflow-hidden rounded-[16px] bg-[#e8e9df] sm:h-[500px] lg:h-[560px]" role="img" aria-label="Stylised map of council facilities across Ikorodu North">
							<div className="absolute right-0 top-0 h-[28%] w-[38%] rounded-bl-[60px] bg-[#b9d7d0]" aria-hidden="true" />
							<div className="absolute left-[-6%] top-[48%] h-10 w-[115%] -rotate-6 rounded-full bg-white/85 shadow-sm" aria-hidden="true" />
							<div className="absolute left-[18%] top-[-8%] h-[120%] w-9 rotate-12 rounded-full bg-white/70" aria-hidden="true" />
							<div className="absolute left-[55%] top-[-10%] h-[120%] w-7 -rotate-[24deg] rounded-full bg-white/60" aria-hidden="true" />
							<div className="absolute left-[6%] top-[72%] h-6 w-[78%] rotate-3 rounded-full bg-white/55" aria-hidden="true" />
							<div className="absolute left-[12%] top-[18%] grid w-[32%] grid-cols-3 gap-2 opacity-70" aria-hidden="true">
								{Array.from({ length: 9 }).map((_, index) => (
									<span key={index} className="h-12 rounded-md border border-white/60 bg-[#dde1d4]" />
								))}
							</div>
							<div className="absolute bottom-[14%] right-[10%] grid w-[30%] grid-cols-3 gap-2 opacity-70" aria-hidden="true">
								{Array.from({ length: 6 }).map((_, index) => (
									<span key={index} className="h-12 rounded-md border border-white/60 bg-[#dde1d4]" />
								))}
							</div>

							<span className="absolute left-[18%] top-[38%] size-3 rounded-full bg-council-gold shadow-[0_0_0_5px_rgba(195,152,40,0.16)]" aria-hidden="true" />
							<span className="absolute left-[70%] top-[63%] size-3 rounded-full bg-council-gold shadow-[0_0_0_5px_rgba(195,152,40,0.16)]" aria-hidden="true" />
							<span className="absolute left-[38%] top-[75%] size-3 rounded-full bg-council-gold shadow-[0_0_0_5px_rgba(195,152,40,0.16)]" aria-hidden="true" />

							<div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 text-center" aria-hidden="true">
								<div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-council-green text-white shadow-card">
									<MapPin className="size-7 fill-council-lime" />
								</div>
								<div className="mx-auto mt-2 h-3 w-8 rounded-full bg-council-dark/20 blur-[2px]" />
							</div>

							<div className="absolute left-1/2 top-[30%] w-[220px] -translate-x-1/2 rounded-[14px] bg-white p-3 text-left shadow-card" aria-hidden="true">
								<p className="text-[13px] font-bold leading-5 text-council-green">Council Secretariat</p>
								<p className="mt-1 text-xs leading-4 text-council-subtle">Isiu · Ikorodu North</p>
							</div>

							<div className="absolute right-4 top-4 rounded-[14px] bg-white/95 p-3 shadow-soft" aria-hidden="true">
								<p className="text-[11px] font-bold leading-4 tracking-[0.1em] text-council-subtle">KEY LOCATIONS</p>
								<div className="mt-2 space-y-1.5 text-xs leading-4 text-council-green">
									<p>Government buildings</p>
									<p>Health centres</p>
									<p>Schools</p>
									<p>Markets</p>
								</div>
							</div>
						</div>
					</article>

					<aside className="rounded-[20px] bg-card p-6 shadow-soft lg:p-7" aria-label="Mapped facility categories">
						<p className="text-xs font-bold leading-4 tracking-[0.15em] text-council-gold">ON THE MAP</p>
						<h3 className="mt-2 text-[22px] font-medium leading-7 text-council-green">Map Features</h3>
						<div className="mt-6 space-y-3">
							{homeMapFeatures.map((feature) => {
								const Icon = featureIcons[feature.icon];
								return (
									<div key={feature.label} className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3.5">
										<div className="flex min-w-0 items-center gap-3">
											<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-council-muted text-council-green">
												<Icon className="size-5" aria-hidden="true" />
											</span>
											<span className="truncate text-[15px] font-medium leading-6 text-council-green">{feature.label}</span>
										</div>
										<span className={cn("shrink-0 rounded-full px-2.5 py-1 text-xs font-bold leading-4", feature.countLabel === "18 locations" ? "bg-council-lime text-council-green" : "bg-council-muted text-council-green")}>
											{feature.countLabel}
										</span>
									</div>
								);
							})}
						</div>
						<Link
							href="https://www.google.com/maps/search/?api=1&query=Ikorodu+North+LCDA"
							target="_blank"
							rel="noreferrer"
							className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[32px] bg-council-green px-5 py-[15px] text-base font-medium leading-[22px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
							{map.cta}
						</Link>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default HomeMapSection;
