import { homeContent } from "@/lib/content/home";

import HomeMapExplorer from "./home-map-explorer";
import HomeSectionHeading from "./home-section-heading";

const HomeMapSection = () => {
	const { map } = homeContent;

	return (
		<section id="home-map" className="bg-[linear-gradient(to_bottom,#f1efe3_0%,#f1efe3_70%,#e0eba7_100%)] py-16 lg:py-24" aria-labelledby="home-map-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1360px]:px-0">
				<HomeSectionHeading id="home-map-heading" eyebrow={map.eyebrow} title={map.title} description={map.description} centered titleClassName="font-bold" />
				<HomeMapExplorer />
			</div>
		</section>
	);
};

export default HomeMapSection;
