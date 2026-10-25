import { homeContent, homeWards } from "@/lib/content/home";

import HomeSectionHeading from "./home-section-heading";
import HomeWardCard from "./home-ward-card";

const HomeWardsSection = () => {
	const { wards } = homeContent;

	return (
		<section className="bg-[#f8f5ed] py-16 lg:py-24" aria-labelledby="home-wards-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<HomeSectionHeading id="home-wards-heading" eyebrow={wards.eyebrow} title={wards.title} description={wards.description} ctaLabel={wards.cta} ctaHref="#home-map" ctaVariant="outline" titleClassName="font-bold" columnClassName="max-w-none flex-1" descriptionClassName="max-w-none whitespace-pre-line" />
				<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
					{homeWards.map((ward) => (
						<HomeWardCard key={ward.name} ward={ward} />
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeWardsSection;
