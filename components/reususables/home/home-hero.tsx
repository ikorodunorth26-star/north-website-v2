import Link from "next/link";
import { ArrowUpRight, MoveLeft, MoveRight } from "lucide-react";

import { figmaAssets } from "@/lib/content/figma-assets";
import { homeContent } from "@/lib/content/home";
import { LocalImage, TypewriterText } from "@/components/reususables/site";

const HomeHero = () => {
	const { hero } = homeContent;

	return (
		<section className="relative min-h-svh overflow-hidden bg-council-green text-white lg:min-h-[800px]" aria-labelledby="home-hero-title">
			<LocalImage
				src={figmaAssets.home.lagosAerial.src}
				alt=""
				className="absolute inset-0 bg-council-green"
				imageClassName="object-cover object-center brightness-[0.62] lg:object-[78%_center] lg:brightness-[0.6]"
				sizes="100vw"
				priority
			/>
			<div className="absolute inset-0 hidden bg-gradient-to-r from-council-dark via-council-dark/75 to-council-dark/25 lg:block" aria-hidden="true" />
			<div className="absolute inset-0 hidden bg-[linear-gradient(100deg,hsl(var(--brand-dark))_0%,hsl(var(--brand-dark)/0.84)_36%,hsl(var(--brand-dark)/0.42)_72%,hsl(var(--brand-dark)/0.18)_100%)] lg:block" aria-hidden="true" />
			<div
				className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--brand-dark)/0.94)_0%,hsl(var(--brand-dark)/0.72)_24%,hsl(var(--brand-dark)/0.34)_52%,transparent_78%)] lg:hidden"
				aria-hidden="true"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light [background-size:520px_520px]"
				style={{ backgroundImage: `url(${figmaAssets.home.heroTexture.src})` }}
			/>

			<div className="pointer-events-none absolute bottom-0 right-6 hidden h-[600px] w-[440px] lg:block xl:right-[calc(50vw-588px)] xl:h-[694px] xl:w-[598px]">
				<LocalImage
					src={figmaAssets.home.mayorPortrait.src}
					alt={figmaAssets.home.mayorPortrait.alt}
					className="h-full bg-transparent"
					imageClassName="object-cover object-top drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)]"
					sizes="(min-width: 1024px) 598px, 285px"
					priority
				/>
			</div>

			<div className="relative z-10 mx-auto flex min-h-svh w-full max-w-council flex-col px-5 pb-8 pt-28 md:px-10 lg:min-h-[800px] lg:pb-10 lg:pt-[116px] min-[1360px]:px-0">
				<div className="mt-auto max-w-[360px] md:max-w-[650px] lg:max-w-[500px] xl:max-w-[650px]">
					<TypewriterText
						id="home-hero-title"
						text={hero.headline}
						className="max-w-none whitespace-pre-line text-[42px] font-medium leading-[46px] tracking-[-0.9px] md:max-w-[620px] md:text-[54px] md:leading-[58px] lg:max-w-[500px] lg:text-[58px] lg:leading-[62px] lg:tracking-[-1.16px] xl:max-w-[620px] xl:text-[64px] xl:leading-[68px] xl:tracking-[-1.28px]"
					/>
					<p className="mt-4 max-w-[340px] text-base font-medium leading-6 text-white/90 md:mt-5 md:max-w-[520px] md:text-[15px] lg:max-w-[430px] lg:text-base lg:leading-[26px] lg:text-white/80 xl:max-w-[520px]">
						{hero.description}
					</p>
					<Link
						href="/government/executive-council"
						className="mt-8 inline-flex items-center gap-2.5 rounded-[32px] bg-council-lime px-5 py-[14px] text-[15px] font-medium leading-[21px] text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0">
						{hero.cta}
						<ArrowUpRight className="size-[18px]" aria-hidden="true" />
					</Link>
				</div>

				<div className="flex items-end justify-between pt-8 lg:mt-16 lg:pt-0">
					<div className="flex items-center gap-1.5" aria-hidden="true">
						<span className="h-1 w-9 rounded-full bg-council-lime" />
						<span className="h-1 w-4 rounded-full bg-white/25" />
						<span className="h-1 w-4 rounded-full bg-white/25" />
					</div>
					<div className="flex items-center gap-3 lg:gap-4" aria-hidden="true">
						<span className="inline-flex size-12 items-center justify-center rounded-full border border-white/25 bg-[#14382e]/75 text-white lg:size-[52px] lg:border-transparent lg:bg-council-green/80">
							<MoveLeft className="size-[18px] lg:size-5" />
						</span>
						<span className="inline-flex size-12 items-center justify-center rounded-full bg-[#1e5646] text-white lg:size-[52px] lg:bg-council-lime lg:text-council-green">
							<MoveRight className="size-[18px] lg:size-5" />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
