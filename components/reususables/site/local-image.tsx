"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type LocalImageProps = {
	src: string;
	alt: string;
	className?: string;
	imageClassName?: string;
	sizes?: string;
	priority?: boolean;
};

const fallbackImage = "/images/placeholders/image-fallback.svg";

const LocalImage = ({ src, alt, className, imageClassName, sizes = "100vw", priority = false }: LocalImageProps) => {
	const [failed, setFailed] = useState(false);

	return (
		<div className={cn("relative overflow-hidden bg-council-image", className)}>
			<Image
				src={failed ? fallbackImage : src}
				alt={alt}
				fill
				priority={priority}
				sizes={sizes}
				className={cn("object-cover", imageClassName)}
				onError={() => setFailed(true)}
			/>
		</div>
	);
};

export default LocalImage;
