const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	page.on("pageerror", (error) => console.log("PAGEERROR", error.message));
	page.on("console", (message) => {
		if (message.type() === "error") console.log("CONSOLE", message.text());
	});
	await page.goto("http://localhost:3000/news/agbede-odogunyan-meetings", { waitUntil: "networkidle", timeout: 60000 });
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	const more = gallery.getByRole("button", { name: /7 more photos/ });
	await more.click();
	await page.waitForTimeout(1500);
	console.log("DIALOGS", await page.locator("[role='dialog']").count());
	const position = await page.locator("[role='dialog']").innerText().catch((error) => error.message);
	console.log("TEXT", String(position).replace(/\s+/g, " ").slice(0, 300));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
