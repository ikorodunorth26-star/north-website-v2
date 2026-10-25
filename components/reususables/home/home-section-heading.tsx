import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type HomeSectionHeadingProps = {
	id?: string;
	eyebrow?: string;
	title: string;
	description: string;
	ctaLabel?: string;
	ctaHref?: string;
	dark?: boolean;
	centered?: boolean;
	ctaVariant?: "dark" | "lime" | "outline";
};

const HomeSectionHeading = ({ id, eyebrow, title, description, ctaLabel, ctaHref, dark = false, centered = false, ctaVariant = "dark" }: HomeSectionHeadingProps) => {
	return (
		<div className={cn("flex flex-col gap-5", centered ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between")}>
			<div className={cn("w-full max-w-[620px]", centered && "mx-auto max-w-[740px]")}>
				{eyebrow ? <p className={cn("text-xs font-bold leading-4 tracking-[0.15em]", dark ? "text-council-lime" : "text-council-gold")}>{eyebrow.toUpperCase()}</p> : null}
				<h2 id={id} className={cn(eyebrow && "mt-4", "whitespace-pre-line text-[32px] font-medium leading-[38px] tracking-[-0.64px] md:text-[40px] md:leading-[46px] lg:text-[44px] lg:leading-[50px] lg:tracking-[-1px] xl:text-[48px] xl:leading-[54px] xl:tracking-[-1.15px]", dark ? "text-white" : "text-council-green")}>
					{title}
				</h2>
				<p className={cn("mt-4 max-w-[500px] text-[15px] leading-6 lg:text-base lg:leading-[26px]", dark ? "text-white/70" : "text-council-subtle", centered && "mx-auto")}>
					{description}
				</p>
			</div>
			{ctaLabel && ctaHref ? (
				<Link
					href={ctaHref}
					className={cn(
						"inline-flex w-fit items-center gap-2.5 rounded-[32px] px-5 py-[14px] text-[15px] font-medium leading-[21px] transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
						ctaVariant === "lime"
							? "bg-council-lime text-council-green focus-visible:ring-council-lime focus-visible:ring-offset-council-green"
							: ctaVariant === "outline"
								? "border border-council-green/20 bg-card text-council-green hover:border-council-green/40 focus-visible:ring-ring focus-visible:ring-offset-background"
								: "bg-council-green text-white focus-visible:ring-ring focus-visible:ring-offset-background",
					)}>
					{ctaLabel}
					<ArrowUpRight className="size-[18px]" aria-hidden="true" />
				</Link>
			) : null}
		</div>
	);
};

export default HomeSectionHeading;
