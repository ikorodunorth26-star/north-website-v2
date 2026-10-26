import { ExecutiveCouncilSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { executiveCouncilPage } from "@/lib/content/executive-council";

const ExecutiveCouncilView = () => {
	return (
		<>
			<PageIntro label={executiveCouncilPage.label} title={executiveCouncilPage.title} description={executiveCouncilPage.description} />
			<ExecutiveCouncilSection />
		</>
	);
};

export default ExecutiveCouncilView;
