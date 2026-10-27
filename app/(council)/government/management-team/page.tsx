import type { Metadata } from "next";

import { managementTeamPage } from "@/lib/content/management-team";
import { ManagementTeamView } from "@/view";

export const metadata: Metadata = {
	title: "Management Team | Ikorodu North LCDA",
	description: managementTeamPage.description,
};

const ManagementTeamPage = () => {
	return <ManagementTeamView />;
};

export default ManagementTeamPage;
