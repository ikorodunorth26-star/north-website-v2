const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const prefix = "c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-";
const files = [
	["f070fdfc-4b82-49aa-8e57-e0561a1bfbb3.jpg", "adamo-bus-chairman.jpg"],
	["15b446f4-6565-4589-9ee3-6970df7bca3d.png", "adamo-bus-market.png"],
	["c87de61c-7eea-4704-bde6-149f1add853d.png", "adamo-bus-motorcycles.png"],
	["ccdfb9b6-919e-4a73-8dc4-8699c9f60bdc.png", "adamo-bus-traffic.png"],
	["b8303c3e-05df-4bb3-8d2b-d192bd8195c6.png", "adamo-bus-aerial.png"],
	["fe7c9112-4a12-4366-93a4-d1cfdfd3972e.jpg", "adamo-bus-street.jpg"],
];

const destDir = path.resolve("public/images/reports");

const sizeOf = (buffer) => {
	if (buffer[0] === 0x89 && buffer[1] === 0x50) return [buffer.readUInt32BE(16), buffer.readUInt32BE(20)];
	let i = 2;
	while (i < buffer.length) {
		if (buffer[i] !== 0xff) break;
		const marker = buffer[i + 1];
		if (marker === 0xc0 || marker === 0xc2) return [buffer.readUInt16BE(i + 7), buffer.readUInt16BE(i + 5)];
		i += 2 + buffer.readUInt16BE(i + 2);
	}
	return [0, 0];
};

for (const [sourceName, destName] of files) {
	const dest = path.join(destDir, destName);
	fs.copyFileSync(path.join(sourceDir, prefix + sourceName), dest);
	const [width, height] = sizeOf(fs.readFileSync(dest));
	console.log(destName, width, height);
}
