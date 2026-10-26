import type { Metadata } from "next";

import { departmentsPage } from "@/lib/content/departments";
import { DepartmentsView } from "@/view";

export const metadata: Metadata = {
	title: "Departments | Ikorodu North LCDA",
	description: departmentsPage.description,
};

const DepartmentsPage = () => {
	return <DepartmentsView />;
};

export default DepartmentsPage;
