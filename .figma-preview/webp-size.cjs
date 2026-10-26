const fs = require("fs");
const file = process.env.TEMP + "/meeting-banner.webp";
const buffer = fs.readFileSync(file);
const text = buffer.toString("ascii", 0, 16);
console.log(text, buffer.length);
if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
	const format = buffer.toString("ascii", 12, 16);
	console.log("format", format);
	if (format === "VP8X") {
		const width = 1 + buffer.readUIntLE(24, 3);
		const height = 1 + buffer.readUIntLE(27, 3);
		console.log(width, height);
	} else if (format === "VP8 ") {
		const width = buffer.readUInt16LE(26) & 0x3fff;
		const height = buffer.readUInt16LE(28) & 0x3fff;
		console.log(width, height);
	} else if (format === "VP8L") {
		const bits = buffer.readUInt32LE(21);
		const width = (bits & 0x3fff) + 1;
		const height = ((bits >> 14) & 0x3fff) + 1;
		console.log(width, height);
	}
}
