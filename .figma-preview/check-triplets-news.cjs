const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/agbede-triplets", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.getByRole("heading", { name: "Triplets welcomed at Agbede Health Centre" }).waitFor();
	const photos = await page.locator("article img").evaluateAll((nodes) => nodes.map((node) => ({ alt: node.getAttribute("alt"), width: node.naturalWidth })).filter((item) => item.width > 0 || item.alt));
	console.log("article images", photos.length);
	await page.getByRole("heading", { name: "Photo gallery" }).scrollIntoViewIfNeeded();
	await page.screenshot({ path: process.env.TEMP + "/agbede-triplets-news.png", fullPage: false });
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
