const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/serving-within-the-mandate", { waitUntil: "networkidle", timeout: 60000 });
	const title = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ");
	const text = await page.getByRole("article").first().innerText();
	const phrases = [
		"17 to 19 September 2026",
		"Novatel Hotel, Lekki",
		"Serving Within the Mandate",
		"Hon. Mathew Aliu Adesanya",
		"Hon. Tijani Olakanmi Sheriff",
		"Hon. Mojeed Oluwamayowa Saheed",
		"continuous training and retraining",
		"presented certificates",
		"capable, responsive and oriented to results",
	];
	console.log("TITLE", title);
	for (const phrase of phrases) console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	console.log("TILES", await gallery.locator("button").count(), (await gallery.innerText()).includes("+2") ? "+2" : "NO BADGE");
	await gallery.getByRole("button", { name: /2 more photos/ }).click();
	const dialog = page.locator("[role='dialog']");
	await dialog.waitFor();
	const start = (await dialog.locator("p").first().innerText()).trim();
	await dialog.getByRole("button", { name: "Next photo" }).click();
	const next = (await dialog.locator("p").first().innerText()).trim();
	console.log("NEXT", start, "->", next);
	await page.goto("http://localhost:3000/news", { waitUntil: "networkidle", timeout: 60000 });
	const listing = await page.locator("body").innerText();
	console.log("LISTING", listing.includes("Leadership team trains on serving within the mandate") ? "OK" : "MISSING");
	await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
	const home = await page.locator("body").innerText();
	console.log("HOME", home.includes("Leadership team trains on serving within the mandate") ? "OK" : "MISSING");
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
