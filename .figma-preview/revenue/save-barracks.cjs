const sharp = require("sharp");
const path = require("path");

const input = process.argv[2];
const output = path.resolve("public/images/landmarks/odogunyan-barracks.webp");

sharp(input)
	.resize({ width: 1600, withoutEnlargement: true })
	.webp({ quality: 80 })
	.toFile(output)
	.then((info) => console.log(info));
