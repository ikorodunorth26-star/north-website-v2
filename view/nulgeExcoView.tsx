import { NulgeExcoSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { resolveNulgeOfficers, resolvePersonProfileHrefsByNames } from "@/lib/api/public-people";
import { nulgeDirectory, nulgeExcoPage } from "@/lib/content/nulge-exco";

const NulgeExcoView = async () => {
	const officers = await resolveNulgeOfficers();
	const profileHrefs = await resolvePersonProfileHrefsByNames(officers.map((officer) => officer.name));

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
				profileHrefs={profileHrefs}
			/>
		</>
	);
};

export default NulgeExcoView;
