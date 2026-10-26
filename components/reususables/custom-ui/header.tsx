"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { CouncilWordmark } from "@/components/reususables/site";
import { figmaAssets } from "@/lib/content/figma-assets";
import { cn } from "@/lib/utils";

type NavLink = {
	href: string;
	label: string;
};

type NavItem = NavLink | { label: string; children: NavLink[] };

const governmentLinks: NavLink[] = [
	{ href: "/about", label: "About & History" },
	{ href: "/landmarks", label: "Landmarks & culture" },
	{ href: "/government/executive-council", label: "Executive Council" },
	{ href: "/government/legislative-house", label: "Legislative Members" },
	{ href: "/government/management-team", label: "Management Team" },
	{ href: "/projects", label: "Projects" },
];

const navigationLinks: NavItem[] = [
	{ href: "/", label: "Home" },
	{ label: "Government", children: governmentLinks },
	{ href: "/services", label: "Services" },
	{ href: "/news", label: "News" },
	{ href: "/contact", label: "Contact" },
];

const isNavGroup = (item: NavItem): item is { label: string; children: NavLink[] } => "children" in item;

const Header = () => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const [governmentOpen, setGovernmentOpen] = useState(false);

	useEffect(() => {
		setMenuOpen(false);
		setGovernmentOpen(false);
	}, [pathname]);

	const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

	const governmentActive = governmentLinks.some((link) => isActive(link.href));

	const linkClassName = (active: boolean) =>
		cn(
			"text-sm font-medium leading-[19px] text-white/70 transition-colors hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-council-nav",
			active && "text-white",
		);

	return (
		<header className="fixed inset-x-0 top-5 z-50 motion-safe:animate-slide-down motion-reduce:animate-none lg:top-6">
			<div className="relative mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
			<nav
				className="flex h-16 w-full items-center justify-between rounded-[40px] border border-white/10 bg-council-nav/90 pl-2.5 pr-[18px] backdrop-blur-[15px] lg:h-[76px] lg:bg-council-nav/80 lg:pl-4 lg:pr-10 lg:shadow-nav"
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
					{navigationLinks.map((item) =>
						isNavGroup(item) ? (
							<div
								key={item.label}
								className="relative"
								onMouseEnter={() => setGovernmentOpen(true)}
								onMouseLeave={() => setGovernmentOpen(false)}>
								<button
									type="button"
									className={cn(linkClassName(governmentActive), "inline-flex items-center gap-1")}
									aria-expanded={governmentOpen}
									aria-controls="government-menu"
									onClick={() => setGovernmentOpen((open) => !open)}>
									{item.label}
									<ChevronDown className={cn("size-4 transition-transform", governmentOpen && "rotate-180")} aria-hidden="true" />
								</button>
								{governmentOpen ? (
									<div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
										<div id="government-menu" className="rounded-[24px] border border-white/10 bg-council-nav/95 p-2 shadow-nav backdrop-blur-[15px]">
											{item.children.map((link) => (
												<Link
													key={link.href}
													href={link.href}
													className={cn(
														"block rounded-2xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70",
														isActive(link.href) && "bg-white/10 text-white",
													)}
													aria-current={isActive(link.href) ? "page" : undefined}>
													{link.label}
												</Link>
											))}
										</div>
									</div>
								) : null}
							</div>
						) : (
							<Link
								key={item.href}
								href={item.href}
								className={linkClassName(isActive(item.href))}
								aria-current={isActive(item.href) ? "page" : undefined}>
								{item.label}
							</Link>
						),
					)}
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
					className="absolute inset-x-5 top-[76px] rounded-[28px] border border-white/10 bg-council-nav/95 p-2 shadow-nav backdrop-blur-[15px] md:inset-x-10 lg:hidden">
					<div className="flex flex-col py-1">
						{navigationLinks.map((item) =>
							isNavGroup(item) ? (
								<div key={item.label}>
									<button
										type="button"
										className={cn(
											"flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70",
											governmentActive && "bg-white/10 text-white",
										)}
										aria-expanded={governmentOpen}
										onClick={() => setGovernmentOpen((open) => !open)}>
										{item.label}
										<ChevronDown className={cn("size-4 transition-transform", governmentOpen && "rotate-180")} aria-hidden="true" />
									</button>
									{governmentOpen ? (
										<div className="flex flex-col pb-1 pl-3">
											{item.children.map((link) => (
												<Link
													key={link.href}
													href={link.href}
													className={cn(
														"rounded-2xl px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70",
														isActive(link.href) && "text-white",
													)}
													aria-current={isActive(link.href) ? "page" : undefined}>
													{link.label}
												</Link>
											))}
										</div>
									) : null}
								</div>
							) : (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										"flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70",
										isActive(item.href) && "bg-white/10 text-white",
									)}
									aria-current={isActive(item.href) ? "page" : undefined}>
									{item.label}
									{isActive(item.href) ? <span className="size-1.5 rounded-full bg-council-lime" aria-hidden="true" /> : null}
								</Link>
							),
						)}
					</div>
				</div>
			) : null}
			</div>
		</header>
	);
};

export default Header;
