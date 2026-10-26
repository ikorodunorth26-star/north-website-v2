import { ShieldCheck } from "lucide-react";

import { departmentReach } from "@/lib/content/departments";

import DepartmentDirectory from "./department-directory";

const DepartmentsSection = () => {
	return (
		<>
			<section className="bg-background py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<DepartmentDirectory />
				</div>
			</section>
			<section className="bg-[#eeeadf] py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{departmentReach.title}</h2>
					<ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
						{departmentReach.steps.map((step) => (
							<li key={step.number} className="max-w-[411px]">
								<p className="text-[32px] font-normal leading-10 text-council-green">{step.number}</p>
								<h3 className="mt-3 text-[22px] font-medium leading-7 text-council-green">{step.title}</h3>
								<p className="mt-3 text-base font-normal leading-6 text-council-subtle">{step.description}</p>
							</li>
						))}
					</ol>
					<div className="mt-10 flex items-start gap-3 text-sm font-normal leading-5 text-council-subtle">
						<ShieldCheck className="mt-0.5 size-6 shrink-0" aria-hidden="true" />
						<p>{departmentReach.notice}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default DepartmentsSection;
