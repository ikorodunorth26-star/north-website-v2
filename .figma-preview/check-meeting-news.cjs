const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

	const response = await page.goto("http://localhost:3000/news/agbede-odogunyan-meetings", {
		waitUntil: "domcontentloaded",
		timeout: 60000,
	});
	console.log("STATUS", response && response.status());
	await page.waitForSelector("h1", { timeout: 20000 });
	const title = await page.locator("h1").first().innerText();
	console.log("TITLE", title.replace(/\s+/g, " "));
	const body = await page.locator("main").innerText();
	console.log("BODY_SNIP", body.replace(/\s+/g, " ").slice(0, 500));
	const gallery = page.locator("#photo-gallery-heading");
	await gallery.scrollIntoViewIfNeeded();
	const widths = await gallery
		.locator("xpath=ancestor::section")
		.locator("img")
		.evaluateAll((nodes) => nodes.map((node) => node.naturalWidth));
	console.log("GALLERY", widths.length, widths.join(","));

	await page.goto("http://localhost:3000/news", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.waitForSelector("h3", { timeout: 20000 });
	const headings = await page.locator("h3").allInnerTexts();
	console.log("NEWS_HEADINGS", headings.slice(0, 4).join(" | "));

	await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.getByText("Community meetings at Agbede and Odogunyan").first().waitFor({ timeout: 20000 });
	console.log("HOME_OK", true);

	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
