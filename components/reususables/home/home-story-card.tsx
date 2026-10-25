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
		<article className="group flex w-[82vw] max-w-[520px] shrink-0 snap-start flex-col rounded-[40px] bg-white p-3 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border hover:border-council-border hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-[480px] lg:w-[610px] lg:max-w-none">
			<LocalImage
				src={image.src}
				alt={image.alt}
				className="h-[220px] rounded-[28px] lg:h-[285px]"
				imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				sizes="(min-width: 1024px) 586px, 82vw"
			/>
			<div className="flex flex-1 flex-col px-3 pb-4 pt-6 sm:px-6 lg:px-8 lg:pb-6">
				<h3 className="line-clamp-2 text-[22px] font-medium leading-[29px] tracking-[-0.44px] text-council-green lg:text-[26px] lg:leading-[33px] lg:tracking-[-0.52px] xl:text-[28px] xl:leading-[36px] xl:tracking-[-0.56px]">
					<Link href={href} className="transition-colors hover:text-council-gold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
						{title}
					</Link>
				</h3>
				<p className="mt-3 line-clamp-3 text-sm leading-6 text-council-subtle lg:text-[15px] lg:leading-[24px]">{description}</p>
				{variant === "project" ? (
					<div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
						{date ? <span className="rounded-full px-3 py-1.5 text-sm font-medium leading-5 text-council-green">{date}</span> : null}
						{category ? <span className="rounded-full bg-council-muted px-3 py-1.5 text-sm font-medium leading-5 text-council-green">{category}</span> : null}
						<span className="ml-auto rounded-full bg-council-lime px-3 py-1.5 text-sm font-medium leading-5 text-council-green">Completed</span>
					</div>
				) : (
					<StoryLink href={href} className="mt-5">
						Read more
					</StoryLink>
				)}
			</div>
		</article>
	);
};

export default HomeStoryCard;
