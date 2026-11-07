import { ExecutiveCouncilSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { resolvePersonProfileHrefsByNames } from "@/lib/api/public-people";
import { executiveDirectory, executiveCouncilPage, executiveOffice } from "@/lib/content/executive-council";

const ExecutiveCouncilView = async () => {
	const names = [executiveOffice.name, ...executiveDirectory.members.map((member) => member.name)];
	const profileHrefs = await resolvePersonProfileHrefsByNames(names);
	const chairmanProfileHref = profileHrefs.get(executiveOffice.name) ?? null;

	return (
		<>
			<PageIntro label={executiveCouncilPage.label} title={executiveCouncilPage.title} description={executiveCouncilPage.description} />
			<ExecutiveCouncilSection chairmanProfileHref={chairmanProfileHref} profileHrefs={profileHrefs} />
		</>
	);
};

export default ExecutiveCouncilView;
