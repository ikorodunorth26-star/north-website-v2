import { AboutSection } from "@/components/reususables/about";
import { PageIntro } from "@/components/reususables/site";
import { aboutPage } from "@/lib/content/about";

const AboutView = () => {
	return (
		<>
			<PageIntro label={aboutPage.label} title={aboutPage.title} description={aboutPage.description} />
			<AboutSection />
		</>
	);
};

export default AboutView;
