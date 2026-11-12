import { Phone } from "lucide-react";

import { personPhoneHref } from "@/lib/content/people";
import { cn } from "@/lib/utils";

type PersonPhoneLinkProps = {
	phone: string;
	className?: string;
};

/** Compact call control for directory portraits — sits on the image, no extra card height. */
const PersonPhoneLink = ({ phone, className }: PersonPhoneLinkProps) => {
	const label = phone.split("/")[0]?.trim() ?? phone;

	return (
		<a
			href={personPhoneHref(phone)}
			aria-label={`Call ${phone}`}
			title={phone}
			className={cn(
				"absolute bottom-3 left-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-full bg-white/95 py-1.5 pl-2 pr-2.5 text-[11px] font-semibold tabular-nums tracking-[0.02em] text-council-green shadow-[0_8px_20px_-10px_rgba(14,36,29,0.55)] backdrop-blur-sm transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-council-lime focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime motion-reduce:transition-none motion-reduce:hover:translate-y-0",
				className,
			)}>
			<span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-council-green text-council-lime">
				<Phone className="size-2.5" aria-hidden="true" />
			</span>
			<span className="truncate">{label}</span>
		</a>
	);
};

export default PersonPhoneLink;
