import { PageIntro } from "@/components/reususables/site";
import { SuggestProjectSection } from "@/components/reususables/projects";
import { suggestProjectPage } from "@/lib/content/suggest-project";

const SuggestProjectView = () => {
	return (
		<>
			<PageIntro label={suggestProjectPage.label} title={suggestProjectPage.title} description={suggestProjectPage.description} />
			<SuggestProjectSection />
		</>
	);
};

export default SuggestProjectView;
