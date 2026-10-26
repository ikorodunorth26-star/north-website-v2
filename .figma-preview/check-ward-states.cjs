const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await page.goto("http://localhost:3000/#home-wards-heading", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.locator("#ward-tab-Isiu").waitFor();
	await page.locator("#ward-tab-Odogunyan").hover();
	await page.screenshot({ path: process.env.TEMP + "/ward-hover.png", clip: { x: 280, y: 480, width: 1100, height: 520 } });
	await page.locator("#ward-tab-Agbala").click();
	await page.locator("#ward-stage h3", { hasText: "Agbala" }).waitFor();
	await page.screenshot({ path: process.env.TEMP + "/ward-active.png", clip: { x: 280, y: 480, width: 1100, height: 520 } });
	await browser.close();
	console.log("ok");
})();
