const { readFileSync } = require("fs");
const html = readFileSync(".figma-preview/revenue/page.html", "utf8");
const needles = [
	"Pay now",
	"Official Revenue Portal",
	"Primary navigation",
	"A stronger community",
	"/services",
	"/revenue",
	"What would you like to do",
	"revenue@ikorodunorthlcda.lg.gov.ng",
];
for (const needle of needles) {
	console.log(needle, html.includes(needle));
}
console.log("length", html.length);
