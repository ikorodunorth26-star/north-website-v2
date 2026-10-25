import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { HomeWard } from "@/lib/content/home";
import { LocalImage } from "@/components/reususables/site";

const HomeWardCard = ({ ward }: { ward: HomeWard }) => {
	return (
		<article className="group relative h-[340px] w-full min-w-0 overflow-hidden rounded-[20px] bg-council-green shadow-soft transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[380px] lg:h-[420px]">
			<LocalImage
				src={ward.image.src}
				alt={ward.image.alt}
				className="absolute inset-0"
				imageClassName="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--brand-dark)/0.82)_0%,hsl(var(--brand-dark)/0.4)_32%,transparent_58%)]" aria-hidden="true" />
			{ward.tag ? (
				<span className="absolute left-4 top-4 rounded-full bg-[#FFFDF8CC] px-3 py-1.5 text-[11px] font-bold leading-4 text-council-green">{ward.tag}</span>
			) : null}
			<div className="absolute inset-x-0 bottom-0 p-5">
				<h3 className="text-[22px] font-medium leading-7 text-white">{ward.name}</h3>
				<p className="mt-2 min-h-[63px] text-[13px] font-medium leading-[20px] text-white/72">{ward.landmarks}</p>
				<Link
					href={ward.href}
					className="mt-5 inline-flex items-center gap-2 text-sm font-bold leading-5 text-[#DDCA90] transition-colors hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DDCA90]">
					Explore {ward.name}
					<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
				</Link>
			</div>
		</article>
	);
};

export default HomeWardCard;
