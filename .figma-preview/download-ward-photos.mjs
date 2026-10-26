import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const out = path.resolve(".figma-preview/ward-photos");
await mkdir(out, { recursive: true });

const files = {
	"inspect-1.jpg": "https://dailyinsight.com.ng/wp-content/uploads/2025/10/IMG-20251028-WA0112.jpg",
	"inspect-2.jpg": "https://dailyinsight.com.ng/wp-content/uploads/2025/10/IMG-20251028-WA0111.jpg",
	"water-1.jpeg": "https://dailyinsight.com.ng/wp-content/uploads/2025/09/000da0db-852b-442c-bb6d-cd5f533a8e04.jpeg",
	"water-2.jpeg": "https://dailyinsight.com.ng/wp-content/uploads/2025/09/63bc10bf-d82d-41a5-8892-83b3aff08e4e-e1759273920794.jpeg",
	"water-3.jpeg": "https://dailyinsight.com.ng/wp-content/uploads/2025/09/9738fda7-21a5-4dd1-ab2c-825aa4ba9fa8.jpeg",
	"days-1.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/IMG_20251118_152154_098.jpg",
	"days-2.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/IMG_20251118_154635_177.jpg",
	"days-3.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/IMG_20251118_113338_642.jpg",
	"days-4.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/IMG_20251118_153950_323.jpg",
	"days-5.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/IMG_20251118_132708_724.jpg",
	"days-6.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/IMG_20251118_140203_617.jpg",
	"health-1.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/APA-1.jpg",
	"health-2.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/A3.jpg",
	"health-3.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/APA6.jpg",
	"health-4.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/APA2.jpg",
	"health-5.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/APA7.jpg",
	"health-6.jpg": "https://www.theimpactnewspaper.com/wp-content/uploads/2025/11/IMG_20251118_141552_948.jpg",
	"flagoff.jpeg": "https://www.theimpactnewspaper.com/wp-content/uploads/2026/07/Ikorodu-North-Road-flag-off.jpeg",
	"echo-flag.jpg": "https://echonews.ng/wp-content/uploads/2026/07/FB_IMG_1785064622262.jpg",
	"apeka.jpeg": "https://echonews.ng/wp-content/uploads/2026/08/images-11.jpeg",
	"adamo-visit.jpg": "https://ajasainfo.wordpress.com/wp-content/uploads/2025/08/gridart_20250806_1000110257234908911168099872.jpg",
	"adamo-road.jpg": "https://ajasainfo.wordpress.com/wp-content/uploads/2025/08/gridart_20250802_0201577193755765281763367376.jpg",
};

for (const [name, url] of Object.entries(files)) {
	const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
	if (!response.ok) {
		console.log("FAIL", name, response.status);
		continue;
	}
	const buffer = Buffer.from(await response.arrayBuffer());
	await writeFile(path.join(out, name), buffer);
	console.log("saved", name, buffer.length, response.headers.get("content-type"));
}
