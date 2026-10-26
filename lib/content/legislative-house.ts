import { figmaAssets, type FigmaAsset } from "./figma-assets";

export type LegislativeMember = {
	name: string;
	role: string;
	image: FigmaAsset;
	bio: string;
};

const pendingResponsibilities = "The councillor’s name, position in the House and community responsibilities will be published once verified.";

export const legislativeHousePage = {
	label: "Representative Arm",
	title: "Legislative House",
	description: "Connecting the priorities of our communities with local lawmaking, oversight and accountable government in Ikorodu North.",
};

export const legislativeChamber = {
	eyebrow: "Civic Mandate",
	heading: "Chamber overview",
	description: "The Legislative House brings community priorities into council deliberations. Councillors represent residents, review local policies and provide oversight of the work of the council.",
	responsibilities: [
		{ title: "Representation", description: "Bringing the needs and concerns of residents into council discussions." },
		{ title: "Local lawmaking", description: "Deliberating on local policies and bye-laws that shape community life." },
		{ title: "Public oversight", description: "Scrutinising council activities and supporting accountable public service." },
	],
};

export const legislativeDirectory = {
	title: "Meet your representatives.",
	description: "Find the people representing your community in the Legislative House.",
	members: [
		{ name: "Hon Benson Titilayo Abosede", role: "Leader of the house, Councilor ward E2 Erikorodo", image: figmaAssets.government.leader, bio: pendingResponsibilities },
		{ name: "Hon Jimoh Idris Iliasu", role: "Deputy Leader, Councilor Ward B3, Isiu", image: figmaAssets.government.deputyLeader, bio: pendingResponsibilities },
		{ name: "Hon Banjoko Babatunde Oluwaseun", role: "Majority Leader, Councilor ward E1 Odogunyan", image: figmaAssets.government.majorityLeader, bio: pendingResponsibilities },
		{ name: "Hon Onabajo Oluwaseyi Olugbenga", role: "Chief Whip, Councilor Ward E4, Olorunda", image: figmaAssets.government.chiefWhip, bio: pendingResponsibilities },
		{ name: "Hon Ibrahim Risikat Abiodun", role: "Councilor ward E3 Agbala", image: figmaAssets.government.agbalaCouncillor, bio: pendingResponsibilities },
	] satisfies LegislativeMember[],
};
