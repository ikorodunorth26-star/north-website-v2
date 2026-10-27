const sharp = require("sharp");
const path = require("path");

const input = path.resolve(".figma-preview/revenue/desktop-full.png");

sharp(input)
	.metadata()
	.then(async (meta) => {
		const width = meta.width;
		const height = meta.height;
		const slice = 900;
		let index = 0;
		for (let top = 0; top < height; top += slice) {
			const extractHeight = Math.min(slice, height - top);
			await sharp(input)
				.extract({ left: 0, top, width, height: extractHeight })
				.toFile(path.resolve(`.figma-preview/revenue/desktop-slice-${index}.png`));
			index += 1;
		}
		console.log({ width, height, slices: index });
	});
