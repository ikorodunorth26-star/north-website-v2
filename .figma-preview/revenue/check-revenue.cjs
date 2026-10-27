const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");
const path = require("path");

const out = path.resolve(".figma-preview/revenue");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	await page.goto("http://localhost:3000/revenue", { waitUntil: "networkidle" });
	const councilNav = await page.getByRole("navigation", { name: "Primary navigation" }).count();
	const payNow = await page.getByRole("link", { name: "Pay now" }).count();
	const notice = await page.getByText("[DN-XXXXXXXX]").count();
	await page.screenshot({ path: path.join(out, "desktop-hero.png") });
	await page.getByRole("tab", { name: "Check my bills" }).click();
	await page.getByRole("textbox", { name: "Enter your RIN" }).waitFor();
	const billsPlaceholder = await page.getByRole("textbox").getAttribute("placeholder");
	await page.getByRole("tab", { name: "Verify a payment" }).click();
	await page.getByRole("textbox", { name: "Enter your receipt number" }).waitFor();
	const receiptPlaceholder = await page.getByRole("textbox").getAttribute("placeholder");
	await page.getByRole("button", { name: "I have lost my demand notice. How can I pay?" }).click();
	const lostExpanded = await page.getByRole("button", { name: "I have lost my demand notice. How can I pay?" }).getAttribute("aria-expanded");
	const firstExpanded = await page.getByRole("button", { name: "What is a demand notice and why did I receive one?" }).getAttribute("aria-expanded");
	await page.getByRole("link", { name: "Continue →" }).nth(1).click();
	await page.waitForURL(/intent=bills/);
	const billsSelected = await page.getByRole("tab", { name: "Check my bills" }).getAttribute("aria-selected");
	await page.screenshot({ path: path.join(out, "desktop-full.png"), fullPage: true });

	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto("http://localhost:3000/revenue", { waitUntil: "networkidle" });
	await page.screenshot({ path: path.join(out, "mobile-hero.png") });
	await page.screenshot({ path: path.join(out, "mobile-full.png"), fullPage: true });

	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
	const homeServices = await page.getByRole("link", { name: "Services" }).getAttribute("href");
	const homeNav = await page.getByRole("navigation", { name: "Primary navigation" }).count();

	console.log(JSON.stringify({
		councilNav,
		payNow,
		notice,
		billsPlaceholder,
		receiptPlaceholder,
		lostExpanded,
		firstExpanded,
		billsSelected,
		homeServices,
		homeNav,
	}));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
