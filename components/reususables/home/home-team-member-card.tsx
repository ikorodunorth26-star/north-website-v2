import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { HomeTeamMember } from "@/lib/content/home";
import { figmaAssets } from "@/lib/content/figma-assets";
import { LocalImage } from "@/components/reususables/site";
import { cn } from "@/lib/utils";

type HomeTeamMemberCardProps = {
	member: HomeTeamMember;
	large?: boolean;
};

const HomeTeamMemberCard = ({ member, large = false }: HomeTeamMemberCardProps) => {
	return (
		<article className={cn("group relative overflow-hidden rounded-[32px] bg-council-surface shadow-soft", large ? "h-[440px] lg:h-[430px]" : "h-[380px] lg:h-[360px]")}>
			{member.portraitMode === "cutout" ? (
				<>
					<LocalImage
						src={figmaAssets.news.communityProjectDelivery.src}
						alt=""
						className="absolute inset-0"
						imageClassName="object-cover opacity-25"
						sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-council-green/20 to-council-dark" aria-hidden="true" />
					<LocalImage
						src={member.image.src}
						alt={member.image.alt}
						className="absolute inset-x-8 bottom-0 top-10 bg-transparent"
						imageClassName="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
						sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
					/>
				</>
			) : (
				<LocalImage
					src={member.image.src}
					alt={member.image.alt}
					className="absolute inset-0"
					imageClassName="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
					sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
				/>
			)}
			<div className="absolute inset-0 bg-gradient-to-t from-council-dark/95 via-council-dark/30 to-transparent" aria-hidden="true" />
			<Link href={member.href} className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime" aria-label={`Read ${member.name}'s profile`}>
				<span>
					<span className="block text-xl font-medium leading-7 text-white lg:text-[21px] xl:text-[22px]">{member.name}</span>
					<span className="mt-1 block text-[13px] font-medium leading-5 text-white/68">{member.role}</span>
				</span>
				<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-council-lime text-council-green transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
					<ArrowUpRight className="size-5" aria-hidden="true" />
				</span>
			</Link>
		</article>
	);
};

export default HomeTeamMemberCard;
