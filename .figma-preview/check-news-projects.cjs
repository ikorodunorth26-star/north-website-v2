const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
	const failed = [];
	page.on("response", (response) => {
		if (response.url().includes("/images/reports/") && response.status() >= 400) failed.push(response.url());
	});

	await page.goto("http://localhost:3000/news", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.getByRole("heading", { name: "First 100 days" }).waitFor();
	const newsText = await page.locator("main").innerText();
	for (const item of ["Iranlowo Owo Apa", "Igbaga", "Odo-Nla", "Adamo", "[site]", "[community]", "2026 budget explained"]) {
		console.log((newsText.includes(item) ? "news has" : "news missing") + " " + item);
	}
	await page.getByRole("link", { name: "View project" }).count().catch(() => {});
	await page.screenshot({ path: process.env.TEMP + "/news-listing.png" });

	await page.goto("http://localhost:3000/news/first-100-days", { waitUntil: "domcontentloaded" });
	await page.getByRole("heading", { name: "What was commissioned" }).waitFor();
	const img = await page.locator("img[alt*='100 days']").first().evaluate((node) => node.naturalWidth);
	console.log("100 days image width", img);

	await page.goto("http://localhost:3000/projects", { waitUntil: "domcontentloaded" });
	await page.getByRole("heading", { name: "Odo-Nla health centre" }).waitFor();
	await page.getByRole("button", { name: "Roads" }).click();
	const roads = await page.locator("article h3").allTextContents();
	console.log("roads", roads.join(" | "));
	await page.screenshot({ path: process.env.TEMP + "/projects-roads.png" });

	await page.goto("http://localhost:3000/projects/igbaga-classroom-blocks", { waitUntil: "domcontentloaded" });
	await page.getByRole("button", { name: /View larger photo/ }).click();
	await page.getByRole("button", { name: "Close photo" }).waitFor();
	await page.keyboard.press("Escape");
	console.log("lightbox closed", await page.getByRole("button", { name: "Close photo" }).count());

	await page.goto("http://localhost:3000/news/the-new-deal-2026-budget-explained", { waitUntil: "domcontentloaded" });
	console.log("old slug title", await page.title());
	console.log("failed images", failed.length);
	await browser.close();
})();
