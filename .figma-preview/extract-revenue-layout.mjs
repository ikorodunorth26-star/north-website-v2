import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
if (!token) throw new Error("missing token");

const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const id = "385:711";
const headers = { "X-Figma-Token": token };

function hex(paint) {
	if (!paint || paint.visible === false) return "";
	if (paint.type === "SOLID" && paint.color) {
		const { r, g, b } = paint.color;
		const a = paint.opacity ?? 1;
		const value = [r, g, b].map((channel) => Math.round(channel * 255).toString(16).padStart(2, "0")).join("");
		return `#${value}${a < 0.999 ? `/${Math.round(a * 100)}` : ""}`;
	}
	if (paint.type === "IMAGE") return "image";
	if (paint.type === "GRADIENT_LINEAR") {
		const stops = (paint.gradientStops ?? [])
			.map((stop) => {
				const { r, g, b, a } = stop.color;
				const value = [r, g, b].map((channel) => Math.round(channel * 255).toString(16).padStart(2, "0")).join("");
				return `#${value}${a < 0.999 ? `/${Math.round(a * 100)}` : ""}@${Math.round(stop.position * 100)}`;
			})
			.join(">");
		return `gradient(${stops})`;
	}
	return paint.type ?? "";
}

const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(id)}`, { headers });
if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
const data = await response.json();
const documentNode = data.nodes[id].document;

const lines = [];
function walk(node, depth) {
	if (!node || node.visible === false) return;
	const box = node.absoluteBoundingBox;
	const origin = documentNode.absoluteBoundingBox;
	const x = box && origin ? Math.round(box.x - origin.x) : "";
	const y = box && origin ? Math.round(box.y - origin.y) : "";
	const size = box ? `${Math.round(box.width)}x${Math.round(box.height)} @${x},${y}` : "";
	const fill = (node.fills ?? []).map(hex).filter(Boolean).join(",");
	const stroke = (node.strokes ?? []).map(hex).filter(Boolean).join(",");
	const radius = node.cornerRadius ? ` r${node.cornerRadius}` : "";
	const layout = node.layoutMode
		? ` ${node.layoutMode} gap${node.itemSpacing ?? 0} p${node.paddingTop ?? 0}/${node.paddingRight ?? 0}/${node.paddingBottom ?? 0}/${node.paddingLeft ?? 0}`
		: "";
	let text = "";
	if (node.type === "TEXT") {
		const style = node.style ?? {};
		text = ` "${(node.characters ?? "").replace(/\n/g, " / ").slice(0, 90)}" ${style.fontSize}/${style.fontWeight} lh${style.lineHeightPx ? Math.round(style.lineHeightPx) : "auto"} ${style.fontFamily ?? ""}`;
	}
	lines.push(
		`${"  ".repeat(depth)}${node.type} ${node.name} ${size}${radius}${layout}${fill ? ` fill=${fill}` : ""}${stroke ? ` stroke=${stroke}` : ""}${text}`,
	);
	for (const child of node.children ?? []) walk(child, depth + 1);
}
walk(documentNode, 0);

const outDir = path.join(root, ".figma-preview", "revenue");
await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, "layout.txt"), lines.join("\n"));

const imageResponse = await fetch(
	`https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(id)}&format=png&scale=1`,
	{ headers },
);
if (!imageResponse.ok) throw new Error(`${imageResponse.status} ${await imageResponse.text()}`);
const imageData = await imageResponse.json();
const imageUrl = imageData.images?.[id];
if (!imageUrl) throw new Error("no image url");
const png = await fetch(imageUrl);
if (!png.ok) throw new Error(`png ${png.status}`);
await writeFile(path.join(outDir, "frame.png"), Buffer.from(await png.arrayBuffer()));
console.log("lines", lines.length, "png", imageUrl.slice(0, 40));
