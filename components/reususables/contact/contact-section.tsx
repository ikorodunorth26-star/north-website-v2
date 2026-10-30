import { Clock, FileText, Mail, Phone } from "lucide-react";

import { contactEmails, contactPhones } from "@/lib/content/contact";
import { figmaAssets } from "@/lib/content/figma-assets";

import { LocalImage, TypewriterText } from "../site";
import ContactForm from "./contact-form";

const contactCards = [
	{
		label: "Call the council",
		icon: Phone,
		value: (
			<span className="flex flex-col">
				{contactPhones.map((phone) => (
					<a key={phone.href} href={phone.href} className="transition-colors hover:text-council-gold">
						{phone.label}
					</a>
				))}
			</span>
		),
	},
	{
		label: "General enquiries",
		icon: Mail,
		value: (
			<a href={`mailto:${contactEmails.general}`} className="transition-colors hover:text-council-gold">
				{contactEmails.general}
			</a>
		),
	},
	{
		label: "Administrative enquiries",
		icon: FileText,
		value: (
			<a href={`mailto:${contactEmails.administrative}`} className="transition-colors hover:text-council-gold">
				{contactEmails.administrative}
			</a>
		),
	},
	{
		label: "Office hours",
		icon: Clock,
		value: <span>Monday - Friday&nbsp;&nbsp;8:00AM - 4:00PM</span>,
	},
] as const;

const ContactSection = () => {
	return (
		<>
			<section className="bg-background py-16">
				<div className="mx-auto grid w-full max-w-council items-start gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-16 min-[1408px]:px-0">
					<div className="flex flex-col gap-4">
						<TypewriterText
							as="h2"
							text={"We're here\nto listen."}
							className="whitespace-pre-line text-[32px] font-semibold leading-10 text-council-green sm:text-[42px] sm:leading-[48px]"
						/>
						<p className="text-[17px] leading-[26px] text-council-subtle">For general enquiries, council services and community feedback, contact our Public Affairs Unit.</p>
						<ul className="mt-2 flex flex-col gap-4">
							{contactCards.map((card) => {
								const Icon = card.icon;
								return (
									<li key={card.label} className="flex items-center gap-4 rounded-[20px] bg-council-card p-5">
										<span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-council-image text-council-green">
											<Icon className="size-5" aria-hidden="true" />
										</span>
										<div className="min-w-0">
											<p className="text-xs font-medium uppercase tracking-[1px] text-council-gold">{card.label}</p>
											<div className="mt-2 break-words text-base font-medium leading-[27px] text-council-green sm:text-lg">{card.value}</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<ContactForm />
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="mx-auto grid w-full max-w-council items-center gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-16 min-[1408px]:px-0">
					<LocalImage
						src={figmaAssets.news.councilArchive.src}
						alt={figmaAssets.news.councilArchive.alt}
						className="aspect-[620/380] w-full rounded-[20px]"
						sizes="(min-width: 1024px) 620px, calc(100vw - 40px)"
					/>
					<div className="flex flex-col gap-6">
						<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">Visit us in person</h2>
						<p className="text-xl leading-[30px] text-council-green">
							Ikorodu North LCDA
							<br />
							Ikorodu - Shagamu Rd, Ikorodu, 104101, Lagos
						</p>
						<p className="text-base font-medium leading-6 text-council-subtle">
							Call ahead to confirm availability and any documents you need.
							<br />
							Office hours: Monday - Friday: 8:00 AM - 4:00PM.
							<br />
							Closed on weekends and public holidays
						</p>
						<a href={contactPhones[0].href} className="w-fit text-base leading-6 text-council-green underline underline-offset-4 transition-colors hover:text-council-gold">
							Call: {contactPhones[0].label}
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactSection;
