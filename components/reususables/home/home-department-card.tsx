import { HeartPulse, Landmark, Wallet } from "lucide-react";

import type { HomeDepartment } from "@/lib/content/home";
import { StoryLink } from "@/components/reususables/site";

const icons = {
	landmark: Landmark,
	wallet: Wallet,
	heartPulse: HeartPulse,
};

type HomeDepartmentCardProps = {
	department: HomeDepartment;
};

const HomeDepartmentCard = ({ department }: HomeDepartmentCardProps) => {
	const Icon = icons[department.icon];

	return (
		<article className="group flex h-full flex-col rounded-[40px] bg-white p-7 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border hover:border-council-border hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-8">
			<div className="inline-flex size-14 items-center justify-center rounded-2xl bg-council-lime/55 text-council-green transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
				<Icon className="size-6" aria-hidden="true" />
			</div>
			<h3 className="mt-7 text-[26px] font-semibold leading-8 tracking-[-0.48px] text-council-green lg:text-[28px] lg:leading-[34px] lg:tracking-[-0.5px] xl:text-[30px] xl:leading-[36px] xl:tracking-[-0.54px]">{department.title}</h3>
			<p className="mt-4 text-sm leading-6 text-council-subtle lg:text-[15px] lg:leading-[24px]">{department.description}</p>
			<p className="mt-7 inline-flex w-fit rounded-full bg-council-lime/35 px-4 py-2 text-sm font-medium leading-5 text-council-green">{department.responsibleLead}</p>
			<StoryLink href={department.href} className="mt-7">
				Read full profile
			</StoryLink>
		</article>
	);
};

export default HomeDepartmentCard;
