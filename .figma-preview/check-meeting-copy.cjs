const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/news/agbede-odogunyan-meetings", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.waitForSelector("h1");
	const text = await page.getByRole("article").filter({ hasText: "The meetings" }).innerText();
	const needed = [
		"Mayor Ameen Olawale Ibrahim Apanisile",
		"Hon. Toyin Gafar Bolowotan",
		"Hon. Babajimi Benson",
		"Mayor Muhydeen (Deen) Sanwoola",
		"meaningful democratic dividends",
		"inclusive, people-oriented governance",
		"support the APC",
		"Hon. Mathew Aliu Adesanya",
		"Hon. Babatunde Banjoko Oluwaseun (BBO)",
		"Hon. Adedoyin Jokotex",
		"Hon. Bola Daramola",
		"Hon. Wale Adepitan",
		"direct communication, community participation",
	];
	for (const phrase of needed) {
		console.log(text.includes(phrase) ? "OK" : "MISSING", phrase);
	}
	console.log("CHARS", text.length);
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
