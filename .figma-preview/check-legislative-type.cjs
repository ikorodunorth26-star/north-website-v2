const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	for (const width of [390, 1440]) {
		const page = await browser.newPage({ viewport: { width, height: 900 } });
		await page.goto("http://localhost:3000/government/legislative-house", { waitUntil: "networkidle", timeout: 60000 });
		const cards = page.locator("section.bg-background article");
		const first = cards.first();
		await first.scrollIntoViewIfNeeded();
		const name = await first.locator("h3").evaluate((el) => {
			const style = getComputedStyle(el);
			return { text: el.innerText, size: style.fontSize, transform: style.textTransform, leading: style.lineHeight };
		});
		const role = await first.locator("p").evaluate((el) => {
			const style = getComputedStyle(el);
			return { text: el.innerText, size: style.fontSize, transform: style.textTransform, leading: style.lineHeight };
		});
		console.log(width, JSON.stringify({ name, role }));
		await page.close();
	}
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
