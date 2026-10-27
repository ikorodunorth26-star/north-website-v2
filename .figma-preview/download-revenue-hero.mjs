import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
if (!token) throw new Error("missing token");

const fileKey = "6vASgsAN1cRdD4sAleAZEG";
const headers = { "X-Figma-Token": token };
const response = await fetch(
	`https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent("384:2286")}&format=jpg&scale=2`,
	{ headers },
);
if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
const data = await response.json();
const imageUrl = data.images?.["384:2286"];
if (!imageUrl) throw new Error("no image");
const image = await fetch(imageUrl);
if (!image.ok) throw new Error(`jpg ${image.status}`);
const outDir = path.join(root, "public", "images", "revenue");
await mkdir(outDir, { recursive: true });
const buffer = Buffer.from(await image.arrayBuffer());
await writeFile(path.join(outDir, "payer.jpg"), buffer);
console.log("saved", buffer.length);
