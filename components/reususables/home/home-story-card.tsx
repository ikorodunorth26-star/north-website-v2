import Link from "next/link";

import type { FigmaAsset } from "@/lib/content/figma-assets";
import { LocalImage, StoryLink } from "@/components/reususables/site";

type HomeStoryCardProps = {
	title: string;
	description: string;
	image: FigmaAsset;
	href: string;
	category?: string;
	date?: string;
	variant?: "announcement" | "project";
};

const HomeStoryCard = ({ title, description, image, href, category, date, variant = "announcement" }: HomeStoryCardProps) => {
	return (
		<article className="group flex h-[420px] w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[32px] bg-white p-3 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border hover:border-council-border hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[440px] sm:w-[360px] lg:h-[460px] lg:w-[420px]">
			<LocalImage
				src={image.src}
				alt={image.alt}
				className="h-[170px] shrink-0 rounded-[22px] sm:h-[180px] lg:h-[200px]"
				imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				sizes="(min-width: 1024px) 420px, 80vw"
			/>
			<div className="flex min-h-0 flex-1 flex-col px-3 pb-3 pt-4">
				<h3 className="line-clamp-2 h-12 text-lg font-medium leading-6 tracking-[-0.2px] text-council-green">
					<Link href={href} className="transition-colors hover:text-council-gold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
						{title}
					</Link>
				</h3>
				<p className="mt-2 line-clamp-2 h-12 text-sm leading-6 text-council-subtle">{description}</p>
				{variant === "project" ? (
					<div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
						{date ? <span className="rounded-full bg-council-lime/35 px-3 py-1 text-[13px] font-medium leading-5 text-council-green">{date}</span> : null}
						{category ? <span className="rounded-full bg-council-lime/35 px-3 py-1 text-[13px] font-medium leading-5 text-council-green">{category}</span> : null}
					</div>
				) : (
					<StoryLink href={href} className="mt-auto pt-3">
						Read more
					</StoryLink>
				)}
			</div>
		</article>
	);
};

export default HomeStoryCard;
