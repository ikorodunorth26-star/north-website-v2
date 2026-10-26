"use client";

import { useState, type DragEvent, type FormEvent, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { suggestProjectCategories, suggestProjectInbox, suggestProjectWards } from "@/lib/content/suggest-project";
import { cn } from "@/lib/utils";

type SuggestFields = {
	fullName: string;
	phone: string;
	email: string;
	ward: string;
	category: string;
	title: string;
	location: string;
	description: string;
	beneficiaries: string;
	consent: boolean;
};

type SuggestErrors = Partial<Record<keyof SuggestFields, string>>;

const emptyFields: SuggestFields = {
	fullName: "",
	phone: "",
	email: "",
	ward: "",
	category: "",
	title: "",
	location: "",
	description: "",
	beneficiaries: "",
	consent: false,
};

const fieldClassName =
	"h-[52px] w-full rounded-xl border border-[#E2E6E0] bg-white px-4 text-[15px] leading-[23px] text-council-green outline-none placeholder:text-[#758075] focus-visible:border-council-green focus-visible:ring-2 focus-visible:ring-council-green/20";

const labelClassName = "text-sm font-medium leading-[21px] text-council-green";

const SuggestProjectForm = () => {
	const [fields, setFields] = useState<SuggestFields>(emptyFields);
	const [photos, setPhotos] = useState<File[]>([]);
	const [dragging, setDragging] = useState(false);
	const [errors, setErrors] = useState<SuggestErrors>({});

	const setField = <Key extends keyof SuggestFields>(key: Key, value: SuggestFields[Key]) => {
		setFields((current) => ({ ...current, [key]: value }));
		setErrors((current) => ({ ...current, [key]: undefined }));
	};

	const addPhotos = (files: FileList | File[]) => {
		const images = [...files].filter((file) => file.type.startsWith("image/"));
		if (!images.length) return;
		setPhotos((current) => [...current, ...images]);
	};

	const onDrop = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setDragging(false);
		addPhotos(event.dataTransfer.files);
	};

	const validate = () => {
		const nextErrors: SuggestErrors = {};
		if (!fields.fullName.trim()) nextErrors.fullName = "Enter your full name.";
		if (!fields.phone.trim()) nextErrors.phone = "Enter a phone number.";
		if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) nextErrors.email = "Enter an email address.";
		if (!fields.ward) nextErrors.ward = "Select your ward or community.";
		if (!fields.category) nextErrors.category = "Select a category.";
		if (!fields.title.trim()) nextErrors.title = "Enter a project title.";
		if (!fields.location.trim()) nextErrors.location = "Enter a location or landmark.";
		if (!fields.description.trim()) nextErrors.description = "Describe the project.";
		if (!fields.consent) nextErrors.consent = "Agree before submitting your suggestion.";
		return nextErrors;
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const nextErrors = validate();
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length) return;

		const body = [
			`Full name: ${fields.fullName.trim()}`,
			`Phone number: ${fields.phone.trim()}`,
			fields.email.trim() ? `Email address: ${fields.email.trim()}` : "",
			`Ward or community: ${fields.ward}`,
			`Project category: ${fields.category}`,
			`Project title: ${fields.title.trim()}`,
			`Location or landmark: ${fields.location.trim()}`,
			"",
			fields.description.trim(),
			fields.beneficiaries.trim() ? `\nWho benefits?\n${fields.beneficiaries.trim()}` : "",
			photos.length ? `\nPhotos to attach: ${photos.map((photo) => photo.name).join(", ")}` : "",
		]
			.filter((line) => line !== "")
			.join("\n");

		window.location.href = `mailto:${suggestProjectInbox}?subject=${encodeURIComponent(`Project suggestion: ${fields.title.trim()}`)}&body=${encodeURIComponent(body)}`;
	};

	return (
		<form onSubmit={onSubmit} noValidate className="rounded-[28px] bg-[#FFFDF8] px-6 py-8 sm:px-8">
			<p className="text-xs font-medium uppercase tracking-[1px] text-council-gold">Suggestion form</p>
			<h2 className="mt-4 text-[28px] font-medium leading-9 text-council-green sm:text-[34px] sm:leading-[40px]">Tell us about the project</h2>
			<p className="mt-3 text-[15px] leading-[23px] text-council-subtle">Fields marked * are required.</p>

			<div className="mt-6 grid gap-5 sm:grid-cols-2">
				<Field label="Full name *" id="suggest-full-name" error={errors.fullName}>
					<input id="suggest-full-name" name="fullName" type="text" autoComplete="name" required placeholder="Your full name" value={fields.fullName} aria-invalid={Boolean(errors.fullName)} onChange={(event) => setField("fullName", event.target.value)} className={fieldClassName} />
				</Field>
				<Field label="Phone number *" id="suggest-phone" error={errors.phone}>
					<input id="suggest-phone" name="phone" type="tel" autoComplete="tel" required placeholder="[Phone number]" value={fields.phone} aria-invalid={Boolean(errors.phone)} onChange={(event) => setField("phone", event.target.value)} className={fieldClassName} />
				</Field>
				<Field label="Email address (optional)" id="suggest-email" error={errors.email}>
					<input id="suggest-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={fields.email} aria-invalid={Boolean(errors.email)} onChange={(event) => setField("email", event.target.value)} className={fieldClassName} />
				</Field>
				<Field label="Ward or community *" id="suggest-ward" error={errors.ward}>
					<Select id="suggest-ward" name="ward" value={fields.ward} placeholder="Select your ward or community" invalid={Boolean(errors.ward)} onChange={(value) => setField("ward", value)}>
						{suggestProjectWards.map((ward) => (
							<option key={ward} value={ward}>
								{ward}
							</option>
						))}
					</Select>
				</Field>
				<Field label="Project category *" id="suggest-category" error={errors.category}>
					<Select id="suggest-category" name="category" value={fields.category} placeholder="Select a category" invalid={Boolean(errors.category)} onChange={(value) => setField("category", value)}>
						{suggestProjectCategories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</Select>
				</Field>
				<Field label="Project title *" id="suggest-title" error={errors.title}>
					<input id="suggest-title" name="title" type="text" required placeholder="e.g. Drainage repair on [street name]" value={fields.title} aria-invalid={Boolean(errors.title)} onChange={(event) => setField("title", event.target.value)} className={fieldClassName} />
				</Field>
			</div>

			<Field label="Location or landmark *" id="suggest-location" error={errors.location} className="mt-5">
				<input id="suggest-location" name="location" type="text" required placeholder="Street, area or nearest landmark" value={fields.location} aria-invalid={Boolean(errors.location)} onChange={(event) => setField("location", event.target.value)} className={fieldClassName} />
			</Field>

			<Field label="Project description *" id="suggest-description" error={errors.description} className="mt-5">
				<textarea
					id="suggest-description"
					name="description"
					required
					rows={5}
					placeholder="Describe the problem and what you would like the council to do."
					value={fields.description}
					aria-invalid={Boolean(errors.description)}
					onChange={(event) => setField("description", event.target.value)}
					className="min-h-[156px] w-full resize-y rounded-xl border border-[#E2E6E0] bg-white px-4 py-3.5 text-[15px] leading-[23px] text-council-green outline-none placeholder:text-[#758075] focus-visible:border-council-green focus-visible:ring-2 focus-visible:ring-council-green/20"
				/>
			</Field>

			<Field label="Who benefits?" id="suggest-beneficiaries" className="mt-5">
				<input id="suggest-beneficiaries" name="beneficiaries" type="text" placeholder="e.g. residents, traders, pupils, road users; roughly how many people" value={fields.beneficiaries} onChange={(event) => setField("beneficiaries", event.target.value)} className={fieldClassName} />
			</Field>

			<div className="mt-5">
				<p className={labelClassName}>Photos (optional)</p>
				<label
					onDragOver={(event) => {
						event.preventDefault();
						setDragging(true);
					}}
					onDragLeave={() => setDragging(false)}
					onDrop={onDrop}
					className={cn("mt-2 flex min-h-[141px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#C5CBBF] bg-white px-6 py-8 text-center", dragging && "border-council-green bg-council-lime/30")}>
					<input type="file" accept="image/*" multiple className="sr-only" onChange={(event) => addPhotos(event.target.files ?? [])} />
					<span className="text-[15px] font-medium leading-[23px] text-council-green">
						Drag photos here or <span className="underline underline-offset-2">browse</span>
					</span>
					<span className="mt-2 text-[13px] leading-5 text-council-subtle">[Accepted formats] · up to [file size limit]</span>
					{photos.length ? (
						<span className="mt-3 text-[13px] leading-5 text-council-green">{photos.map((photo) => photo.name).join(", ")}</span>
					) : null}
				</label>
			</div>

			<div className="mt-5">
				<label className="flex items-start gap-3 text-[13px] leading-5 text-council-subtle">
					<input type="checkbox" name="consent" checked={fields.consent} onChange={(event) => setField("consent", event.target.checked)} className="mt-0.5 size-5 shrink-0 rounded border border-[#E2E6E0] accent-council-green" />
					<span>I agree to the council using my details to review this suggestion and contact me about it.</span>
				</label>
				{errors.consent ? <p className="mt-2 text-xs leading-4 text-danger">{errors.consent}</p> : null}
			</div>

			<button type="submit" className="mt-6 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-council-green px-6 text-base font-medium leading-[22px] text-council-cream transition-colors hover:bg-council-green/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime focus-visible:ring-offset-2">
				Submit suggestion
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

type SelectProps = {
	id: string;
	name: string;
	value: string;
	placeholder: string;
	invalid?: boolean;
	onChange: (value: string) => void;
	children: ReactNode;
};

const Select = ({ id, name, value, placeholder, invalid, onChange, children }: SelectProps) => {
	return (
		<div className="relative">
			<select id={id} name={name} required value={value} aria-invalid={invalid} onChange={(event) => onChange(event.target.value)} className={cn(fieldClassName, "appearance-none pr-12", !value && "text-[#758075]")}>
				<option value="">{placeholder}</option>
				{children}
			</select>
			<ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-council-green" aria-hidden="true" />
		</div>
	);
};

export default SuggestProjectForm;
