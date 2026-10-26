const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const prefix = "c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-";
const files = [
	["f84ddb40-e656-4002-aa2a-7a80d31d7f1a.jpg", "rescue-children.jpg"],
	["079345bf-60b7-47b6-8d8d-d2b713f6f708.png", "rescue-welcome.png"],
	["e135d613-90e1-4b50-ae2a-e547d43077af.jpg", "rescue-food.jpg"],
	["929df17a-a083-4640-b92e-865620765ee6.jpg", "rescue-delegation.jpg"],
	["1994769f-0526-463e-810b-9c59b49193f5.jpg", "rescue-football.jpg"],
	["71826693-003a-49c6-bf24-3c355f7a02a1.jpg", "rescue-residents.jpg"],
	["ab57d683-52f5-44c3-99e3-04d1bc68a543.jpg", "rescue-boys.jpg"],
	["9298685a-d0e9-41f5-abeb-39990b320261.png", "rescue-partners.png"],
	["82c913bb-924b-46d1-9f29-d756ed31f4b1.png", "rescue-greeting.png"],
	["e66d3225-da69-416f-999f-0c65531827ea.png", "rescue-briefing.png"],
	["80c873ac-2783-4e17-bebb-5297e07f2eee.jpg", "rescue-discussion.jpg"],
	["3fc5ebbf-0e99-40ed-ac02-6362566b4ddb.jpg", "rescue-arrival.jpg"],
	["5cdaba4b-ee67-47e9-90b9-fc1c74eb863e.jpg", "rescue-secretariat.jpg"],
	["82f9c032-27fb-496f-ba27-1e6f00cee599.jpg", "rescue-visitors.jpg"],
	["c7408525-6f69-4d4d-b284-e3d3f25ab565.jpg", "rescue-meeting.jpg"],
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
