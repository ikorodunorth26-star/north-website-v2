const sharp = require("sharp");
const path = require("path");

const input = path.resolve("C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/assets/revenue-shopkeeper.jpg");
const output = path.resolve("public/images/revenue/payer.webp");

sharp(input)
	.resize({ width: 1440, withoutEnlargement: true })
	.webp({ quality: 80 })
	.toFile(output)
	.then((info) => console.log(info));
