import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { homeContent, homeDepartments } from "@/lib/content/home";

import HomeDepartmentCard from "./home-department-card";
import HomeSectionHeading from "./home-section-heading";

const HomeDepartmentsSection = () => {
	const { departments } = homeContent;

	return (
		<section className="bg-[#f8f7f2] py-16 lg:py-24" aria-labelledby="home-departments-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1360px]:px-0">
				<HomeSectionHeading id="home-departments-heading" title={departments.title} description={departments.description} />
				<div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
					{homeDepartments.map((department) => (
						<HomeDepartmentCard key={department.title} department={department} />
					))}
				</div>
				<Link
					href="/government/departments"
					className="mt-8 inline-flex w-fit items-center gap-2 text-base font-bold leading-5 text-council-green underline-offset-4 transition-colors hover:text-council-gold hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
					{departments.cta}
					<ArrowUpRight className="size-4" aria-hidden="true" />
				</Link>
			</div>
		</section>
	);
};

export default HomeDepartmentsSection;
