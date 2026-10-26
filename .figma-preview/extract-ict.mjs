import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
const headers = { "X-Figma-Token": token };
const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const frames = { desktop: "252:11109", mobile: "292:1800" };
const outDir = path.join(root, ".figma-preview", "ict");
await mkdir(outDir, { recursive: true });

const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(Object.values(frames).join(","))}`, { headers });
if (!response.ok) throw new Error(await response.text());
const data = await response.json();

const lines = [];
const images = [];
function walk(node, depth, key) {
	if (!node || node.visible === false) return;
	if (node.name?.includes("Footer") || node.name?.includes("Primary navigation") || node.name === "Mobile navigation") return;
	const box = node.absoluteBoundingBox;
	if (node.type === "TEXT") {
		lines.push(`${key} ${node.style?.fontSize}/${node.style?.fontWeight} ${node.characters.replace(/\n/g, " / ")}`);
	} else if (depth <= 4) {
		const size = box ? `${Math.round(box.width)}x${Math.round(box.height)}` : "";
		lines.push(`${key} # ${"  ".repeat(depth)}${node.name} ${size}`);
	}
	for (const paint of node.fills ?? []) {
		if (paint.visible === false || paint.type !== "IMAGE" || !paint.imageRef || node.name === "texture") continue;
		images.push({ key, name: node.name, imageRef: paint.imageRef, width: Math.round(box?.width ?? 0), height: Math.round(box?.height ?? 0) });
	}
	for (const child of node.children ?? []) walk(child, depth + 1, key);
}
for (const [key, id] of Object.entries(frames)) walk(data.nodes[id].document, 0, key);
await writeFile(path.join(outDir, "copy.txt"), lines.join("\n"));
await writeFile(path.join(outDir, "images.json"), JSON.stringify(images, null, 2));

const render = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(frames.desktop)}&format=png&scale=0.35`, { headers });
const renderData = await render.json();
const png = await fetch(renderData.images[frames.desktop]);
await writeFile(path.join(outDir, "desktop.png"), Buffer.from(await png.arrayBuffer()));
console.log("lines", lines.length, "images", images.length);
