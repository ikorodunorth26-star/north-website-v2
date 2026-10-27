import { departmentsPage } from "@/lib/content/departments";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { DepartmentsView } from "@/view";

export const metadata = createPageMetadata({
	title: "Departments",
	description: departmentsPage.description,
	path: "/government/departments",
});

const DepartmentsPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Departments", path: "/government/departments" },
				])}
			/>
			<DepartmentsView />
		</>
	);
};

export default DepartmentsPage;
