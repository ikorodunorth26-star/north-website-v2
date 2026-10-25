import { cn } from "@/lib/utils";

type CouncilWordmarkProps = {
	className?: string;
};

const CouncilWordmark = ({ className }: CouncilWordmarkProps) => {
	return (
		<span className={cn("inline-flex flex-col text-[18px] font-bold uppercase leading-5 text-white lg:text-[22px] lg:leading-6", className)}>
			<span>Ikorodu</span>
			<span>North LCDA</span>
		</span>
	);
};

export default CouncilWordmark;
