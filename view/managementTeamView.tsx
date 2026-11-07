import { ManagementTeamSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { resolvePersonProfileHrefsByNames } from "@/lib/api/public-people";
import { managementDirectory, managementTeamPage } from "@/lib/content/management-team";

const ManagementTeamView = async () => {
	const profileHrefs = await resolvePersonProfileHrefsByNames(managementDirectory.officers.map((officer) => officer.name));

	return (
		<>
			<PageIntro label={managementTeamPage.label} title={managementTeamPage.title} description={managementTeamPage.description} />
			<ManagementTeamSection profileHrefs={profileHrefs} />
		</>
	);
};

export default ManagementTeamView;
