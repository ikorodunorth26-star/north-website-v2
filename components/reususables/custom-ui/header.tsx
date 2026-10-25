"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

import { CouncilWordmark } from "@/components/reususables/site";
import { figmaAssets } from "@/lib/content/figma-assets";
import { cn } from "@/lib/utils";

const navigationLinks = [
	{ href: "/", label: "Home" },
	{ href: "/government", label: "Government" },
	{ href: "/services", label: "Services" },
	{ href: "/news", label: "News" },
	{ href: "/contact", label: "Contact" },
];

const Header = () => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

	return (
		<header className="fixed inset-x-0 top-5 z-50 px-5 motion-safe:animate-slide-down motion-reduce:animate-none lg:top-6 lg:px-14">
			<nav
				className="relative mx-auto flex h-16 w-full max-w-[1328px] items-center justify-between rounded-[40px] border border-white/10 bg-council-nav/90 pl-2.5 pr-[18px] backdrop-blur-[15px] lg:h-[76px] lg:bg-council-nav/80 lg:pl-4 lg:pr-10 lg:shadow-nav"
				aria-label="Primary navigation">
				<Link href="/" className="flex min-w-0 items-center gap-2.5 lg:gap-3" onClick={() => setMenuOpen(false)}>
					<Image
						src={figmaAssets.brand.councilLogo.src}
						alt={figmaAssets.brand.councilLogo.alt}
						width={56}
						height={56}
						priority
						className="size-11 shrink-0 rounded-full object-cover lg:size-14"
					/>
					<CouncilWordmark />
				</Link>

				<div className="hidden items-center gap-8 lg:flex">
					{navigationLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								"text-sm font-medium leading-[19px] text-white/70 transition-colors hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-council-nav",
								isActive(link.href) && "text-white",
							)}
							aria-current={isActive(link.href) ? "page" : undefined}>
							{link.label}
						</Link>
					))}
					<button
						type="button"
						className="inline-flex size-11 items-center justify-center rounded-[30px] border border-[#d9ded5] text-white transition-colors hover:bg-white/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-council-nav"
						aria-label="Search website">
						<Search className="size-[18px]" aria-hidden="true" />
					</button>
				</div>

				<button
					type="button"
					className="inline-flex h-11 items-center gap-2 text-white lg:hidden"
					aria-expanded={menuOpen}
					aria-controls="mobile-navigation"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					onClick={() => setMenuOpen((open) => !open)}>
					<span className="text-[13px] font-medium leading-[18px]">{menuOpen ? "Close" : "Menu"}</span>
					{menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
				</button>
			</nav>

			{menuOpen ? (
				<div
					id="mobile-navigation"
					className="absolute inset-x-5 top-[76px] rounded-[28px] border border-white/10 bg-council-nav/95 p-2 shadow-nav backdrop-blur-[15px] lg:hidden">
					<div className="flex flex-col py-1">
						{navigationLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								className={cn(
									"flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70",
									isActive(link.href) && "bg-white/10 text-white",
								)}
								aria-current={isActive(link.href) ? "page" : undefined}>
								{link.label}
								{isActive(link.href) ? <span className="size-1.5 rounded-full bg-council-lime" aria-hidden="true" /> : null}
							</Link>
						))}
					</div>
					<div className="mt-1 border-t border-white/10 p-2">
						<button
							type="button"
							className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70">
							<Search className="size-[18px]" aria-hidden="true" />
							Search website
						</button>
					</div>
				</div>
			) : null}
		</header>
	);
};

export default Header;
