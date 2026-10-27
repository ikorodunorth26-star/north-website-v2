const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const mobile = await browser.newPage({ viewport: { width: 390, height: 900 } });
	await mobile.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
	const section = mobile.locator("section[aria-labelledby='home-wards-heading']");
	await section.scrollIntoViewIfNeeded();
	const links = section.locator("ul a");
	console.log("MOBILE LINKS", await links.count());
	console.log("MOBILE STAGE", await section.locator("#ward-stage").isVisible());
	console.log("HREFS", await links.evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href"))));
	await links.filter({ hasText: "Odogunyan" }).click();
	await mobile.waitForURL("**/communities/odogunyan");
	console.log("CLICKED", mobile.url());

	const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
	await desktop.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
	const desk = desktop.locator("section[aria-labelledby='home-wards-heading']");
	await desk.scrollIntoViewIfNeeded();
	console.log("DESKTOP LIST", await desk.locator("ul").isVisible());
	console.log("DESKTOP STAGE", await desk.locator("#ward-stage").isVisible());
	const before = await desk.locator("#ward-stage h3").innerText();
	await desk.getByRole("tab", { name: /Agbala/ }).click();
	const after = await desk.locator("#ward-stage h3").innerText();
	console.log("DESKTOP SWITCH", before, "->", after);
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
