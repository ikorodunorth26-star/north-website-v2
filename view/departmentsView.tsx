import { DepartmentsSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { departmentsPage } from "@/lib/content/departments";

const DepartmentsView = () => {
	return (
		<>
			<PageIntro label={departmentsPage.label} title={departmentsPage.title} description={departmentsPage.description} />
			<DepartmentsSection />
		</>
	);
};

export default DepartmentsView;
