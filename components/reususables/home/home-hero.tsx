import Link from "next/link";
import { ArrowUpRight, MoveLeft, MoveRight } from "lucide-react";

import { figmaAssets } from "@/lib/content/figma-assets";
import { homeContent } from "@/lib/content/home";
import { LocalImage } from "@/components/reususables/site";

const HomeHero = () => {
	const { hero } = homeContent;

	return (
		<section className="relative min-h-[max(804px,100svh)] overflow-hidden bg-council-green text-white" aria-labelledby="home-hero-title">
			<LocalImage
				src={figmaAssets.news.communityProjectDelivery.src}
				alt=""
				className="absolute inset-0 bg-council-green"
				imageClassName="object-cover opacity-55"
				sizes="100vw"
				priority
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-council-dark via-council-green/90 to-council-green/30" aria-hidden="true" />
			<div
				className="absolute inset-0 opacity-10 mix-blend-soft-light [background-size:520px_520px]"
				style={{ backgroundImage: `url(${figmaAssets.home.heroTexture.src})` }}
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-council-dark/80 via-transparent to-council-dark/50" aria-hidden="true" />

			<div className="pointer-events-none absolute bottom-0 left-1/2 h-[430px] w-[285px] -translate-x-1/2 lg:left-auto lg:right-6 lg:h-[600px] lg:w-[440px] lg:translate-x-0 xl:right-[calc(50vw-588px)] xl:h-[694px] xl:w-[598px]">
				<LocalImage
					src={figmaAssets.home.mayorPortrait.src}
					alt={figmaAssets.home.mayorPortrait.alt}
					className="h-full bg-transparent"
					imageClassName="object-cover object-top drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)]"
					sizes="(min-width: 1024px) 598px, 285px"
					priority
				/>
			</div>

			<div className="relative z-10 mx-auto flex min-h-[max(804px,100svh)] w-full max-w-council flex-col px-5 pb-10 pt-[116px] md:px-10 min-[1360px]:px-0">
				<div className="max-w-[330px] md:max-w-[650px] lg:mt-auto lg:max-w-[500px] xl:max-w-[650px]">
					<h1 id="home-hero-title" className="max-w-[330px] whitespace-pre-line text-[34px] font-medium leading-[38px] tracking-[-0.7px] md:max-w-[620px] md:text-[54px] md:leading-[58px] lg:max-w-[500px] lg:text-[58px] lg:leading-[62px] lg:tracking-[-1.16px] xl:max-w-[620px] xl:text-[64px] xl:leading-[68px] xl:tracking-[-1.28px]">
						{hero.headline}
					</h1>
					<p className="mt-5 max-w-[310px] text-[15px] font-medium leading-6 text-white/80 md:max-w-[520px] lg:max-w-[430px] lg:text-base lg:leading-[26px] xl:max-w-[520px]">
						{hero.description}
					</p>
					<Link
						href="/government/executive-council"
						className="mt-8 inline-flex items-center gap-2.5 rounded-[32px] bg-council-lime px-5 py-[14px] text-[15px] font-medium leading-[21px] text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0">
						{hero.cta}
						<ArrowUpRight className="size-[18px]" aria-hidden="true" />
					</Link>
				</div>

				<div className="flex items-end justify-between pt-10 max-lg:mt-auto lg:mt-16 lg:pt-0">
					<div className="flex items-center gap-1.5" aria-hidden="true">
						<span className="h-1 w-9 rounded-full bg-council-lime" />
						<span className="h-1 w-4 rounded-full bg-white/25" />
						<span className="h-1 w-4 rounded-full bg-white/25" />
					</div>
					<div className="hidden items-center gap-4 lg:flex" aria-hidden="true">
						<span className="inline-flex size-[52px] items-center justify-center rounded-full bg-council-green/80 text-white">
							<MoveLeft className="size-5" />
						</span>
						<span className="inline-flex size-[52px] items-center justify-center rounded-full bg-council-lime text-council-green">
							<MoveRight className="size-5" />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
