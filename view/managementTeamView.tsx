import { ManagementTeamSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { managementTeamPage } from "@/lib/content/management-team";

const ManagementTeamView = () => {
	return (
		<>
			<PageIntro label={managementTeamPage.label} title={managementTeamPage.title} description={managementTeamPage.description} />
			<ManagementTeamSection />
		</>
	);
};

export default ManagementTeamView;
