const pages = [
	"https://theeyenews.ng/mayor-ameen-apanisile-commissions-six-blocks-of-classrooms/",
	"https://theeyenews.ng/ikorodu-north-chairman-mayor-ameen-apanisile-commissions-four-solar-powered-water-facilities/",
	"https://quickgist.com.ng/2025/11/19/mayor-ameen-olawale-apanisile-marks-100-days-in-office-with-landmark-commissions-expanded-social-support-and-strong-governance-in-ikorodu-north-lcda/",
	"https://ajasainfo.com/2025/07/29/hon-ameen-olawale-apanishile-assumes-office-as-mayor-of-ikorodu-north-lcda-ajasa-info/",
];

for (const page of pages) {
	const response = await fetch(page, { headers: { "User-Agent": "Mozilla/5.0" } });
	const html = await response.text();
	const images = [...new Set([...html.matchAll(/https?:\/\/[^"'\s>]+\.(?:jpg|jpeg|webp)/gi)].map((match) => match[0]))].filter((url) => /uploads|wp-content|content\/uploads/i.test(url) && !/logo|icon|cropped|86x64|150x150|avatar/i.test(url));
	console.log("\n# " + response.status + " " + page);
	console.log(images.slice(0, 12).join("\n") || "(none)");
}
