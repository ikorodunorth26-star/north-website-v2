import Link from "next/link";

import type { HomeTeamMember } from "@/lib/content/home";
import { figmaAssets } from "@/lib/content/figma-assets";
import { LocalImage } from "@/components/reususables/site";
import { cn } from "@/lib/utils";

type HomeTeamMemberCardProps = {
	member: HomeTeamMember;
	large?: boolean;
};

const photoFocus: Record<string, string> = {
	[figmaAssets.home.leaderPortrait.src]: "object-[center_22%]",
	[figmaAssets.home.deputyLeaderPortrait.src]: "object-[42%_50%]",
	[figmaAssets.home.chiefWhipPortrait.src]: "object-[center_18%]",
};

const HomeTeamMemberCard = ({ member, large = false }: HomeTeamMemberCardProps) => {
	const sizes = large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw";
	const isMayor = member.image.src === figmaAssets.home.mayorPortrait.src;

	return (
		<article className={cn("group relative flex flex-col overflow-hidden rounded-[32px] border border-[#cfcfcf]/40 bg-council-green p-3 shadow-soft", large ? "h-[440px] lg:h-[430px]" : "h-[380px] lg:h-[360px]")}>
			<div className="relative min-h-0 flex-1 overflow-hidden rounded-[24px]">
				{member.portraitMode === "cutout" ? (
					<>
						<LocalImage src={figmaAssets.home.lagosAerial.src} alt="" className="absolute inset-0" imageClassName="object-cover object-[70%_center]" sizes={sizes} />
						<div className="absolute inset-0 bg-council-green/45" aria-hidden="true" />
						<div className="absolute inset-x-0 bottom-0 top-4">
							<LocalImage
								src={member.image.src}
								alt={member.image.alt}
								className="h-full bg-transparent"
								imageClassName={cn("origin-top object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100", isMayor && "-translate-x-[11%] scale-[1.12]")}
								sizes={sizes}
							/>
						</div>
					</>
				) : (
					<LocalImage
						src={member.image.src}
						alt={member.image.alt}
						className="absolute inset-0"
						imageClassName={cn("object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100", photoFocus[member.image.src] ?? "object-top")}
						sizes={sizes}
					/>
				)}
			</div>
			<div className="shrink-0 px-3 pb-2 pt-4">
				<p className="text-xl font-medium leading-7 text-white lg:text-[22px]">{member.name}</p>
				<p className="mt-1 text-sm font-medium leading-5 text-council-lime">{member.role}</p>
			</div>
			<Link href={member.href} className="absolute inset-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime" aria-label={`Read ${member.name}'s profile`}>
				<span className="sr-only">
					{member.name}, {member.role}
				</span>
			</Link>
		</article>
	);
};

export default HomeTeamMemberCard;
