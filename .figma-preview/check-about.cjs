const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
	await page.goto("http://localhost:3000/about", { waitUntil: "domcontentloaded", timeout: 60000 });
	await page.getByRole("heading", { name: "Landmarks & Culture" }).waitFor();
	const story = page.getByRole("heading", { name: /Our story/ });
	const storyBox = await story.evaluate((node) => {
		const section = node.closest("section");
		const rect = section.getBoundingClientRect();
		return { height: Math.round(rect.height), text: section.innerText.length };
	});
	console.log("story section", storyBox);
	const landmarks = page.getByRole("heading", { name: "Landmarks & Culture" });
	await landmarks.scrollIntoViewIfNeeded();
	const section = landmarks.locator("xpath=ancestor::section");
	console.log("cards", await section.locator("h3").allTextContents());
	await section.screenshot({ path: process.env.TEMP + "/about-landmarks.png" });
	const long = await page.locator("main").innerText();
	console.log("has old sentence", long.includes("young as a council"));
	console.log("has eweye", long.includes("Eweye Day"));
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
