const fs = require("fs");
const path = require("path");

const sourceDir = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets";
const prefix = "c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_image-";
const files = [
	["eb349791-3b6b-4678-9e05-63da6dd649ac.jpg", "spelling-bee-finalists.jpg"],
	["c82fe8ef-e185-409e-a4e7-05a36f4b364c.jpg", "spelling-bee-banner.jpg"],
	["7971b768-5ed8-4734-ac67-938f0c78592f.jpg", "spelling-bee-host.jpg"],
	["fdd1088a-968d-41ce-8666-2ef72318e980.png", "spelling-bee-secondary-first.png"],
	["ba8c5a67-1f54-402d-bf05-4fb5a3a7581e.jpg", "spelling-bee-primary-winners.jpg"],
	["9a9dcc36-d510-49de-9fea-f5ae33a7bfda.jpg", "spelling-bee-secondary-winners.jpg"],
	["eeacdeb2-4f31-431c-987d-61be7b180015.jpg", "spelling-bee-secondary-second.jpg"],
	["ed552c7f-1934-402d-ae36-68f5bf01fefc.png", "spelling-bee-primary-award.png"],
	["9ea2c5f3-b324-4b1b-821e-acf11688feb6.png", "spelling-bee-primary-round.png"],
	["6f1c4f7d-022b-483a-8376-19e6a1153c79.png", "spelling-bee-contestants.png"],
	["773431ac-e873-40b9-abf5-82a23c3e5c92.jpg", "spelling-bee-hall.jpg"],
	["ecaea9c0-55f7-4c6b-9af1-f47dd931b9ba.png", "spelling-bee-officials.png"],
	["fee2511b-7744-4547-94ee-02bdf9825026.jpg", "spelling-bee-group.jpg"],
	["d256dd73-946d-4912-a621-957467b1f7bb.jpg", "spelling-bee-contestant.jpg"],
	["679effff-5562-41d7-8273-937a28f30d83.png", "olorunda-chairman.png"],
	["76efab31-9a6c-4e2e-9a29-e1b1cd9af94a.png", "olorunda-residents.png"],
	["6a3e5dae-23a8-4fbf-8ff6-537619ddf751.png", "olorunda-leaders.png"],
	["ce84d7ba-cff4-4ef9-a6ef-af40f023fb41.png", "olorunda-women.png"],
	["a58cc73e-3265-4c4a-b5b1-aa808e69b257.jpg", "olorunda-hall.jpg"],
	["9dd87f64-6f00-4d56-8354-c72aaaa9d363.jpg", "olorunda-meeting.jpg"],
	["6536a7ff-9f4f-4de1-b503-f4b48cec4d78.png", "olorunda-stakeholders.png"],
	["48bfa3fe-29d8-4ddc-b811-294a308a675b.jpg", "olorunda-engagement.jpg"],
	["ad31a61e-a219-4140-a6d8-cc00989e04bd.jpg", "olorunda-community.jpg"],
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
