import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import type { FigmaAsset } from "@/lib/content/figma-assets";
import { figmaAssets } from "@/lib/content/figma-assets";

import LocalImage from "./local-image";

type ArticleLayoutProps = {
	backHref: string;
	backLabel: string;
	title: string;
	meta: ReactNode;
	image: FigmaAsset;
	caption?: string;
	children: ReactNode;
};

const ArticleLayout = ({ backHref, backLabel, title, meta, image, caption, children }: ArticleLayoutProps) => {
	return (
		<>
			<section className="relative isolate overflow-hidden bg-council-green">
				<div
					aria-hidden="true"
					className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
					style={{ backgroundImage: `url(${figmaAssets.brand.heroTexture.src})`, backgroundSize: "600px 600px" }}
				/>
				<div aria-hidden="true" className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#2a6857]/40 via-[#245947]/20 to-transparent" />
				<div className="relative z-10 mx-auto min-h-[380px] w-full max-w-council px-5 pb-14 pt-44 md:px-10 lg:min-h-[476px] lg:pt-[182px] min-[1408px]:px-0">
					<Link
						href={backHref}
						className="inline-flex items-center gap-2 rounded-[32px] py-1.5 pr-3 text-base font-medium text-white transition-colors hover:text-council-lime focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-council-lime">
						<ChevronLeft className="size-4" aria-hidden="true" />
						{backLabel}
					</Link>
					<h1 className="mt-5 max-w-[747px] text-4xl font-medium leading-[42px] tracking-[-0.72px] text-council-cream md:text-5xl md:leading-[52px] md:tracking-[-0.96px]">
						{title}
					</h1>
					<div className="mt-5 flex items-center gap-4 text-base leading-[22px] text-[#dfe5df]">{meta}</div>
				</div>
			</section>

			<div className="relative z-10 -mt-14">
				<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
					<LocalImage
						src={image.src}
						alt={image.alt}
						priority
						className="aspect-[326/220] rounded-xl md:aspect-[1160/600] md:rounded-[20px]"
						sizes="(min-width: 1024px) 1160px, calc(100vw - 40px)"
					/>
					{caption ? <p className="mt-3 text-xs leading-[19px] text-council-subtle">{caption}</p> : null}
				</div>
			</div>

			<article className="mx-auto w-full max-w-council px-5 py-16 md:px-10 lg:py-[72px] min-[1408px]:px-0">{children}</article>
		</>
	);
};

export default ArticleLayout;
