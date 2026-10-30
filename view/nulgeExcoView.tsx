import { NulgeExcoSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { resolveNulgeOfficers } from "@/lib/api/public-people";
import { nulgeDirectory, nulgeExcoPage } from "@/lib/content/nulge-exco";

const NulgeExcoView = async () => {
	const officers = await resolveNulgeOfficers();

	return (
		<>
			<PageIntro
				label={nulgeExcoPage.label}
				title={nulgeExcoPage.title}
				description={nulgeExcoPage.description}
			/>
			<NulgeExcoSection
				officers={officers}
				directoryTitle={nulgeDirectory.title}
				directoryDescription={nulgeDirectory.description}
			/>
		</>
	);
};

export default NulgeExcoView;
