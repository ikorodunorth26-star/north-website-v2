const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const prefix = "c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-";
const files = [
	["d9c5b676-0d6d-4af3-b276-a15af4fd3095.jpg", "cup-winners.jpg"],
	["14cf2649-c93d-40f8-a632-7bf144bf1a0a.jpg", "cup-runner-up.jpg"],
	["b1799695-eca8-454c-aed5-cf4904011d05.png", "cup-trophy.png"],
	["6e849921-0d20-4b69-b09a-68ac8dcfd110.jpg", "cup-presentation.jpg"],
	["c8615456-ef78-4bc4-b558-cd938d0554c0.png", "cup-crowd.png"],
	["d5e7d709-186f-4d8a-84af-dac1e33259bf.png", "cup-guests.png"],
	["1a80b655-5d99-4394-83a6-0f3b57d532f4.png", "cup-address.png"],
	["a8be9260-6756-4fec-bb3c-12d67b061822.jpg", "cup-guest.jpg"],
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
