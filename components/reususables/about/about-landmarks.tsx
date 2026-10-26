import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { landmarks } from "@/lib/content/landmarks";

import { LocalImage } from "../site";

const featuredLandmarks = landmarks.filter((landmark) => landmark.image).slice(0, 4);

const AboutLandmarks = () => {
	return (
		<section className="bg-[#F8F7F2] py-16">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-[680px]">
						<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">Places & heritage</p>
						<h2 className="mt-3 text-[32px] font-bold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">Landmarks & Culture</h2>
						<p className="mt-4 text-lg font-medium leading-[27px] text-council-subtle">LASUSTECH, the Odogunyan industries, the Ikorodu–Shagamu road, and Eweye Day in Isiu.</p>
					</div>
					<Link
						href="/landmarks"
						className="inline-flex w-fit items-center gap-2 text-base font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
						See all places
						<ArrowUpRight className="size-4" aria-hidden="true" />
					</Link>
				</div>
				<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{featuredLandmarks.map((landmark) => (
						<li key={landmark.title}>
							<Link href="/landmarks" className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
								{landmark.image ? <LocalImage src={landmark.image.src} alt={landmark.image.alt} loading="eager" className="aspect-[16/10] w-full" sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" /> : null}
								<div className="flex flex-1 flex-col p-5">
									<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-council-gold">{landmark.place}</p>
									<h3 className="mt-2 text-xl font-bold leading-7 text-council-green group-hover:underline">{landmark.title}</h3>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default AboutLandmarks;
