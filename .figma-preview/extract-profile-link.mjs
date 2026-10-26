import { readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
const headers = { "X-Figma-Token": token };

async function links(id) {
	const response = await fetch(`https://api.figma.com/v1/files/6vASgsAN1cRdD4sAleAZEG/nodes?ids=${encodeURIComponent(id)}`, { headers });
	const data = await response.json();
	const found = [];
	function walk(node) {
		if (!node || node.visible === false) return;
		const blob = JSON.stringify({
			reactions: node.reactions,
			transition: node.transitionNodeID,
			hyperlink: node.hyperlink,
			componentProperties: node.componentProperties,
		});
		if (node.reactions?.length || node.hyperlink || node.transitionNodeID) {
			found.push(`${node.name}: ${blob.slice(0, 400)}`);
		}
		for (const child of node.children ?? []) walk(child);
	}
	walk(data.nodes[id].document);
	return found;
}

const desktop = await links("177:75");
console.log(desktop.filter((line) => /profile|Explore|mailto|http/i.test(line)).join("\n") || desktop.slice(0, 20).join("\n") || "none");
