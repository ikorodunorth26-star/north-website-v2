import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const html = await readFile(path.join(process.env.TEMP, "drive-folder.html"), "utf8");
const entries = [...html.matchAll(/id="entry-([^"]+)"[\s\S]*?flip-entry-title">([^<]+)/g)].map((match) => ({
	id: match[1],
	name: match[2],
}));

const out = path.resolve("public/images/government/management");
await mkdir(out, { recursive: true });

for (const entry of entries) {
	const response = await fetch(`https://drive.google.com/uc?export=download&id=${entry.id}`, { redirect: "follow" });
	if (!response.ok) {
		console.log("FAIL", entry.name, response.status);
		continue;
	}
	const buffer = Buffer.from(await response.arrayBuffer());
	const dest = path.join(out, entry.name);
	await writeFile(dest, buffer);
	console.log("saved", entry.name, buffer.length, response.headers.get("content-type"));
}
