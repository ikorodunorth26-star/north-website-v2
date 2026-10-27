"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HomeMapExplorer = dynamic(() => import("./home-map-explorer"), { ssr: false });

const HomeMapLoader = () => {
	const frameRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const frame = frameRef.current;
		if (!frame) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) {
					return;
				}
				setVisible(true);
				observer.disconnect();
			},
			{ rootMargin: "640px 0px" },
		);

		observer.observe(frame);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={frameRef}>
			{visible ? <HomeMapExplorer /> : <div className="mt-10 h-[620px] rounded-[20px] bg-card shadow-soft sm:h-[700px] lg:mt-12 lg:h-[640px]" aria-hidden="true" />}
		</div>
	);
};

export default HomeMapLoader;
