const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
	await page.goto("http://localhost:3000/projects/igbaga-classroom-blocks", { waitUntil: "networkidle", timeout: 60000 });
	const buttons = page.getByRole("button", { name: /View larger photo/ });
	console.log("buttons", await buttons.count());
	await buttons.first().scrollIntoViewIfNeeded();
	await buttons.first().click();
	await page.waitForTimeout(1000);
	console.log("dialogs", await page.getByRole("dialog").count());
	console.log("close", await page.getByRole("button", { name: "Close photo" }).count());
	console.log("body snippet", (await page.locator("body").innerText()).slice(-400));
	await page.screenshot({ path: process.env.TEMP + "/lightbox.png" });
	await browser.close();
})();
