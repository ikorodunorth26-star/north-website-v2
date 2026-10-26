"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

import { CategoryFilter } from "@/components/reususables/news";
import { councilDepartments, departmentDirectory, departmentIcons, type CouncilDepartment } from "@/lib/content/departments";

const filters = ["all", "departments", "units", "health"] as const;
type DepartmentFilter = (typeof filters)[number];

function isDepartmentFilter(value: string): value is DepartmentFilter {
	return filters.some((filter) => filter === value);
}

function matchesFilter(department: CouncilDepartment, filter: DepartmentFilter) {
	switch (filter) {
		case "all":
			return true;
		case "departments":
			return department.group === "department";
		case "units":
			return department.group === "unit";
		case "health":
			return department.health === true;
		default: {
			const unreachable: never = filter;
			return unreachable;
		}
	}
}

const DepartmentCard = ({ department }: { department: CouncilDepartment }) => {
	const Icon = departmentIcons[department.icon];

	return (
		<article className="flex h-full flex-col rounded-[24px] bg-white p-6">
			<div className="inline-flex size-14 items-center justify-center rounded-full bg-council-lime/45 text-council-green">
				<Icon className="size-6" aria-hidden="true" />
			</div>
			<h3 className="mt-5 text-[26px] font-bold leading-8 text-council-green">{department.title}</h3>
			<p className="mt-3 text-lg font-medium leading-7 text-council-subtle">{department.description}</p>
			<div className="mt-4 space-y-1 text-[15px] font-medium leading-6 text-council-subtle">
				<p>
					<a href={`mailto:${department.email}`} className="break-all hover:text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
						{department.email}
					</a>
				</p>
				<p>{department.phone}</p>
			</div>
			<Link href={department.href ?? "/contact"} className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-lg font-bold text-council-green focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
				{departmentDirectory.profileLabel}
				<ArrowUpRight className="size-[18px]" aria-hidden="true" />
			</Link>
		</article>
	);
};

const DepartmentDirectory = () => {
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<DepartmentFilter>("all");

	const departments = useMemo(() => {
		const needle = query.trim().toLowerCase();
		return councilDepartments.filter((department) => {
			if (!matchesFilter(department, filter)) return false;
			if (!needle) return true;
			return [department.title, department.description, department.email].join(" ").toLowerCase().includes(needle);
		});
	}, [filter, query]);

	return (
		<div>
			<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
				<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px]">{departmentDirectory.title}</h2>
				<label className="relative block w-full lg:max-w-[500px]">
					<span className="sr-only">{departmentDirectory.searchPlaceholder}</span>
					<Search className="pointer-events-none absolute left-4 top-1/2 size-[22px] -translate-y-1/2 text-council-subtle" aria-hidden="true" />
					<input
						type="search"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder={departmentDirectory.searchPlaceholder}
						className="h-[52px] w-full rounded-full border border-[#e2e6e0] bg-white pl-12 pr-4 text-[15px] text-council-green placeholder:text-[#758075] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green"
					/>
				</label>
			</div>
			<div className="mt-6">
				<CategoryFilter
					categories={departmentDirectory.filters}
					activeCategory={filter}
					onCategoryChange={(value) => {
						if (isDepartmentFilter(value)) setFilter(value);
					}}
					label="Filter departments"
				/>
			</div>
			{departments.length > 0 ? (
				<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{departments.map((department) => (
						<li key={department.title}>
							<DepartmentCard department={department} />
						</li>
					))}
				</ul>
			) : (
				<p className="mt-8 text-lg font-medium text-council-subtle">{departmentDirectory.empty}</p>
			)}
		</div>
	);
};

export default DepartmentDirectory;
