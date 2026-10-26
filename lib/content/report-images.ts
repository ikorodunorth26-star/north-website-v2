import type { FigmaAsset } from "./figma-assets";

const photo = (file: string, width: number, height: number, alt: string): FigmaAsset => ({
	src: `/images/reports/${file}`,
	width,
	height,
	alt,
});

export const reportImages = {
	hundredDays: photo("hundred-days.webp", 1600, 1200, "Mayor Ameen Apanisile addressing the first 100 days gathering at Isiu"),
	hundredDaysCrowd: photo("hundred-days-crowd.webp", 1600, 1200, "Residents at the first 100 days gathering in Ikorodu North"),
	odonlaRibbon: photo("odonla-ribbon.webp", 590, 392, "Ribbon cutting at the Odo-Nla health facilities"),
	odonlaOffice: photo("odonla-office.webp", 1600, 1200, "The Odo-Nla area office commissioned in the first 100 days"),
	odonlaPhc: photo("odonla-phc.webp", 1600, 1200, "The renovated primary health centre buildings at Odo-Nla"),
	empowermentCheques: photo("empowerment-cheques.webp", 1600, 1200, "Presentation cheques for the Iranlowo Owo Apa empowerment programme"),
	ambulance: photo("ambulance.webp", 1600, 1064, "Mayor Ameen Apanisile with the new ambulance at Odo-Nla"),
	healthOutreach: photo("health-outreach.webp", 1600, 1064, "Mothers and children at the Odo-Nla health commissioning"),
	healthRegistration: photo("health-registration.webp", 1600, 1200, "Registration desk at the Odo-Nla health commissioning"),
	schoolWaterGroup: photo("school-water-group.webp", 869, 545, "Pupils and officials at the WaterAid school commissioning"),
	schoolWaterTank: photo("school-water-tank.webp", 1020, 765, "Solar water tanks at Idera Community Primary School, commissioned on 30 September 2025"),
	schoolSanitation: photo("school-sanitation.webp", 1020, 765, "A school sanitation block commissioned with WaterAid"),
	roadInspection: photo("road-inspection.webp", 1020, 765, "Mayor Ameen Apanisile and officials inspecting a road project"),
	drainageWorks: photo("drainage-works.webp", 765, 1020, "Excavator at drainage works during the October 2025 inspection"),
	apekaRoad: photo("apeka-road.webp", 640, 480, "Grader on High School Road, Apeka, at the July 2026 flag-off"),
	apekaFlagoff: photo("apeka-flagoff.webp", 1280, 850, "Mayor Ameen Apanisile and officials on a grader at the Apeka flag-off"),
	adamoRoad: photo("adamo-road.webp", 1600, 1600, "The paved Adamo–Araro Road during inspection"),
	classroomsIgbaga: photo("classrooms-igbaga.webp", 1414, 2000, "Council press card for the six classroom blocks commissioned at Igbaga on 8 April 2026"),
	fourWaterFacilities: photo("four-water-facilities.webp", 764, 1080, "Council press card for the four solar water facilities commissioned on 26 March 2026"),
	assumesOffice: photo("assumes-office.webp", 1600, 1600, "Swearing-in of the Executive Chairman and the 6th Legislative Council on 28 July 2025"),
};
