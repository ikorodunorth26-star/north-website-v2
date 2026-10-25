import { figmaAssets } from "@/lib/content/figma-assets";
import { homeContent, homeTeamMembers } from "@/lib/content/home";

import HomeSectionHeading from "./home-section-heading";
import HomeTeamMemberCard from "./home-team-member-card";

const HomeTeamSection = () => {
	const { team } = homeContent;
	const [chairman, viceChairman, ...legislativeMembers] = homeTeamMembers;

	return (
		<section className="bg-[#f1efe4] py-16 lg:py-24" aria-labelledby="home-team-heading">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1360px]:px-0">
				<div className="relative overflow-hidden rounded-[40px] bg-council-green p-6 sm:p-8 lg:p-[72px]">
					<div
						className="absolute inset-0 opacity-[0.07] mix-blend-soft-light [background-size:520px_520px]"
						style={{ backgroundImage: `url(${figmaAssets.home.heroTexture.src})` }}
						aria-hidden="true"
					/>
					<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-council-dark/40" aria-hidden="true" />
					<div className="relative">
						<HomeSectionHeading id="home-team-heading" title={team.title} description={team.description} ctaLabel={team.cta} ctaHref="/government/management-team" dark ctaVariant="lime" descriptionClassName="max-w-none whitespace-pre-line" titleClassName="text-[30px] leading-9 sm:text-[34px] sm:leading-10 md:text-[48px] md:leading-[54px] lg:text-[52px] lg:leading-[58px] lg:tracking-[-1.1px] xl:text-[56px] xl:leading-[62px]" />
						<div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
							<HomeTeamMemberCard member={chairman} large />
							<HomeTeamMemberCard member={viceChairman} large />
						</div>
						<div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
							{legislativeMembers.map((member) => (
								<HomeTeamMemberCard key={member.name} member={member} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeTeamSection;
