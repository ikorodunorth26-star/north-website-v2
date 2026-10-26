const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
	await page.goto("http://localhost:3000/landmarks", { waitUntil: "networkidle", timeout: 60000 });
	await page.getByRole("heading", { name: "Landmarks & culture" }).waitFor();
	const text = await page.locator("main").innerText();
	const expected = [
		"Ikorodu North LCDA Secretariat",
		"Lagos State University of Science and Technology",
		"Odogunyan Industrial Estate",
		"Isiu Town and the Eweye palace",
		"Ikorodu–Shagamu corridor",
		"Eweye Day",
		"Marriage Registry",
		"174 Battalion",
		"Isiu Market",
		"Farm settlements",
	];
	for (const item of expected) console.log((text.includes(item) ? "has" : "MISSING") + " " + item);
	for (const banned of ["Agemo", "Ayangbure", "Egbin", "Ikorodu Oga"]) console.log((text.includes(banned) ? "BANNED" : "clear") + " " + banned);

	await page.getByRole("button", { name: "Culture" }).click();
	const culture = await page.locator("article h3").allTextContents();
	console.log("culture", culture.join(" | "));
	await page.getByRole("button", { name: "Routes" }).click();
	console.log("routes", (await page.locator("article h3").allTextContents()).join(" | "));
	await page.getByRole("button", { name: "Learning" }).click();
	console.log("learning", (await page.locator("section article h3").allTextContents()).join(" | "));
	await page.getByRole("button", { name: "All places" }).click();
	await page.getByRole("link", { name: "Open the ward" }).first().click();
	await page.waitForURL("**/communities/isiu", { timeout: 20000 });
	console.log("ward url", page.url());

	await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
	await page.getByRole("button", { name: "Government", exact: true }).click();
	const nav = await page.getByRole("link", { name: "Landmarks & culture" }).count();
	console.log("nav links", nav);
	await page.goto("http://localhost:3000/landmarks", { waitUntil: "domcontentloaded" });
	await page.screenshot({ path: process.env.TEMP + "/landmarks-desktop.png", fullPage: true });

	await page.setViewportSize({ width: 390, height: 844 });
	await page.screenshot({ path: process.env.TEMP + "/landmarks-mobile.png", fullPage: true });
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
