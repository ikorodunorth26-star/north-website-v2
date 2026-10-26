const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news", { waitUntil: "networkidle", timeout: 60000 });
	const search = page.getByRole("searchbox").or(page.locator("input[type='search'], input[placeholder*='Search' i]")).first();
	await search.fill("Champions Cup");
	await page.waitForTimeout(400);
	const text = await page.locator("body").innerText();
	console.log(text.includes("Chairman rewards the Apanisile Champions Cup winners") ? "SEARCH OK" : "SEARCH MISSING");
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
