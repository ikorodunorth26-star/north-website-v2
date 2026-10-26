const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
	page.on("pageerror", (error) => console.log("pageerror", error.message));
	await page.goto("http://localhost:3000/#home-wards-heading", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.locator("#ward-stage").waitFor();
	await page.waitForTimeout(800);
	await page.screenshot({ path: process.env.TEMP + "/wards-desktop.png" });
	await page.locator("#ward-tab-Agbala").click();
	await page.locator("#ward-stage h3").filter({ hasText: "Agbala" }).waitFor();
	await page.screenshot({ path: process.env.TEMP + "/wards-agbala.png" });
	await page.setViewportSize({ width: 390, height: 844 });
	await page.locator("#home-wards-heading").scrollIntoViewIfNeeded();
	await page.screenshot({ path: process.env.TEMP + "/wards-mobile.png" });
	await browser.close();
})();
