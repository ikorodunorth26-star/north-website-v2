import Link from "next/link";

import { departmentHref, relatedWorkLabels } from "@/lib/content/relations";
import type { CouncilDepartment } from "@/lib/content/departments";
import type { WardRecord } from "@/lib/content/wards";

type ContentPlaceLinksProps = {
	wards: WardRecord[];
	departments: CouncilDepartment[];
};

const ContentPlaceLinks = ({ wards, departments }: ContentPlaceLinksProps) => {
	if (!wards.length && !departments.length) return null;

	return (
		<div className="mt-10 space-y-5 border-t border-council-green/10 pt-8">
			{wards.length ? (
				<div>
					<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-gold">{relatedWorkLabels.communitiesLabel}</p>
					<ul className="mt-3 flex flex-wrap gap-2">
						{wards.map((ward) => (
							<li key={ward.slug}>
								<Link
									href={`/communities/${ward.slug}`}
									className="inline-flex rounded-full bg-council-muted px-4 py-2 text-sm font-medium text-council-green transition-colors hover:bg-council-green hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									{ward.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			) : null}
			{departments.length ? (
				<div>
					<p className="text-xs font-medium uppercase tracking-[0.08em] text-council-gold">{relatedWorkLabels.departmentsLabel}</p>
					<ul className="mt-3 flex flex-wrap gap-2">
						{departments.map((department) => (
							<li key={department.slug}>
								<Link
									href={departmentHref(department.slug)}
									className="inline-flex rounded-full border border-council-green/15 px-4 py-2 text-sm font-medium text-council-green transition-colors hover:border-council-green hover:bg-council-green hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									{department.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default ContentPlaceLinks;
