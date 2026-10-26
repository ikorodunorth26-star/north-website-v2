const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/agbede-odogunyan-meetings", { waitUntil: "domcontentloaded", timeout: 60000 });
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	const items = gallery.locator("li");
	console.log("ITEMS", await items.count());
	for (let index = 0; index < (await items.count()); index += 1) {
		await items.nth(index).scrollIntoViewIfNeeded();
	}
	await page.waitForFunction(() => {
		const images = document.querySelectorAll("section[aria-labelledby='photo-gallery-heading'] img");
		return images.length === 11 && [...images].every((image) => image.complete && image.naturalWidth > 0);
	}, { timeout: 20000 });
	const widths = await gallery.locator("img").evaluateAll((nodes) => nodes.map((node) => node.naturalWidth));
	console.log("WIDTHS", widths.join(","));
	await items.nth(0).locator("button").click();
	await page.waitForFunction(() => {
		const image = document.querySelector("[role='dialog'] img");
		return image && image.complete && image.naturalWidth > 0;
	}, { timeout: 15000 });
	const dialogWidth = await page.locator("[role='dialog'] img").evaluate((node) => node.naturalWidth);
	console.log("DIALOG", dialogWidth);
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
