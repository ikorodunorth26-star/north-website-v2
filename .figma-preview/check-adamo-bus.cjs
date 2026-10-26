const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/adamo-mini-bus-stop", { waitUntil: "networkidle", timeout: 60000 });
	const title = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ");
	const text = await page.getByRole("article").first().innerText();
	const phrases = [
		"17 September 2026",
		"Adamo Bus Stop",
		"mini bus stop",
		"not a facility already built",
		"Adamo–Araro Road",
		"Rep. Babajimi Benson",
		"indiscriminate",
		"peak periods",
		"consultations",
		"one community-focused intervention at a time",
	];
	console.log("TITLE", title);
	for (const phrase of phrases) console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	const builtClaim = /bus stop (has been|was) (built|commissioned|completed)/i.test(text);
	console.log(builtClaim ? "BAD built claim" : "OK not built");
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
	console.log("LISTING", listing.includes("Chairman unveils a plan for a mini bus stop at Adamo") ? "OK" : "MISSING");
	await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
	const home = await page.locator("body").innerText();
	console.log("HOME", home.includes("Chairman unveils a plan for a mini bus stop at Adamo") ? "OK" : "MISSING");
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
