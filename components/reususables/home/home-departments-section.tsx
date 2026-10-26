import { homeContent, homeDepartments } from "@/lib/content/home";

import HomeDepartmentCard from "./home-department-card";
import HomeSectionHeading from "./home-section-heading";

const HomeDepartmentsSection = () => {
	const { departments } = homeContent;

	return (
		<section className="bg-[#f8f7f2] py-16 lg:py-24" aria-labelledby="home-departments-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<HomeSectionHeading id="home-departments-heading" title={departments.title} description={departments.description} titleClassName="font-bold" descriptionClassName="max-w-none" />
				<div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
					{homeDepartments.map((department) => (
						<HomeDepartmentCard key={department.title} department={department} />
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeDepartmentsSection;
