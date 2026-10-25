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
			<h3 className="mt-7 text-2xl font-medium leading-[30px] tracking-[-0.48px] text-council-green lg:text-[25px] lg:leading-[32px] lg:tracking-[-0.5px] xl:text-[27px] xl:leading-[34px] xl:tracking-[-0.54px]">{department.title}</h3>
			<p className="mt-4 text-sm leading-6 text-council-subtle lg:text-[15px] lg:leading-[24px]">{department.description}</p>
			<div className="mt-7">
				<p className="text-[15px] font-medium leading-6 text-council-green">{department.responsibleLead}</p>
			</div>
			<div className="mt-5 inline-flex w-fit rounded-full bg-council-muted px-4 py-2 text-xs font-bold leading-4 tracking-[0.1em] text-council-green">{department.category.toUpperCase()}</div>
			<StoryLink href={department.href} className="mt-7">
				Read full profile
			</StoryLink>
		</article>
	);
};

export default HomeDepartmentCard;
