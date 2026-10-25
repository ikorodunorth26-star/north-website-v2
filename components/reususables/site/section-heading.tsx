import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	title: string;
	id?: string;
	eyebrow?: string;
	className?: string;
	titleClassName?: string;
};

const SectionHeading = ({ title, id, eyebrow, className, titleClassName }: SectionHeadingProps) => {
	return (
		<div className={cn("flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}>
			<h2 id={id} className={cn("text-[30px] font-medium leading-[36px] tracking-[-0.3px] text-council-green md:text-[32px] md:leading-[44px]", titleClassName)}>
				{title}
			</h2>
			{eyebrow ? <p className="text-xs leading-4 tracking-[0.083em] text-council-gold">{eyebrow}</p> : null}
		</div>
	);
};

export default SectionHeading;
