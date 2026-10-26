import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const out = path.resolve("public/images/reports");
await mkdir(out, { recursive: true });

const jobs = [
	["hundred-days.webp", ".figma-preview/ward-photos/days-1.jpg"],
	["odonla-ribbon.webp", ".figma-preview/ward-photos/health-1.jpg"],
	["odonla-office.webp", ".figma-preview/ward-photos/days-3.jpg"],
	["odonla-phc.webp", ".figma-preview/ward-photos/days-5.jpg"],
	["hundred-days-crowd.webp", ".figma-preview/ward-photos/days-6.jpg"],
	["empowerment-cheques.webp", ".figma-preview/ward-photos/days-4.jpg"],
	["ambulance.webp", ".figma-preview/ward-photos/health-3.jpg"],
	["health-outreach.webp", ".figma-preview/ward-photos/health-2.jpg"],
	["health-registration.webp", ".figma-preview/ward-photos/health-6.jpg"],
	["school-water-group.webp", ".figma-preview/ward-photos/water-2.jpeg"],
	["school-water-tank.webp", ".figma-preview/ward-photos/water-1.jpeg"],
	["school-sanitation.webp", ".figma-preview/ward-photos/water-3.jpeg"],
	["road-inspection.webp", ".figma-preview/ward-photos/inspect-1.jpg"],
	["drainage-works.webp", ".figma-preview/ward-photos/inspect-2.jpg"],
	["apeka-road.webp", ".figma-preview/ward-photos/apeka.jpeg"],
	["apeka-flagoff.webp", ".figma-preview/ward-photos/flagoff.jpeg"],
	["adamo-road.webp", ".figma-preview/ward-photos/adamo-road.jpg"],
	["classrooms-igbaga.webp", "https://theeyenews.ng/wp-content/uploads/2026/04/IMG-20260409-WA0005.jpg"],
	["four-water-facilities.webp", "https://theeyenews.ng/wp-content/uploads/2026/03/IMG-20260326-WA0058.jpg"],
	["assumes-office.webp", "https://ajasainfo.com/wp-content/uploads/2025/07/gridart_20250729_0721441481327633263286388526.jpg"],
];

for (const [name, source] of jobs) {
	const input = source.startsWith("http") ? Buffer.from(await (await fetch(source, { headers: { "User-Agent": "Mozilla/5.0" } })).arrayBuffer()) : source;
	const info = await sharp(input).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(out, name));
	console.log(`${name}\t${info.width}x${info.height}\t${info.size}`);
}
