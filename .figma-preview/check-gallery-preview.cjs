const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

async function readGallery(page, url) {
	await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	await gallery.locator("button").first().waitFor();
	const labels = await gallery.locator("button").evaluateAll((nodes) => nodes.map((node) => node.textContent.replace(/\s+/g, " ").trim()));
	return { count: labels.length, labels };
}

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

	await page.goto("http://localhost:3000/news/agbede-odogunyan-meetings", { waitUntil: "networkidle", timeout: 60000 });
	const gallery = page.locator("section[aria-labelledby='photo-gallery-heading']");
	await gallery.scrollIntoViewIfNeeded();
	const meetingLabels = await gallery.locator("button").evaluateAll((nodes) => nodes.map((node) => node.textContent.replace(/\s+/g, " ").trim()));
	console.log("MEETINGS", meetingLabels.length, meetingLabels.join(" | "));
	await gallery.getByRole("button", { name: /7 more photos/ }).click();
	const dialog = page.locator("[role='dialog']");
	await dialog.waitFor();
	const seen = [];
	for (let step = 0; step < 8; step += 1) {
		const position = (await dialog.locator("p").first().innerText()).trim();
		const src = await dialog.locator("img").first().getAttribute("src");
		seen.push(`${position} ${decodeURIComponent(src || "").split("/").pop()}`);
		await dialog.getByRole("button", { name: "Next photo" }).click();
	}
	console.log("NEXT", seen.join(" || "));
	await dialog.getByRole("button", { name: "Close photo" }).click();
	await dialog.waitFor({ state: "hidden" });
	console.log("CLOSED");

	const triplets = await readGallery(page, "http://localhost:3000/news/agbede-triplets");
	console.log("TRIPLETS", triplets.count, triplets.labels.join(" | "));

	const four = await readGallery(page, "http://localhost:3000/projects/odonla-primary-health-centre");
	console.log("FOUR", four.count, four.labels.join(" | "));

	const two = await readGallery(page, "http://localhost:3000/projects/adamo-araro-road");
	console.log("TWO", two.count, two.labels.join(" | "));

	await page.setViewportSize({ width: 390, height: 844 });
	const mobile = await readGallery(page, "http://localhost:3000/news/agbede-odogunyan-meetings");
	console.log("MOBILE", mobile.count, mobile.labels.join(" | "));

	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
