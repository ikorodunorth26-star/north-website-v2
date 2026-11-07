export const councilFacebookUrl = "https://www.facebook.com/profile.php?id=61578369553900";

export type CouncilSocialLink = {
	id: "facebook" | "instagram" | "x" | "youtube" | "tiktok";
	label: string;
	handle: string;
	href: string;
};

export const councilSocialLinks: CouncilSocialLink[] = [
	{
		id: "facebook",
		label: "Facebook",
		handle: "Ikorodu North",
		href: councilFacebookUrl,
	},
];

export const councilSocialUrls = councilSocialLinks.map((link) => link.href);
