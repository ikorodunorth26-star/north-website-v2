import { createShareImage, shareImageContentType, shareImageSize } from "@/lib/share-image";

export const alt = "Ikorodu North LCDA, the official council website";
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default function OpenGraphImage() {
	return createShareImage("Ikorodu North LCDA", "Official website of the Local Council Development Area");
}
