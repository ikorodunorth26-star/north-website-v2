import { homeContent } from "@/lib/content/home";
import { figmaAssets } from "@/lib/content/figma-assets";
import { LocalImage, StoryLink } from "@/components/reususables/site";

const HomeChairmanSection = () => {
	const { chairman } = homeContent;

	return (
		<section className="bg-[#f8f7f2] py-16 lg:py-24" aria-labelledby="home-chairman-heading">
			<div className="mx-auto grid w-full max-w-council gap-5 px-5 md:px-10 lg:grid-cols-[531px_1fr] lg:gap-6 min-[1360px]:px-0">
				<div className="relative min-h-[480px] overflow-hidden rounded-[40px] bg-council-green shadow-soft lg:min-h-[817px]">
					<LocalImage
						src={figmaAssets.news.communityProjectDelivery.src}
						alt=""
						className="absolute inset-0"
						imageClassName="object-cover opacity-35"
						sizes="(min-width: 1024px) 531px, 100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-council-dark via-council-green/25 to-council-green/20" aria-hidden="true" />
					<div className="absolute inset-x-8 bottom-0 top-16 lg:inset-x-0 lg:top-20">
						<LocalImage
							src={figmaAssets.home.mayorPortrait.src}
							alt={figmaAssets.home.mayorPortrait.alt}
							className="h-full bg-transparent"
							imageClassName="object-contain object-bottom"
							sizes="(min-width: 1024px) 531px, calc(100vw - 40px)"
						/>
					</div>
					<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-council-dark/95 via-council-dark/45 to-transparent p-7 pt-20 lg:p-9">
						<p className="text-xs font-bold leading-4 tracking-[0.15em] text-council-lime">EXECUTIVE CHAIRMAN</p>
						<p className="mt-2 text-[22px] font-medium leading-7 text-white">Mayor Ameen Apanisile</p>
					</div>
				</div>

				<div className="flex flex-col justify-center rounded-[40px] bg-white p-7 shadow-soft sm:p-10 lg:min-h-[817px] lg:p-16">
					<p className="text-xs font-bold leading-4 tracking-[0.15em] text-council-gold">{chairman.eyebrow.toUpperCase()}</p>
					<h2 id="home-chairman-heading" className="mt-4 text-[32px] font-medium leading-[38px] tracking-[-0.7px] text-council-green md:text-[38px] md:leading-[44px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-0.9px] xl:text-[44px] xl:leading-[50px] xl:tracking-[-1px]">
						{chairman.title}
					</h2>
					<div className="mt-6 max-w-[580px] space-y-4 text-sm leading-6 text-council-subtle lg:text-[15px] lg:leading-[26px]">
						{chairman.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
					<StoryLink href="/government/executive-council" className="mt-8">
						{chairman.cta}
					</StoryLink>
				</div>
			</div>
		</section>
	);
};

export default HomeChairmanSection;
