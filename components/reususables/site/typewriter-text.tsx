"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TypewriterTag = "h1" | "h2";

type TypewriterTextProps = {
	text: string;
	as?: TypewriterTag;
	speed?: number;
	deleteSpeed?: number;
	pauseDuration?: number;
	loop?: boolean;
	className?: string;
	showCursor?: boolean;
	id?: string;
};

const TypewriterHeading = ({
	as,
	id,
	className,
	children,
}: {
	as: TypewriterTag;
	id?: string;
	className: string;
	children: React.ReactNode;
}) => {
	switch (as) {
		case "h1":
			return (
				<h1 id={id} className={className}>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2 id={id} className={className}>
					{children}
				</h2>
			);
		default: {
			const unreachable: never = as;
			return unreachable;
		}
	}
};

const TypewriterText = ({
	text,
	as = "h1",
	speed = 100,
	deleteSpeed = 50,
	pauseDuration = 2000,
	loop = true,
	className = "",
	showCursor = true,
	id,
}: TypewriterTextProps) => {
	const reduceMotion = useReducedMotion();
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (reduceMotion) return;

		let timeout: ReturnType<typeof setTimeout>;

		if (isPaused) {
			timeout = setTimeout(() => {
				setIsPaused(false);
				if (loop) setIsDeleting(true);
			}, pauseDuration);
		} else if (isDeleting) {
			if (displayText.length > 0) {
				timeout = setTimeout(() => {
					setDisplayText(text.slice(0, displayText.length - 1));
				}, deleteSpeed);
			} else {
				setIsDeleting(false);
			}
		} else if (displayText.length < text.length) {
			timeout = setTimeout(() => {
				setDisplayText(text.slice(0, displayText.length + 1));
			}, speed);
		} else if (loop) {
			setIsPaused(true);
		}

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting, isPaused, text, speed, deleteSpeed, pauseDuration, loop, reduceMotion]);

	const typed = (
		<>
			<span className="invisible" aria-hidden="true">
				{text}
			</span>
			<span className="absolute inset-0" aria-hidden="true">
				{displayText}
				{showCursor ? (
					<motion.span
						animate={{ opacity: [1, 0] }}
						transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
						className="text-current">
						|
					</motion.span>
				) : null}
			</span>
			<span className="sr-only">{text}</span>
		</>
	);

	return (
		<TypewriterHeading as={as} id={id} className={reduceMotion ? className : `relative ${className}`}>
			{reduceMotion ? text : typed}
		</TypewriterHeading>
	);
};

export default TypewriterText;
