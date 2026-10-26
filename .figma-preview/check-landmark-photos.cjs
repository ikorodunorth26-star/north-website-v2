const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
	const failed = [];
	page.on("response", (response) => {
		if (response.url().includes("/images/") && response.status() >= 400) failed.push(response.status() + " " + response.url());
	});
	await page.goto("http://localhost:3000/landmarks", { waitUntil: "networkidle", timeout: 60000 });
	await page.getByRole("heading", { name: "Landmarks & culture" }).waitFor();
	const images = await page.locator("article img").evaluateAll((nodes) =>
		nodes.map((node) => ({ alt: node.getAttribute("alt"), width: node.naturalWidth, src: node.getAttribute("src") })),
	);
	console.log("images", JSON.stringify(images, null, 2));
	console.log("failed", failed.join("\n") || "none");
	const text = await page.locator("main").innerText();
	console.log(text.includes("Caleb") ? "HAS Caleb" : "no Caleb");
	console.log(text.includes("LASUSTECH") ? "has gate name" : "missing lasustech");
	console.log(text.includes("Ei'eke") ? "has credit" : "missing credit");
	await page.locator("ul").first().screenshot({ path: process.env.TEMP + "/landmarks-cards.png" });
	await page.screenshot({ path: process.env.TEMP + "/landmarks-photos.png" });
	await page.setViewportSize({ width: 390, height: 844 });
	await page.screenshot({ path: process.env.TEMP + "/landmarks-photos-mobile.png" });
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
