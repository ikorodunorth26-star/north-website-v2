const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");
const path = require("path");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	await page.goto("http://localhost:3000/revenue", { waitUntil: "networkidle" });
	await page.screenshot({ path: path.resolve(".figma-preview/revenue/shopkeeper-hero.png") });
	console.log("saved");
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
