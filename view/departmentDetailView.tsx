import { DepartmentDetailSection } from "@/components/reususables/government";
import { PageIntro } from "@/components/reususables/site";
import { departmentDetailCopy, type CouncilDepartment } from "@/lib/content/departments";

type DepartmentDetailViewProps = {
	department: CouncilDepartment;
};

const DepartmentDetailView = ({ department }: DepartmentDetailViewProps) => {
	return (
		<>
			<PageIntro
				label={departmentDetailCopy.label}
				title={department.pageTitle}
				description={department.description}
				labelHref={departmentDetailCopy.labelHref}
			/>
			<DepartmentDetailSection department={department} />
		</>
	);
};

export default DepartmentDetailView;
