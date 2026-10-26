import type { Metadata } from "next";

import { ictDepartmentPage } from "@/lib/content/ict-department";
import { IctDepartmentView } from "@/view";

export const metadata: Metadata = {
	title: "Information & Communication Technology | Ikorodu North LCDA",
	description: ictDepartmentPage.description,
};

const IctDepartmentPage = () => {
	return <IctDepartmentView />;
};

export default IctDepartmentPage;
