import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
if (!token) throw new Error("missing token");

const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const frames = {
	services: "154:3627",
	departments: "272:267",
	departmentIct: "252:11109",
	executive: "177:75",
	legislative: "154:2177",
	revenue: "385:711",
	payNow: "395:751",
	billReview: "401:757",
	myBills: "401:962",
	paymentVerified: "401:1175",
	billBusiness: "402:868",
	isiu: "444:722",
	odogunyan: "444:989",
	olorunda: "444:1348",
	erikorodo: "444:1631",
	agbala: "444:1902",
	suggest: "296:502",
};

const headers = { "X-Figma-Token": token };

function walk(node, depth, lines, images) {
	if (!node || node.visible === false) return;
	const name = node.name ?? "";
	if (node.type === "TEXT" && node.characters) {
		lines.push(`${"  ".repeat(depth)}${node.characters.replace(/\n/g, " / ")}`);
	}
	const fills = node.fills ?? [];
	for (const fill of fills) {
		if (fill.visible === false) continue;
		if (fill.type === "IMAGE" && fill.imageRef) {
			images.push(`${node.id}\t${name}\t${fill.imageRef}\t${Math.round(node.absoluteBoundingBox?.width ?? 0)}x${Math.round(node.absoluteBoundingBox?.height ?? 0)}`);
		}
	}
	for (const child of node.children ?? []) walk(child, depth + 1, lines, images);
}

await mkdir(path.join(root, ".figma-preview", "frames"), { recursive: true });

const ids = Object.values(frames);
const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(ids.join(","))}`;
const response = await fetch(url, { headers });
if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
const data = await response.json();

let textOut = "";
let imageOut = "";
for (const [key, id] of Object.entries(frames)) {
	const node = data.nodes?.[id]?.document;
	if (!node) {
		textOut += `\n# ${key} MISSING\n`;
		continue;
	}
	const lines = [];
	const images = [];
	walk(node, 0, lines, images);
	textOut += `\n# ${key} (${id}) ${node.name}\n${lines.join("\n")}\n`;
	imageOut += images.map((line) => `${key}\t${line}`).join("\n") + "\n";
}

await writeFile(path.join(root, ".figma-preview", "frames", "copy.txt"), textOut);
await writeFile(path.join(root, ".figma-preview", "frames", "images.tsv"), imageOut);
console.log("wrote copy", textOut.length, "images", imageOut.split("\n").filter(Boolean).length);
