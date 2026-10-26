const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/lagos-east-apc-women-leaders", { waitUntil: "networkidle", timeout: 60000 });
	const title = await page.locator("h1").first().innerText();
	const article = page.getByRole("article").filter({ hasText: "The visit" });
	const text = await article.innerText();
	const needed = [
		"Dcn. Aderibigbe Wonuola Osinowo, JP",
		"Lagos East Senatorial District",
		"familiarisation and solidarity",
		"party unity",
		"grassroots participation",
		"mutual understanding",
		"forthcoming elections",
	];
	console.log("TITLE", title.replace(/\s+/g, " "));
	for (const phrase of needed) console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	console.log("CHARS", text.length);

	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	const tiles = await gallery.locator("button").evaluateAll((nodes) => nodes.map((node) => node.textContent.replace(/\s+/g, " ").trim()));
	console.log("TILES", tiles.length, tiles.join(" | "));
	await gallery.getByRole("button", { name: /2 more photos/ }).click();
	const dialog = page.locator("[role='dialog']");
	await dialog.waitFor();
	const seen = [];
	for (let step = 0; step < 3; step += 1) {
		const position = (await dialog.locator("p").first().innerText()).trim();
		seen.push(position);
		await dialog.getByRole("button", { name: "Next photo" }).click();
	}
	console.log("NEXT", seen.join(" -> "));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
