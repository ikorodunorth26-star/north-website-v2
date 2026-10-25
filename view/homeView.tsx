import {
	HomeAnnouncementsSection,
	HomeChairmanSection,
	HomeDepartmentsSection,
	HomeHeroSlider,
	HomeMapSection,
	HomeProjectsSection,
	HomeTeamSection,
	HomeWardsSection,
} from "@/components/reususables/home";

const HomeView = () => {
	return (
		<main className="bg-[#f8f7f2]">
			<HomeHeroSlider />
			<HomeProjectsSection />
			<HomeDepartmentsSection />
			<HomeAnnouncementsSection />
			<HomeChairmanSection />
			<HomeWardsSection />
			<HomeTeamSection />
			<HomeMapSection />
		</main>
	);
};

export default HomeView;
