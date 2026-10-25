import { figmaAssets } from "@/lib/content/figma-assets";
import { cn } from "@/lib/utils";

type PageIntroProps = {
	label: string;
	title: string;
	description: string;
	className?: string;
};

const PageIntro = ({ label, title, description, className }: PageIntroProps) => {
	return (
		<section className={cn("relative isolate min-h-[500px] overflow-hidden bg-council-green lg:min-h-[596px]", className)}>
			<div
				aria-hidden="true"
				className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
				style={{ backgroundImage: `url(${figmaAssets.brand.heroTexture.src})`, backgroundSize: "600px 600px" }}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#2a6857]/40 via-[#245947]/20 to-transparent"
			/>
			<div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-council flex-col px-5 pb-14 pt-[255px] md:px-10 lg:min-h-[596px] lg:pt-[234px] min-[1408px]:px-0">
				<div className="inline-flex w-fit items-center rounded-[32px] bg-gradient-to-b from-council-lime to-[#f0f6d5] px-5 py-2.5 lg:px-6 lg:py-3.5">
					<span className="text-sm font-medium leading-[19px] text-council-green lg:text-[15px] lg:leading-5">{label}</span>
				</div>
				<h1 className="mt-5 max-w-[747px] text-[42px] font-medium leading-[46px] tracking-[-0.84px] text-council-cream md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-1.28px]">
					{title}
				</h1>
				<p className="mt-5 max-w-[680px] text-base font-medium leading-6 text-[#dfe5df] lg:text-base lg:leading-6">
					{description}
				</p>
			</div>
		</section>
	);
};

export default PageIntro;
