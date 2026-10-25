import {
	HomeAnnouncementsSection,
	HomeChairmanSection,
	HomeDepartmentsSection,
	HomeHero,
	HomeMapSection,
	HomeProjectsSection,
	HomeTeamSection,
	HomeWardsSection,
} from "@/components/reususables/home";

const HomeView = () => {
	return (
		<main className="bg-[#f8f7f2]">
			<HomeHero />
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
