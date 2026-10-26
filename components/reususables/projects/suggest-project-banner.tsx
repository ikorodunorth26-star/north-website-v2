import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SuggestProjectBanner = () => {
	return (
		<section className="my-8 flex min-h-[168px] flex-col justify-center gap-6 rounded-[28px] bg-council-green px-6 py-12 sm:my-10 sm:min-h-[188px] sm:px-8 sm:py-14 lg:my-16 lg:min-h-[200px] lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16" aria-labelledby="suggest-project-heading">
			<div className="max-w-[720px]">
				<h2 id="suggest-project-heading" className="text-[32px] font-medium leading-9 tracking-[-0.4px] text-white sm:text-[36px] sm:leading-10 lg:text-[40px] lg:leading-[46px]">
					Suggest a community project
				</h2>
				<p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">Tell the council what your street or ward needs. Suggestions are reviewed by [responsible department].</p>
			</div>
			<Link
				href="/projects/suggest"
				className="inline-flex w-fit shrink-0 items-center gap-2 rounded-[32px] bg-council-lime px-5 py-[14px] text-[15px] font-medium leading-[21px] text-council-green transition-transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2 focus-visible:ring-offset-council-green motion-reduce:transition-none motion-reduce:hover:translate-y-0">
				Suggest a project
				<ArrowUpRight className="size-4" aria-hidden="true" />
			</Link>
		</section>
	);
};

export default SuggestProjectBanner;
