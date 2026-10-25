import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { HomeWard } from "@/lib/content/home";
import { LocalImage } from "@/components/reususables/site";

const HomeWardCard = ({ ward }: { ward: HomeWard }) => {
	return (
		<article className="group relative h-[420px] w-[236px] shrink-0 snap-start overflow-hidden rounded-[20px] bg-council-green shadow-soft transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:w-auto">
			<LocalImage
				src={ward.image.src}
				alt={ward.image.alt}
				className="absolute inset-0"
				imageClassName="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				sizes="(min-width: 1024px) 20vw, 236px"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-council-dark/95 via-council-dark/25 to-council-dark/10" aria-hidden="true" />
			{ward.tag ? (
				<span className="absolute left-4 top-4 rounded-full bg-council-lime px-3 py-1.5 text-[11px] font-bold leading-4 text-council-green">{ward.tag}</span>
			) : null}
			<div className="absolute inset-x-0 bottom-0 p-5">
				<h3 className="text-[22px] font-medium leading-7 text-white">{ward.name}</h3>
				<p className="mt-2 min-h-[63px] text-[13px] font-medium leading-[20px] text-white/72">{ward.landmarks}</p>
				<Link
					href={ward.href}
					className="mt-5 inline-flex items-center gap-2 text-sm font-bold leading-5 text-white transition-colors hover:text-council-lime focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
					Explore {ward.name}
					<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
				</Link>
			</div>
		</article>
	);
};

export default HomeWardCard;
