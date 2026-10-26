const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
	const section = page.locator("section[aria-labelledby='home-departments-heading']");
	await section.scrollIntoViewIfNeeded();
	const links = await section.locator("a").allInnerTexts();
	console.log("DEPARTMENT LINKS", JSON.stringify(links));
	const cards = await section.locator("article").count();
	console.log("CARDS", cards);
	const chairman = page.locator("section").filter({ has: page.locator("#home-chairman-heading") });
	const chairmanLink = await chairman.locator("a").allInnerTexts();
	console.log("CHAIRMAN LINKS", JSON.stringify(chairmanLink));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
