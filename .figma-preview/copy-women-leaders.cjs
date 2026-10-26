const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const files = [
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-f4916230-4a4e-441d-bacd-3333d22d0c13.png", "women-leaders-group.png"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-b9165e76-257b-4034-bd5e-eee04426bc44.png", "women-leaders-chairman.png"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-7df30729-0e4b-40ae-ba6f-6e57adbaa703.png", "women-leaders-table.png"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-b14a1e44-aa60-40e7-a310-1abfb45f758c.png", "women-leaders-address.png"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-cae7e08e-e571-464c-bb85-527f75585a2a.jpg", "women-leaders-speaker.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-9207067e-6cbd-4c87-89e9-ff79207cc873.jpg", "women-leaders-forum.jpg"],
];

const destDir = path.resolve("public/images/reports");

const sizeOf = (buffer) => {
	if (buffer[0] === 0x89 && buffer[1] === 0x50) {
		return [buffer.readUInt32BE(16), buffer.readUInt32BE(20)];
	}
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
	fs.copyFileSync(path.join(sourceDir, sourceName), dest);
	const [width, height] = sizeOf(fs.readFileSync(dest));
	console.log(destName, width, height);
}
