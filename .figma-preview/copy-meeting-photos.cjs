const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const files = [
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_864997043_2276377086539391_2824007984116355414_n-708db5ab-d05d-4c82-a9e1-d14efc879a06.jpg", "agbede-meeting-banner.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-95b414cd-1311-4b64-89bc-25aa643c3b3d.jpg", "agbede-meeting-speaker.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-06e4cbae-2bab-42a5-8b9a-8a21d17861f9.jpg", "agbede-meeting-table.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-f62133e3-4870-42da-8451-6c2902c1298c.jpg", "agbede-meeting-crowd.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_863840783_2565100644003351_9171359848569301254_n-dd61b315-0b36-46d3-a707-7d27c805d3b3.jpg", "agbede-meeting-tent.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_857661231_1819923742375937_8636440690148504093_n-677e0f96-7670-492c-b8c9-f56813ae8338.jpg", "agbede-meeting-men.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_867380674_2308178386609771_2944687116894263680_n-c0d4aae5-d5ad-49c1-bc9e-710cb85c6d38.jpg", "agbede-meeting-women.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-ae34196f-4845-43ff-886e-6cc4c95a9453.jpg", "agbede-meeting-audience.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-ba8cc9bc-efe7-413b-9a6b-90a6a2d28ce9.jpg", "agbede-meeting-hall.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-57bd2292-1cca-4377-a284-2c3e30a6f4e5.jpg", "agbede-meeting-residents.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-f3149d9e-fc1d-45c1-8d0a-743e2ce29fa5.jpg", "agbede-meeting-close.jpg"],
];

const destDir = path.resolve("public/images/reports");

const sizeOf = (buffer) => {
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
