const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
	const pages = [
		["/privacy-policy", "Privacy policy", "does not keep a database"],
		["/accessibility", "Accessibility", "keyboard"],
		["/terms-of-use", "Terms of use", "These terms apply"],
	];
	for (const [path, title, phrase] of pages) {
		const response = await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle", timeout: 60000 });
		const heading = (await page.locator("h1").first().innerText()).replace(/\s+/g, " ");
		const text = await page.locator("article").innerText();
		const icon = await page.locator('link[rel="icon"]').first().getAttribute("href");
		console.log(path, response.status(), heading === title ? "TITLE" : `TITLE ${heading}`, text.includes(phrase) ? "COPY" : "MISSING", icon);
		await page.getByRole("link", { name: pages.find((item) => item[0] !== path)[1] }).click();
		await page.waitForURL((url) => !url.pathname.endsWith(path));
		console.log("LINK", page.url());
		await page.goto("about:blank");
	}
	const iconResponse = await page.goto("http://localhost:3000/icon.png", { timeout: 30000 });
	console.log("ICON", iconResponse.status(), iconResponse.headers()["content-type"]);
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
