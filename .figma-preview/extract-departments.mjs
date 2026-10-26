import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
const headers = { "X-Figma-Token": token };
const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const id = "272:267";
const outDir = path.join(root, ".figma-preview", "departments");
await mkdir(outDir, { recursive: true });

const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(id)}`, { headers });
if (!response.ok) throw new Error(await response.text());
const data = await response.json();
const texts = [];
const images = [];
function walk(node, depth) {
	if (!node || node.visible === false) return;
	if (node.name?.includes("Footer") || node.name?.includes("Primary navigation")) return;
	if (node.type === "TEXT") texts.push(`${node.style?.fontSize}/${node.style?.fontWeight}/${node.style?.textCase || "ORIGINAL"} ${node.characters.replace(/\n/g, " / ")}`);
	const box = node.absoluteBoundingBox;
	for (const paint of node.fills ?? []) {
		if (paint.visible === false || paint.type !== "IMAGE" || !paint.imageRef) continue;
		if (node.name === "texture") continue;
		images.push({ name: node.name, imageRef: paint.imageRef, width: Math.round(box?.width ?? 0), height: Math.round(box?.height ?? 0) });
	}
	if (depth < 5 && node.type !== "TEXT") {
		const size = box ? `${Math.round(box.width)}x${Math.round(box.height)}` : "";
		texts.push(`# ${"  ".repeat(depth)}${node.name} ${size}`);
	}
	for (const child of node.children ?? []) walk(child, depth + 1);
}
walk(data.nodes[id].document, 0);
await writeFile(path.join(outDir, "copy.txt"), texts.join("\n"));
await writeFile(path.join(outDir, "images.json"), JSON.stringify(images, null, 2));
const render = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(id)}&format=png&scale=0.28`, { headers });
const renderData = await render.json();
const png = await fetch(renderData.images[id]);
await writeFile(path.join(outDir, "desktop.png"), Buffer.from(await png.arrayBuffer()));
console.log("texts", texts.length, "images", images.length);
