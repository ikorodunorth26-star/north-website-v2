import Image from "next/image";
import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import { BadgeCheck, Clock, CreditCard, Mail, MapPin, MessageSquare, Phone, ReceiptText, ShieldCheck } from "lucide-react";

import RevenueFaq from "@/components/reususables/revenue/revenue-faq";
import RevenueLookup from "@/components/reususables/revenue/revenue-lookup";
import { figmaAssets } from "@/lib/content/figma-assets";
import { revenueActions, revenueOfficeEmail, revenueSteps, type RevenueIntent } from "@/lib/content/revenue";

const column = "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-20";

const actionIcons: Record<RevenueIntent, typeof CreditCard> = {
	notice: CreditCard,
	bills: ReceiptText,
	receipt: BadgeCheck,
};

const features = [
	{
		title: "Secure payments",
		description: "Bank-grade checkout, powered by Paystack.",
		icon: ShieldCheck,
	},
	{
		title: "Instant receipts",
		description: "An SMS receipt the moment your payment clears.",
		icon: MessageSquare,
	},
	{
		title: "Always available",
		description: "Pay anytime, from any phone or computer.",
		icon: Clock,
	},
];

const RevenuePortal = () => {
	return (
		<div className="bg-[#f8f5ed] text-[#173d32]">
			<section className="relative overflow-hidden bg-[#173d32] text-white">
				<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light">
					<Image src={figmaAssets.brand.heroTexture.src} alt="" fill className="object-cover" sizes="100vw" />
				</div>
				<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
					<Image
						src="/images/revenue/shopkeeper.webp"
						alt=""
						fill
						priority
						sizes="50vw"
						className="object-cover object-top"
					/>
					<div className="absolute inset-0 bg-gradient-to-l from-transparent from-70% to-[#173d32]" />
					<div className="absolute inset-x-0 bottom-0 h-[316px] bg-gradient-to-b from-transparent to-[#173d32]" />
				</div>

				<div className={`${column} relative z-10 pb-16 pt-32 lg:pb-24 lg:pt-44`}>
					<div className="max-w-[680px]">
						<p className="inline-flex items-center gap-2 text-xs font-bold leading-4 text-[#ddca90]">
							<ShieldCheck className="size-[18px] text-white" aria-hidden="true" />
							Official Revenue Portal
						</p>
						<h1 className="mt-4 max-w-[535px] text-[32px] font-bold leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[56px] lg:leading-[64px]">
							Pay your levies and fees online, simply and securely.
						</h1>
						<p className="mt-6 max-w-[535px] text-base font-medium leading-7 text-white/70 lg:text-[19px] lg:leading-[30px]">
							Pay a demand notice, check what you owe or confirm a receipt is genuine, all in one place for Ikorodu North LCDA.
						</p>
						<div className="mt-8">
							<Suspense fallback={<div className="h-[199px] rounded-[20px] bg-[#fffdf8]" />}>
								<RevenueLookup />
							</Suspense>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[linear-gradient(180deg,#173d32_24%,#0f2922_100%)] py-14 text-white lg:py-24">
				<div className={column}>
					<h2 className="text-[26px] font-medium leading-9 text-white md:text-[34px] md:leading-[42px] lg:text-[42px] lg:leading-[50px]">
						What would you like to do?
					</h2>
					<div className="mt-10 grid gap-6 lg:grid-cols-3">
						{revenueActions.map((action) => {
							const Icon = actionIcons[action.intent];
							return (
								<article
									key={action.intent}
									className="flex min-h-[269px] flex-col rounded-[40px] border border-white/20 bg-[#194337] p-8">
									<Icon className="size-11 text-[#ddeb9d]" strokeWidth={1.5} aria-hidden="true" />
									<h3 className="mt-4 text-[26px] font-medium leading-[34px]">{action.title}</h3>
									<p className="mt-4 text-base font-medium leading-[26px] text-white/70">{action.description}</p>
									<Link
										href={`/revenue?intent=${action.intent}#lookup`}
										className="mt-auto pt-4 text-base font-bold text-[#ddeb9d] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#ddeb9d]">
										Continue →
									</Link>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="border-t border-[#ddeb9d]/10 bg-[#173d32] py-16 text-white">
				<div className={`${column} grid gap-10 lg:grid-cols-3`}>
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<div key={feature.title} className="flex gap-4">
								<div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#ddeb9d]/20">
									<Icon className="size-[22px] text-[#ddeb9d]" strokeWidth={1.5} aria-hidden="true" />
								</div>
								<div>
									<p className="text-xl font-medium leading-[26px] text-[#edf2e8]">{feature.title}</p>
									<p className="mt-1.5 max-w-[280px] text-base font-medium leading-[26px] text-[#b0c9b8]">{feature.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className="bg-[#f8f5ed] py-16 lg:py-24">
				<div className={column}>
					<p className="text-xs font-bold leading-4 tracking-[0.08em] text-[#c39828]">HOW IT WORKS</p>
					<h2 className="mt-3 text-[26px] font-medium leading-9 md:text-[34px] md:leading-[42px] lg:text-[42px] lg:leading-[50px]">
						Four simple steps
					</h2>
					<ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{revenueSteps.map((step, index) => (
							<li key={step.title} className="rounded-[20px] bg-[#fffdf8] p-7">
								<div className="flex items-center justify-between gap-3">
									<p className="text-xs font-bold leading-4 tracking-[0.08em] text-[#c39828]">{step.label}</p>
									<span className="flex size-11 items-center justify-center rounded-full bg-[#173d32] text-[15px] font-bold text-white">
										{index + 1}
									</span>
								</div>
								<h3 className="mt-3.5 text-[22px] font-medium leading-[30px]">{step.title}</h3>
								<p className="mt-3.5 text-[15px] font-medium leading-6 text-[#54665e]">{step.description}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="bg-[#e8e9df] py-16 lg:py-24">
				<div className={`${column} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
					<div>
						<p className="text-xs font-bold leading-4 tracking-[0.08em] text-[#c39828]">NEED HELP?</p>
						<h2 className="mt-4 max-w-[640px] text-[26px] font-medium leading-9 md:text-[34px] md:leading-[42px] lg:text-[42px] lg:leading-[50px]">
							Where to find your notice number
						</h2>
						<div className="mt-6 flex gap-4">
							<span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[15px] font-bold">1</span>
							<div>
								<h3 className="text-lg font-bold leading-6">Demand notice number</h3>
								<p className="mt-1 text-[15px] leading-6 text-[#54665e]">Printed at the top right of your notice. Use it to pay that bill.</p>
							</div>
						</div>
						<div className="mt-4 flex gap-4">
							<span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[15px] font-bold">2</span>
							<div>
								<h3 className="text-lg font-bold leading-6">RIN (Revenue Identification Number)</h3>
								<p className="mt-1 text-[15px] leading-6 text-[#54665e]">Printed under your name and address. Use it to see all your bills.</p>
							</div>
						</div>
					</div>
					<DemandNotice />
				</div>
			</section>

			<section className="bg-[#e8e9df] pb-16 lg:pb-24" aria-labelledby="revenue-faq-heading">
				<div className={column}>
					<h2 id="revenue-faq-heading" className="text-[26px] font-medium leading-9 md:text-[34px] md:leading-[42px] lg:text-[42px] lg:leading-[50px]">
						Frequently asked questions
					</h2>
					<div className="mt-10">
						<RevenueFaq />
					</div>
				</div>
			</section>

			<section className="bg-[#f8f5ed] py-16 lg:py-24">
				<div className={column}>
					<div className="grid gap-10 rounded-[20px] bg-[#fffdf8] p-6 sm:p-12 lg:grid-cols-2 lg:gap-12">
						<div>
							<p className="text-xs font-bold leading-4 tracking-[0.08em] text-[#c39828]">REVENUE OFFICE</p>
							<h2 className="mt-3 text-[26px] font-medium leading-9 md:text-[34px] md:leading-[42px] lg:text-[42px] lg:leading-[50px]">
								Need help with a payment?
							</h2>
							<p className="mt-3 max-w-[385px] text-base font-medium leading-[26px] text-[#54665e]">
								Visit or contact the Ikorodu North LCDA Revenue Office for help with notices, RINs and receipts.
							</p>
						</div>
						<div className="flex flex-col gap-6">
							<ContactRow icon={MapPin} label="ADDRESS">
								Council Secretariat, Isiu Town, Ikorodu–Shagamu Road, Ikorodu 104101, Lagos State
							</ContactRow>
							<ContactRow icon={Phone} label="PHONE">
								<a href="tel:+2348165442373" className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173d32]">
									+234 816 544 2373
								</a>
							</ContactRow>
							<ContactRow icon={Mail} label="EMAIL">
								<a href={`mailto:${revenueOfficeEmail}`} className="break-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173d32]">
									{revenueOfficeEmail}
								</a>
							</ContactRow>
							<ContactRow icon={Clock} label="OFFICE HOURS">
								8:00 AM - 4:00 PM
							</ContactRow>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const DemandNotice = () => {
	return (
		<div className="overflow-hidden rounded-[20px] bg-white">
			<div className="bg-[#173d32] px-8 py-7">
				<p className="text-xs font-bold leading-4 tracking-[0.04em] text-[#ddca90]">IKORODU NORTH LCDA · DEMAND NOTICE</p>
			</div>
			<div className="space-y-6 px-6 py-7 sm:px-8">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
					<div>
						<p className="text-xs font-medium leading-4 text-[#54665e]">Name / address</p>
						<div className="mt-2 h-2.5 w-48 rounded-full bg-[#e8e9df]" />
						<div className="mt-2 h-2.5 w-40 rounded-full bg-[#e8e9df]" />
					</div>
					<div className="relative w-fit rounded-[10px] border-2 border-[#c39828] px-3 py-2">
						<p className="text-xs font-medium leading-4 text-[#54665e]">Notice no.</p>
						<p className="text-base font-bold leading-[22px]">[DN-XXXXXXXX]</p>
						<span className="absolute -right-3 -top-3 flex size-8 items-center justify-center rounded-full bg-[#c39828] text-[15px] font-bold text-white">
							1
						</span>
					</div>
				</div>
				<div className="relative w-fit rounded-[10px] border-2 border-[#c39828] px-3 py-2">
					<p className="text-xs font-medium leading-4 text-[#54665e]">RIN</p>
					<p className="text-base font-bold leading-[22px]">[RIN-XXXXXXXX]</p>
					<span className="absolute -right-3 -top-3 flex size-8 items-center justify-center rounded-full bg-[#c39828] text-[15px] font-bold text-white">
						2
					</span>
				</div>
				<div className="space-y-4 pt-2">
					{Array.from({ length: 4 }, (_, index) => (
						<div key={index} className="flex items-center justify-between gap-6">
							<div className="h-2.5 w-[62%] rounded-full bg-[#e8e9df]" />
							<div className="h-2.5 w-24 rounded-full bg-[#e8e9df]" />
						</div>
					))}
				</div>
				<div className="flex items-center justify-between border-t border-[#e8e9df] pt-4">
					<p className="text-[13px] font-bold leading-[18px]">Total due</p>
					<p className="text-base font-bold leading-[22px]">[₦ amount]</p>
				</div>
			</div>
		</div>
	);
};

const ContactRow = ({
	icon: Icon,
	label,
	children,
}: {
	icon: typeof MapPin;
	label: string;
	children: ReactNode;
}) => {
	return (
		<div className="flex gap-4">
			<span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ddeb9d]">
				<Icon className="size-5 text-[#173d32]" strokeWidth={1.75} aria-hidden="true" />
			</span>
			<div className="min-w-0">
				<p className="text-xs font-bold leading-4 tracking-[0.08em] text-[#c39828]">{label}</p>
				<div className="mt-0.5 max-w-[365px] break-words text-[17px] font-medium leading-[23px]">{children}</div>
			</div>
		</div>
	);
};

export default RevenuePortal;
