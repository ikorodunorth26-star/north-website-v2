const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");
const path = require("path");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	await page.goto("http://localhost:3000/revenue", { waitUntil: "domcontentloaded" });
	await page.getByRole("navigation", { name: "Primary navigation" }).waitFor();
	const nav = await page.getByRole("navigation", { name: "Primary navigation" }).count();
	const payNow = await page.getByRole("link", { name: "Pay now" }).count();
	const portalFooter = await page.getByText("Revenue & Payments", { exact: true }).count();
	const siteFooter = await page.getByRole("heading", { name: "A stronger community starts with all of us." }).count();
	const services = await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Services" }).getAttribute("aria-current");
	const titleBox = await page.getByRole("heading", { name: "Pay your levies and fees online, simply and securely." }).boundingBox();
	const navBox = await page.getByRole("navigation", { name: "Primary navigation" }).boundingBox();
	await page.screenshot({ path: path.resolve(".figma-preview/revenue/shared-chrome.png") });
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await page.screenshot({ path: path.resolve(".figma-preview/revenue/shared-footer.png") });
	console.log(JSON.stringify({ nav, payNow, portalFooter, siteFooter, services, titleTop: titleBox && titleBox.y, navBottom: navBox && navBox.y + navBox.height }));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
