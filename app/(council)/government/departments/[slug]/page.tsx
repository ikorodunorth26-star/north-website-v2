import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/reususables/site";
import { councilDepartments, departmentHref, getDepartment } from "@/lib/content/departments";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { DepartmentDetailView } from "@/view";

type DepartmentPageProps = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
	return councilDepartments.map((department) => ({ slug: department.slug }));
};

export const generateMetadata = async ({ params }: DepartmentPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const department = getDepartment(slug);

	if (!department) {
		return { title: "Department", robots: { index: false, follow: false } };
	}

	return createPageMetadata({
		title: department.title,
		description: department.description,
		path: departmentHref(department.slug),
	});
};

const DepartmentPage = async ({ params }: DepartmentPageProps) => {
	const { slug } = await params;
	const department = getDepartment(slug);

	if (!department) {
		notFound();
	}

	const path = departmentHref(department.slug);

	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Departments", path: "/government/departments" },
					{ name: department.title, path },
				])}
			/>
			<DepartmentDetailView department={department} />
		</>
	);
};

export default DepartmentPage;
