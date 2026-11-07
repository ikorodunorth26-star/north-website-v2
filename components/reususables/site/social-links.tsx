import type { ComponentType } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

import { councilSocialLinks, type CouncilSocialLink } from "@/lib/content/social";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
	className?: string;
	tone?: "nav" | "footer";
	showHandles?: boolean;
};

type SocialIcon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const socialIcons: Record<CouncilSocialLink["id"], SocialIcon> = {
	facebook: FaFacebookF,
	instagram: FaInstagram,
	x: FaXTwitter,
	youtube: FaYoutube,
	tiktok: FaTiktok,
};

const SocialLinks = ({ className, tone = "footer", showHandles = false }: SocialLinksProps) => {
	if (councilSocialLinks.length === 0) return null;

	return (
		<ul className={cn("flex flex-wrap items-center gap-3", className)} aria-label="Social media">
			{councilSocialLinks.map((link) => {
				const Icon = socialIcons[link.id];

				return (
					<li key={link.id}>
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"inline-flex items-center transition-colors focus-visible:outline-hidden focus-visible:ring-2",
								tone === "nav" && !showHandles && "size-10 justify-center rounded-full border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 focus-visible:ring-white/70",
								tone === "nav" &&
									showHandles &&
									"gap-2.5 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:ring-white/70",
								tone === "footer" &&
									"gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2.5 text-council-cream hover:border-council-lime/40 hover:bg-white/10 hover:text-white focus-visible:ring-council-lime",
							)}
							aria-label={`${link.label}: ${link.handle}`}>
							{tone === "nav" && !showHandles ? (
								<Icon className="size-4 text-council-lime" aria-hidden={true} />
							) : (
								<span className="inline-flex size-7 items-center justify-center rounded-full bg-council-lime text-council-green">
									<Icon className="size-3.5" aria-hidden={true} />
								</span>
							)}
							{showHandles ? (
								<span className="pr-1 text-sm font-medium leading-none text-current">{link.handle}</span>
							) : tone === "footer" ? (
								<span className="pr-1 text-sm font-medium leading-none">{link.label}</span>
							) : null}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;
