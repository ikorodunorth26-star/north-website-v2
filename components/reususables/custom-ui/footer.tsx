import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { CouncilWordmark, TypewriterText } from "@/components/reususables/site";
import { figmaAssets } from "@/lib/content/figma-assets";
import { getCurrentYear } from "@/lib/helper";

const exploreLinks = [
	{ href: "/government/executive-council", label: "Executive Council" },
	{ href: "/government/legislative-house", label: "Legislative Members" },
	{ href: "/government/management-team", label: "Management Team" },
	{ href: "/government/departments", label: "Departments" },
	{ href: "/projects", label: "Projects" },
	{ href: "/news", label: "News" },
];

const legalLinks = [
	{ href: "/privacy-policy", label: "Privacy policy" },
	{ href: "/accessibility", label: "Accessibility" },
	{ href: "/terms-of-use", label: "Terms of use" },
];

const Footer = () => {
	return (
		<footer className="relative isolate overflow-hidden bg-council-dark px-5 text-council-cream md:px-10 lg:px-10 xl:px-20">
			<div aria-hidden="true" className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#1f5243]/45 via-[#173f35]/20 to-transparent" />
			<div className="relative z-10 mx-auto w-full max-w-council pb-8 pt-16 lg:pb-6 lg:pt-16">
				<div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
					<div className="max-w-[760px]">
						<TypewriterText
							as="h2"
							text={"A stronger community\nstarts with all of us."}
							className="whitespace-pre-line text-[30px] font-medium leading-9 tracking-[-0.4px] sm:text-[34px] sm:leading-10 md:text-[40px] md:leading-[46px] lg:text-[52px] lg:leading-[58px] lg:tracking-[-1.5px]"
						/>
					</div>
					<Link
						href="/contact"
						className="inline-flex w-fit items-center gap-2.5 rounded-[32px] bg-council-lime px-[22px] py-[15px] text-base font-medium leading-[22px] text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-council-dark">
						Get in touch
						<ArrowUpRight className="size-[18px]" aria-hidden="true" />
					</Link>
				</div>

				<div className="mt-16 grid gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(0,400px)_minmax(0,1fr)_minmax(0,300px)] xl:gap-12">
					<div>
						<Link href="/" className="flex items-center gap-3.5">
							<Image
								src={figmaAssets.brand.councilLogo.src}
								alt={figmaAssets.brand.councilLogo.alt}
								width={56}
								height={56}
								className="size-14 rounded-full object-cover"
							/>
							<CouncilWordmark />
						</Link>
						<p className="mt-6 max-w-[400px] text-base leading-[25.6px] text-council-footer">
							Working together for a cleaner, safer and more prosperous Ikorodu North.
						</p>
					</div>

					<nav aria-label="Explore the council">
						<h3 className="text-base font-medium leading-[22px] text-council-cream">Explore</h3>
						<ul className="mt-6 space-y-3">
							{exploreLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-base leading-6 text-council-footer transition-colors hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<h3 className="text-base font-medium leading-[22px] text-council-cream">Contact the council</h3>
						<div className="mt-6 space-y-3 text-base leading-6 text-council-footer">
							<p>
								<Link href="mailto:info@ikorodunorth.gov.ng" className="transition-colors hover:text-white">
									info@ikorodunorth.gov.ng
								</Link>
							</p>
							<p>
								<Link href="mailto:admin@ikorodunorth.gov.ng" className="transition-colors hover:text-white">
									admin@ikorodunorth.gov.ng
								</Link>
							</p>
							<p className="flex items-center gap-3 text-council-cream">
								<Phone className="size-[18px] shrink-0" aria-hidden="true" />
								<Link href="tel:+2348165442373" className="transition-colors hover:text-white">
									Tel: +234 816 544 2373
								</Link>
							</p>
							<p className="flex items-center gap-3">
								<MapPin className="size-[18px] shrink-0" aria-hidden="true" />
								Ikorodu North, Lagos State
							</p>
						</div>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-4 pt-6 text-xs leading-4 text-[#9eb5a8] lg:mt-10 lg:flex-row lg:items-center lg:justify-between">
					<p>© {getCurrentYear()} Ikorodu North LCDA. All rights reserved.</p>
					<div className="flex flex-wrap gap-x-5 gap-y-2">
						{legalLinks.map((link) => (
							<Link key={link.href} href={link.href} className="transition-colors hover:text-white">
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
