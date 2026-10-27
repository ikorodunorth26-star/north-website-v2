const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	await page.goto("http://localhost:3000/government/legislative-house", { waitUntil: "networkidle", timeout: 60000 });
	const section = page.locator("section").filter({ hasText: "Chamber overview" }).first();
	const box = await section.locator("h2").boundingBox();
	const copy = await section.locator("h2 + p").boundingBox();
	console.log("HEADING", box);
	console.log("COPY", copy);
	console.log("COPY UNDER HEADING", copy && box ? copy.y > box.y && copy.x < box.x + 40 : false);
	await section.screenshot({ path: ".figma-preview/legislative-desktop-band.png" });
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
