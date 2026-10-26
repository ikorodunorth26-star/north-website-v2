import { Clock, Mail, Phone } from "lucide-react";

import { suggestProjectHelp, suggestProjectSteps, suggestProjectTips } from "@/lib/content/suggest-project";

import SuggestProjectForm from "./suggest-project-form";

const helpIcons = {
	Phone,
	Email: Mail,
	"Office hours": Clock,
} as const;

const SuggestProjectSection = () => {
	return (
		<>
			<section className="bg-background py-14 lg:py-16" aria-labelledby="how-suggestions-work">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<h2 id="how-suggestions-work" className="text-[32px] font-medium leading-10 text-council-green sm:text-[40px] sm:leading-[48px]">
						How it works
					</h2>
					<ol className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
						{suggestProjectSteps.map((step) => (
							<li key={step.number} className="rounded-[20px] bg-[#FFFDF8] p-6">
								<p className="text-[32px] font-medium leading-[43px] text-council-gold">{step.number}</p>
								<h3 className="mt-2.5 text-lg font-medium leading-7 text-council-green">{step.title}</h3>
								<p className="mt-2.5 text-sm leading-6 text-council-subtle">{step.text}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="bg-background pb-16 lg:pb-24">
				<div className="mx-auto grid w-full max-w-council items-start gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,1fr)_384px] min-[1408px]:px-0">
					<SuggestProjectForm />
					<aside className="flex flex-col gap-6 lg:sticky lg:top-28">
						<div className="rounded-[20px] bg-[#FFFDF8] p-6">
							<p className="text-xs font-medium uppercase tracking-[1px] text-council-gold">Tips</p>
							<h2 className="mt-3 text-2xl font-medium leading-8 text-council-green">What makes a strong suggestion</h2>
							<ul className="mt-5 flex flex-col gap-3.5">
								{suggestProjectTips.map((tip) => (
									<li key={tip} className="flex gap-3 text-sm leading-6 text-council-subtle">
										<span className="mt-2 size-1.5 shrink-0 rounded-full bg-council-gold" aria-hidden="true" />
										<span>{tip}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-[20px] bg-[#FFFDF8] p-6">
							<p className="text-xs font-medium uppercase tracking-[1px] text-council-gold">Need help?</p>
							<h2 className="mt-3 text-lg font-medium leading-7 text-council-green">{suggestProjectHelp.title}</h2>
							<ul className="mt-5 flex flex-col gap-4">
								{suggestProjectHelp.rows.map((row) => {
									const Icon = helpIcons[row.label];
									return (
										<li key={row.label} className="flex items-center gap-3">
											<span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-council-image text-council-green">
												<Icon className="size-4" aria-hidden="true" />
											</span>
											<div>
												<p className="text-xs font-medium uppercase tracking-[1px] text-council-gold">{row.label}</p>
												<p className="text-[15px] font-medium leading-[22px] text-council-green">{row.value}</p>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</aside>
				</div>
			</section>
		</>
	);
};

export default SuggestProjectSection;
