const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const prefix = "c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-";
const files = [
	["96ff1dce-b989-47a7-911f-1432fb7b4044.png", "mandate-certificates.png"],
	["be82370a-649d-4440-aff8-072279dab65b.png", "mandate-chairman.png"],
	["7a9c4128-0db0-4453-8bdc-a2b642346ebe.png", "mandate-seminar.png"],
	["0f95f28d-64df-4fdf-8c4d-80357961d288.png", "mandate-team.png"],
	["1c2ffa94-eaa2-48b6-a401-58c6b3726ecb.png", "mandate-leaders.png"],
	["4d9a7b4e-5fff-49ae-ba62-40c68248706d.png", "mandate-session.png"],
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
