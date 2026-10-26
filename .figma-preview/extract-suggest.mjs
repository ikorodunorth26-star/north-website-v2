import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
if (!token) throw new Error("missing token");

const headers = { "X-Figma-Token": token };
const id = "296:502";
const response = await fetch(`https://api.figma.com/v1/files/6vASgsAN1cRdD4sAleAZEG/nodes?ids=${encodeURIComponent(id)}`, { headers });
if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
const data = await response.json();
const rootNode = data.nodes[id].document;

const lines = [];
function walk(node, depth) {
	if (!node || node.visible === false || depth > 4) return;
	const box = node.absoluteBoundingBox;
	const size = box ? `${Math.round(box.x)},${Math.round(box.y)} ${Math.round(box.width)}x${Math.round(box.height)}` : "";
	const fill = (node.fills ?? []).find((item) => item.visible !== false && item.type === "SOLID");
	const color = fill ? ` #${[fill.color.r, fill.color.g, fill.color.b].map((channel) => Math.round(channel * 255).toString(16).padStart(2, "0")).join("")}` : "";
	const text = node.characters ? ` "${node.characters.replace(/\n/g, " / ").slice(0, 80)}"` : "";
	if (depth <= 3 || node.type === "TEXT" || node.type === "FRAME" || node.type === "INSTANCE") {
		lines.push(`${"  ".repeat(depth)}${node.type} ${node.name} ${size}${color}${text}`);
	}
	if (depth >= 4) return;
	for (const child of node.children ?? []) walk(child, depth + 1);
}
walk(rootNode, 0);
await writeFile(path.join(root, ".figma-preview", "suggest-layout.txt"), lines.join("\n"));
console.log(lines.slice(0, 80).join("\n"));
console.log("---", lines.length);

const image = await fetch(`https://api.figma.com/v1/images/6vASgsAN1cRdD4sAleAZEG?ids=${encodeURIComponent(id)}&format=png&scale=0.5`, { headers });
const imageData = await image.json();
const url = imageData.images?.[id];
console.log("image", image.status, url ? "ok" : JSON.stringify(imageData).slice(0, 200));
if (url) {
	const file = await fetch(url);
	await writeFile(path.join(root, ".figma-preview", "suggest-desktop.png"), Buffer.from(await file.arrayBuffer()));
	console.log("saved screenshot");
}
