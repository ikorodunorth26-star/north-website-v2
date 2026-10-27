const sharp = require("sharp");
const path = require("path");

const input = path.join("public", "images", "revenue", "payer.jpg");
const output = path.join("public", "images", "revenue", "payer.webp");

sharp(input)
	.resize({ width: 1440, withoutEnlargement: true })
	.webp({ quality: 78 })
	.toFile(output)
	.then((info) => console.log(info))
	.then(() => require("fs").promises.unlink(input));
