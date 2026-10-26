import { LegislativeHouseSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { legislativeHousePage } from "@/lib/content/legislative-house";

const LegislativeHouseView = () => {
	return (
		<>
			<PageIntro label={legislativeHousePage.label} title={legislativeHousePage.title} description={legislativeHousePage.description} />
			<LegislativeHouseSection />
		</>
	);
};

export default LegislativeHouseView;
