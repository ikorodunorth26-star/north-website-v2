import { GalleryAlbumSection } from "@/components/reususables/gallery";
import type { GalleryAlbum } from "@/lib/content/gallery";

type GalleryAlbumViewProps = {
	album: GalleryAlbum;
};

const GalleryAlbumView = ({ album }: GalleryAlbumViewProps) => {
	return <GalleryAlbumSection album={album} />;
};

export default GalleryAlbumView;
