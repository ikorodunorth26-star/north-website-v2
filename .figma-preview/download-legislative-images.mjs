import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
const headers = { "X-Figma-Token": token };
const fileKey = "6vASgsAN1cRdD4sAleAZEG";

const nodeResponse = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=154:2177`, { headers });
const nodeData = await nodeResponse.json();
const texts = [];
function walk(node) {
	if (!node || node.visible === false) return;
	if (node.type === "TEXT") texts.push(`${node.style?.fontSize}/${node.style?.fontWeight} ${node.characters.replace(/\n/g, " / ")}`);
	for (const child of node.children ?? []) walk(child);
}
walk(nodeData.nodes["154:2177"].document);
await writeFile(path.join(root, ".figma-preview", "legislative", "copy.txt"), texts.filter((line) => !line.includes("Ikorodu North LCDA") && !line.includes("Privacy")).join("\n"));

const imageResponse = await fetch(`https://api.figma.com/v1/files/${fileKey}/images`, { headers });
const { meta } = await imageResponse.json();
const files = {
	"68d5a1949e02fadac5aa75441960e6263f80b01b": "leader-benson-abosede",
	"79f51eb1cd6a7a72b60ddad8de637d0bd630951b": "deputy-jimoh-iliasu",
	"ff448b77045069f98f09d7c38c6b24f5dae11f19": "majority-banjoko-oluwaseun",
	"123b3a338a5df18e7deb0576dbf1614c59274af3": "whip-onabajo-olugbenga",
	"6a83edd69bc8cffce4395bef32c5ef8543a4d600": "councillor-ibrahim-agbala",
};
const outDir = path.join(root, "public", "images", "government");
await mkdir(outDir, { recursive: true });
for (const [imageRef, name] of Object.entries(files)) {
	const url = meta.images[imageRef];
	if (!url) throw new Error(`missing ${name}`);
	const file = await fetch(url);
	if (!file.ok) throw new Error(`${name} ${file.status}`);
	const image = sharp(Buffer.from(await file.arrayBuffer())).rotate();
	const info = await image.metadata();
	await writeFile(path.join(outDir, `${name}.webp`), await image.webp({ quality: 90 }).toBuffer());
	console.log(`${name} ${info.width}x${info.height}`);
}
