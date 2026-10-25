import { homeContent } from "@/lib/content/home";
import { figmaAssets } from "@/lib/content/figma-assets";
import { LocalImage, StoryLink } from "@/components/reususables/site";

const HomeChairmanSection = () => {
	const { chairman } = homeContent;

	return (
		<section className="bg-[#f8f7f2] py-16 lg:py-24" aria-labelledby="home-chairman-heading">
			<div className="mx-auto grid w-full max-w-council items-stretch gap-8 px-5 md:px-10 lg:grid-cols-[531px_1fr] lg:gap-6 min-[1360px]:px-0">
				<div className="flex h-full flex-col">
					<div className="relative h-[520px] overflow-hidden rounded-[32px] bg-council-green shadow-soft sm:h-[620px] lg:h-auto lg:min-h-0 lg:flex-1">
						<LocalImage
							src={figmaAssets.home.lagosAerial.src}
							alt=""
							className="absolute inset-0"
							imageClassName="object-cover object-[70%_center]"
							sizes="(min-width: 1024px) 531px, 100vw"
						/>
						<div className="absolute inset-0 bg-council-green/45" aria-hidden="true" />
						<div className="absolute inset-x-0 bottom-0 top-10 lg:top-14">
							<LocalImage
								src={figmaAssets.home.mayorPortrait.src}
								alt={figmaAssets.home.mayorPortrait.alt}
								className="h-full bg-transparent"
								imageClassName="origin-top -translate-x-[11%] scale-[1.12] object-cover object-top"
								sizes="(min-width: 1024px) 531px, 100vw"
							/>
						</div>
					</div>
					<p className="mt-6 text-[34px] font-bold leading-10 tracking-[-0.5px] text-council-green">Mayor Ameen Apanisile</p>
					<p className="mt-1 text-lg leading-7 text-council-green">
						Executive Chairman of <span className="font-bold">Ikorodu North LCDA</span>
					</p>
				</div>

				<div className="flex h-full flex-col justify-center rounded-[40px] bg-white p-7 shadow-soft sm:p-10 lg:p-16">
					<p className="pb-4 text-base font-normal leading-6 text-council-subtle">{chairman.eyebrow}</p>
					<h2 id="home-chairman-heading" className="mt-4 text-[28px] font-bold leading-[34px] tracking-[-0.4px] text-council-green sm:text-[32px] sm:leading-[38px] md:text-[44px] md:leading-[50px] md:tracking-[-0.8px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-1px] xl:text-[52px] xl:leading-[58px] xl:tracking-[-1.1px]">
						{chairman.title}
					</h2>
					<div className="mt-6 max-w-[580px] space-y-5 text-base leading-7 text-council-subtle lg:text-lg lg:leading-8">
						{chairman.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
					<StoryLink href="/government/executive-council" className="mt-8 text-lg [&_svg]:size-5">
						{chairman.cta}
					</StoryLink>
				</div>
			</div>
		</section>
	);
};

export default HomeChairmanSection;
