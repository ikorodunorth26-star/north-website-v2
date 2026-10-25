import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	title: string;
	eyebrow?: string;
	className?: string;
};

const SectionHeading = ({ title, eyebrow, className }: SectionHeadingProps) => {
	return (
		<div className={cn("flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}>
			<h2 className="text-[30px] font-medium leading-[36px] tracking-[-0.3px] text-council-green md:text-[32px] md:leading-[44px]">
				{title}
			</h2>
			{eyebrow ? <p className="text-xs leading-4 tracking-[0.083em] text-council-gold">{eyebrow}</p> : null}
		</div>
	);
};

export default SectionHeading;
