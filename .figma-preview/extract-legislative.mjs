import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
if (!token) throw new Error("missing token");
const headers = { "X-Figma-Token": token };
const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const frames = { desktop: "154:2177", mobile: "233:937" };
const outDir = path.join(root, ".figma-preview", "legislative");
await mkdir(outDir, { recursive: true });

function color(paint) {
	if (!paint || paint.visible === false) return "";
	if (paint.type === "SOLID" && paint.color) {
		const { r, g, b } = paint.color;
		const hex = [r, g, b].map((channel) => Math.round(channel * 255).toString(16).padStart(2, "0")).join("");
		return `#${hex}`;
	}
	if (paint.type === "IMAGE") return `image:${paint.imageRef ?? ""}`;
	if (paint.type === "GRADIENT_LINEAR") return "gradient";
	return paint.type ?? "";
}

const lines = [];
const images = [];
function walk(node, depth, key) {
	if (!node || node.visible === false) return;
	if (node.name?.includes("Footer") || node.name?.includes("Primary navigation")) return;
	const box = node.absoluteBoundingBox;
	const size = box ? `${Math.round(box.width)}x${Math.round(box.height)}` : "";
	const fill = (node.fills ?? []).map(color).filter(Boolean).join(",");
	const text = node.type === "TEXT" ? ` "${(node.characters ?? "").replace(/\n/g, " / ").slice(0, 140)}"` : "";
	if (depth <= 8) {
		lines.push(`${key} ${"  ".repeat(depth)}${node.type} ${node.name} ${size}${fill ? ` fill=${fill}` : ""}${text}`);
	}
	for (const paint of node.fills ?? []) {
		if (paint.visible === false || paint.type !== "IMAGE" || !paint.imageRef) continue;
		images.push({ key, id: node.id, name: node.name, imageRef: paint.imageRef, width: Math.round(box?.width ?? 0), height: Math.round(box?.height ?? 0) });
	}
	if (node.type === "TEXT") return;
	for (const child of node.children ?? []) walk(child, depth + 1, key);
}

const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(Object.values(frames).join(","))}`, { headers });
if (!response.ok) throw new Error(await response.text());
const data = await response.json();
for (const [key, id] of Object.entries(frames)) walk(data.nodes[id].document, 0, key);
await writeFile(path.join(outDir, "layout.txt"), lines.join("\n"));
await writeFile(path.join(outDir, "images.json"), JSON.stringify(images, null, 2));

const render = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(frames.desktop)}&format=png&scale=0.4`, { headers });
const renderData = await render.json();
const png = await fetch(renderData.images[frames.desktop]);
await writeFile(path.join(outDir, "desktop.png"), Buffer.from(await png.arrayBuffer()));
console.log("lines", lines.length, "images", images.length);
