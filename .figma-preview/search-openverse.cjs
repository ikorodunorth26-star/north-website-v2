const queries = ["Odogunyan", "Isiu Ikorodu", "Ikorodu Sagamu", "Lucky Fibres Ikorodu", "174 Battalion Odogunyan"];

(async () => {
	for (const q of queries) {
		const url = "https://api.openverse.org/v1/images/?page_size=5&q=" + encodeURIComponent(q);
		const response = await fetch(url);
		const data = await response.json();
		console.log("\n== " + q + " ==");
		for (const result of data.results || []) {
			console.log([result.license, result.creator, result.title, result.foreign_landing_url].join(" | "));
		}
	}
})().catch((error) => {
	console.error(error);
	process.exit(1);
});
