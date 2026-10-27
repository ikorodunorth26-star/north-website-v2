import { managementTeamPage } from "@/lib/content/management-team";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { ManagementTeamView } from "@/view";

export const metadata = createPageMetadata({
	title: "Management Team",
	description: managementTeamPage.description,
	path: "/government/management-team",
});

const ManagementTeamPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Management Team", path: "/government/management-team" },
				])}
			/>
			<ManagementTeamView />
		</>
	);
};

export default ManagementTeamPage;
