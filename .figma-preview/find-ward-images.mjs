const pages = [
	"https://www.theimpactnewspaper.com/2025/11/20/100-days-ikorodu-north-council-boss-focusing-on-new-deals-in-service-delivery/",
	"https://www.theimpactnewspaper.com/2025/11/19/apanisile-tasks-district-ii-health-staff-on-delivery-of-adequate-care-for-ikorodu-north-residents/",
	"https://www.theimpactnewspaper.com/2026/07/26/former-chairmanship-candidate-hon-akinola-commends-mayor-apanisile-over-apeka-road-army-childrens-school-construction/",
	"https://echonews.ng/ikorodu-north-begins-road-school-projects/",
	"https://echonews.ng/apeka-high-school-road-ikorodu-north-moves-to-improve-access-support-residents-and-businesses/",
	"https://dailyinsight.com.ng/2025/09/30/mayor-apanisile-delivers-clean-water-hygiene-facilities-to-over-4500-pupils-in-ikorodu-north/",
	"https://dailyinsight.com.ng/2025/10/28/apanisile-strengthens-grassroots-development-through-project-inspection/",
];

for (const page of pages) {
	const html = await (await fetch(page, { headers: { "User-Agent": "Mozilla/5.0" } })).text();
	const images = [...new Set([...html.matchAll(/https?:\/\/[^"'\s>]+\.(?:jpg|jpeg|webp)/gi)].map((match) => match[0]))].filter((url) => /uploads\/(2025|2026)/.test(url) && !/cropped|Advert|logo|392x272|600x417|1024x576/i.test(url));
	console.log("\n# " + page);
	console.log(images.join("\n") || "(none)");
}
