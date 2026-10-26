import { LandmarksSection } from "@/components/reususables/landmarks";
import { PageIntro } from "@/components/reususables/site";
import { landmarksPage } from "@/lib/content/landmarks";

const LandmarksView = () => {
	return (
		<>
			<PageIntro label={landmarksPage.label} title={landmarksPage.title} description={landmarksPage.description} />
			<LandmarksSection />
		</>
	);
};

export default LandmarksView;
