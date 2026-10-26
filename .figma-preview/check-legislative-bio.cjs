const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/government/legislative-house", { waitUntil: "networkidle", timeout: 60000 });
	const cards = page.locator("section.bg-background article");
	const count = await cards.count();
	const texts = [];
	for (let i = 0; i < count; i += 1) texts.push((await cards.nth(i).innerText()).replace(/\s+/g, " "));
	const body = await page.locator("body").innerText();
	console.log("CARDS", count);
	console.log("FIRST", texts[0]);
	console.log("PLACEHOLDER", body.includes("will be published once verified") ? "STILL THERE" : "GONE");
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
