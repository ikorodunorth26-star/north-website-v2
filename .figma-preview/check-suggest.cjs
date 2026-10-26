const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
	await page.goto("http://localhost:3000/projects/suggest", { waitUntil: "networkidle", timeout: 60000 });
	await page.getByRole("heading", { name: "How it works" }).waitFor();
	await page.screenshot({ path: process.env.TEMP + "/suggest-top.png" });
	await page.getByRole("heading", { name: "Tell us about the project" }).scrollIntoViewIfNeeded();
	await page.screenshot({ path: process.env.TEMP + "/suggest-form.png" });
	await page.getByRole("heading", { name: "What makes a strong suggestion" }).scrollIntoViewIfNeeded();
	await page.screenshot({ path: process.env.TEMP + "/suggest-side.png" });

	await page.getByLabel("Full name *").fill("Ada Okafor");
	await page.getByLabel("Phone number *").fill("08030000000");
	await page.getByLabel("Ward or community *").selectOption("Isiu");
	await page.getByLabel("Project category *").selectOption("Water");
	await page.getByLabel("Project title *").fill("Borehole at the market");
	await page.getByLabel("Location or landmark *").fill("Isiu Market");
	await page.getByLabel("Project description *").fill("The market needs a working borehole.");
	await page.getByRole("checkbox").check();
	const values = await page.locator("form").evaluate((form) => Object.fromEntries(new FormData(form).entries()));
	console.log("values", JSON.stringify(values));
	await page.getByRole("button", { name: "Submit suggestion" }).click();
	await page.waitForTimeout(500);
	console.log("url", page.url());
	console.log("errors", await page.locator("p.text-danger").allTextContents());
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto("http://localhost:3000/projects/suggest", { waitUntil: "domcontentloaded" });
	await page.getByRole("heading", { name: "How it works" }).waitFor();
	await page.screenshot({ path: process.env.TEMP + "/suggest-mobile.png" });
	await browser.close();
})();
