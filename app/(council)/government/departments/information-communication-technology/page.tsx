import { ictDepartmentPage } from "@/lib/content/ict-department";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { IctDepartmentView } from "@/view";

export const metadata = createPageMetadata({
	title: "Information & Communication Technology",
	description: ictDepartmentPage.description,
	path: "/government/departments/information-communication-technology",
});

const IctDepartmentPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Departments", path: "/government/departments" },
					{ name: "Information & Communication Technology", path: "/government/departments/information-communication-technology" },
				])}
			/>
			<IctDepartmentView />
		</>
	);
};

export default IctDepartmentPage;
