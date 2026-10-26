import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const env = await readFile(path.join(root, ".env.local"), "utf8");
const token = env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m)?.[1]?.trim();
const headers = { "X-Figma-Token": token };
const response = await fetch("https://api.figma.com/v1/files/6vASgsAN1cRdD4sAleAZEG/images", { headers });
if (!response.ok) throw new Error(await response.text());
const { meta } = await response.json();
const images = meta.images;

const files = {
	"78a6aee82bf6cf430800c068fdea86dadd58aebd": "chairman-ameen-apanisile",
	"5abdbf4e16cd1be3217aedb0c278882e8a079f9c": "vice-chairman-adesanya-mathew",
	"11c7e342e57e542162bc103f7241285629bb14fc": "secretary-tijani-olakanmi",
	"961e63da8807fdd223ed847674c615847225848a": "chief-of-staff-mojeed-saheed",
	"368b96921afe3a6a84123ff3821fa253c7cf91dd": "supervisor-works-jokomba-kehinde",
	"86a93a918a7866f965558f53455da053ffd7cf82": "supervisor-ict-banjo-olanrewaju",
	"51c0d1a28f457b2ef9056e6e85a87c8d6c0a238c": "supervisor-wapa-sulaimon-laolat",
	"b7fde09e99b44ef26a4bc25bce46da3656ec5c10": "supervisor-special-duties-adeyemi",
	"8f8ffb6f3ebd37553be3fc2e96b25ea088f10229": "adviser-students-alimi-idris",
	"3cb166fe5096dc4a432a58436f58059b9e47af49": "adviser-information-olowolagba",
	"60b85c1011728f87463a2a32415cad59bff6092d": "adviser-youth-ogunba",
	"44a062f2907194a84c4ead186ed99771b08bc883": "adviser-procurement-oyinloye",
	"c84faf072b334c2c9081af087ef514069fc5399b": "supervisor-education-adaramola",
	"7f6cc64565d04dd1f62d4114936e982bd1abd905": "supervisor-agriculture-pending",
	"1bf0de3528388727ad62b507d42b52de34146699": "adviser-market-baliqees-ibrahim",
	"3fc9a96f83282651f6adb8ac21374748a1d7e7f4": "adviser-political-adeniyi-odugbesi",
	"4df8bb81ea615b47743578ee572907e0b202e1b0": "supervisor-civic-edu-hafsat",
	"47846e0f471da9c2fa86c695bc1942fa8d50bfc4": "supervisor-community-fakumoju",
	"24529722d2ccfdbfe274fa37506f8a2912c01d2b": "supervisor-intergovernmental-ambali",
	"2367a165ea32713893ac504950fd0c874ed0045a": "adviser-projects-ishmaheel-bashir",
	"b2bde1a54c0aa10339a069b963428c2c442abf58": "adviser-tourism-abiodun-salau",
	"31471f26fee45523cd7dba2d134b5ecd80285bc9": "supervisor-budget-basirat-babatunde",
};

const outDir = path.join(root, "public", "images", "government");
await mkdir(outDir, { recursive: true });

for (const [imageRef, name] of Object.entries(files)) {
	const url = images[imageRef];
	if (!url) throw new Error(`missing ${name}`);
	const file = await fetch(url);
	if (!file.ok) throw new Error(`${name} ${file.status}`);
	const input = Buffer.from(await file.arrayBuffer());
	const image = sharp(input).rotate();
	const metaInfo = await image.metadata();
	const webp = await image.webp({ quality: 90 }).toBuffer();
	await writeFile(path.join(outDir, `${name}.webp`), webp);
	console.log(`${name} ${metaInfo.width}x${metaInfo.height} ${webp.length}`);
}
