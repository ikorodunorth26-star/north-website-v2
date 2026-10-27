const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");
const path = require("path");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	await page.goto("http://localhost:3000/landmarks", { waitUntil: "domcontentloaded" });
	const card = page.getByRole("heading", { name: "174 Battalion" }).locator("xpath=ancestor::article");
	await card.waitFor();
	const image = card.locator("img");
	const src = await image.getAttribute("src");
	const alt = await image.getAttribute("alt");
	await card.scrollIntoViewIfNeeded();
	await card.screenshot({ path: path.resolve(".figma-preview/revenue/battalion-card.png") });
	console.log(JSON.stringify({ src, alt }));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
