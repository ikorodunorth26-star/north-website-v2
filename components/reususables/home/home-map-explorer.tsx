"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, Minus, Plus, RotateCcw } from "lucide-react";
import type { CircleMarker, LatLngTuple, Map as LeafletMap } from "leaflet";

import { fullMapHref, mapCategories, mapCategoryById, mapPlaces, type MapCategoryId } from "@/lib/content/map";
import { homeContent } from "@/lib/content/home";
import { cn } from "@/lib/utils";

import "leaflet/dist/leaflet.css";

type PlacedMarker = {
	category: MapCategoryId;
	marker: CircleMarker;
};

type MapHost = HTMLDivElement & { __ikoroduMap?: LeafletMap };

const initialView = { lat: 6.65, lng: 3.55, zoom: 12 };

const toTuples = (points: { lat: number; lng: number }[]): LatLngTuple[] => points.map((point) => [point.lat, point.lng]);

const HomeMapExplorer = () => {
	const { map } = homeContent;
	const mapElementRef = useRef<MapHost>(null);
	const mapRef = useRef<LeafletMap | null>(null);
	const markersRef = useRef<PlacedMarker[]>([]);
	const [ready, setReady] = useState(false);
	const [activeCategory, setActiveCategory] = useState<MapCategoryId | null>(null);

	useEffect(() => {
		const element = mapElementRef.current;
		if (!element) {
			return;
		}

		let removed = false;
		let mapInstance: LeafletMap | null = null;

		const start = async () => {
			const imported = (await import("leaflet")) as typeof import("leaflet") & { default?: typeof import("leaflet") };
			const leaflet = typeof imported.map === "function" ? imported : imported.default;
			if (removed || !leaflet) {
				return;
			}

			mapInstance = leaflet.map(element, { zoomControl: false, scrollWheelZoom: true, minZoom: 11, maxZoom: 18 }).setView([initialView.lat, initialView.lng], initialView.zoom);
			element.__ikoroduMap = mapInstance;
			leaflet
				.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					maxZoom: 18,
				})
				.addTo(mapInstance);

			const placed = mapPlaces.map((place) => {
				const category = mapCategoryById[place.category];
				const marker = leaflet
					.circleMarker([place.lat, place.lng], {
						radius: 9,
						color: "#ffffff",
						weight: 2,
						fillColor: category.color,
						fillOpacity: 1,
					})
					.bindPopup(`<strong>${place.name}</strong><br />${place.address}`)
					.addTo(mapInstance as LeafletMap);

				return { category: place.category, marker };
			});

			markersRef.current = placed;
			mapRef.current = mapInstance;
			const bounds = leaflet.latLngBounds(mapPlaces.map((place) => [place.lat, place.lng]));
			mapInstance.fitBounds(bounds, { padding: [36, 36] });
			mapInstance.invalidateSize();
			setReady(true);
		};

		void start();

		return () => {
			removed = true;
			mapInstance?.remove();
			if (element.__ikoroduMap === mapInstance) {
				delete element.__ikoroduMap;
			}
			mapRef.current = null;
			markersRef.current = [];
			setReady(false);
		};
	}, []);

	useEffect(() => {
		const mapInstance = mapElementRef.current?.__ikoroduMap ?? mapRef.current;
		if (!mapInstance || !ready) {
			return;
		}

		const visible = markersRef.current.filter((item) => activeCategory === null || item.category === activeCategory);
		markersRef.current.forEach((item) => {
			const show = activeCategory === null || item.category === activeCategory;
			if (show) {
				item.marker.addTo(mapInstance);
			} else {
				item.marker.remove();
			}
		});

		if (visible.length === 0) {
			return;
		}

		const leafletBounds = toTuples(visible.map((item) => item.marker.getLatLng()));
		if (leafletBounds.length === 1) {
			mapInstance.setView(leafletBounds[0], 14);
			return;
		}

		mapInstance.fitBounds(leafletBounds, { padding: [36, 36] });
	}, [activeCategory, ready]);

	const liveMap = () => mapElementRef.current?.__ikoroduMap ?? mapRef.current;

	const zoomBy = (delta: number) => {
		const mapInstance = liveMap();
		if (!mapInstance) {
			return;
		}

		mapInstance.invalidateSize();
		const currentZoom = mapInstance.getZoom();
		if (!Number.isFinite(currentZoom)) {
			return;
		}
		const nextZoom = Math.min(mapInstance.getMaxZoom(), Math.max(mapInstance.getMinZoom(), currentZoom + delta));
		mapInstance.setZoom(nextZoom, { animate: true });
	};

	const showCategory = (category: MapCategoryId) => {
		setActiveCategory((current) => (current === category ? null : category));
	};

	const resetMap = () => {
		setActiveCategory(null);
		const mapInstance = liveMap();
		if (!mapInstance || markersRef.current.length === 0) {
			return;
		}

		markersRef.current.forEach((item) => {
			item.marker.addTo(mapInstance);
		});
		mapInstance.fitBounds(
			toTuples(markersRef.current.map((item) => item.marker.getLatLng())),
			{ padding: [36, 36] },
		);
	};

	return (
		<div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[minmax(0,900px)_356px] lg:gap-6">
			<article className="rounded-[20px] bg-card p-4 shadow-soft sm:p-5 lg:p-6">
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex items-center gap-3">
						<span className="inline-flex size-11 items-center justify-center rounded-2xl bg-council-lime/60 text-council-green">
							<MapPin className="size-5" aria-hidden="true" />
						</span>
						<h3 className="text-lg font-medium leading-7 text-council-green">Ikorodu North LCDA Map</h3>
					</div>
					<div className="relative z-10 flex items-center gap-2">
						<button type="button" className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-council-green shadow-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring" aria-label="Zoom in" onClick={() => zoomBy(1)}>
							<Plus className="size-4" />
						</button>
						<button type="button" className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-council-green shadow-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring" aria-label="Zoom out" onClick={() => zoomBy(-1)}>
							<Minus className="size-4" />
						</button>
						<button type="button" className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-council-green shadow-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring" aria-label="Reset map" onClick={resetMap}>
							<RotateCcw className="size-4" />
						</button>
					</div>
				</div>

				<div className="relative mt-5 h-[430px] overflow-hidden rounded-[16px] bg-[#e8e9df] sm:h-[500px] lg:h-[560px] [&_.leaflet-container]:z-0 [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full [&_.leaflet-container]:font-sans">
					<div ref={mapElementRef} className="h-full w-full" role="application" aria-label="Interactive map of Ikorodu North LCDA facilities" />
				</div>
			</article>

			<aside className="flex h-full flex-col rounded-[20px] bg-card p-6 shadow-soft lg:p-7" aria-label="Mapped facility categories">
				<h3 className="text-[22px] font-medium leading-7 text-council-green">Map Features</h3>
				<div className="mt-6 space-y-2">
					{mapCategories.map((category) => {
						const count = mapPlaces.filter((place) => place.category === category.id).length;
						const selected = activeCategory === category.id;
						const countLabel = `${count} ${count === 1 ? "location" : "locations"}`;

						return (
							<button
								key={category.id}
								type="button"
								aria-pressed={selected}
								onClick={() => showCategory(category.id)}
								className={cn("flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 text-left transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring", selected ? "bg-council-green/10" : "hover:bg-council-green/5")}>
								<span className="flex min-w-0 items-center gap-3">
									<span className={cn("size-2.5 shrink-0 rounded-full", category.dotClassName)} aria-hidden="true" />
									<span className="truncate text-[15px] font-medium leading-6 text-council-green">{category.label}</span>
								</span>
								<span className="shrink-0 text-sm leading-5 text-council-subtle">{countLabel}</span>
							</button>
						);
					})}
				</div>
				<Link
					href={fullMapHref}
					target="_blank"
					rel="noreferrer"
					className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[32px] bg-council-green px-5 py-[15px] text-base font-medium leading-[22px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:mt-auto">
					{map.cta}
				</Link>
			</aside>
		</div>
	);
};

export default HomeMapExplorer;
