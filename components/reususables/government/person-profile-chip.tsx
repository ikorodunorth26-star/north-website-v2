import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { personProfileCopy } from "@/lib/content/people";
import { cn } from "@/lib/utils";

type PersonProfileChipProps = {
	href: string;
	className?: string;
};

/** Compact profile control for directory portraits — sits on the image, no extra card height. */
const PersonProfileChip = ({ href, className }: PersonProfileChipProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"absolute bottom-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-council-green py-1.5 pl-2.5 pr-2 text-[11px] font-semibold tracking-[0.02em] text-council-lime shadow-[0_8px_20px_-10px_rgba(14,36,29,0.55)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#1f4f41] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime motion-reduce:transition-none motion-reduce:hover:translate-y-0",
				className,
			)}>
			{personProfileCopy.viewProfile}
			<ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
		</Link>
	);
};

export default PersonProfileChip;
