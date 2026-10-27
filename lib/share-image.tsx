import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const shareImageSize = {
	width: 1200,
	height: 630,
};

export const shareImageContentType = "image/png";

export const createShareImage = async (title: string, subtitle: string) => {
	const [regular, bold] = await Promise.all([
		readFile(join(process.cwd(), "public/fonts/GeneralSans/WEB/fonts/GeneralSans-Regular.ttf")),
		readFile(join(process.cwd(), "public/fonts/GeneralSans/WEB/fonts/GeneralSans-Bold.ttf")),
	]);

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				background: "#173d32",
				color: "#f7f4ea",
				padding: "72px",
			}}>
			<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
				<div style={{ width: "72px", height: "8px", background: "#c39828" }} />
				<div style={{ fontFamily: "General Sans", fontSize: 28, letterSpacing: "0.14em", color: "#e0eba7" }}>LAGOS STATE</div>
			</div>
			<div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
				<div style={{ fontFamily: "General Sans", fontSize: 78, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}>{title}</div>
				<div style={{ display: "flex", marginTop: "28px", fontFamily: "General Sans", fontSize: 32, lineHeight: 1.35, color: "#d7e7df" }}>{subtitle}</div>
			</div>
			<div style={{ display: "flex", fontFamily: "General Sans", fontSize: 26, color: "#e0eba7" }}>ikorodunorthlcda.lg.gov.ng</div>
		</div>,
		{
			...shareImageSize,
			fonts: [
				{ name: "General Sans", data: regular, weight: 400, style: "normal" },
				{ name: "General Sans", data: bold, weight: 700, style: "normal" },
			],
		},
	);
};
