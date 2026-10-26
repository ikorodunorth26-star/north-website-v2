const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/apanisile-champions-cup", { waitUntil: "networkidle", timeout: 60000 });
	const title = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ");
	const text = await page.getByRole("article").first().innerText();
	const phrases = [
		"5 July 2026",
		"TPS Stadium",
		"United Talent",
		"₦500,000",
		"Big Tex",
		"₦300,000",
		"Hon. Babajimi Adegoke Benson",
		"Hon. Bolowotan",
		"APC Division Chairman",
		"Hon. Tijani Olakanmi Sheriff",
		"Alhaji Sonibare",
		"Akanun",
		"Mopelufa",
		"Mrs. Toyin Salau",
		"We must continue to invest in our young people",
		"mind our future",
	];
	console.log("TITLE", title);
	for (const phrase of phrases) console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	console.log("TILES", await gallery.locator("button").count(), (await gallery.innerText()).includes("+4") ? "+4" : "NO BADGE");
	await gallery.getByRole("button", { name: /4 more photos/ }).click();
	const dialog = page.locator("[role='dialog']");
	await dialog.waitFor();
	const start = (await dialog.locator("p").first().innerText()).trim();
	await dialog.getByRole("button", { name: "Next photo" }).click();
	const next = (await dialog.locator("p").first().innerText()).trim();
	console.log("NEXT", start, "->", next);
	await page.goto("http://localhost:3000/news", { waitUntil: "networkidle", timeout: 60000 });
	const listing = await page.locator("body").innerText();
	console.log("LISTING", listing.includes("Chairman rewards the Apanisile Champions Cup winners") ? "OK" : "MISSING");
	await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
	const home = await page.locator("body").innerText();
	console.log("HOME", home.includes("Chairman rewards the Apanisile Champions Cup winners") ? "OK" : "MISSING");
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
