"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { contactEmails, enquiryTopics } from "@/lib/content/contact";
import { cn } from "@/lib/utils";

type ContactFields = {
	fullName: string;
	email: string;
	phone: string;
	ward: string;
	topic: string;
	message: string;
	consent: boolean;
};

type ContactErrors = Partial<Record<keyof ContactFields, string>>;

const emptyFields: ContactFields = {
	fullName: "",
	email: "",
	phone: "",
	ward: "",
	topic: "",
	message: "",
	consent: false,
};

const fieldClassName =
	"h-[52px] w-full rounded-xl border border-[#E2E6E0] bg-white px-4 text-[15px] leading-[23px] text-council-green outline-none placeholder:text-[#758075] focus-visible:border-council-green focus-visible:ring-2 focus-visible:ring-council-green/20";

const labelClassName = "text-sm font-medium leading-[21px] text-council-green";

const ContactForm = () => {
	const [fields, setFields] = useState<ContactFields>(emptyFields);
	const [errors, setErrors] = useState<ContactErrors>({});

	const setField = <Key extends keyof ContactFields>(key: Key, value: ContactFields[Key]) => {
		setFields((current) => ({ ...current, [key]: value }));
		setErrors((current) => ({ ...current, [key]: undefined }));
	};

	const validate = () => {
		const nextErrors: ContactErrors = {};
		if (!fields.fullName.trim()) nextErrors.fullName = "Enter your full name.";
		if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) nextErrors.email = "Enter an email address.";
		if (!fields.topic) nextErrors.topic = "Select a topic.";
		if (!fields.message.trim()) nextErrors.message = "Enter a message.";
		if (!fields.consent) nextErrors.consent = "Agree before sending your message.";
		return nextErrors;
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const nextErrors = validate();
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length) return;

		const body = [
			`Full name: ${fields.fullName.trim()}`,
			`Email address: ${fields.email.trim()}`,
			fields.phone.trim() ? `Phone number: ${fields.phone.trim()}` : "",
			fields.ward.trim() ? `Ward or community: ${fields.ward.trim()}` : "",
			`Enquiry topic: ${fields.topic}`,
			"",
			fields.message.trim(),
		]
			.filter((line) => line !== "")
			.join("\n");

		window.location.href = `mailto:${contactEmails.general}?subject=${encodeURIComponent(fields.topic)}&body=${encodeURIComponent(body)}`;
	};

	return (
		<form onSubmit={onSubmit} noValidate className="rounded-[20px] bg-council-card px-6 py-8 sm:px-8 sm:py-8">
			<p className="text-xs font-medium uppercase tracking-[1px] text-council-gold">Message desk</p>
			<h2 className="mt-4 text-[28px] font-medium leading-9 text-council-green sm:text-[34px] sm:leading-[39px]">How can we help?</h2>
			<p className="mt-3 text-[15px] leading-[23px] text-council-subtle">Tell us briefly about your enquiry. Fields marked * are required.</p>

			<div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-5">
				<Field label="Full name *" id="contact-full-name" error={errors.fullName}>
					<input
						id="contact-full-name"
						name="fullName"
						type="text"
						autoComplete="name"
						required
						placeholder="Your full name"
						value={fields.fullName}
						aria-invalid={Boolean(errors.fullName)}
						onChange={(event) => setField("fullName", event.target.value)}
						className={fieldClassName}
					/>
				</Field>
				<Field label="Email address *" id="contact-email" error={errors.email}>
					<input
						id="contact-email"
						name="email"
						type="email"
						autoComplete="email"
						required
						placeholder="you@example.com"
						value={fields.email}
						aria-invalid={Boolean(errors.email)}
						onChange={(event) => setField("email", event.target.value)}
						className={fieldClassName}
					/>
				</Field>
				<Field label="Phone number" id="contact-phone" error={errors.phone}>
					<input
						id="contact-phone"
						name="phone"
						type="tel"
						autoComplete="tel"
						placeholder="Optional"
						value={fields.phone}
						onChange={(event) => setField("phone", event.target.value)}
						className={fieldClassName}
					/>
				</Field>
				<Field label="Ward or community" id="contact-ward" error={errors.ward}>
					<input
						id="contact-ward"
						name="ward"
						type="text"
						placeholder="Optional"
						value={fields.ward}
						onChange={(event) => setField("ward", event.target.value)}
						className={fieldClassName}
					/>
				</Field>
			</div>

			<Field label="Enquiry topic *" id="contact-topic" error={errors.topic} className="mt-5">
				<div className="relative">
					<select
						id="contact-topic"
						name="topic"
						required
						value={fields.topic}
						aria-invalid={Boolean(errors.topic)}
						onChange={(event) => setField("topic", event.target.value)}
						className={cn(fieldClassName, "appearance-none pr-12", !fields.topic && "text-[#758075]")}>
						<option value="">Select a topic</option>
						{enquiryTopics.map((topic) => (
							<option key={topic} value={topic} className="text-council-green">
								{topic}
							</option>
						))}
					</select>
					<ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-council-green" aria-hidden="true" />
				</div>
			</Field>

			<Field label="Message *" id="contact-message" error={errors.message} className="mt-5">
				<textarea
					id="contact-message"
					name="message"
					required
					rows={5}
					placeholder="Tell us how we can help. If you're reporting a concern, include the street or landmark."
					value={fields.message}
					aria-invalid={Boolean(errors.message)}
					onChange={(event) => setField("message", event.target.value)}
					className="min-h-[156px] w-full resize-y rounded-xl border border-[#E2E6E0] bg-white px-4 py-3.5 text-[15px] leading-[23px] text-council-green outline-none placeholder:text-[#758075] focus-visible:border-council-green focus-visible:ring-2 focus-visible:ring-council-green/20"
				/>
			</Field>

			<p className="mt-5 text-[13px] leading-5 text-council-subtle">Please don't include passwords, bank details or sensitive personal documents.</p>

			<div className="mt-4">
				<label className="flex items-start gap-3 text-[13px] leading-5 text-council-subtle">
					<input
						type="checkbox"
						name="consent"
						checked={fields.consent}
						onChange={(event) => setField("consent", event.target.checked)}
						className="mt-0.5 size-5 shrink-0 rounded border border-[#E2E6E0] accent-council-green"
					/>
					<span>
						I agree to the council using my details to respond to this enquiry. Read our{" "}
						<Link href="/privacy-policy" className="underline underline-offset-2 hover:text-council-green">
							privacy policy
						</Link>
						.
					</span>
				</label>
				{errors.consent ? <p className="mt-2 text-xs leading-4 text-danger">{errors.consent}</p> : null}
			</div>

			<button
				type="submit"
				className="mt-6 inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-full bg-council-green px-6 text-base font-medium leading-[22px] text-council-cream transition-colors hover:bg-council-green/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2">
				Send message
				<ArrowUpRight className="size-5" aria-hidden="true" />
			</button>
		</form>
	);
};

type FieldProps = {
	label: string;
	id: string;
	error?: string;
	className?: string;
	children: ReactNode;
};

const Field = ({ label, id, error, className, children }: FieldProps) => {
	return (
		<div className={cn("flex flex-col gap-2", className)}>
			<label htmlFor={id} className={labelClassName}>
				{label}
			</label>
			{children}
			{error ? (
				<p id={`${id}-error`} className="text-xs leading-4 text-danger">
					{error}
				</p>
			) : null}
		</div>
	);
};

export default ContactForm;
