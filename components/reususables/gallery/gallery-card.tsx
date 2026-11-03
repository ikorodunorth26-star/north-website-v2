import { Calendar, Images } from "lucide-react";

import type { GalleryAlbum } from "@/lib/content/gallery";
import { getAlbumHref } from "@/lib/content/gallery";
import { cn } from "@/lib/utils";

import { InteractiveCard, LocalImage, StoryLink } from "../site";

type GalleryCardProps = {
	album: GalleryAlbum;
	className?: string;
};

const monthAndYear = (date: string) => {
	const parts = date.trim().split(/\s+/);
	if (parts.length >= 3 && /^\d+$/.test(parts[0])) {
		return `${parts[1]} ${parts[2]}`;
	}
	return date;
};

const GalleryCard = ({ album, className }: GalleryCardProps) => {
	const href = getAlbumHref(album.slug);

	return (
		<InteractiveCard className={cn("flex flex-col", className)}>
			<div className="relative">
				<LocalImage
					src={album.cover.src}
					alt={album.cover.alt}
					className="h-[216px] w-full rounded-xl"
					imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
					sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 64px)"
				/>
				<span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#0e241d]/78 px-2.5 py-1 text-xs font-medium text-white">
					<Images className="size-3.5" aria-hidden="true" />
					{album.photos.length} photos
				</span>
			</div>
			<div className="flex flex-1 flex-col gap-4 px-2.5 pb-3 pt-5">
				<p className="text-xs font-medium leading-[17px] tracking-[0.083em] text-council-gold">{album.category}</p>
				<h3 className="line-clamp-2 text-xl font-bold leading-7 text-council-green md:text-[21px] md:leading-[30px]">{album.title}</h3>
				<p className="line-clamp-2 text-sm font-medium leading-[21px] text-council-subtle">{album.summary}</p>
				<p className="flex items-center gap-2 text-sm font-medium leading-5 text-council-green">
					<Calendar className="size-4 shrink-0" aria-hidden="true" />
					<time dateTime={album.date}>{monthAndYear(album.date)}</time>
				</p>
				<StoryLink href={href}>View album</StoryLink>
			</div>
		</InteractiveCard>
	);
};

export default GalleryCard;
