import { IctDepartmentSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { ictDepartmentPage } from "@/lib/content/ict-department";

const IctDepartmentView = () => {
	return (
		<>
			<PageIntro label={ictDepartmentPage.label} title={ictDepartmentPage.title} description={ictDepartmentPage.description} labelHref={ictDepartmentPage.labelHref} />
			<IctDepartmentSection />
		</>
	);
};

export default IctDepartmentView;
