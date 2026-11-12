import { Phone } from "lucide-react";

import { personPhoneHref } from "@/lib/content/people";
import { cn } from "@/lib/utils";

type PersonPhoneLinkProps = {
	phone: string;
	className?: string;
};

const PersonPhoneLink = ({ phone, className }: PersonPhoneLinkProps) => {
	return (
		<a
			href={personPhoneHref(phone)}
			className={cn(
				"inline-flex items-center gap-2 text-sm font-medium text-council-green transition-colors hover:text-council-gold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green",
				className,
			)}>
			<Phone className="size-3.5 shrink-0" aria-hidden="true" />
			<span>{phone}</span>
		</a>
	);
};

export default PersonPhoneLink;
