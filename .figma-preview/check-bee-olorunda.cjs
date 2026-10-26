const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

async function check(page, url, phrases, more) {
	await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.locator("h1").first().waitFor();
	const title = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ");
	const text = await page.getByRole("article").first().innerText();
	console.log("TITLE", title);
	for (const phrase of phrases) console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	const tiles = await gallery.locator("button").count();
	const badge = (await gallery.innerText()).replace(/\s+/g, " ");
	console.log("GALLERY", tiles, badge.includes(more) ? more : "NO " + more);
}

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await check(page, "http://localhost:3000/news/spelling-bee-2026", ["Sharafa Darasimi Maria", "Mukaila Aishat", "Mrs Omowunmi Azeezat Ameen Apanisile", "Estate Primary School", "Maya Community Senior Grammar School", "Council Hall"], "+10");
	await page.goto("http://localhost:3000/news/spelling-bee-2026", { waitUntil: "networkidle", timeout: 60000 });
	await page.locator("section[aria-labelledby='photo-gallery-heading']").getByRole("button", { name: /10 more photos/ }).click();
	const dialog = page.locator("[role='dialog']");
	await dialog.waitFor();
	const start = (await dialog.locator("p").first().innerText()).trim();
	await dialog.getByRole("button", { name: "Next photo" }).click();
	const next = (await dialog.locator("p").first().innerText()).trim();
	console.log("BEE NEXT", start, "->", next);
	await check(page, "http://localhost:3000/news/olorunda-ward-e4-engagement", ["Hon. Oluseyi Onabajo", "Chief Olubowale John", "Maya–Idafa Road", "Hon. Niran Ogunbanwo", "no ward would be left out", "Engr. Salako"], "+5");
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
