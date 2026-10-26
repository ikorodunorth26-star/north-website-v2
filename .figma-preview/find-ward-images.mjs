const pages = [
	"https://dailyinsight.com.ng/2025/10/28/apanisile-strengthens-grassroots-development-through-project-inspection/",
	"https://www.theimpactnewspaper.com/2025/11/20/100-days-ikorodu-north-council-boss-focusing-on-new-deals-in-service-delivery/",
	"https://ajasainfo.com/2025/08/06/mayor-apanishile-visits-flood-affected-area-in-adamo-health-centres-water-aid-training-others-ajasa-info/",
	"https://ajasainfo.com/2025/08/01/ikorodu-north-lcda-mayor-inspects-adamo-road-construction-extends-appreciation-to-rep-babajimi-benson-ajasa-info/",
	"https://dailyinsight.com.ng/2025/09/30/mayor-apanisile-delivers-clean-water-hygiene-facilities-to-over-4500-pupils-in-ikorodu-north/",
	"https://echonews.ng/ikorodu-north-begins-road-school-projects/",
	"https://echonews.ng/apeka-high-school-road-ikorodu-north-moves-to-improve-access-support-residents-and-businesses/",
	"https://www.theimpactnewspaper.com/2025/11/19/apanisile-tasks-district-ii-health-staff-on-delivery-of-adequate-care-for-ikorodu-north-residents/",
	"https://www.theimpactnewspaper.com/2026/07/26/former-chairmanship-candidate-hon-akinola-commends-mayor-apanisile-over-apeka-road-army-childrens-school-construction/",
];

for (const page of pages) {
	const response = await fetch(page, { headers: { "User-Agent": "Mozilla/5.0" } });
	const html = await response.text();
	const images = [...html.matchAll(/https?:\/\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi)].map((match) => match[0]).filter((url) => /upload|wp-content|image|featured|content/i.test(url));
	const unique = [...new Set(images)].slice(0, 8);
	console.log("\n# " + response.status + " " + page);
	console.log(unique.join("\n") || "(none)");
}
