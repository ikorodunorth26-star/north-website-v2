import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
const headers = { "X-Figma-Token": token };
const id = "177:75";
const response = await fetch(`https://api.figma.com/v1/files/6vASgsAN1cRdD4sAleAZEG/nodes?ids=${encodeURIComponent(id)}`, { headers });
if (!response.ok) throw new Error(await response.text());
const data = await response.json();
const rootNode = data.nodes[id].document;

function color(paint) {
	if (!paint || paint.visible === false) return "";
	if (paint.type === "SOLID" && paint.color) {
		const { r, g, b } = paint.color;
		const a = paint.opacity ?? paint.color.a ?? 1;
		const hex = [r, g, b].map((channel) => Math.round(channel * 255).toString(16).padStart(2, "0")).join("");
		return `#${hex}${a < 1 ? `/${Math.round(a * 100)}` : ""}`;
	}
	if (paint.type === "IMAGE") return "image";
	if (paint.type === "GRADIENT_LINEAR") return "gradient";
	return paint.type ?? "";
}

const lines = [];
function walk(node, depth) {
	if (!node || node.visible === false) return;
	if (depth > 7) return;
	const box = node.absoluteBoundingBox;
	const size = box ? `${Math.round(box.width)}x${Math.round(box.height)}` : "";
	const fill = (node.fills ?? []).map(color).filter(Boolean).join(",");
	const radius = node.cornerRadius ? ` r${node.cornerRadius}` : "";
	const layout = node.layoutMode ? ` ${node.layoutMode} gap${node.itemSpacing ?? 0} p${node.paddingTop ?? 0}/${node.paddingRight ?? 0}/${node.paddingBottom ?? 0}/${node.paddingLeft ?? 0}` : "";
	const text = node.type === "TEXT" ? ` "${(node.characters ?? "").replace(/\n/g, " / ").slice(0, 80)}"` : "";
	if (node.name?.includes("Footer") || node.name === "Primary navigation" || node.name === "Header") return;
	lines.push(`${"  ".repeat(depth)}${node.type} ${node.name} ${size}${radius}${layout}${fill ? ` fill=${fill}` : ""}${text}`);
	if (node.type === "TEXT") return;
	for (const child of node.children ?? []) walk(child, depth + 1);
}
walk(rootNode, 0);
await writeFile(path.join(root, ".figma-preview", "executive", "layout.txt"), lines.join("\n"));
console.log(lines.length);
