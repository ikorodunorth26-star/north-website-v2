import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
const headers = { "X-Figma-Token": token };
const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const frames = {
	isiu: "444:722",
	odogunyan: "444:989",
	olorunda: "444:1348",
	erikorodo: "444:1631",
	agbala: "444:1902",
};
const outDir = path.join(root, ".figma-preview", "wards");
await mkdir(outDir, { recursive: true });

const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(Object.values(frames).join(","))}`, { headers });
if (!response.ok) throw new Error(await response.text());
const data = await response.json();

function walk(node, depth, lines) {
	if (!node || node.visible === false) return;
	if (node.name?.includes("Footer") || node.name?.includes("Primary navigation")) return;
	if (node.type === "TEXT") lines.push(`${node.style?.fontSize}/${node.style?.fontWeight} ${node.characters.replace(/\n/g, " / ")}`);
	if (depth < 4 && node.type !== "TEXT") {
		const box = node.absoluteBoundingBox;
		const size = box ? `${Math.round(box.width)}x${Math.round(box.height)}` : "";
		lines.push(`# ${"  ".repeat(depth)}${node.name} ${size}`);
	}
	for (const child of node.children ?? []) walk(child, depth + 1, lines);
}

let copy = "";
for (const [key, id] of Object.entries(frames)) {
	const lines = [];
	walk(data.nodes[id].document, 0, lines);
	copy += `\n# ${key}\n${lines.join("\n")}\n`;
}
await writeFile(path.join(outDir, "copy.txt"), copy);

const render = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=444:722&format=png&scale=0.35`, { headers });
const renderData = await render.json();
const png = await fetch(renderData.images["444:722"]);
await writeFile(path.join(outDir, "isiu-desktop.png"), Buffer.from(await png.arrayBuffer()));
console.log("copy", copy.length);
