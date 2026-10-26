import { LocalImage } from "@/components/reususables/site";
import { legislativeChamber, legislativeDirectory, type LegislativeMember } from "@/lib/content/legislative-house";

const LegislativeMemberCard = ({ member }: { member: LegislativeMember }) => {
	return (
		<article className="flex h-full flex-col gap-6 rounded-[20px] bg-council-card p-3">
			<div className="relative aspect-[387/285] overflow-hidden rounded-xl bg-council-image">
				<LocalImage src={member.image.src} alt={member.image.alt} className="absolute inset-0" imageClassName="object-cover object-top" sizes="(min-width: 1024px) 387px, (min-width: 600px) 50vw, 100vw" />
			</div>
			<div className="flex flex-col gap-3 px-3 pb-3">
				<h3 className="text-2xl font-medium leading-8 text-council-green lg:text-[27px]">{member.name}</h3>
				<p className="text-xs font-medium uppercase tracking-[0.04em] text-council-gold">{member.role}</p>
				<p className="text-[15px] font-normal leading-[23px] text-council-subtle">{member.bio}</p>
			</div>
		</article>
	);
};

const LegislativeHouseSection = () => {
	return (
		<>
			<section className="bg-[#ece8db] py-16">
				<div className="mx-auto flex w-full max-w-council flex-col gap-10 px-5 md:px-10 min-[1408px]:px-0">
					<p className="inline-flex w-fit items-center rounded-[32px] bg-white px-6 py-3.5 text-base font-medium text-council-green">{legislativeChamber.eyebrow}</p>
					<div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
						<h2 className="max-w-[391px] text-[32px] font-medium leading-10 text-council-green sm:text-[40px] lg:text-[46px] lg:leading-[56px]">{legislativeChamber.heading}</h2>
						<p className="max-w-[529px] text-lg font-medium leading-7 text-council-subtle lg:text-xl lg:leading-8">{legislativeChamber.description}</p>
					</div>
					<ul className="grid gap-8 lg:grid-cols-3 lg:gap-10">
						{legislativeChamber.responsibilities.map((item) => (
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
					<div className="max-w-[618px]">
						<h2 className="text-[32px] font-medium leading-10 text-council-green sm:text-[42px] sm:leading-[48px] lg:text-[52px] lg:leading-[60px]">{legislativeDirectory.title}</h2>
						<p className="mt-4 max-w-[570px] text-lg font-medium leading-7 text-council-subtle">{legislativeDirectory.description}</p>
					</div>
					<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{legislativeDirectory.members.map((member) => (
							<li key={member.name}>
								<LegislativeMemberCard member={member} />
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default LegislativeHouseSection;
