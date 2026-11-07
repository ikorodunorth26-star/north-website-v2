import { LegislativeHouseSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { resolvePersonProfileHrefsByNames } from "@/lib/api/public-people";
import { legislativeDirectory, legislativeHousePage } from "@/lib/content/legislative-house";

const LegislativeHouseView = async () => {
	const profileHrefs = await resolvePersonProfileHrefsByNames(legislativeDirectory.members.map((member) => member.name));

	return (
		<>
			<PageIntro label={legislativeHousePage.label} title={legislativeHousePage.title} description={legislativeHousePage.description} />
			<LegislativeHouseSection profileHrefs={profileHrefs} />
		</>
	);
};

export default LegislativeHouseView;
