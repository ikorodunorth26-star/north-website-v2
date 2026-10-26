const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/rescue-home-visit", { waitUntil: "networkidle", timeout: 60000 });
	const title = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ");
	const text = await page.getByRole("article").first().innerText();
	const phrases = ["Rescue Home", "Akaun Village", "solar energy", "backpacks", "data centres", "waterfront development", "6 October 2026"];
	console.log("TITLE", title);
	for (const phrase of phrases) console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	console.log("TILES", await gallery.locator("button").count(), (await gallery.innerText()).includes("+11") ? "+11" : "NO BADGE");
	await gallery.getByRole("button", { name: /11 more photos/ }).click();
	const dialog = page.locator("[role='dialog']");
	await dialog.waitFor();
	const start = (await dialog.locator("p").first().innerText()).trim();
	await dialog.getByRole("button", { name: "Next photo" }).click();
	const next = (await dialog.locator("p").first().innerText()).trim();
	console.log("NEXT", start, "->", next);
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
