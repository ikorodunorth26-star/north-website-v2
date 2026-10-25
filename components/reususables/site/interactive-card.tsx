import { cn } from "@/lib/utils";

type InteractiveCardProps = {
	children: React.ReactNode;
	className?: string;
};

const InteractiveCard = ({ children, className }: InteractiveCardProps) => {
	return (
		<article
			className={cn(
				"group rounded-[20px] border border-transparent bg-card p-3 shadow-soft transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-council-border hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0",
				className,
			)}>
			{children}
		</article>
	);
};

export default InteractiveCard;
