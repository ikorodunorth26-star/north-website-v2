import { readdir, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.resolve("public/images/government/management");
const files = {
	"Mr Nairu Abayomi S..jpg": "nairu-abayomi-samsideen.webp",
	"Bankole Esther Oluyemi.jpg": "bankole-esther-oluyemi.webp",
	"Awonusi Ademola A.jpg": "awonusi-ademola.webp",
	"Mr Amori Muritala Kehinde.jpg": "amori-muritala-kehinde.webp",
	"Mr. Akiode Oluwaseyi O..jpg": "akiode-oluwaseyi.webp",
	"Mr Ogunleye Akintope Abayomi.jpg": "ogunleye-akintope-abayomi.webp",
	"Eng. Akinsanya Sunday.jpg": "akinsanya-sunday.webp",
	"Dr.Wajero K T.jpg": "wajero-kt.webp",
	"Com. Olawore Elijah.jpg": "olawore-elijah.webp",
	"HOD Education.jpg": "ganiyu-abideen-maiyegun.webp",
	"Mr Japhet O Enemunhe.jpg": "japhet-enemunhe.webp",
	"Mr Ahoton Jameson Thona.jpg": "ahoton-jameson-thona.webp",
	"Barr. Amusa Adebayo Aminat.jpg": "amusa-adebayo-aminat.webp",
};

for (const [sourceName, targetName] of Object.entries(files)) {
	const source = path.join(dir, sourceName);
	const target = path.join(dir, targetName);
	const image = sharp(source);
	const meta = await image.metadata();
	await image.webp({ quality: 90 }).toFile(target);
	console.log(`${targetName}\t${meta.width}x${meta.height}`);
}

for (const name of await readdir(dir)) {
	if (name.endsWith(".jpg") || name.endsWith(".txt")) await unlink(path.join(dir, name));
}
