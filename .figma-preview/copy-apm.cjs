const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const prefix = "c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-";
const files = [
	["9f730254-f619-43ea-9d0f-8a2031c021ea.jpg", "apm-group.jpg"],
	["8fb6aeda-2984-4db7-a0f9-70fd603d2a14.png", "apm-chairman.png"],
	["bdab7712-1008-4d12-865a-b002318dee3a.png", "apm-meeting.png"],
	["c67d7052-5e2d-4df3-81fa-d474a861f31c.png", "apm-cards.png"],
	["ded6e681-e9eb-4b84-9bdb-fef5bee7be12.png", "apm-hall.png"],
	["a9b563db-710b-45a9-bc31-9d30e6f453a1.jpg", "apm-discussion.jpg"],
	["ceaf88ac-2c1c-4bb2-8ce7-e4b34733e6da.png", "apm-address.png"],
	["a4c66b1b-7c43-457a-a034-721414c45ff4.png", "apm-members.png"],
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
