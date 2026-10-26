import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
if (!token) throw new Error("missing token");

const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const frames = { desktop: "177:75", mobile: "184:835" };
const headers = { "X-Figma-Token": token };
const outDir = path.join(root, ".figma-preview", "executive");
await mkdir(outDir, { recursive: true });

function walk(node, depth, lines, images) {
	if (!node || node.visible === false) return;
	if (node.type === "TEXT" && node.characters) {
		const box = node.absoluteBoundingBox;
		const size = Math.round(node.style?.fontSize ?? 0);
		const weight = node.style?.fontWeight ?? "";
		lines.push(`${"  ".repeat(Math.min(depth, 6))}[${size}/${weight}] ${node.characters.replace(/\n/g, " / ")}`);
	}
	for (const fill of node.fills ?? []) {
		if (fill.visible === false) continue;
		if (fill.type === "IMAGE" && fill.imageRef) {
			const box = node.absoluteBoundingBox;
			images.push({
				id: node.id,
				name: node.name,
				imageRef: fill.imageRef,
				width: Math.round(box?.width ?? 0),
				height: Math.round(box?.height ?? 0),
			});
		}
	}
	for (const child of node.children ?? []) walk(child, depth + 1, lines, images);
}

const nodeUrl = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(Object.values(frames).join(","))}`;
const nodeResponse = await fetch(nodeUrl, { headers });
if (!nodeResponse.ok) throw new Error(`nodes ${nodeResponse.status} ${await nodeResponse.text()}`);
const data = await nodeResponse.json();

let textOut = "";
const imageRefs = new Map();
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
	for (const image of images) {
		if (!imageRefs.has(image.imageRef)) imageRefs.set(image.imageRef, []);
		imageRefs.get(image.imageRef).push(`${key}:${image.name}:${image.width}x${image.height}`);
	}
	await writeFile(path.join(outDir, `${key}-images.json`), JSON.stringify(images, null, 2));
}
await writeFile(path.join(outDir, "copy.txt"), textOut);

const imageUrl = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(frames.desktop)}&format=png&scale=0.35`;
const imageResponse = await fetch(imageUrl, { headers });
if (!imageResponse.ok) throw new Error(`images ${imageResponse.status} ${await imageResponse.text()}`);
const imageData = await imageResponse.json();
const renderUrl = imageData.images?.[frames.desktop];
if (!renderUrl) throw new Error("no render url");
const render = await fetch(renderUrl);
if (!render.ok) throw new Error(`render ${render.status}`);
await writeFile(path.join(outDir, "desktop.png"), Buffer.from(await render.arrayBuffer()));

const mobileUrl = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(frames.mobile)}&format=png&scale=0.5`;
const mobileResponse = await fetch(mobileUrl, { headers });
const mobileData = await mobileResponse.json();
const mobileRenderUrl = mobileData.images?.[frames.mobile];
if (mobileRenderUrl) {
	const mobileRender = await fetch(mobileRenderUrl);
	await writeFile(path.join(outDir, "mobile.png"), Buffer.from(await mobileRender.arrayBuffer()));
}

await writeFile(
	path.join(outDir, "image-refs.json"),
	JSON.stringify([...imageRefs.entries()].map(([imageRef, uses]) => ({ imageRef, uses })), null, 2),
);
console.log("text", textOut.length, "refs", imageRefs.size);
