const { chromium } = require("C:/Users/THOMPSON/AppData/Local/Temp/ticker-check/node_modules/playwright");

(async () => {
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
	await page.goto("http://localhost:3000/about", { waitUntil: "domcontentloaded", timeout: 60000 });
	const heading = page.getByRole("heading", { name: /Our story/ });
	await heading.waitFor();
	const section = heading.locator("xpath=ancestor::section");
	const boxes = await section.locator("article").evaluateAll((nodes) =>
		nodes.map((node) => {
			const rect = node.getBoundingClientRect();
			return { title: node.querySelector("h3").textContent, top: Math.round(rect.top), height: Math.round(rect.height), left: Math.round(rect.left) };
		}),
	);
	console.log(boxes);
	const one = boxes.find((box) => box.title.startsWith("Community"));
	const two = boxes.find((box) => box.title.startsWith("Government"));
	const three = boxes.find((box) => box.title.startsWith("The next"));
	const stack = three.top + three.height - one.top;
	console.log("stack", stack, "chapter2", two.height, "delta", two.height - stack);
	await section.screenshot({ path: process.env.TEMP + "/about-history.png" });
	await browser.close();
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
