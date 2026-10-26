const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	await page.goto("http://localhost:3000/landmarks", { waitUntil: "networkidle", timeout: 60000 });
	const card = page.getByRole("heading", { name: "Lagos State University of Science and Technology" }).locator("xpath=ancestor::article");
	await card.scrollIntoViewIfNeeded();
	const img = card.locator("img");
	await img.evaluate((node) => node.complete && node.naturalWidth > 0);
	console.log("width", await img.evaluate((node) => node.naturalWidth));
	await card.screenshot({ path: process.env.TEMP + "/lasustech-card.png" });
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
