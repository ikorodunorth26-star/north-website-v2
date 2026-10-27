import { landmarksPage } from "@/lib/content/landmarks";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { LandmarksView } from "@/view";

export const metadata = createPageMetadata({
	title: "Landmarks & culture",
	description: landmarksPage.description,
	path: "/landmarks",
});

const LandmarksPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Landmarks & culture", path: "/landmarks" },
				])}
			/>
			<LandmarksView />
		</>
	);
};

export default LandmarksPage;
