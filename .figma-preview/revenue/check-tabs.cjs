const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");
const path = require("path");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
	await page.goto("http://localhost:3000/revenue", { waitUntil: "domcontentloaded" });
	await page.getByRole("tab", { name: "Verify a payment" }).waitFor();
	await page.screenshot({ path: path.resolve(".figma-preview/revenue/mobile-tabs.png"), clip: { x: 0, y: 180, width: 390, height: 420 } });
	const label = await page.getByRole("tab", { name: "Verify a payment" }).innerText();
	console.log(JSON.stringify({ label }));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
