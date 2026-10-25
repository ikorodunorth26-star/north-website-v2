import { homeAnnouncements, homeContent } from "@/lib/content/home";

import HomeCarousel from "./home-carousel";
import HomeSectionHeading from "./home-section-heading";
import HomeStoryCard from "./home-story-card";

const HomeAnnouncementsSection = () => {
	const { announcements } = homeContent;

	return (
		<section className="overflow-x-clip bg-[#f1efe4] py-16 lg:py-24" aria-labelledby="home-announcements-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<HomeSectionHeading id="home-announcements-heading" title={announcements.title} description={announcements.description} ctaLabel={announcements.cta} ctaHref="/news" titleClassName="font-bold" />
				<div className="mt-10">
					<HomeCarousel bleed autoSlide label="latest announcements">
						{homeAnnouncements.map((announcement) => (
							<HomeStoryCard
								key={announcement.title}
								title={announcement.title}
								description={announcement.summary}
								image={announcement.image}
								href={announcement.href}
							/>
						))}
					</HomeCarousel>
				</div>
			</div>
		</section>
	);
};

export default HomeAnnouncementsSection;
