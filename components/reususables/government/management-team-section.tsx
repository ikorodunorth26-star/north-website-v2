import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { LocalImage } from "@/components/reususables/site";
import { managementDirectory, managementOverview, managementRelated, type ManagementOfficer } from "@/lib/content/management-team";

const ManagementOfficerCard = ({ officer }: { officer: ManagementOfficer }) => {
	return (
		<article className="flex h-full flex-col gap-6 rounded-[20px] bg-council-card p-3">
			<div className="relative aspect-[387/285] overflow-hidden rounded-xl bg-council-image">
				<LocalImage src={officer.image.src} alt={officer.image.alt} className="absolute inset-0" imageClassName="object-cover object-[center_18%]" sizes="(min-width: 1024px) 387px, (min-width: 600px) 50vw, 100vw" />
			</div>
			<div className="flex flex-col gap-4 px-3 pb-3">
				<h3 className="text-2xl font-medium leading-8 text-council-green lg:text-[27px]">{officer.name}</h3>
				<p className="text-sm font-medium leading-5 text-council-gold">{officer.role}</p>
			</div>
		</article>
	);
};

const ManagementTeamSection = () => {
	return (
		<>
			<section className="bg-[#ece8db] py-16">
				<div className="mx-auto flex w-full max-w-council flex-col gap-10 px-5 md:px-10 min-[1408px]:px-0">
					<p className="inline-flex w-fit items-center rounded-[32px] bg-white px-6 py-3.5 text-base font-medium text-council-green">{managementOverview.eyebrow}</p>
					<div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
						<h2 className="max-w-[391px] text-[32px] font-medium leading-10 text-council-green sm:text-[40px] lg:text-[46px] lg:leading-[56px]">{managementOverview.heading}</h2>
						<p className="max-w-[529px] text-lg font-medium leading-7 text-council-subtle lg:text-xl lg:leading-8">{managementOverview.description}</p>
					</div>
					<ul className="grid gap-8 lg:grid-cols-3 lg:gap-10">
						{managementOverview.responsibilities.map((item) => (
							<li key={item.title} className="max-w-[400px]">
								<h3 className="text-2xl font-medium leading-9 text-council-green">{item.title}</h3>
								<p className="mt-3 text-lg font-medium leading-7 text-council-subtle">{item.description}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-background py-16">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<div className="max-w-[720px]">
						<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px] lg:text-[52px] lg:leading-[60px]">{managementDirectory.title}</h2>
						<p className="mt-4 text-lg font-normal leading-7 text-council-subtle">{managementDirectory.description}</p>
					</div>
					<ul className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
						{managementDirectory.officers.map((officer) => (
							<li key={officer.name}>
								<ManagementOfficerCard officer={officer} />
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-[#eeeadf] py-14">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<h2 className="text-[28px] font-medium leading-9 text-council-green sm:text-[32px] sm:leading-[45px]">{managementRelated.title}</h2>
					<ul className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
						{managementRelated.links.map((link) => (
							<li key={link.href}>
								<Link href={link.href} className="flex flex-col gap-3 rounded-2xl py-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-green">
									<span className="inline-flex items-center gap-2 text-[22px] font-medium leading-[31px] text-council-green">
										{link.title}
										<ArrowUpRight className="size-5" aria-hidden="true" />
									</span>
									<span className="text-base leading-6 text-council-subtle">{link.description}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default ManagementTeamSection;
