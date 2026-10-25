import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type StoryLinkProps = {
	href: string;
	children: React.ReactNode;
	className?: string;
	external?: boolean;
	icon?: boolean;
};

const StoryLink = ({ href, children, className, external = false, icon = true }: StoryLinkProps) => {
	const classes = cn(
		"inline-flex w-fit items-center gap-2 text-base font-bold leading-5 text-council-green underline-offset-4 transition-colors hover:text-council-gold hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		className,
	);
	const content = (
		<>
			<span>{children}</span>
			{icon ? <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" aria-hidden="true" /> : null}
		</>
	);

	if (external) {
		return (
			<a href={href} className={classes} rel="noopener noreferrer" target="_blank">
				{content}
			</a>
		);
	}

	return (
		<Link href={href} className={classes}>
			{content}
		</Link>
	);
};

export default StoryLink;
