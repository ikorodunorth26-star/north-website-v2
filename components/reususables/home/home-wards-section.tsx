import { homeContent, homeWards } from "@/lib/content/home";

import HomeSectionHeading from "./home-section-heading";
import HomeWardCard from "./home-ward-card";

const HomeWardsSection = () => {
	const { wards } = homeContent;

	return (
		<section className="bg-[#f8f5ed] py-16 lg:py-24" aria-labelledby="home-wards-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1360px]:px-0">
				<HomeSectionHeading id="home-wards-heading" eyebrow={wards.eyebrow} title={wards.title} description={wards.description} ctaLabel={wards.cta} ctaHref="#home-map" ctaVariant="outline" />
			</div>
			<div className="mt-10 overflow-hidden">
				<div className="mx-auto flex w-full max-w-council snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:px-10 lg:grid lg:grid-cols-5 lg:overflow-visible min-[1360px]:px-0 [&::-webkit-scrollbar]:hidden">
					{homeWards.map((ward) => (
						<HomeWardCard key={ward.name} ward={ward} />
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeWardsSection;
