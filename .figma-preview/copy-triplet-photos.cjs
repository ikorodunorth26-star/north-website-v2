const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const files = [
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_859009759_1679239150511039_8654778446471476779_n-97b4efb7-07e6-4e75-bd57-5815a9d9c6c3.jpg", "agbede-triplets-family.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_863535328_1650456663213501_2526041309634494146_n-89f18122-4a46-4647-aa4f-248d15d7ef1c.jpg", "agbede-triplets-delegation.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_862738749_2139782496933276_8813591359846716433_n-60ba5426-4aab-4212-a375-ec41e51207ec.jpg", "agbede-triplets-gift.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_860071544_2028709884665457_7403957441222333997_n-4b7d95e2-e04f-4d75-bf2f-d369718ec28f.jpg", "agbede-triplets-visit.jpg"],
	["c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_864787794_1906986437344374_2697259448387147542_n-909d509c-83c1-42a8-ad33-add1778e9f34.jpg", "agbede-triplets-parents.jpg"],
];

const destDir = path.resolve("public/images/reports");

const sizeOf = (buffer) => {
	let i = 2;
	while (i < buffer.length) {
		if (buffer[i] !== 0xff) break;
		const marker = buffer[i + 1];
		if (marker === 0xc0 || marker === 0xc2) return [buffer.readUInt16BE(i + 7), buffer.readUInt16BE(i + 5)];
		const length = buffer.readUInt16BE(i + 2);
		i += 2 + length;
	}
	return [0, 0];
};

for (const [sourceName, destName] of files) {
	const source = path.join(sourceDir, sourceName);
	const dest = path.join(destDir, destName);
	fs.copyFileSync(source, dest);
	const [width, height] = sizeOf(fs.readFileSync(dest));
	console.log(destName, width, height);
}
