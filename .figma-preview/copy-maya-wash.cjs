const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const prefix = "c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-";
const files = [
	["60e1b004-f6c0-455a-ad73-c2b4c5a60358.png", "maya-wash-partners.png"],
	["a8e4690f-7cf3-4623-b427-cc886cf18b55.jpg", "maya-wash-chairman.jpg"],
	["abd47bb6-6d09-4b69-bfa0-597ad6367a55.jpg", "maya-wash-inspection.jpg"],
	["1d52d28a-1ff3-4188-af78-51205600fa2a.png", "maya-wash-banner.png"],
	["c88a9b31-64b1-46b7-b81a-4e15713b9d6a.jpg", "maya-wash-documents.jpg"],
	["d0570405-ba70-4c9e-aa36-7bad5a7130fb.jpg", "maya-wash-address.jpg"],
	["76a99b19-dece-41cd-9053-44a441efff42.jpg", "maya-wash-table.jpg"],
	["3688d8c1-9ddb-450b-88cb-e1673511f8c7.png", "maya-wash-dance.png"],
	["76778ccb-33f4-410b-8688-dedbbab38467.png", "maya-wash-chiefs.png"],
	["38cd7915-328b-44e7-a58a-b3dfac45f661.jpg", "maya-wash-helmets.jpg"],
	["4937b257-3790-4d10-ad94-831dd5b9597c.png", "maya-wash-wateraid.png"],
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
