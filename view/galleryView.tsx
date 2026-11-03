import { GallerySection } from "@/components/reususables/gallery";
import { PageIntro } from "@/components/reususables/site";
import { galleryAlbums, galleryPage } from "@/lib/content/gallery";

const GalleryView = () => {
	return (
		<>
			<PageIntro label={galleryPage.label} title={galleryPage.title} description={galleryPage.description} />
			<GallerySection albums={galleryAlbums} />
		</>
	);
};

export default GalleryView;
