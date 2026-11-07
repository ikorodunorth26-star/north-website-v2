import { DepartmentDetailSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { resolvePersonProfileHrefByName } from "@/lib/api/public-people";
import { departmentDetailCopy, type CouncilDepartment } from "@/lib/content/departments";

type DepartmentDetailViewProps = {
	department: CouncilDepartment;
};

const DepartmentDetailView = async ({ department }: DepartmentDetailViewProps) => {
	const hodProfileHref = await resolvePersonProfileHrefByName(department.head.name);

	return (
		<>
			<PageIntro
				label={departmentDetailCopy.label}
				title={department.pageTitle}
				description={department.description}
				labelHref={departmentDetailCopy.labelHref}
			/>
			<DepartmentDetailSection department={department} hodProfileHref={hodProfileHref} />
		</>
	);
};

export default DepartmentDetailView;
