const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/projects/maya-schools-wash-facilities", { waitUntil: "networkidle", timeout: 60000 });
	const title = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ");
	const text = await page.getByRole("article").first().innerText();
	const phrases = ["23 September 2026", "WaterAid", "Latter-day Saints", "Chief Alade Olukoga", "Hon. Mathew Aliu Adesanya", "20,000-litre", "2,500", "LAWMA", "New Deal"];
	console.log("TITLE", title);
	for (const phrase of phrases) console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	console.log("OLD PHOTOS", text.includes("September 2025") ? "STILL THERE" : "gone");
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	console.log("TILES", await gallery.locator("button").count(), (await gallery.innerText()).includes("+7") ? "+7" : "NO BADGE");
	await gallery.getByRole("button", { name: /7 more photos/ }).click();
	const dialog = page.locator("[role='dialog']");
	await dialog.waitFor();
	console.log("OPEN", (await dialog.locator("p").first().innerText()).trim());
	await page.goto("http://localhost:3000/projects", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.getByText("Solar water and sanitation at Maya Grammar School").first().waitFor();
	console.log("LISTING", true);
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
